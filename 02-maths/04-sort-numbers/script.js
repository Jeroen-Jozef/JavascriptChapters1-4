/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {
        var toSort = document.getElementById("numbers").value;
        var b = toSort.split(", ").map(Number);
        b = b.sort(function (a, b) {return b-a
        });
         document.getElementById("result").innerHTML =  b;
    });

})();

/*
 var a = document.getElementById("numbers").value;
        var b = Number(a.split(","));
        var x = b.sort(function (b, c) {return c-b});
        document.getElementById("result").innerHTML =  x;
 */

