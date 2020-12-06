// Write your JavaScript code here!
const pilotName = document.getElementById("pilotName")


window.addEventListener("load", function(){
   
   let form = document.querySelector("form");
   form.addEventListener("submit", function(e) {
      //let pilotNameInput = document.querySelector("input[name=pilotName]")
      e.preventDefault()
      let pilotNameInput = document.getElementById("pilotName")
      if (pilotNameInput.value === "") {
         alert("ERROR: Pilot Name Is Required")
      }
      else if(Number.isInteger(Number(pilotNameInput.value))) {
         alert("ERROR: Pilot name cannot be a numerical value")
      }
      });
   })

   window.addEventListener("load", function(){
   
      let form = document.querySelector("form");
      form.addEventListener("submit", function(e) {
         //let pilotNameInput = document.querySelector("input[name=pilotName]")
         e.preventDefault()
         let copilotNameInput = document.getElementById("copilotName")
         if (copilotNameInput.value === "") {
            alert("ERROR: Co-Pilot Name Is Required")
         }
        else if(Number.isInteger(Number(copilotNameInput.value))) {
           alert("ERROR: Co-Pilot name cannot be a numerical value")
        }
         });
      })

      window.addEventListener("load", function(){
   
         let form = document.querySelector("form");
         form.addEventListener("submit", function(e) {
            //let pilotNameInput = document.querySelector("input[name=pilotName]")
            e.preventDefault()
            let fuelLevelInput = document.getElementById("fuelLevel")

            if (fuelLevelInput.value === "") {
               alert("ERROR: Fuel Level Is Required")
            }
           else if(isNaN(fuelLevelInput.value)) {
              alert("ERROR: Fuel Level must be a numerical value")
           }
            });
         })

         window.addEventListener("load", function(){
   
            let form = document.querySelector("form");
            form.addEventListener("submit", function(e) {
               //let pilotNameInput = document.querySelector("input[name=pilotName]")
               e.preventDefault()
               let cargoMassInput = document.getElementById("cargoMass")
   
               if (cargoMassInput.value === "") {
                  alert("ERROR: Cargo Mass Is Required")
               }
              else if(isNaN(cargoMassInput.value)) {
                 alert("ERROR: Cargo Mass must be a numerical value")
              }
               });
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
