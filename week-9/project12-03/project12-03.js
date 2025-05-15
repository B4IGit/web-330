"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Devin Ledesma
      Date:   05/15/25

      Filename: project12-03.js
*/

$(() => {
      
      // Add click event to article h2 selector
      $('article > h2').click( e => {

            // Declares variables for heading, list, and headingImage
            const heading = $(e.target); // targets the click heading event
            const list = heading.next(); // next sibling element of the heading variable
            const headingImage = heading.children('img'); // children of the heading variable - tag name "img"

            // Alternate between hiding and showing the list content
            list.slideToggle(500);

            // Change the symbol displayed in the heading between "plus" and "minus"
            const srcValue = headingImage.attr('src');
            headingImage.attr('src', srcValue === 'plus.png' ? 'minus.png' : 'plus.png');
      })
})


