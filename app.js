// require leaflet
var L = require('leaflet');

// since leaflet is bundled into the browserify package it won't be able to detect where the images
// solution is to point it to where you host the the leaflet images yourself
L.Icon.Default.imagePath = 'http://cdn.leafletjs.com/leaflet-0.7.3/images';

// require heatmap and cluster plugins
// browserify will include them im the bundle and the plugins will be attached to window.L rather then return the class
require('leaflet.heat');
require('leaflet.markercluster');

// require esri-leaflet
var Esri = require('esri-leaflet');
var ClusteredFeatureLayer = require('esri-leaflet-clustered-feature-layer');
var HeatmapFeatureLayer = require('esri-leaflet-heatmap-feature-layer');

// start coding!
var map = L.map('map').setView([45.526, -122.667], 15);
var tiles = new Esri.BasemapLayer('Topographic').addTo(map);

var features = new Esri.FeatureLayer('http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Trimet_Transit_Stops/FeatureServer/0').addTo(map);
// var clusters = new ClusteredFeatureLayer('http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Trimet_Transit_Stops/FeatureServer/0').addTo(map);
// var heatmap = new HeatmapFeatureLayer('http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Trimet_Transit_Stops/FeatureServer/0').addTo(map);