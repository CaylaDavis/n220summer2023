let dvOver = document.getElementById("over");
//reference HTML element 

dvOver.style.backgroundColor = "#325ca8"
//blue background of square div
dvOver.style.height = "100px";
//100 px height of square div
dvOver.style.width = "100px";
//100 px width of square div 

dvOver.onmouseover = function (changeBlack){
    dvOver.style.backgroundColor = "#0a0a0a"
};
//when the mouse is over the div change the background color to black


dvOver.onmouseout = function (changeBlue){
    dvOver.style.backgroundColor = "#325ca8"
}
//when the mouse moves off of the div change the backgroumd color back to blue 

