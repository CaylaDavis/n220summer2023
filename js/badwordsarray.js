let sentence = document.getElementById("userSentence")
let answerDiv = document.getElementById("answer")

badwords = ["clear", "water", "tires"]
count = 0
let myArray = sentence.value;
let splitArray = myArray.split(" ");
let result = splitArray.filter(wordCheck(words));

function wordCheck () {
    words = 0;
    nameBadwords = splitArray.filter(words) => filter.includes(badwords)


    
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
      
