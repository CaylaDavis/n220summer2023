let amount = document.getElementById("fullAmount");
//return an Element object that represent HTML element with specific id

        
function calculateTip() {
        let cost = fullAmount.value; 
        //get the value placed into the amount text field
        let tip = fullAmount.value * .20;
         //create a variable that contains the input value *.20
        let total = +tip + +fullAmount.value;
        //create a variable that adds tip and input value 
        //type cast so that input is interpreted as number
        console.log ("tip:" + tip + " " + "total:" + total)
        //put the tip and total in the console log 
        }