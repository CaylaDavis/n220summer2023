let petDiv = document.getElementById("petDiv")
let myPuppy = {
    name: "Bolt",
    energy: 50,
    happiness: 50,
    age: 2,
}
//Create an object with properties name, energy, happiness, and age 

function feedBolt(){
    myPuppy.energy = myPuppy.energy + 5 
    console.log(myPuppy.energy)
    petDiv.innerHTML = myPuppy.energy
}

function playBolt(){
    myPuppy.happiness = myPuppy.happiness + 5 
    console.log(myPuppy.happiness)

}

for(let i = 0; i < myPuppy.length; i++){
    let newEl = document.createElement("div");
    newEl.innerHTML = myPuppy[i].name + " has a energy level of " + myPuppy.energy[i].energy + " and a happiness level of "  + mypuppy[i].happiness;
    newEl.classList.add("puppy")
    petDiv.appendChild(newEl);
}