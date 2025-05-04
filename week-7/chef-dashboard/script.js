/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author:   Devin Ledesma
  Date:     05/04/25
  Filename: chefs.js
*/

"use strict";

// Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  {name: 'Guy Fieri', specialty: 'American', weakness: 'French', restaurantLocation: 'California, US'},
  {name: 'Julia Child', specialty: 'French', weakness: 'Italian', restaurantLocation: 'California, US'},
  {name: 'Carlo Cracco', specialty: 'Italian', weakness: 'American', restaurantLocation: 'Milan, Italy'},
];

// For testing purposes
const dataFailed = false;
const dataSuccess = false;

// Defines a function to retrieve the first chef's information
function retrieveChef1() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (dataFailed) {
            console.log('Chef 1: Failed to load data.');
            reject({
              name: 'Chef 1',
              message: 'Data failed.'
            })
          } else  {
            console.log('Chef 1: Data has loaded.');
            resolve(chefs[0]);
      }
      }, 2000);
  });
}

// Defines a function to retrieve the second chef's information
function retrieveChef2() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (dataSuccess) {
          console.log('Chef 2: Failed to load data.');
          reject({
            name: 'Chef 2',
            message: 'Data failed.'
          })
        } else {
          console.log('Chef 2: Data has loaded.');
          resolve(chefs[1]);
        }
      }, 4000);
  });
}

// Defines a function to retrieve the third chef's information
function retrieveChef3() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (dataSuccess) {
          console.log('Chef 3: Failed to load data.');
          reject({
            name: 'Chef 3',
            message: 'Data failed.'
          })
        } else {
          console.log('Chef 3: Data has loaded.');
          resolve(chefs[2]);
        }
      }, 5000);
  });
}

// Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
  .then((results) => {
    results.forEach((result, i) => {
      const chefSection = document.getElementById(`chef${i + 1}`);
      if (result.status === 'fulfilled') {
        const chef = result.value;

        // Displays chef image within the card
        let chefImg = ""; // leaves image blank
        switch (chef.name) { // sets the corresponding image with chef
          case "Guy Fieri":
            chefImg = "./assets/images/guy_fieri.jpg"; //
            break;
          case "Julia Child":
            chefImg = "./assets/images/julia_child.jpg";
            break;
          case "Carlo Cracco":
            chefImg = "./assets/images/carlo_cracco.jpg";
            break;
          default:
            alert("unknown"); // cannot find image
        }

        // Loads data to the DOM
        chefSection.innerHTML = `
          <img src="${chefImg}" alt="${chef.name}"/>
          <h2>${chef.name}</h2>
          <p><b>Specialty:</b> ${chef.specialty}</p>
          <p><b>Weakness:</b> ${chef.weakness}</p>
          <p><b>Restaurant Location:</b> ${chef.restaurantLocation}</p>
        `;
      } else {
        // Displaying the error message to the corresponding chef section on the webpage
        chefSection.innerHTML = `<p class="error-message">${result.reason.name}: ${result.reason.message}</p>`;
      }
    });
  });
