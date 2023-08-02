let sentence = document.getElementById("userSentence")
let answerDiv = document.getElementById("answer")
//Create reference to HTML elements representing user input and div for answer 


badwords = ["clear", "water", "tires"]
//array that contains bad words 
count = 0 
//variable for count set to 0 


function wordCheck() {
    let myArray = sentence.value;
    //get user's input
    let splitArray = myArray.split(" ");
    //split where there are blank spaces
    let lookingFor = badwords
    //set variable equal to what I'm looking for 
    for (let i = 0; i < lookingFor.length; i++) {
    //complete following code for the length of bad words array
        for(let n = 0; n < splitArray.length; n++) {
        //complete following code for the length of splitArray
            if(lookingFor[i] == splitArray[n]) {
            //compare bad words array with split user input array. Checking for if there is a bad word 
                count++
                //if there is a bad word add 1 to count
                console.log(count)

                
                if( count > 0 ) {
                    answerDiv.innerHTML = " There are " + count + " bad words in this statement" 
                    //if there are bad words in user input. Tell the user how many are in the statement 
                }
                else{
                answerDiv.innerHTML = "There are no bad words in this statement"
                //if there are no bad words in user input, inform user 
                }

            }
            
sentence.value = " "
//clear input field 
        }                
            
              
     }
        
}
