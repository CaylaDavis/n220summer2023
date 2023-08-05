styles = {
    "width": "200px",
    "height": "200px",
    "float": "left",
    "margin": "5px",
    "background-color": "#918e86",
}
//specify wanted attributes  for width,high,float, margin, and backgroundColor and store in a variable 

let squareDiv1 = document.getElementById("square1")
//reference to HTML element 
Object.assign(squareDiv1.style, styles )
//merge specified styles with existing styles in the style attribute 
squareDiv1.addEventListener("click", itsClicked) 
// create an event listener that will make the div invoke itsClicked function when clicked 

let squareDiv2 = document.getElementById("square2") 
Object.assign(squareDiv2.style, styles )
squareDiv2.addEventListener("click", itsClicked)

let squareDiv3 = document.getElementById("square3")
Object.assign(squareDiv3.style, styles )
squareDiv3.addEventListener("click", itsClicked)

function itsClicked(event) {
//function that is invoked when event (click) is done by yser
    let color = event.target.getAttribute("data-color");
    //store the attribute of color,specified using data-color in HTML elements
    event.target.style.backgroundColor = color;
    //change background color to color specified in the element by customed attribute 
}