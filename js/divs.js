
let objects = [

 { color: "#FF0000", height: 100, width: 300 },

 { color: "#FFFF00", height: 200, width: 200 },

 { color: "#ff0000", height: 300, width: 100 },

];

    function showMe(){
        for(var i=0; i<objects.length; i++){
            let dvSquare = document.createElement(("div"))
            dvSquare.style.backgroundColor = color[i]
            dvSquare.style.height = height[i] + "px";
            dvSquare.style.width = width[i] + "px";
            document.body.appendChild(dvSquare);
        }
    }