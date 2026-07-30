// Import study area feature class file
var SA  = ee.FeatureCollection('projects/annual-ccdc-new/assets/TC_OH_RanchBoundary');
var aoi = SA.geometry();
Map.centerObject(SA, 11);
 
var assetBase = 'projects/annual-ccdc-new/assets/';   
 
// These four years does not have images
var missingYears = [1986, 1987, 1988, 1991];
var availableYears = [];
for (var y = 1985; y <= 2025; y++) {
  if (missingYears.indexOf(y) === -1) { availableYears.push(y); }
}
print('Years being used (' + availableYears.length + '):', availableYears);
 
var bands = ['B','G','R','NIR','SWIR1','SWIR2'];


// =============================================================================
// STEP 1 (MERGE all year collections (from assest) into ONE collection of scenes)
// =============================================================================
var allScenes = availableYears
  .map(function(yr){ return ee.ImageCollection(assetBase + yr); })
  .reduce(function(a, b){ return a.merge(b); });
 
// Tag each scene with its year (read from its own timestamp).
allScenes = allScenes.map(function(img){
  return img.set('year', ee.Date(img.get('system:time_start')).get('year'));
});

print('Total scenes across all years:', allScenes.size());
print(allScenes)

// // How many scenes per year?
// print('Scenes per year:', ee.FeatureCollection(availableYears.map(function(yr){
//   return ee.Feature(null, {
//     year: yr, n_scenes: allScenes.filter(ee.Filter.eq('year', yr)).size()
//   });
// })));


// =============================================================================
//  STEP 2 — cloud masking, scaleing, renaming, harmonizing
// =============================================================================
function harmonizeOLItoETM(img){
  var slopes = ee.Image.constant([0.9785,0.9542,0.9825,1.0073,1.0171,0.9949]);
  var itcp   = ee.Image.constant([-0.0095,-0.0016,-0.0022,-0.0021,-0.0030,0.0029]);
  return img.select(bands).subtract(itcp).divide(slopes).rename(bands);
}
 
function prepScene(img){
  img = ee.Image(img);
 
  // (a) cloud / shadow / snow mask from QA_PIXEL
  var qa = img.select('QA_PIXEL');
  var cloud = qa.bitwiseAnd(1<<3).neq(0), shadow = qa.bitwiseAnd(1<<4).neq(0);
  var dil   = qa.bitwiseAnd(1<<1).neq(0), snow   = qa.bitwiseAnd(1<<5).neq(0);
  var mask  = cloud.or(shadow).or(dil).or(snow).not();
 
  // (b) scale the stored integers to real surface reflectance, then mask
  var sr = img.select('SR_B.').multiply(0.0000275).add(-0.2).updateMask(mask);
 
  // (c) rename to common band names (band numbers differ by sensor)
  var isOLI = img.bandNames().contains('SR_B6');
  var renamed = ee.Image(ee.Algorithms.If(isOLI,
    sr.select(['SR_B2','SR_B3','SR_B4','SR_B5','SR_B6','SR_B7'], bands),
    sr.select(['SR_B1','SR_B2','SR_B3','SR_B4','SR_B5','SR_B7'], bands)));
 
  // (d) harmonize OLI to ETM+ so sensors are comparable
  var out = ee.Image(ee.Algorithms.If(isOLI, harmonizeOLItoETM(renamed), renamed));
 
  return ee.Image(out.toFloat()
    .copyProperties(img, ['system:time_start'])
    .set('year', img.get('year')));
}
 
var prepped = allScenes.map(prepScene);
 
print('Prepared band names:',
      ee.Image(prepped.first()).bandNames());
print('Prepared scene count', prepped.size());
 
// Add EVERY prepared scene as its own layer, named by date, all off by default.
var srVis = {bands: ['R','G','B'], min: 0.0, max: 0.3};

// var prepList = prepped.toList(prepped.size());   // indexable list of the scenes

// prepped.aggregate_array('system:time_start').evaluate(function(times){
//   times.forEach(function(t, i){
//     var d = new Date(t).toISOString().slice(0, 10);      // 'YYYY-MM-DD'
//     var img = ee.Image(prepList.get(i)).clip(SA);
//     Map.addLayer(img, srVis, d, false);                  // false = off by default
//   });
//   print('Added ' + times.length + ' scene layers (all off by default).');
// });


// =============================================================================
//  STEP 3 — COMPOSITE images one medoid image per year
// =============================================================================

