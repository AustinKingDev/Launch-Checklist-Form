// Write your JavaScript code here!
const pilotStatus = document.getElementById("pilotStatus");
const coPilotStatus = document.getElementById("copilotStatus");
const coPilotName = document.getElementById("copilotName");
const pilotName = document.getElementById("pilotName");
const submit = document.getElementById("formSubmit");
const faulyItems = document.getElementById("faultyItems");

window.addEventListener("load", function () {

   let form = document.querySelector("form");
   form.addEventListener("submit", function (e) {
      //let pilotNameInput = document.querySelector("input[name=pilotName]")
      e.preventDefault()
      let pilotStatus = document.getElementById("pilotStatus")
      let pilotNameInput = document.getElementById("pilotName")
      pilotStatus.innerHTML = `${pilotNameInput.value} Ready`
      if (pilotNameInput.value === "") {
         alert("ERROR: Pilot Name Is Required")

      }
      else if (Number.isInteger(Number(pilotNameInput.value))) {
         alert("ERROR: Pilot name cannot be a numerical value")
      }
   });
})

window.addEventListener("load", function () {

   let form = document.querySelector("form");
   form.addEventListener("submit", function (e) {
      //let pilotNameInput = document.querySelector("input[name=pilotName]")
      e.preventDefault()
      let coPilotStatus = document.getElementById("copilotStatus")
      let copilotNameInput = document.getElementById("copilotName")
      coPilotStatus.innerHTML = `${copilotNameInput.value} Ready`
      if (copilotNameInput.value === "") {
         alert("ERROR: Co-Pilot Name Is Required")
      }
      else if (Number.isInteger(Number(copilotNameInput.value))) {
         alert("ERROR: Co-Pilot name cannot be a numerical value")
      }
   });
})

window.addEventListener("load", function () {

   let form = document.querySelector("form");
   form.addEventListener("submit", function (e) {
      //let pilotNameInput = document.querySelector("input[name=pilotName]")
      e.preventDefault()
      let faultyItems = document.getElementById("faultyItems")
      let fuelLevelInput = document.getElementById("fuelLevel")
      let launchStatus = document.getElementById("launchStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      

      if (fuelLevelInput.value === "") {
         alert("ERROR: Fuel Level Is Required")
      }
      else if (isNaN(fuelLevelInput.value)) {
         alert("ERROR: Fuel Level must be a numerical value")
      }
      else if (fuelLevelInput.value < 10000) {



         launchStatus.innerHTML = `Shuttle not ready for launch`

         launchStatus.style.color = "red"

         fuelStatus.innerHTML = `Not enough fuel for the journey`

         faultyItems.style.visibility = "visible"


      }
      else if (fuelLevel) {
         launchStatus.innerHTML = `Shuttle is ready for launch`
         launchStatus.style.color = "green"
      }
   });
})

window.addEventListener("load", function () {

   let form = document.querySelector("form");
   form.addEventListener("submit", function (e) {
      //let pilotNameInput = document.querySelector("input[name=pilotName]")
      e.preventDefault()
      let faultyItems = document.getElementById("faultyItems");
      let cargoMassInput = document.getElementById("cargoMass");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");

      if (cargoMassInput.value === "") {
         alert("ERROR: Cargo Mass Is Required")
      }
      else if (isNaN(cargoMassInput.value)) {
         alert("ERROR: Cargo Mass must be a numerical value")
      }
      else if (cargoMassInput.value > 10000) {

         faultyItems.style.visibility = "visible"

         launchStatus.innerHTML = `Shuttle not ready for launch`

         launchStatus.style.color = "red"

         cargoStatus.innerHTML = `There is too much mass for the shuttle to take off`


      }
   });
})

fetch("https://handlers.education.launchcode.org/static/planets.json")
.then(function(res) {
   res.json().then(function(json) {
      let i = Math.floor(Math.random() * 10)
      if (i> 5) {
         i -= 4
      }

      let selectedPlanet = json[i]
      let missionTarget = document.getElementById("missionTarget")
      console.log(i)
      missionTarget.innerHTML = `
      <h2>Mission Destination</h2>
<ol>
<li>Name: ${selectedPlanet.name}</li>
<li>Diameter: ${selectedPlanet.diameter}</li>
<li>Star: ${selectedPlanet.star}</li>
<li>Distance from Earth: ${selectedPlanet.distance}</li>
<li>Number of Moons: ${selectedPlanet.moons}</li>
</ol>
<img src="${selectedPlanet.image}">`
   }) 
   console.log(res)
})

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
<li>Name: ${}</li>
<li>Diameter: ${}</li>
<li>Star: ${}</li>
<li>Distance from Earth: ${}</li>
<li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
