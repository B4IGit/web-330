/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author:     Devin Ledesma
  Date:       04/18/2025
  Filename:   script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  { tableNumber: 1, capacity: 8, isReserved: false },
  { tableNumber: 2, capacity: 6, isReserved: false },
  { tableNumber: 3, capacity: 4, isReserved: false },
  { tableNumber: 4, capacity: 2, isReserved: false },
  { tableNumber: 5, capacity: 2, isReserved: false },
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  const table = tables.find((t) => t.tableNumber === tableNumber);

  if (!table) {
    callback(`Table ${tableNumber} does not exist.`);
    return;
  }

  if (table.isReserved) {
    callback(`Table ${tableNumber} is already reserved.`);
  } else {
    table.isReserved = true;
    setTimeout(() => {
      table.isReserved = false;
      callback(null, `Table ${tableNumber} is now available.`);
    }, time);
    callback(null, `Table ${tableNumber} is reserved.`);
  }
}

// When the form is submitted, call the reserveTable function
document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const tableNumber = parseInt(document.getElementById('tableNumber').value);
  const reserveTime  = 30000; // 30 seconds

  reserveTable(tableNumber, (error, message) => {
    if (error) {
      document.getElementById('message').textContent = error;
    } else {
      document.getElementById('message').textContent = message;
    }
  }, reserveTime);
});
