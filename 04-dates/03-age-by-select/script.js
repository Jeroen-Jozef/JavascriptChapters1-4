/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   document.getElementById("run").addEventListener("click", function(){

       let e = document.getElementById("dob-day");
       let dobDay = e.options[e.selectedIndex].value;

       let d = document.getElementById("dob-month");
       let dobMonth = d.options[d.selectedIndex].value;

       let j = document.getElementById("dob-year");
       let dobYear = j.options[j.selectedIndex].value;

       let ditJaar = new Date().getFullYear();
       let dezeMaand = new Date().getMonth();
       let vanDaag = new Date().getDate();

       let age = ditJaar - dobYear-1;
       if (dezeMaand > dobMonth || (dezeMaand == dobMonth && vanDaag > dobDay)){
           age++;
       }
       document.getElementById("resultaat").innerHTML = "u bent " + age + " jaar";
   })


})();
