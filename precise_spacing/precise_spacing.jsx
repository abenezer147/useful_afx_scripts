var currentComp = app.project.activeItem;
var selectedLayers = currentComp.selectedLayers;
var currentTime = app.project.activeItem.time;

var window = new Window("palette", "Precise Spacing", undefined);

if(selectedLayers.length !== 2) throw "Select two layers.";

var layer1 = selectedLayers[0];
var layer2 = selectedLayers[1];

mainGroup = window.add("group", undefined, "main_group");
mainGroup.orientation = "column";

mainGroup.add("statictext", undefined, "Spacing (px)");

var spaceInput = mainGroup.add("edittext", undefined, "0");
spaceInput.size = [100, 25];

var orientationColumnInput = mainGroup.add("checkbox", undefined, "Column");

var runButton = mainGroup.add("button", undefined, "Run");

var layer2Position = rightLayer.position.value;
var layer1Position = layer1.position.value;

var layer1Scale = layer1.scale.value / 100;
var layer1SourceRect = layer1.sourceRectAtTime(currentTime, false);
var layer1Width = layer1SourceRect.width * layer1Scale[0];
var layer1Height = layer1SourceRect.height * layer1Scale[1];

runButton.onClick = function() {
    var space = parseInt(spaceInput.text);
    var columnOrientation = orientationColumnInput.value;
    
    if(columnOrientation) {
        var layer2Y = layer1Position[1] + layer1Height + space;
        layer2.position.setValue([layer2Position[0], layer2Y]);
    } else {
        var layer2X = layer1Position[0] + layer1Width + space;
        layer2.position.setValue([layer2X, layer2Position[1]]);
    }
}

window.show();
