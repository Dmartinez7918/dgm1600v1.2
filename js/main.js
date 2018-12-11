//Basic JavaScript can be found throughout

//Object w/ Properties and methods accessed using dot notation
let force = {

  option1: "Yoda",
  option2: "Obi-Wan",
  option3: "Darth Vader",
  option4: "Darth Sideous",
  option5: "Luke Skywalker",
  correct: 3,

  check: function(x) {
    if (x==force.correct) {
      document.getElementById('response').innerHTML = "I agree with you!";
    } else {
      document.getElementById('response').innerHTML = "I don't agree with you.";
    }
  } //end method
}; //end object

//Constructor Function Anakin Tale
function Anakin (name, lightsaber, order) {
this.name= name;
this.lightsaberColor= lightsaber;
this.order= order;

}


let newAnakin = new Anakin ("Darth Vader", "red", "Sith")


document.getElementById('constructor').innerHTML =  "Anakin Skywalker, belonging to the order of the Jedi wields a blue lightsaber. After choosing to save Chancellor Palpatine is henceforth known as " + newAnakin.name + " who yields a " + newAnakin.lightsaberColor + " lightsaber, and belongs to the order of the " + newAnakin.order + ".";

//String and Array Manipulation and Data Structures

const jediArray = ["Luke Skywalker", "Obi-Wan Kenobi", "Yoda"];
const sithArray = ["Darth Vader", "Darth Sideous", "Darth Maul"];

//Arrow Functions used here
let displayArrayItems = () => {
	var jediString= "";
	var i;
	for (i = 0; i < jediArray.length; i++) {
		jediString += jediArray[i] + "<br>";
	} 
	document.getElementById("displayJediTeam").innerHTML = jediString;
};



let displaySithItems = () => {
	var sithString= "";
	var i;
	for (i = 0; i < sithArray.length; i++) {
		sithString += sithArray[i] + "<br>";
	} 
	document.getElementById("displaySithTeam").innerHTML = sithString;
};

var displayJediTeam = document.getElementById('displayJediTeam');
getJediTeam.onclick = displayArrayItems;

var displaySithTeam = document.getElementById('displaySithTeam');
getSithTeam.onclick = displaySithItems;



//Project 1 Update for Star Wars API
let ship = document.querySelector("#ship")
let crew =document.querySelector("#crew")

fetch('https://swapi.co/api/starships/9')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    ship.textContent = myJson.name
    crew.textContent = myJson.crew
    console.log(myJson);
  });

  let planet = document.querySelector ("#planet")
  let pop = document.querySelector("#pop")
  fetch('https://swapi.co/api/planets/2')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    planet.textContent = myJson.name
    pop.textContent = myJson.population
    console.log(myJson);
  });

