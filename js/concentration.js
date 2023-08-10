cardDivs = document.querySelector(".cards")
//reference HTML element by its class 


cardValues = ["1","1","2","2","3","3","4","4","5","5","6","6","7","7","8","8"];
//array that holds all the variables that will be displayed on the cards 
randomValue =  cardValues[Math.floor(Math.random() * cardValues.length)];
//get a random value from the array by cardValues[random # between 0-16]
console.log(randomValue)
//check output
cardValues.splice(randomValue,1);
//remove single element at the random index value so that each variable will only be picked once 

clickedCard = []
//empty array that will hold clicked cards 


function assignValue (){
    for (let i = 0; i < cardValues.length; i++) { 
    //for the length of the card values array 
        cardAssignment = document.createElement("div")
        //create an element 
        card.setAttribute("data-id", i)
        //give each element a unique id of 0-16
        card.setAttribute("data-value", randomValue)
        //give each card a value from the cardValue array 
        card.addEventListener("click", flipCard)
        //event listener that will make divs invoke flipCard function when clicked 
        cardDivs.appendChild("cards")

    }
}
function flipCard () {
    cardId = this.getAttribute("data-id")
    clickedCard.push(cardValues[cardId].name)
}

function checkMatch () { 
    card1 = clickedCard [0]
    card2 = clickedCard [1]
}