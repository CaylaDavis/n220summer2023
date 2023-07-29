let stringsDiv = document.getElementById("strings")

home = [ "Welcome to N220"]
about = [ "There are weekly videos to teach the concepts related to interactive multimedia applications "]
assignments = ["The assignments are excercies based on the week's video"]


function showInfo() {
    myArray.forEach {
        document.getElementById('result').innerHTML +=`<div>${el}</div><br />`;
        // here result is the id of the div present in the dom
    }
};
