let colors = ["#5c8ddb", "#f0c7de","#e0ccff"]
//array with colors blue,pink, and lavender

function setup() {
    createCanvas(400,300);
    //canvas size

    for(var i = 0; i< colors.length; i++) {
    // start at 0, repeat loop for any number less than the length of the array, increment i by 1
    fill(colors [i])
    //fill shape with  color in the array 
    //based on the current value of i and it's corresponding position within array
    rect(150,100+i*20, 175,25)
    //rectangle (x,y,width,height)
    //y value needs to change for stacking effect 
    }
}
