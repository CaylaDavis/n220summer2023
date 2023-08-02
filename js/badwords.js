let sentence = document.getElementById("userSentence")
let answerDiv = document.getElementById("answer")

badwords = ["clear", "water", "tires"]
count = 0
function wordCheck() {
    let myArray = sentence.value;
    let splitArray = myArray.split(" ");
    let lookingFor = badwords
    let count = 0;
    for (let i = 0; i < lookingFor.length; i++) {
        for(let n = 0; n < splitArray.length; n++) {
            count = 0
            if(lookingFor[i] == splitArray[n]) {
                count++
                console.log(count)
                if( count > 0 ) {
                    answerDiv.innerHTML = " There are " + count + " bad words in this statement" 
                }
                else{
                    answerDiv.innerHTML = "There are no bad words in this statement"
                }
        

                }
    sentence.value = " "
            }                
            
              
        }
        
}
