let originalDiv = document.getElementById("original")
//reference HTML element 
    r = 0 ;
    //r stands for red
    g = 0 ;
    //g stands for green 
    b = 0 ;
    //b stands for blue 
    rgbColor = "rgb(" + r + "," + g + "," + b + ")"
    //store original color (rgb(0,0,0)) in a variable
    //black


function styleDiv() {
//function to style orignal square
originalDiv.style.width =  "400px" ;
//width of div
originalDiv.style.height = "200px ";
//height of div 
originalDiv.style.backgroundColor = rgbColor
//change color of div to variable that stores black color above
}


styleDiv();
//invoke function  



function red1 (){
    rgbColor = "rgb(" +  (r += 1) +  "," + g + "," + b + ")"
    //add 1 to value for red variable and assign new number as value  
    originalDiv.style.backgroundColor = rgbColor
    //change background color of div to new rgb value after altering red 
    console.log(rgbColor)
}

function red5 (){
    rgbColor = "rgb(" +  (r += 5) +  "," + g + "," + b + ")"
    //add 5 to value for red variable and assign new number as value 
    originalDiv.style.backgroundColor = rgbColor
    //change  background Color of div to new rgb value after altering red 
    console.log(rgbColor)
   
}

function red10 (){
    rgbColor = "rgb(" +  (r += 10) +  "," + g + "," + b + ")"
    ///add 10 to value for red variable and assign new number as value 
    originalDiv.style.backgroundColor = rgbColor
    ////change  background Color of div to new rgb value after altering red 
    console.log(rgbColor)

}

//These same directions can be used in below function. Only change is what rgb color is being altered 

function green1 (){
    rgbColor = "rgb(" +  r  +  "," + ( g += 1)  + "," + b + ")"
    originalDiv.style.backgroundColor = rgbColor
    console.log(rgbColor)
    
}

function green5 (){
    rgbColor = "rgb(" +  r  +  "," + ( g += 5)  + "," + b + ")"
    originalDiv.style.backgroundColor = rgbColor
    console.log(rgbColor)
    
}

function green10 (){
    rgbColor = "rgb(" +  r  +  "," + ( g += 10)  + "," + b + ")"
    originalDiv.style.backgroundColor = rgbColor
    console.log(rgbColor)
   
}

function blue1 (){
    rgbColor = "rgb(" +  r  +  "," +  g   + "," + (b += 1) + ")"
    originalDiv.style.backgroundColor = rgbColor
    console.log(rgbColor)
   
}

function blue5 (){
    rgbColor = "rgb(" +  r  +  "," +  g   + "," + (b += 5) + ")"
    originalDiv.style.backgroundColor = rgbColor
    console.log(rgbColor)
    
}

function blue10 (){
    rgbColor = "rgb(" +  r  +  "," +  g   + "," + (b += 10) + ")"
    originalDiv.style.backgroundColor = rgbColor
    console.log(rgbColor)
    
}


