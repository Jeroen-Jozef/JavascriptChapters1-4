/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value


    document.getElementById("addition").addEventListener("click", function() {
        var x = +document.getElementById("op-one").value;
        var y = +document.getElementById("op-two").value;
        var r = x + y;
        alert("Resulaat: " + r);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        var x = +document.getElementById("op-one").value;
        var y = +document.getElementById("op-two").value;
        var r = x - y;
        alert("Resulaat: " + r);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        var x = +document.getElementById("op-one").value;
        var y = +document.getElementById("op-two").value;
        var r = x * y;
        alert("Resulaat: " + r);
    });

    document.getElementById("division").addEventListener("click", function() {
        var x = +document.getElementById("op-one").value;
        var y = +document.getElementById("op-two").value;
        var r = x / y;
        alert("Resulaat: " + r);
    });

})();
