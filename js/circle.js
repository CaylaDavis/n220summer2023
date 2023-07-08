function setup() {
    createCanvas(1000,1000);
    //canvas size
}

function draw() {
    background(211, 214, 219);
    noFill();

// For loop syntax 
    for (var i = 0; i < 30; i++){
        circle(400,500,i*15)
    }
}