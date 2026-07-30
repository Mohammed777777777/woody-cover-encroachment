// Import the study area feature class file and centre it
var SA  = ee.FeatureCollection('projects/annual-ccdc-new/assets/TC_OH_RanchBoundary');
var aoi = SA.geometry();
Map.centerObject(SA, 11);

// Set the year and month filter
var year       = 2025;      
var startMonth = 7;         
var endMonth   = 8;         
var maxCloud   = 50;

// Cloud-masked scenes, scaled, with true-colour R,G,B bands + the valid flag.
//   oli=true  -> Landsat 8/9  (RGB = SR_B4, SR_B3, SR_B2)
//   oli=false -> Landsat 5/7  (RGB = SR_B3, SR_B2, SR_B1)
function prep(id, oli){
  return ee.ImageCollection(id).filterBounds(aoi)
    .filterDate(year + '-01-01', (year + 1) + '-01-01')
    .filter(ee.Filter.calendarRange(182, 243, 'day_of_year'))   // DOY window (~Jun 2 – Sep 1)
    .filter(ee.Filter.lt('CLOUD_COVER', maxCloud))
    .map(function(img){
      var qa = img.select('QA_PIXEL');
      var cloud = qa.bitwiseAnd(1<<3).neq(0), shadow = qa.bitwiseAnd(1<<4).neq(0);
      var dil   = qa.bitwiseAnd(1<<1).neq(0), snow   = qa.bitwiseAnd(1<<5).neq(0);
      var m = cloud.or(shadow).or(dil).or(snow).not();

      // scale to surface reflectance and mask
      var sr = img.select('SR_B.').multiply(0.0000275).add(-0.2).updateMask(m);

      // true-colour bands, common names
      var rgb = oli ? sr.select(['SR_B4','SR_B3','SR_B2'], ['R','G','B'])
                    : sr.select(['SR_B3','SR_B2','SR_B1'], ['R','G','B']);

      // valid flag for the % calc
      var valid = m.rename('valid');

      return rgb.addBands(valid).copyProperties(img,
        ['system:index','system:time_start','CLOUD_COVER','SPACECRAFT_ID']);
    });
}

var scenes = prep('LANDSAT/LT05/C02/T1_L2', false)
  .merge(prep('LANDSAT/LE07/C02/T1_L2', false))
  .merge(prep('LANDSAT/LC08/C02/T1_L2', true))
  .merge(prep('LANDSAT/LC09/C02/T1_L2', true))
  .sort('system:time_start');

print('Scenes in ' + year + ' (months ' + startMonth + '-' + endMonth + '):', scenes.size());
print(scenes)
// -----------------------------------------------------------------------------
// Per-scene valid % over the study area
// -----------------------------------------------------------------------------
var totalPixels = ee.Number(
  ee.Image(1).clip(SA).reduceRegion({
    reducer: ee.Reducer.count(), geometry: aoi, scale: 30,
    maxPixels: 1e13, tileScale: 4}).values().get(0));

// var perScene = scenes.map(function(img){
//   var n = img.select('valid').selfMask().clip(SA).reduceRegion({
//     reducer: ee.Reducer.count(), geometry: aoi, scale: 30,
//     maxPixels: 1e13, tileScale: 4, bestEffort: true}).get('valid');
//   return ee.Feature(null, {
//     id:        img.get('system:index'),
//     date:      ee.Date(img.get('system:time_start')).format('YYYY-MM-dd'),
//     sensor:    img.get('SPACECRAFT_ID'),
//     valid_pct: ee.Number(n).divide(totalPixels).multiply(100)
//   });
// });

//Remove imagery with null values
var landsat578Sr = scenes.map(function(img) {
  // Add a property with the count of valid pixels
  var count = img.select(0).reduceRegion({
    reducer: ee.Reducer.count(),
    geometry: SA,
    scale: 30
  }).values().get(0);
  return img.set('pixel_count', count);
}).filter(ee.Filter.gt('pixel_count', 26667)); 
//At 0 only keep images with > 0 pixels, adjust (km2 / 0.0009km2 per pixel), 8km2 (~10%) is 8889pixels, 30%=24km2 ~26667

print('Per-scene valid % over study area (' + year + '):', landsat578Sr);

// Total pixels in SA at 30 m (for the % calc)
var totalPixels = ee.Number(
  ee.Image(1).clip(SA).reduceRegion({
    reducer: ee.Reducer.count(), geometry: SA, scale: 30,crs: 'EPSG:32613',
    maxPixels: 1e13, tileScale: 4}).values().get(0));
print(totalPixels)

var perScene = landsat578Sr.map(function(img){
  return ee.Feature(null, {
    id:        img.get('system:index'),
    date:      ee.Date(img.get('system:time_start')).format('YYYY-MM-dd'),
    sensor:    img.get('SPACECRAFT_ID'),
    valid_pct: ee.Number(img.get('pixel_count')).divide(totalPixels).multiply(100)
  });
});

print(ui.Chart.feature.byFeature(perScene, 'date', ['valid_pct'])
  .setChartType('ColumnChart').setOptions({
    title: 'Valid pixel % over study area, per scene — ' + year,
    hAxis: {title: 'Scene date', slantedText: true, slantedTextAngle: 45},
    vAxis: {title: 'Valid pixels (% of SA)', viewWindow: {min: 0, max: 100}},
    legend: {position: 'none'}, colors: ['#3f60ae']
  }));

// -----------------------------------------------------------------------------
// TRUE-COLOUR RGB view of every scene (clipped to SA), off by default
// -----------------------------------------------------------------------------
// Stretch for surface-reflectance true colour (0-0.3 works well for vegetation).
var rgbVis = {bands: ['R','G','B'], min: 0.0, max: 0.3};

var ids = scenes.aggregate_array('system:index');
ids.evaluate(function(list){
  list.forEach(function(id){
    var img = ee.Image(scenes.filter(ee.Filter.eq('system:index', id)).first());
    var d = ee.Date(img.get('system:time_start')).format('MM-dd').getInfo();
    Map.addLayer(img.clip(SA), rgbVis, year + ' RGB | ' + d + ' | ' + id, false);
  });
  print('Added ' + list.length + ' true-colour RGB layers — toggle in Layers panel.');
});

// Also show the FIRST scene's RGB on by default, so something appears immediately.
// var firstImg = ee.Image(scenes.first());
// Map.addLayer(firstImg.clip(SA), rgbVis, 'First scene RGB', true);
