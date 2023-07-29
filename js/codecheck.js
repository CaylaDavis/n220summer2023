function calcScores() {
    let myArray = [2,4,6,8,10];
    sum = 0; 
    //variable has to exist before so it can exist after 
    for(let i = 0; i< myArray.length; i++) {
        sum += myArray[i]
    console.log(sum)
        //adds the next number to the previous value 
        // works because += is an addition and assignment operator 
    }
}


let theMonths = ["Month", "January", "February", "March"]

function monthNumber() {
    let lookingFor = "March"
    for (let i = 0; i < theMonths.length; i++) {
		if(theMonths[i] == lookingFor) {
			console.log(lookingFor+ " " + "is month" + " "  + i +" " +  "of the year");
        }
    }
}



