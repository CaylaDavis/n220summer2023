function setup() {
    createCanvas(1000,1000);
    //canvas size
}

function draw() {
    background(211, 214, 219)
    //set background color to light grey

// For loop syntax 
    for (var i = 0; i < 30; i++){
        noFill();
        circle(400,,i*15)
    }
    //create 30 circle with no fill. 
    //The (i *15) alters the diameter of the circles so that you can see the larger circles encompass the smaller circles 
}