"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Devin Ledesma
      Date:   04/04/2025

      Filename: project09-02a.js
*/
// onclick event handler for showData()
document.getElementById('submitButton').onclick = function (e) {
  e.preventDefault();
  showData();
};

//
function showData() {
  // Page Objects
  let riderName = document.getElementById("riderName").value;
  let ageGroup = document.getElementById("ageGroup").value;
  let bikeOption = document.getElementById("bikeOption").value;
  let routeOption = document.getElementById("routeOption").value;
  let accOption = document.getElementById("accOption").value;
  let region = document.getElementById("region").value;
  let miles = document.getElementById("miles").value;
  let comments = document.getElementById("comments").value;

  // store values to sessionStorage
  sessionStorage.setItem('riderName', JSON.stringify(riderName));
  sessionStorage.setItem('ageGroup', JSON.stringify(ageGroup));
  sessionStorage.setItem('bikeOption', JSON.stringify(bikeOption));
  sessionStorage.setItem('routeOption', JSON.stringify(routeOption));
  sessionStorage.setItem('accOption', JSON.stringify(accOption));
  sessionStorage.setItem('region', JSON.stringify(region));
  sessionStorage.setItem('miles', JSON.stringify(miles));
  sessionStorage.setItem('comments', JSON.stringify(comments));

  // redirect to project09-02.html
  window.location.href = 'project09-02b.html';
}