function medoidComposite(coll){
  var median = coll.median();
  var withDist = coll.map(function(img){
    var d = img.subtract(median).pow(2).reduce(ee.Reducer.sum()).sqrt();
    return img.addBands(d.rename('distance'));
  });
  return withDist.qualityMosaic('distance').select(bands).toFloat();
}
 
var annualComposites = ee.ImageCollection.fromImages(
  availableYears.map(function(yr){
    var yearScenes = prepped.filter(ee.Filter.eq('year', yr));   // <-- group by year
    return medoidComposite(yearScenes).clip(SA)
             .set('year', yr)
             .set('system:time_start', ee.Date.fromYMD(yr, 8, 1).millis());
  })
);

print('Composites built:',
      annualComposites.size());

Map.addLayer(ee.Image(annualComposites.first()).clip(SA), srVis,
             'Composite ' + availableYears[0], false);


// =============================================================================
//  STEP 4 LANDTRENDR apply
// =============================================================================
var segIndex = 'NDVI';
var distDir  = -1;                                    
var ftvBands = ['NDVI','B','G','R','NIR','SWIR1','SWIR2'];
 
var ltCollection = annualComposites
  .map(function(img){
    return img.addBands(img.normalizedDifference(['NIR','R']).rename('NDVI'));
  })
  .map(function(img){
    var seg = img.select(segIndex).multiply(distDir).multiply(1000)
                 .toShort().rename(segIndex);
    var ftvNames = ftvBands.map(function(b){ return 'ftv_' + b; });
    var ftv = img.select(ftvBands).multiply(1000).toShort().rename(ftvNames);
    return seg.addBands(ftv)
              .set('system:time_start', img.get('system:time_start'))
              .set('year', img.get('year'));
  })
  .sort('year');
 
var lt = ee.Algorithms.TemporalSegmentation.LandTrendr({
  timeSeries: ltCollection, maxSegments: 6, spikeThreshold: 0.9,
  vertexCountOvershoot: 3, preventOneYearRecovery: true, recoveryThreshold: 0.25,
  pvalThreshold: 0.05, bestModelProportion: 0.75, minObservationsNeeded: 6
});
 
print('LandTrendr output bands:', lt.bandNames());

// Extra steps for exporting the whole fitted landtrendR output
// Build year labels once
var yearBands = availableYears.map(function(yr){ return String(yr); });

// For each fitted band, flatten the array into one band per year,
// then prefix band names so they don't collide across indices.
// Final band names look like: LT_NDVI_1985, LT_NDVI_1989, ..., LT_SWIR2_2025
var fittedStack = ee.Image.cat(ftvBands.map(function(b){
  var prefixed = yearBands.map(function(yr){ return 'LT_' + b + '_' + yr; });
  return lt.select('ftv_' + b + '_fit')
           .arrayFlatten([prefixed])
           .divide(1000);        // undo the ×1000 scaling from LT input
})).clip(SA).toFloat();

// print('Fitted stack band count (should be ' + ftvBands.length * availableYears.length + '):',
//       fittedStack.bandNames().size());
// print('First few band names:', fittedStack.bandNames().slice(0, 10));

// =============================================================================
//  EXPORT — one asset, all fitted bands
// =============================================================================
Export.image.toAsset({
  image:       fittedStack,
  description: 'LT_fitted_ALL_multiband',
  assetId:     'LT_fitted_ALL_stack',
  region:      SA.geometry(),
  scale:       30,
  crs:         'EPSG:32613',           // adjust if your SA is in zone 12N
  maxPixels:   1e13,
  pyramidingPolicy: {'.default': 'mean'}
});


// =============================================================================
//  STEP 5 — FLATTEN the fitted NDVI into one band per year
// =============================================================================

var yearBands = availableYears.map(function(yr){ return 'yr_' + yr; });
 
var fittedNDVI = lt.select('ftv_NDVI_fit')
                   .arrayFlatten([yearBands])
                   .divide(1000)                      // undo the x1000 scaling
                   .clip(SA);
                   
print('Band names', fittedNDVI.bandNames()); 

var ndviVis = {min: 0.2, max: 0.8, palette: ['#ffffff','#c7e9c0','#41ab5d','#005a32']};

// // Add every fitted-NDVI year band as its own layer, named by year, off by default.
// availableYears.forEach(function(yr){
//   Map.addLayer(fittedNDVI.select('yr_' + yr), ndviVis, 'Fitted NDVI ' + yr, false);
// });

