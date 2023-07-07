
function setup() {
    createCanvas (400,300);
    //canvas size 
}

function draw() {
    background(252, 250, 250);

    if(mouseX>200)
    {
        fill(227, 28, 14);
        circle(mouseX,mouseY,25);
    }
    else
    {
        fill(66, 155, 245);
        circle(mouseX,mouseY,25);
    }

    
}