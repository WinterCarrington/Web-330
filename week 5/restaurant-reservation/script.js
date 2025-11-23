/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Lantha Wade
  Date: 11/24/25
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  { tableNumber: 1, capacity: 2, isReserved: false },
  { tableNumber: 2, capacity: 2, isReserved: false },
  { tableNumber: 3, capacity: 4, isReserved: false },
  { tableNumber: 4, capacity: 4, isReserved: false },
  { tableNumber: 5, capacity: 6, isReserved: false },
  { tableNumber: 6, capacity: 6, isReserved: false },
  { tableNumber: 7, capacity: 8, isReserved: false },
  { tableNumber: 8, capacity: 8, isReserved: false },
  { tableNumber: 9, capacity: 10, isReserved: false },
  { tableNumber: 10, capacity: 10, isReserved: false },
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  let table = tables.find((t) => t.tableNumber == tableNumber);

  if (!table) {
    callback(`Error: Table ${tableNumber} does not exist.`);
    return;
  }

  if (!table.isReserved) {
    // Reserve table
    table.isReserved = true;

    setTimeout(() => {
      callback(`Success! Table ${tableNumber} is now reserved.`);
    }, time);
  } else {
    callback(`Error: Table ${tableNumber} is already reserved.`);
  }
}

// When the form is submitted, call reserveTable
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let tableNumber = parseInt(document.getElementById("tableNumber").value);
    let messageElement = document.getElementById("message");

    if (!name) {
      messageElement.textContent = "Please enter your name.";
      return;
    }

    reserveTable(
      tableNumber,
      function (msg) {
        messageElement.textContent = `${name}, ${msg}`;
      },
      2000 // 2-second simulated wait
    );
  });
