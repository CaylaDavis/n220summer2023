let question1 = document.getElementById("question1") 
//reference HTML element 

let question2 = document.getElementById("question2")
//reference HTML element

let question3 = document.getElementById("question3")
//reference HTML element 





function giveAnswer(event) {
    let answer = event.target.getAttribute("data-answer");
    //store customized attribute for answer in variable
    event.target.innerHTML = answer ;
    //display answer on page 
    //event.target is used because the action of clicking invoking the function is attached to the div - div was listening for  event  

}