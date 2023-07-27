

showMe();
function randomColor() {
     r = Math.floor(Math.random() * 255);
     g = Math.floor(Math.random() * 255);
     b =Math.floor(Math.random() * 255);
     rgbColor = "rgb(" + r + "," + g + "," + b + ")";

    return rgbColor;
}
function showMe(){
    console.log("gvhjbjhn")
    for(var i=0; i<100; i++){
        let dvSquare = document.createElement(("div"))
        dvSquare.style.backgroundColor = randomColor();
        dvSquare.style.height = "20px";
        dvSquare.style.width = "20px"; 
        dvSquare.style.float = "left";
        document.body.appendChild(dvSquare);
    }
}