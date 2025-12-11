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
      "A thief who steals corporate secrets through dream-sharing technology is given a chance at redemption."
  },
  {
    title: "The Matrix",
    director: "Lana & Lilly Wachowski",
    year: 1999,
    synopsis:
      "A hacker discovers the world around him is a simulated reality controlled by machines."
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    synopsis:
      "A group of explorers travel through a wormhole to find a new home for humanity."
  },
  {
    title: "Avatar",
    director: "James Cameron",
    year: 2009,
    synopsis:
      "A marine on an alien world becomes torn between following orders and protecting the world he grows to love."
  },
  {
    title: "Titanic",
    director: "James Cameron",
    year: 1997,
    synopsis:
      "A wealthy woman falls in love with a poor artist aboard the doomed RMS Titanic."
  }
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
        reject("❌ Movie not found. Try another title.");
      }
    }, 1000); // Simulated 1-second delay
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
    movieInfo.style.opacity = "0";

    try {
      const movie = await fetchMovie(titleInput);

      // Update the webpage with movie information
      document.getElementById("movie-title").textContent = movie.title;
      document.getElementById("movie-director").textContent =
        "Director: " + movie.director;
      document.getElementById("movie-year").textContent =
        "Release Year: " + movie.year;
      document.getElementById("movie-synopsis").textContent = movie.synopsis;

      movieInfo.style.opacity = "1"; // fade-in effect works now
    } catch (error) {
      errorMessage.textContent = error;
    }
  });