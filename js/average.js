let list = document.getElementById("numberList")
let answerDiv = document.getElementById("answer")
//Create reference to HTML elements representing user input and div for answer 

function averageSum (){
    let myArray = list.value 
    //store user input in variable
    let splitArray = myArray.split(",");
    //Split user input where commas are so program gets user's intended numbers
    let sum = 0 
    //set sum equal to 0 
    for (let i=0; i < splitArray.length; i++) {
        sum += Number(splitArray [i])
        console.log(sum);
        //for the length of the array, add each number together 
        //subsequent numbers are added to the value of previous numbers added together 
        //+= add and assigns the new value to the variable sum 
    }
    let average = sum / splitArray.length 
    //average is the sum divided by the amount of numbers
    console.log(average)
    answerDiv.innerHTML = "Your sum is " +  sum + " and your average is " + average; 
    //tell user the sum and average
    list.value = " ";
    //set input field back to blank after answer is given

}
