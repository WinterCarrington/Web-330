/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Lantha Wade 
  Date: 11/03/25
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // Character factory using closures
  return {
    getName: function() {
      return name;
    },
    getGender: function() {
      return gender;
    },
    getClass: function() {
      return characterClass;
    }
  };
}

document.getElementById("generateHero").addEventListener("click", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const gender = document.getElementById("gender").value;
  const characterClass = document.getElementById("class").value;

  if (!name || !gender || !characterClass) {
    alert("Please fill out all fields!");
    return;
  }

  // Create character using the closure-based factory
  const hero = createCharacter(name, gender, characterClass);

  // Display character information
  const displayDiv = document.getElementById("characterDisplay");
  displayDiv.style.display = "block";
  displayDiv.innerHTML = `
    <h2>${hero.getName()}</h2>
    <p><strong>Gender:</strong> ${hero.getGender()}</p>
    <p><strong>Class:</strong> ${hero.getClass()}</p>
  `;
});