/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    var maanden = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
        "November", "Secember"];
    var dagen = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function showDay(dt) {
        return dagen[dt.getDay()];
    }

    dt = new Date();
    let resDag = showDay(dt);

    function showMonths(md){
        return maanden[md.getMonth()];
    }
    md = new Date();
    let resMaand = showMonths(md);

    let dagNummer = new Date().getDate();

    let jaar = new Date().getFullYear();

    let uur = new Date().getHours();

    let minuten = new Date().getMinutes();


    document.getElementById("target").innerHTML =
        resDag + " " + dagNummer +  " " + resMaand + " " +  jaar + ", "  + uur + ":" + minuten;

})();
