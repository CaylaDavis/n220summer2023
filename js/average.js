let list = document.getElementById("numberList")
let answerDiv = document.getElementById("answer")


function averageSum (){
    let myArray = list.value 
    let splitArray = myArray.split(",");
    let sum = 0 
    for (let i=0; i < splitArray.length; i++) {
        sum += Number(splitArray [i])
        console.log(sum);
    }
    let average = sum / splitArray.length 
    console.log(average)
    answerDiv.innerHTML = "Your sum is " +  sum + " and your average is " + average; 
    list.value = " ";

}
