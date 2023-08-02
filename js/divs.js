
let objects = [

 { color: "#FF0000", height: 100, width: 300 },

 { color: "#FFFF00", height: 200, width: 200 },

 { color: "#ff0000", height: 300, width: 100 },

];


    function showMe(){
        for(var i=0; i<objects.length; i++){
            console.log(objects[i].color)
            let dvSquare = document.createElement(("div"))
            dvSquare.style.backgroundColor = objects[i].color
            dvSquare.style.height = objects[i].height + "px";
            dvSquare.style.width = objects[i].width + "px";
            document.body.appendChild(dvSquare);
        }
    }