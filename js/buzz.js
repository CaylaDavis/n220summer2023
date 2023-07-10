function setup() {
    createCanvas(1000,1000);
    //canvas size
}

function draw(){
    background(211, 214, 219);
    //set background to light grey color

    for(let i = 0; i < 25; i++) {
    // start i at 0;  complete the following loop for every number less than 25; add 1 to the previous value each time the loop is used 
        let x = i * 30
        //Create variable for horizontal position of shapes
        let y = 300 
        //Create variable for vertical position of shapes
        fill (5,5,5);
        circle(x,y,10);
        //Create 25 black circles


        if (i%3 == 0){
            fill(116, 24, 173)
            circle(x ,y ,10)
        }
        //If i is divisible by 3, create in a purple circle in the position of (i*30,300)

        if (i%5 == 0){
            fill(66, 245, 66)
            square(x-10,y-10,20)
        }
        //If i is divisble by 5 put a green square in the position of((i*30)-10),(290)


        if(i%3 == 0 && i%5 == 0){
            fill(0,0,255)
            square(x-10,y-10,20)
        //if i is divisible by 3 & 5 , then put blue square in the position of((i*30)-10),(290)

        }
    }

}