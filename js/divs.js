
let objects = [

 { color: "#FF0000", height: 100, width: 300 },

 { color: "#FFFF00", height: 200, width: 200 },

 { color: "#ff0000", height: 300, width: 100 },

];
//array given from assignment with value pairs for color,height,and width 


function showMe(){
    for(var i=0; i<objects.length; i++){
    //for length of objects array
        let dvSquare = document.createElement(("div"))
        //Create HTML element with id "div"
        dvSquare.style.backgroundColor = objects[i].color
        //fill div color with color in objects array according to which [i] the loop is on
        dvSquare.style.height = objects[i].height + "px";
        //adjust div height with height in objects height value
        dvSquare.style.width = objects[i].width + "px";
        //adjust div width with with in obhect width value
        document.body.appendChild(dvSquare);
        //add element to the body 
        }
    }

showMe();
//invoke function 