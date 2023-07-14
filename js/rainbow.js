let colors = ["#f72a23","#fa8e0a", "#faef28", "#04e037", "#2a0cad", "#551182" ]
//array of colors 

function setup() {
    createCanvas(800,600);
    //canvas size
    background(255, 255, 255);
    //white background 
}

function draw (){
    for(var y = 0; y <= height; y+= 30){
    //start y variable at 0 and add/assign an increment of 30 each time 
    //until it is less than or equal to the total height (600)
        for(var x = 0; x <= width; x += 30){
        //start x variable at 0 and add/assign an increment of 30 each time 
        //until it is less than or equal to the total width(800)
        fill(random(colors));
        //fill circle with random color from array
        circle(x,y, 25)
        //x and y are 0 plus increments of 30
        //diameter of 25 
        }
    }
}




