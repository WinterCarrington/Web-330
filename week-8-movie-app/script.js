/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Lantha Wade
  Date: 12/15/25
  Filename: script.js
*/

"use strict";

const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    synopsis:
      "A thief enters dreams to steal secrets from deep subconscious levels.",
  },
  {
    title: "The Matrix",
    director: "Lana & Lilly Wachowski",
    year: 1999,
    synopsis:
      "A hacker discovers his world is a simulation controlled by machines.",
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    synopsis:
      "A team travels through a wormhole to find a new home for humanity.",
  },
];

function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(
        (m) => m.title.toLowerCase() === title.toLowerCase()
      );

      if (movie) {
        resolve(movie);
      } else {
        reject("Movie not found. Try another title.");
      }
    }, 1000); // simulate 1-second delay
  });
}

document
  .getElementById("movie-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const titleInput = document.getElementById("title-input").value.trim();
    const movieInfo = document.getElementById("movie-info");
    const errorMessage = document.getElementById("error-message");

    // Clear previous messages
    errorMessage.textContent = "";
    movieInfo.style.display = "none";

    try {
      const movie = await fetchMovie(titleInput);

      // Update the webpage with movie information
      document.getElementById("movie-title").textContent = movie.title;
      document.getElementById("movie-director").textContent =
        "Director: " + movie.director;
      document.getElementById("movie-year").textContent =
        "Released: " + movie.year;
      document.getElementById("movie-synopsis").textContent = movie.synopsis;

      movieInfo.style.display = "block";
    } catch (error) {
      errorMessage.textContent = error;
    }
  });
