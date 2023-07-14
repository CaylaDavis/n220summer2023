var radius = 40; 
var xPos = -radius 

function setup() {
    createCanvas (800,600);
    //canvas size
    background(252, 250, 250);
    fill(66, 155, 245);
    circle (xPos,400,30);
    xPos = xPos + 5; 

    if (xPos > width + radius ){
        xPos = -radius

    }
        





}
