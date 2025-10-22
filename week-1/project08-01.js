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
   if (timer.timeID === null) {
      timer.minutes = parseInt(minBox.value);
      timer.seconds = parseInt(secBox.value);

      timer.timeID = setInterval(function() {
         countdown(timer, minBox, secBox);
      }, 1000);
   } else {
      clearInterval(timer.timeID);
      timer.timeID = null;
   }
};

// Countdown function
function countdown(timer, minBox, secBox) {
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
}

/*--------------- DOM Setup and Event Handlers --------------------*/

window.addEventListener("load", function() {
   const minBox = document.getElementById("minutesBox");
   const secBox = document.getElementById("secondsBox");
   const runPauseButton = document.getElementById("runPauseButton");

   // Declare an instance of the timer object
   const myTimer = new timer(parseInt(minBox.value), parseInt(secBox.value));

   // RUN/PAUSE button click event
   runPauseButton.addEventListener("click", function() {
      myTimer.runPause(myTimer, minBox, secBox);
   });

   // ✅ onchange event for minutes input
   minBox.onchange = function() {
      myTimer.minutes = parseInt(minBox.value);
   };

   // ✅ onchange event for seconds input
   secBox.onchange = function() {
      myTimer.seconds = parseInt(secBox.value);
   };
});