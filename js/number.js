let dvNumber = document.getElementById("informUser");
//return an Element object that represent HTML element with specific id
let guess  = document.getElementById("guessNumber");
//returns an element with a specified value 

let randomNumber = Math.floor(Math.random() * 21);
//variable holds a random number between 1-20
    console.log(randomNumber);
    //display number in developer console


dvNumber.style.width = "100px"
//set width of div
dvNumber.style.height = "100px"
//set height of div 

function numberCheck() {
    if (Number(randomNumber) == Number(guess.value)) { 
        dvNumber.innerHTML = "You Guessed Right!";
        //If the user guesses correctly, display “You guessed right!” 
        dvNumber.style.backgroundColor = "#64f757";
        //green background 
    }
    else if(randomNumber > +guess.value){
        dvNumber.innerHTML = "You Guessed Too Low."; 
        //If the user guesses below the random number, display “You Guessed Too Low.” 
        dvNumber.style.backgroundColor = "#ed4037";
        //red background
    }
    else {
        dvNumber.innerHTML = "You Guessed Too High."; 
        // dispay "You guessed too high"  if both of the other conditions are not met 
        dvNumber.style.backgroundColor = "#ed4037";
        //red background 
    }

}


        



