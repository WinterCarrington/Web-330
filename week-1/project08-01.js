"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Lantha Wade
      Date: 10/27/25

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

// Constructor function for the timer object
function timer(min, sec) {
   this.minutes = min;
   this.seconds = sec;
   this.timeID = null;
}

// Add the runPause method to the timer prototype
timer.prototype.runPause = function(timer, minBox, secBox) {
   // Step 5: If timer.timeID is null, start the timer
   if (timer.timeID === null) {
      timer.minutes = parseInt(minBox.value);
      timer.seconds = parseInt(secBox.value);

      timer.timeID = setInterval(function() {
         if (timer.seconds > 0) {
            timer.seconds--;
         } else if (timer.minutes > 0) {
            timer.minutes--;
            timer.seconds = 59;
         } else {
            clearInterval(timer.timeID);
            timer.timeID = null;
         }

         minBox.value = timer.minutes;
         secBox.value = timer.seconds;
      }, 1000);
   } else {
      // Step 6: If timer is running, pause it//
      clearInterval(timer.timeID);
      timer.timeID = null;
   }
};
function countdown(timer, minBox, secBox) {
   if (timer.seconds > 0) {
      // a. Decrease seconds by 1
      timer.seconds--;
   } else if (timer.minutes > 0) {
      // b. Decrease minutes by 1 and reset seconds to 59
      timer.minutes--;
      timer.seconds = 59;
   } else {
      // c. Timer has reached 0:0 — stop the timer
      clearInterval(timer.timeID);
      timer.timeID = null;
   }

   // d. Update the input boxes with the current time
   minBox.value = timer.minutes;
   secBox.value = timer.seconds;
}
// Declare an instance of the timer object
const minBox = document.getElementById("minutesBox");
const secBox = document.getElementById("secondsBox");

const myTimer = new timer(parseInt(minBox.value), parseInt(secBox.value));