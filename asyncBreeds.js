// asyncBreeds.js
const fs = require('fs');

// const breedDetailsFromFile = function(breed) { // old faulty code returning UNDEFINED 
const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) {
      functionToRunWhenThingsAreDone(data);
    } 
    else { // note-to self: I need to understand what went correct here by adding the else.
      functionToRunWhenThingsAreDone(data);
    }
    // if (!error) return data; // old faulty code returning UNDEFINED 
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

/* // we try to get the return value
const bombay = breedDetailsFromFile('Bombay');
console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined! */

// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile('Bombay', printOutCatBreed);

module.exports = breedDetailsFromFile;