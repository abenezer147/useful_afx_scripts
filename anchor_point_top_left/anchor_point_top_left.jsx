var currentComp = app.project.activeItem;
var selectedLayers = currentComp.selectedLayers;

for(var i = 0; i < selectedLayers.length; i++) {
    var selectedLayer = selectedLayers[i];
    var sourceRect = selectedLayer.sourceRectAtTime(0, false);
    var anchorPoint = selectedLayer.anchorPoint;
    
    anchorPoint.setValue([sourceRect.left, sourceRect.top]);
}
