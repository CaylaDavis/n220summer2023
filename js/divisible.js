
let theNumber = document.getElementById("checkNumber");




function divisibleSeven (theNumber) {
            if (+theNumber % 7 == 0){
            return true; 
            }
            else{
            return false; 
            }
}


function giveAnswer(){
    let dvAnswer = document.createElement("div");
    document.body.appendChild(dvAnswer)
    console.log(divisibleSeven(theNumber.value));
    if ((divisibleSeven(theNumber.value)) == true){
        dvAnswer.innerHTML = "This number is divisible by 7";
    }
    else{
        dvAnswer.innerHTML = "This number is not divisible by 7";
    }
}

    

