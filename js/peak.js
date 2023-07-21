let dvSquare = document.getElementById("square");
//reference HTML element by it's ID 


heightI = 100 
//set a variable for height  equal to 100 
widthI = 100
//set a variable for width equal to 100 


dvSquare.style.backgroundColor = "#a6f75e"
//green back ground color
dvSquare.style.height = heightI + "px";
//alter html elements height to be 100 px using previously created variable 
dvSquare.style.width = widthI + "px";
//alter html elements width to be 100 px using previously created variable 

function increaseSize(){
    dvSquare.style.transform = "scale(1.1)";
    //set image to 1.1 it's original size                       
    
}

