/*
Write a function that returns the next to last word in the String passed to it as an argument.
Words are any sequence of non-blank characters.
You may assume that the input String will always contain at least two words.

Examples:

Copy Code
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

P:
-input : string
-output : the next to last word (string)
-Words are any sequence of non blank character
Example:
penultimate("last word") // "last"

D & A:
1. divides the string into an ordered substring, and put them in an array and assign the array into a variable.
2. access the next to last elements in the array and return the value.
*/

function penultimate(string) {
  let word = string.split(' ');
  return word[word.length-2];
}

console.log(penultimate("last word"));