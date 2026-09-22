var currentComp = app.project.activeItem;
var selectedLayers = currentComp.selectedLayers;
var currentTime = app.project.activeItem.time;

if(selectedLayers.length !== 2) throw "Select two layers.";

var upperLayer = selectedLayers[0];
var lowerLayer = selectedLayers[1];

var lowerLayerPosition = lowerLayer.position.value;

var lowerLayerScale = lowerLayer.scale.value / 100;
var upperLayerScale = upperLayer.scale.value / 100;

var lowerLayerSourceRect = lowerLayer.sourceRectAtTime(currentTime, false);
var upperLayerSourceRect = upperLayer.sourceRectAtTime(currentTime, false);

var lowerLayerWidth = lowerLayerSourceRect.width * lowerLayerScale[0];
var lowerLayerHeight = lowerLayerSourceRect.height * lowerLayerScale[1];
var upperLayerWidth = upperLayerSourceRect.width * upperLayerScale[0];
var upperLayerHeight = upperLayerSourceRect.height * upperLayerScale[1];

// Move to the top left of the lower layer + Translate to the center of the lower layer + Offset the anchor point of the upper layer to center perfectly
var upperLayerX = lowerLayerPosition[0] + (lowerLayerWidth / 2) - (upperLayerWidth / 2);
var upperLayerY = lowerLayerPosition[1] + (lowerLayerHeight / 2) - (upperLayerHeight / 2);

upperLayer.position.setValue([upperLayerX, upperLayerY]);
