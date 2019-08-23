/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function(){
        let j = document.getElementById("year").value;
        var text = "";

        let maanden = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober",
        "November", "December"];

        for (m = 0; m < 12; m++){
            let jaar = new Date(j, m, 13);
            if (jaar.getDay() === 5){
                text += maanden[jaar.getMonth()] + "\n";
            }

        }
        
        alert(text);


    })

})();
