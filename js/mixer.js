let originalDiv = document.getElementById("original")
    r = 0 ;
    g = 0 ;
    b = 0 ;
    rgbColor = "rgb(" + r + "," + g + "," + b + ")"


function styleDiv() {
originalDiv.style.width =  "400px" ;
originalDiv.style.height = "200px ";
originalDiv.style.backgroundColor = rgbColor
}

styleDiv();



function red1 (){
    rgbColor = "rgb(" +  (r += 1) +  "," + g + "," + b + ")"
    originalDiv.style.backgroundColor = rgbColor
    console.log(rgbColor)
    originalDiv.style.backgroundColor = rgbColor
}

function red5 (){
    rgbColor = "rgb(" +  (r += 5) +  "," + g + "," + b + ")"
    originalDiv.style.backgroundColor = rgbColor
    console.log(rgbColor)
    originalDiv.style.backgroundColor = rgbColor
}

function red10 (){
    rgbColor = "rgb(" +  (r += 10) +  "," + g + "," + b + ")"
    originalDiv.style.backgroundColor = rgbColor
    console.log(rgbColor)
    originalDiv.style.backgroundColor = rgbColor
}

function green1 (){
    rgbColor = "rgb(" +  r  +  "," + ( g += 1)  + "," + b + ")"
    originalDiv.style.backgroundColor = rgbColor
    console.log(rgbColor)
    originalDiv.style.backgroundColor = rgbColor
}

function green5 (){
    rgbColor = "rgb(" +  r  +  "," + ( g += 5)  + "," + b + ")"
    originalDiv.style.backgroundColor = rgbColor
    console.log(rgbColor)
    originalDiv.style.backgroundColor = rgbColor
}

function green10 (){
    rgbColor = "rgb(" +  r  +  "," + ( g += 10)  + "," + b + ")"
    originalDiv.style.backgroundColor = rgbColor
    console.log(rgbColor)
    originalDiv.style.backgroundColor = rgbColor
}

function blue1 (){
    rgbColor = "rgb(" +  r  +  "," +  g   + "," + (b += 1) + ")"
    originalDiv.style.backgroundColor = rgbColor
    console.log(rgbColor)
    originalDiv.style.backgroundColor = rgbColor
}

function blue5 (){
    rgbColor = "rgb(" +  r  +  "," +  g   + "," + (b += 5) + ")"
    originalDiv.style.backgroundColor = rgbColor
    console.log(rgbColor)
    originalDiv.style.backgroundColor = rgbColor
}

function blue10 (){
    rgbColor = "rgb(" +  r  +  "," +  g   + "," + (b += 10) + ")"
    originalDiv.style.backgroundColor = rgbColor
    console.log(rgbColor)
    originalDiv.style.backgroundColor = rgbColor
}


