var radius = 40
var xpos = 110
var speed = 0.5;
var direction = 1;

function setup() {
    createCanvas(1000,1000);
    //canvas size
    ellipseMode (RADIUS);
}

function draw() {
fill (0,0,0);


xpos += speed * direction;
if((xpos> width - radius) || (xpos < radius))
{
    direction = -direction;
}
if (direction == 1) { 
    arc(xpos, 60,radius,radius,10,10)
} else{
    arc(xpos, 60,radius, radius,10,10)
}
}
