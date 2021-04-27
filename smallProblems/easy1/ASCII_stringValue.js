//Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)

//Examples:
/*Problem:
-input: strings
-rule: adition of every ASCII value of the string
-output: numbers (sum of ASCII Value)
Example:
input:'Four Score'
output: 984

Data:
-input: strings
-output: numbers
-intermediary data structur:
-array of number?

Algorithm
- initialize a sum variable
- initialize a counter variable at 0
- loop thorough the first character to the end of character:
-look for the AsCII value of each character
- for each ASCII value we increment the sum variable by the ascii value
- increament the counter by 1
-return the sum variable

Code
*/

function asciiValue(str) {
  let sumAscii = 0;
  let counter = 0;
  
  while (counter < str.length) {
    sumAscii += str[counter].charCodeAt();
    counter ++
  }
  return sumAscii
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0

function asciiValue2(str) {
  let sum = 0;

  for (let index = 0; index < str.length; index++) {
    sum += str.charCodeAt(index);
  }
  return sum;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
