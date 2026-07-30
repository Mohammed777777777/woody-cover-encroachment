// Import the study area feature class file and centre it
var SA  = ee.FeatureCollection('projects/annual-ccdc-new/assets/TC_OH_RanchBoundary');
var aoi = SA.geometry();
Map.centerObject(SA, 11);

// //--------------------------------
// // Image downloading to assest (Uncomment and download)
// //--------------------------------

// // 1985
// var year = 1985;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LT05_042025_19850726', 'LT05_042025_19850811', 'LT05_042025_19850827']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });

/////////////////////////////////////////////////////////////////////////


// // 1989
// var year = 1989;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LT05_042025_19890721', 'LT05_042025_19890705', 'LT05_042025_19890806']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });

/////////////////////////////////////////////////////////////////////////



// // 1990
// var year = 1990;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LT05_042025_19900708', 'LT05_042025_19900809']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });

/////////////////////////////////////////////////////////////////////////


// 1992
// var year = 1992;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LT05_042025_19920814', 'LT05_042025_19920830']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });

///////////////////////////////////////////////////////////////////////



// // 1993
// var year = 1993;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LT05_042025_19930801']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });




// // 1994
// var year = 1994;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LT05_042025_19940703']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });




// // 1995
// var year = 1995;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LT05_042025_19950823']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });




// // 1996
// var year = 1996;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LT05_042025_19960825', 'LT05_042025_19960809', 'LT05_042025_19960724']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });




// // 1997
// var year = 1997;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LT05_042025_19970812']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });




// // 1998
// var year = 1998;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LT05_042025_19980730', 'LT05_042025_19980831']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });



// // 1999
// var year = 1999;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LT05_042025_19990802', 'LE07_042025_19990709', 'LE07_042025_19990826']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });



// 2000
// var year = 2000;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LE07_042025_20000828']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });



// // 2001
//   var year = 2001;
//   var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year
  
//   var pickIDs = ['LT05_042025_20010706', 'LT05_042025_20010807', 'LE07_042025_20010815', 'LE07_042025_20010831']; 
  
//   // Map an ID's prefix to its Landsat collection.
//   function collFor(id){
//     var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//     return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//             LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
//   }
  
//   pickIDs.forEach(function(id){
//     var im = ee.Image(ee.ImageCollection(collFor(id))     
//       .filter(ee.Filter.eq('system:index', id)).first());
//     im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);
  
//     Export.image.toAsset({
//       image: ee.Image(im).clip(SA),
//       description: 'export_' + id,
//       assetId: collPath + '/' + id,        // goes INTO the year collection
//       region: SA.geometry(),
//       scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//     });
//   });
  

// // 2002
// var year = 2002;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LE07_042025_20020717', 'LE07_042025_20020818']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });


// // 2003
// var year = 2003;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LT05_042025_20030712', 'LE07_042025_20030720', 'LT05_042025_20030728', 'LE07_042025_20030805',
//                 'LT05_042025_20030813','LE07_042025_20030821','LT05_042025_20030829']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });




// // 2004
// var year = 2004;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LT05_042025_20040714']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });




// // 2005
// var year = 2005;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LE07_042025_20050826', 'LT05_042025_20050818', 'LT05_042025_20050701']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });



// // 2006
// var year = 2006;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LT05_042025_20060704', 'LT05_042025_20060720', 'LT05_042025_20060805', 'LT05_042025_20060821']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });


// // 2007
// var year = 2007;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LT05_042025_20070723', 'LE07_042025_20070816']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });



// // 2008
// var year = 2008;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LE07_042025_20080818', 'LT05_042025_20080725', 'LT05_042025_20080709']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });



// // 2009
// var year = 2009;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LT05_042025_20090829', 'LE07_042025_20090821', 'LE07_042025_20090720']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });


// // 2010
// var year = 2010;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LE07_042025_20100824', 'LT05_042025_20100816', 'LT05_042025_20100715']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });



// // 2011
// var year = 2011;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LT05_042025_20110702', 'LT05_042025_20110718', 'LT05_042025_20110819']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });


// // 2012
// var year = 2012;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LE07_042025_20120829', 'LE07_042025_20120813', 'LE07_042025_20120728']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });


// // 2013
// var year = 2013;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LC08_042025_20130824', 'LE07_042025_20130731']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });


// // 2014
// var year = 2014;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LC08_042025_20140827', 'LC08_042025_20140811', 'LC08_042025_20140726', 'LC08_042025_20140710', 'LE07_042025_20140702']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });



// // 2015
// var year = 2015;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LE07_042025_20150721', 'LC08_042025_20150814', 'LE07_042025_20150822', 'LC08_042025_20150830']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });



// // 2016
// var year = 2016;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LE07_042025_20160707', 'LC08_042025_20160816']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });




// // 2017
// var year = 2017;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LE07_042025_20170827', 'LC08_042025_20170803', 'LE07_042025_20170726', 'LC08_042025_20170718', 'LC08_042025_20170702']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });




// // 2018
// var year = 2018;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LC08_042025_20180705', 'LE07_042025_20180713', 'LC08_042025_20180721', 'LE07_042025_20180729', 
//                 'LE07_042025_20180814', 'LC08_042025_20180822']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });



// // 2019
// var year = 2019;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LC08_042025_20190622', 'LE07_041025_20190725', 'LE07_042025_20190801', 'LE07_042025_20190817']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });


// // 2020
// var year = 2020;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LC08_042025_20200726', 'LC08_042025_20200811']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });



// // 2021
// var year = 2021;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LC08_042025_20210713', 'LC08_042025_20210729', 'LC08_042025_20210830']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });


// // 2022
// var year = 2022;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LC08_042025_20220716', 'LC09_042025_20220724', 'LC09_042025_20220809', 'LC08_042025_20220817']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });



// // 2023
// var year = 2023;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LC09_042025_20230828']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });



// // 2024
// var year = 2024;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LC08_042025_20240705', 'LC09_042025_20240713','LC08_042025_20240721']; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });



// // 2025
// var year = 2025;
// var collPath = 'projects/annual-ccdc-new/assets/' + year;   // collection named just by year

// var pickIDs = ['LC08_042025_20250708', 'LC09_042025_20250716','LC09_042025_20250801','LC09_042025_20250817', 'LC08_042025_20250825' ]; 

// // Map an ID's prefix to its Landsat collection.
// function collFor(id){
//   var p = id.slice(0, 4);   // first 4 chars: 'LT05', 'LE07', 'LC08', 'LC09'
//   return {LT05:'LANDSAT/LT05/C02/T1_L2', LE07:'LANDSAT/LE07/C02/T1_L2',
//           LC08:'LANDSAT/LC08/C02/T1_L2', LC09:'LANDSAT/LC09/C02/T1_L2'}[p];
// }

// pickIDs.forEach(function(id){
//   var im = ee.Image(ee.ImageCollection(collFor(id))     
//     .filter(ee.Filter.eq('system:index', id)).first());
//   im = im.copyProperties(im, ['system:time_start','SPACECRAFT_ID','CLOUD_COVER']);

//   Export.image.toAsset({
//     image: ee.Image(im).clip(SA),
//     description: 'export_' + id,
//     assetId: collPath + '/' + id,        // goes INTO the year collection
//     region: SA.geometry(),
//     scale: 30, crs: 'EPSG:4326', maxPixels: 1e13
//   });
// });
