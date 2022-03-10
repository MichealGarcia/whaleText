// Variable with a phrase

// test with some uppercase start
let inputPhrase = "EUGENE of Turpentine and turtles"

// test with all lowercase
// let inputPhrase = "eugene of Turpentine and turtles"

// array of vowels
const vowels = ["a", "e", "i", "o", "u"];

// function to hold code
var iteratePhrase = function iteratePhrase(phrase, vowels) {
    // declare a variable to hold values for output  
    let resultArray = [];

    // loop through out phrase input
    for (let i = 0; i < phrase.length; i++) {
        // console.log(phrase[i], "outer loop");

        // define our values and make them lowercase
        let letter = phrase[i].toLowerCase();
        // Test letters, BASED ON THIS THERE SHOULD BE NO DIFFERENCE?
        // console.log(letter)

        // if a value is 'e' or 'u', push to our resultArray
        if (letter === 'e') {
            resultArray.push(phrase[i]);
        } else if (letter === 'u') {
            resultArray.push(phrase[i]);
        }
        // iterate vowels array
        for (let j = 0; j < vowels.length; j++) {
            // console.log(vowels[j], "inner loop");

            // Compare our phrase values to our vowel values, and push 
            // the value to resultArray if matching.
            if (phrase[i] === vowels[j]) {
                resultArray.push(vowels[j]);

            }
        }

    }
    // return our new array
    return resultArray;
};


// save our array as an object for our phrase.
resultArray = iteratePhrase(inputPhrase, vowels);
// join our resultArray into one piece of text, no spaces, no commas, etc
resultString = resultArray.join("");
// capitalize our text
console.log(resultString.toUpperCase());
