function setup() {
    createCanvas(800,600);
    //canvas size
}
function draw() {  
       background(255,255,255);   
        for(var i=0;i<4;i++){ 
            fill(235, 25, 14); 
            stroke(255,255,255);
            rect(i*40,300,40,100);
        }
            
}