Export.image.toAsset({
  image: fittedNDVI.toFloat(),
  description: 'LT_fittedNDVI_multiband',
  assetId: 'projects/ee-endenning/assets/LT_fittedNDVI_stack',
  region: SA.geometry(),
  scale: 30,
  crs: 'EPSG:32613',           // your Saskatchewan UTM zone — adjust if different
  maxPixels: 1e13,
  pyramidingPolicy: {'.default': 'mean'}
});

// =============================================================================
//  STEP 6 — Should we use  the classified map or field data? Commen or uncomment below lines based on which one we need to use
// =============================================================================

///////////
//Tiff file
///////////
var wc9 = ee.Image('projects/ee-endenning/assets/wc_9class');

var ptsPerClass = 100;      // points PER class
var seed        = 42;

var wc = wc9.clip(SA).rename('coverClass').toInt();

var classColours = ['#4a0c6b','#781c81','#3f60ae','#539eb6','#6db388',
                    '#88bb64','#d1b541','#c67932','#7a3a2e'];
var classNames   = ['0','(0,5]','(5,10]','(10,15]','(15,25]',
                    '(25,40]','(40,60]','(60,90]','(90,100]'];
Map.addLayer(wc, {min: 1, max: 9, palette: classColours}, 'Woody cover (9 class)', false);

var points = wc.stratifiedSample({
  numPoints:  ptsPerClass,
  classBand:  'coverClass',
  region:     aoi,
  scale:      30,
  seed:       seed,
  geometries: true,
  tileScale:  4
});

// // lon/lat as plain columns (cleaner outside GEE than the .geo blob)
// points = points.map(function(f){
//   var c = f.geometry().coordinates();
//   return f.set({lon: ee.List(c).get(0), lat: ee.List(c).get(1)});
// });

// print('Total points:', points.size());
// print('Points per class:',
//   points.reduceColumns(ee.Reducer.frequencyHistogram(), ['coverClass']));
// Map.addLayer(points, {color: 'red'}, 'Stratified points', false);

/////////////
// Field data
/////////////

// var sites = ee.FeatureCollection('projects/annual-ccdc-new/assets/Elise_SampledPoints_Update');

// var classColours = ['#4a0c6b','#781c81','#3f60ae','#539eb6','#6db388',
//                     '#88bb64','#d1b541','#c67932','#7a3a2e'];
// var classNames   = ['0','(0,5]','(5,10]','(10,15]','(15,25]',
//                     '(25,40]','(40,60]','(60,90]','(90,100]'];

// // NINE woody-cover classes from measured Total_Wood  ->  codes 0-8
// function assignClass(f){
//   var wc = ee.Number(f.get('Total_Wood'));
//   var cls = ee.Number(
//     ee.Algorithms.If(wc.eq(0),    0,
//     ee.Algorithms.If(wc.lte(5),   1,
//     ee.Algorithms.If(wc.lte(10),  2,
//     ee.Algorithms.If(wc.lte(15),  3,
//     ee.Algorithms.If(wc.lte(25),  4,
//     ee.Algorithms.If(wc.lte(40),  5,
//     ee.Algorithms.If(wc.lte(60),  6,
//     ee.Algorithms.If(wc.lte(90),  7, 8)))))))));
//   return f.set('coverClass', cls);
// }

// // Keep only sites inside the study area, label them, add lon/lat.
// var points = sites.filterBounds(aoi).map(assignClass).map(function(f){
//   var c = f.geometry().coordinates();
//   return f.set({lon: ee.List(c).get(0), lat: ee.List(c).get(1)});
// });

// print('=== STEP 6B: field points ===');
// print('Sites in study area:', points.size());
// print('Points per cover class:',
//   points.reduceColumns(ee.Reducer.frequencyHistogram(), ['coverClass']));
// Map.addLayer(points, {color: 'red'}, 'Field points', false);


// =============================================================================
//  STEP 7 — SAMPLE the fitted NDVI at every point
// =============================================================================
var traj = fittedNDVI.sampleRegions({
  collection: points,
  properties: ['coverClass', 'lon', 'lat'],
  scale: 30,
  geometries: false,
  tileScale: 8
});

print('Rows (should equal point count):', traj.size());
print('First row:', traj.first());
// print(fittedNDVI,size())

