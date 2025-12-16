/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: 
      Date:   

      Filename: project12-03.js
*/
"use strict";

$("article > h2").click(function () {
  // a. Reference the clicked heading
  let heading = $(this);

  // b. Reference the next sibling list
  let list = heading.next();

  // c. Reference the image inside the heading
  let headingImage = heading.children("img");

  // Toggle list visibility
  list.slideToggle(500);

  // Switch plus/minus image
  if (headingImage.attr("src") === "plus.png") {
    headingImage.attr("src", "minus.png");
  } else {
    headingImage.attr("src", "plus.png");
  }
});
