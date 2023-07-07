function setup() {
    createCanvas (800,600);
    //canvas size 
}
function draw() {
    background(252, 250, 250);
    
    
    //For loop syntax
    for (var i= 0; i +=25; i++) {
        fill(5,5,5);
        circle (i*30,300,15);

        if (i%3==0){
            fill(109, 50, 168);
            circle(i*30,300,15);
         }

    }
}
