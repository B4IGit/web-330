"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author:
      Date:

      Filename: project09-02b.js
*/

/* Page Objects */
let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

riderName.innerText = JSON.parse(sessionStorage.getItem('riderName'));
ageGroup.innerText = JSON.parse(sessionStorage.getItem('ageGroup'));
bikeOption.innerText = JSON.parse(sessionStorage.getItem('bikeOption'));
routeOption.innerText = JSON.parse(sessionStorage.getItem('routeOption'));
accOption.innerText = JSON.parse(sessionStorage.getItem('accOption'));
region.innerText = JSON.parse(sessionStorage.getItem('region'));
miles.innerText = JSON.parse(sessionStorage.getItem('miles'));
comments.innerText = JSON.parse(sessionStorage.getItem('comments'));