// =============================================================================
//  STEP 8 — CHART: mean fitted NDVI per class, per year
// =============================================================================
var plotData = ee.FeatureCollection(availableYears.map(function(yr){
  var bn = 'yr_' + yr;
  var g = traj.reduceColumns({
    reducer: ee.Reducer.mean().group({groupField: 1, groupName: 'coverClass'}),
    selectors: [bn, 'coverClass']
  });
  return ee.FeatureCollection(ee.List(g.get('groups')).map(function(d){
    d = ee.Dictionary(d);
    return ee.Feature(null, {
      year: yr, coverClass: d.get('coverClass'), meanNDVI: d.get('mean')
    });
  }));
})).flatten();

var seriesOpts = {};
for (var i = 0; i < 9; i++) { seriesOpts[i] = {labelInLegend: classNames[i]}; }

print(ui.Chart.feature.groups({
  features: plotData, xProperty: 'year',
  yProperty: 'meanNDVI', seriesProperty: 'coverClass'
}).setChartType('LineChart').setOptions({
  title: 'Mean fitted NDVI by woody-cover class',
  hAxis: {title: 'Year', format: '####'},
  vAxis: {title: 'Fitted NDVI (class mean)'},
  lineWidth: 2, pointSize: 3,
  colors: classColours, series: seriesOpts,
  legend: {position: 'right', title: 'Woody cover (%)'}
}));


// ---- Exporting for work outside GEE ------------------------------------------
// (a) per-point trajectories: one row per point, one column per year
Export.table.toDrive({
  collection: traj,
  description: 'NDVI_trajectories_by_class',
  folder: 'GEE_exports',
  fileNamePrefix: 'NDVI_trajectories_by_class',
  fileFormat: 'CSV'
});

// (b) class-year means, already reduced (small file, plots directly)
Export.table.toDrive({
  collection: plotData,
  description: 'NDVI_classmeans',
  folder: 'GEE_exports',
  fileNamePrefix: 'NDVI_classmeans',
  fileFormat: 'CSV'
});


//=============================================================================
// Use this to see the RAW NDVI trend for the woody cover classes
// =============================================================================
//  STEP 9 — RAW NDVI (from annualComposites, no LandTrendr fitting)
// =============================================================================

var rawNDVI = ee.Image.cat(
  availableYears.map(function(yr){
    var img = ee.Image(annualComposites.filter(ee.Filter.eq('year', yr)).first());
    return img.normalizedDifference(['NIR','R']).rename('yr_' + yr);
  })
).clip(SA);

print('Raw NDVI band names:', rawNDVI.bandNames());  
Map.addLayer(rawNDVI.select('yr_2025'), ndviVis, 'Raw NDVI 2025', false);

// ---- Sample the raw NDVI at the same points --------------------------------
var trajRaw = rawNDVI.sampleRegions({
  collection: points,
  properties: ['coverClass', 'lon', 'lat'],
  scale: 30,
  geometries: false,
  tileScale: 8
});
print('Raw trajectory rows:', trajRaw.size());

// ---- Chart: mean RAW NDVI per class, per year ------------------------------
var plotDataRaw = ee.FeatureCollection(availableYears.map(function(yr){
  var bn = 'yr_' + yr;
  var g = trajRaw.reduceColumns({
    reducer: ee.Reducer.mean().group({groupField: 1, groupName: 'coverClass'}),
    selectors: [bn, 'coverClass']
  });
  return ee.FeatureCollection(ee.List(g.get('groups')).map(function(d){
    d = ee.Dictionary(d);
    return ee.Feature(null, {
      year: yr, coverClass: d.get('coverClass'), meanNDVI: d.get('mean')
    });
  }));
})).flatten();

print(ui.Chart.feature.groups({
  features: plotDataRaw, xProperty: 'year',
  yProperty: 'meanNDVI', seriesProperty: 'coverClass'
}).setChartType('LineChart').setOptions({
  title: 'Mean RAW NDVI by woody-cover class (unfitted)',
  hAxis: {title: 'Year', format: '####'},
  vAxis: {title: 'Raw NDVI (class mean)'},
  lineWidth: 2, pointSize: 3,
  colors: classColours, series: seriesOpts,
  legend: {position: 'right', title: 'Woody cover (%)'}
}));

// ---- Exports ---------------------------------------------------------------
Export.table.toDrive({
  collection: trajRaw,
  description: 'RAW_NDVI_trajectories_by_class',
  folder: 'GEE_exports',
  fileNamePrefix: 'RAW_NDVI_trajectories_by_class',
  fileFormat: 'CSV'
});

Export.table.toDrive({
  collection: plotDataRaw,
  description: 'RAW_NDVI_classmeans',
  folder: 'GEE_exports',
  fileNamePrefix: 'RAW_NDVI_classmeans',
  fileFormat: 'CSV'
});


