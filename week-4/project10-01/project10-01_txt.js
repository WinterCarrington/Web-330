"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Hands-on Project 10-01
      Author: Lantha Wade 
      Date:   11/17/25
      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");

// Counter for the zIndex style of each puzzle piece
let zCounter = 1;

// Array of integers from 1 to 48
let intList = new Array(48);

// pointerX and pointerY will contain the initial coordinates of the pointer
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;


// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48; i++) {
  intList[i] = i + 1;
}

intList.sort(function () {
  return 0.5 - Math.random();
});


// Generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
  let piece = document.createElement("img");
  piece.src = "piece" + intList[i] + ".png";

  let rowNum = Math.ceil((i + 1) / 8);
  let colNum = i + 1 - (rowNum - 1) * 8;

  piece.style.top = (rowNum - 1) * 98 + 7 + "px";
  piece.style.left = (colNum - 1) * 98 + 7 + "px";

  piece.draggable = false; // override the default draggability of images
  puzzleBoard.appendChild(piece);
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");


// -----------------------------
// 3. Add event listeners
// -----------------------------
for (let i = 0; i < pieces.length; i++) {
  pieces[i].addEventListener("pointerdown", grabPiece);
}


// -----------------------------
// 4. grabPiece() function
// -----------------------------
function grabPiece(e) {

  // a. Pointer starting coordinates
  pointerX = e.clientX;
  pointerY = e.clientY;

  // b. Prevent default touch behavior
  e.target.style.touchAction = "none";

  // c. Bring piece to the front
  zCounter++;
  e.target.style.zIndex = zCounter;

  // d. Original piece position
  pieceX = e.target.offsetLeft;
  pieceY = e.target.offsetTop;

  // e. Add listeners for moving and dropping
  e.target.addEventListener("pointermove", movePiece);
  e.target.addEventListener("pointerup", dropPiece);
}


// -----------------------------
// 5. movePiece() function
// -----------------------------
function movePiece(e) {

  // a. Calculate movement distance
  let diffX = e.clientX - pointerX;
  let diffY = e.clientY - pointerY;

  // b. Move piece visually
  e.target.style.left = pieceX + diffX + "px";
  e.target.style.top = pieceY + diffY + "px";
}


// -----------------------------
// 6. dropPiece() function
// -----------------------------
function dropPiece(e) {

  // a. Remove move listener
  e.target.removeEventListener("pointermove", movePiece);

  // b. Remove drop listener
  e.target.removeEventListener("pointerup", dropPiece);
}