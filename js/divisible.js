
let theNumber = document.getElementById("checkNumber");
let dvAnswer = document.getElementById("answer")






    


 function divisibleSeven (theNumber) {
            if (+theNumber % 7 == 0){
            return true; 
            }
            else{
            return false; 
            }
}


function giveAnswer(){
    console.log(divisibleSeven(theNumber.value))
    if (7){
    dvAnswer.innerHTML = "This number is divisible by 7"
    }
    else{
        dvAnswer.innerHTML = "This number is not divisible by 7"
    }
}

    



