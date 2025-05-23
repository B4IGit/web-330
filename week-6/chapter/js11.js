"use strict";
/*
   JavaScript 7th Edition
   Chapter 11
   Chapter Case

   Author:
   Date:

   Filename: js11.js


*/

window.addEventListener("load", init);

function init() {
   // Page Objects
   let stories = document.getElementById("stories");
   let news = document.getElementById("news");
   let sInput = document.getElementById("sInput");
   let sButton = document.getElementById("sButton");
   let suggestBox = document.getElementById("suggestBox");

   // Create a request object
  const xhr = new XMLHttpRequest();

  // Open the request and send it
  xhr.open('get', 'commentary.html');
  xhr.send(null);

  // Handle the changing request state
  xhr.onreadystatechange = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      // Manage the response
      stories.innerText = xhr.responseText;
    } else {
      console.log(`Request failed: ${xhr.statusText}`)
    }
  }

}