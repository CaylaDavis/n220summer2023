let question1 = document.getElementById("question1") 

let question2 = document.getElementById("question2")


let question3 = document.getElementById("question3")





function giveAnswer(event) {
    let answer = event.target.getAttribute("data-answer");
    event.target.innerHTML = answer ;

}