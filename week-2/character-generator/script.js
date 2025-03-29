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

  // TODO: Get form values
  // Retrieves users input for character's name, gender, and class
  const characterName = document.getElementById("heroName").value;
  const characterGender = document.getElementById("heroGender").value;
  const characterClass = document.getElementById("heroClass").value;

  /*
  // prints each value on own line to the console
  console.log(`Name: ${characterName} \nGender: ${characterGender} \nClass: ${characterClass}`);
  */

  // TODO: Create character
  // Creates new character
  const newCharacter = createCharacter(characterName, characterGender, characterClass);

  // TODO: Display character information
  document.getElementById("characterOutput"). innerHTML = `
   ${newCharacter.getName()}
   <br>
   ${newCharacter.getGender()}
   <br>
   ${newCharacter.getClass()}
   `;
});
