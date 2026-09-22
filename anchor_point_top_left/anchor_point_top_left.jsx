var currentComp = app.project.activeItem;
var selectedLayers = currentComp.selectedLayers;
var currentTime = app.project.activeItem.time;

for(var i = 0; i < selectedLayers.length; i++) {
    var selectedLayer = selectedLayers[i];
    var sourceRect = selectedLayer.sourceRectAtTime(currentTime, false);
    var anchorPoint = selectedLayer.anchorPoint;
    
    anchorPoint.setValue([sourceRect.left, sourceRect.top]);
}
