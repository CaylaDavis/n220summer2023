let colors = ["#5c8ddb", "#f0c7de","#e0ccff", "#f2af11"]
//array with colors blue,pink, lavender, and orange 

function setup(){
createCanvas(400,300);
//canvas size
}

randomElement = colors[Math.floor(Math.random() * colors.length)];

function randomColor() {
    for(var i = 0; i< colors.length; i++) {
    // start at 0, repeat loop for any number less than the length of the array, increment i by 1
    fill(randomElement)
    //fill shape with random color in the array 
    stroke(2);
    circle(200,150,25)
    //circle(x,y,diameter)
    }
}