let xpositions = [];
let ypositions = [];

function setup() {
    createCanvas (400,300);
    background(242, 245, 243);
}

function draw (){
xpositions.push (mouseX);
ypositions.push(mouseY);
    for(var i = 0; i < xpositions.length; i++) {
        fill(107, 20, 14);
        rect(xpositions[i],ypositions[i],45,25) 
    }

    function mousePressed(){
        rect(mouseX,mouseY,random(255))
    }
}