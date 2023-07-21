let dvSquare = document.getElementsById("squareimage");
//reference HTML element 

function randomColor() {
     r = randomInteger(255);
     g = randomInteger(255);
     b = randomInteger(255);
     rgbColor = "rgb(" + r + "," + g + "," + b + ")";

    return [r,g,b];
}
function draw(){
    for(var i=0; i<100; i++){
        dvSquare.style.backgroundColor = rgbColor;
        dvSquare.style.height = "20px";
        dvSquare.style.width = "20px"; 
        dvSquare.style.float = "left";
        document.body.appendChild(dvSquare);
}
}