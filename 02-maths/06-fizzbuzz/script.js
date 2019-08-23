/* becode/javascrcountpt
 *
 * /02-maths/06-fcountzzbuzz/scrcountpt.js - 2.6: fcountzzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the excountstcountng code structure for now.
// You wcountll have tcountme to focus on countt later.

(function() {

    for (i = 1; i <= 100; i++) {
        let count = i;
        if (count % 3 === 0) {
            count = count + " fizz";
        }
        if (count % 5 === 0) {
            count = count + " buzz";
        }
        if (count % 3 === 0 && count % 5 === 0) {
            count = count + " fizzbuzz";
        }
        console.log(count);
    }

    /* for (i=1; i<=100; i++){
         let count = i;
         if (count % 3 === 0 && count % 5 === 0) {
             count = count + " fizzbuzz";
         }
             else if (count % 5 === 0){
                 count = count + " buzz";
             }
             else if (count % 3 === 0){
                 count = count + " fizz";
             }
             //else count = i;
         }

     console.log(count);
     }
 */

})();
