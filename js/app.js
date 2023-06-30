function setup() {
    createCanvas (800,600);
    var royal = ("#0324fc");
    var startX = (200)

    background(royal);
    fill(245, 66, 135);
    stroke (132,252,3);
    strokeWeight(4);
    rect(startX,300,400,300);
   
    fill(250, 138, 52);
    triangle(startX, 300, 400,200, 600, 300);
   
    fill(royal);
    rect(450,400,100,100);
    
    fill(151, 52, 250);
    rect(300,400,100,200);
    
    line(450,450,550,450);
    line(500,400,500,500);
    
    fill(245, 230, 66)
    noStroke()
    circle(380,500,5)
    circle(800,20,150)

}