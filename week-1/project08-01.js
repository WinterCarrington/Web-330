"use strict";
/*    JavaScript 7th Edition
      Chapter 8
            Project 08-01

                  Project to create a timer object
                        Author: Lantha Wade
                              Date:  10/27/25 

                                    Filename: project08-01.js
                                    */

                                    /*--------------- Object Code --------------------*/
                    
function timer(min, sec) {
       this.minutes = min;
          this.seconds = sec;
             this.timeID = null;
             }
// Add the runPause method to the timer prototype //
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
                                                                                                                                                                      // Step 6: If timer is running, pause it
                                                                                                                                                                            clearInterval(timer.timeID);
                                                                                                                                                                                  timer.timeID = null;
                                                                                                                                                                                     }
                                                                                                                                                                                     };
                                                                                                                                                                                     
