var radius = 40; 
var xPos = -radius 



function setup () {
    createCanvas(800,600);

let key = 'Aliens: white squares  Player: Red Triangle';
    fill(50);
    text(key,10,400); 
}       


function draw(){
    background(64, 63, 62);
    stroke(0,0,0);
    strokeWeight(1);
    for(var x=0;x<10;x++){ 
        for(var y = 0; y < 3; y++){
        fill(255,255,255);
        square(x * 25, y * 25, 20);
        }
    }
    
    fill(66, 155, 245);
    circle (xPos,400,30);
    xPos = xPos + .5; 
    
    if (xPos > width + radius ){
            xPos = -radius
    
    }
}


