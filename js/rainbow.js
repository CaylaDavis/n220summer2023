let colors = ["#f72a23","#fa8e0a", "#faef28", "#04e037", "#2a0cad", "#551182" ]
//array of colors 

function setup() {
    createCanvas(800,600);
    background(255, 255, 255);
}

function draw (){
    for(var y = 0; y <= height; y+= 30){
        for(var x = 0; x <= width; x += 30){
        fill(random(colors));
        circle(x,y, 25)
        }
    }
}




