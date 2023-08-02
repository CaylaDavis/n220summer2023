let sentence = document.getElementById("userSentence")
let answerDiv = document.getElementById("answer")

badwords = ["clear", "water", "tires"]
count = 0

let removeWords = wordCheck(sentence) {
     myArray = sentence.value,
    splitArray = myArray.split(" "),
    newArray = splitArray.filter(splitArray => !splitArray.includes(badwords));
    console.log(newArray)   

}


