buttonsDiv = document.getElementById("buttons")



words = ["jazz","haiku", "abyss", "spritz", "icebox", "bayou","oxidize","pixel","queue","zombie"]
//array of 10 hangman words
chosenWord =  words[Math.floor(Math.random() * words.length)];
//set a variable that choose a random word from the array 
console.log(chosenWord)



letters = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//array of the letters in the alphabet

 function abcButtons() {
    for (var i = 0; i < letters.length; i++) { 
        buttons = document.createElement ("pressit");
        buttons.innerHTML = letters [i]
        document.body.appendChild(buttons);
    }
abcButtons();
}