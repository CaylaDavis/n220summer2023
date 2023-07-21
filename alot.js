let dvSquare = document.getElementById("squareimage");
//reference HTML element 


for(var i=0; i<100; i++) 
    dvSquare.style.backgroundColor = color(random(255), random(255),random(255));
    dvSquare.style.height = "20px";
    dvSquare.style.width = "20px"; 
    dvSquare.style.float = "left";
    document.body.appendChild(dvSquare);