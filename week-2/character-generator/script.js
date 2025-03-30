/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author:   Devin Ledesma
  Date:     03/28/2025
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  return {
    getName: function () {
      return name;
    },
    getGender: function () {
      return gender;
    },
    getClass: function () {
      return characterClass;
    }
  }
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // retrieves users input for character's name, gender, and class
  const characterName = document.getElementById("heroName").value; // users input
  const characterGender = document.getElementById("heroGender").value; // male, female, or other
  const characterClass = document.getElementById("heroClass").value; // warrior, mage, or rogue

  // access error divs from HTML
  const errorName = document.getElementById("error-name");
  const errorGender = document.getElementById("error-gender");
  const errorClass = document.getElementById("error-class");

  // prints each value on own line to the console
  console.log(`Name: ${characterName} \nGender: ${characterGender} \nClass: ${characterClass}`);


  // checks if inputs are valid
  if (!characterName) {
      errorName.textContent = "Please enter a name";
      return;
  } else {
    errorName.textContent = ""; // reset to empty string
  }

  if (!characterGender) {
    errorGender.textContent = "Please select a gender";
    return;
  } else {
    errorGender.textContent = ""; // reset to empty string
  }

  if (!characterClass) {
    errorClass.textContent = "Please select a class";
    return;
  } else {
    errorClass.textContent = ""; // reset to empty string
  }

  // Creates new character
  const newCharacter = createCharacter(characterName, characterGender, characterClass);

  // change image based on users selection from heroClass from form
  let characterImg = ""; // leaves image blank
  switch (characterClass) {
    case "warrior": // value
      characterImg = "./assets/warrior.png"; // from assets - warrior.png
      break;
    case "mage": // value
      characterImg = "./assets/mage.png"; // from assets - mage.png
      break;
    case "rogue": // value
      characterImg = "./assets/rogue.png"; // from assets - rogue.png
      break;
    default:
      alert("unknown"); // cannot find image
  }

  // set new content to inner HTML for the characterOutput
  document.getElementById("characterOutput"). innerHTML = `
   <h2>Welcome, your new character has been created</h2>
    <img src="${characterImg}" alt="${characterImg}"/>
   <div>
     <h3>Character's Name:</h3>
     <p>${newCharacter.getName().toUpperCase()}</p>
     <br>
     <h3>Character's Gender:</h3>
     <p>${newCharacter.getGender().toUpperCase()}</p>
     <br>
     <h3>Character's Class:</h3>
     <p>${newCharacter.getClass().toUpperCase()}</p>
   </div>
   `;
});