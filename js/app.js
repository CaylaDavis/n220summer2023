function setup() {
    createCanvas (800,600);
        //canvas size
    var royal = ("#0324fc");
        // create a variale for blue color using HEX number
    var startX = (200)
        //created a variable for a position on the canvas 

    background(royal);
        //change background to blue using variable previously  
    fill(245, 66, 135);
        //fill shapes  with hot pink color 
    stroke (132,252,3);
        //outline shapes with neon green
    strokeWeight(4);
        //alter the width of the outline to be more noticeable 
    rect(startX,300,400,300);
        //create rectangle (base of house) and use variable named startX for x coordinate 
   
    fill(250, 138, 52);
    triangle(startX, 300, 400,200, 600, 300);
        //create triangle filled with orange (roof) and use variable named startX for x coordinate 
   
    fill(royal);
    square(450,400,100)
       //create square filled with exact blue of background using royal variable (window)
    
    fill(151, 52, 250);
    rect(300,400,100,200);
        //create rectangle filled with purple (door)
    
    line(450,450,550,450);
    line(500,400,500,500);
     // create perpendicular lines with 90 degree angles within the square (window)
    
    fill(245, 230, 66)
    noStroke()
    circle(380,500,5)
      //Create small circle (doorknob)
    circle(800,20,150)
      //Create circle with paremeters that will extend over the right corner of canvas (sun)

}