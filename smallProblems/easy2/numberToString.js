//Write a function that takes a String of digits, and returns the appropriate number as an integer. You may not use any of the methods mentioned above.
//Question:
//What is string? String is a character value represented in quotes.
//What is integer? Integer is a numeric value

//input: string of digits
// output: numbers

//Rules:
//. explicit rules:
//  - return the appropriate number as an integer
// implicit rules:
//  - assume all characters will be numeric

//Example:
//console.log(stringToInteger("4321") === 4321); // logs true
//console.log(stringToInteger("570") === 570); // logs true

//ALG:
//1. make the equavalent number of the string in the list and store it at key value pair in an object.
//2. retrieve the values of the keys (the string) in an array
//1. declare a variable taht will hold the output integer.
//2. iterate over the string:
//3. check if the anyof characters includes in the keys of array
//4. if it's inlclude access and retrieve the values of those keys

function stringToInteger(str) {
  let equivalentStrNum = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    0: 0,
  }
  let equivalentStr = Object.keys(equivalentStrNum);
  let number = 0;
  
  for (let index = 0; index < str.length; index++) {
    if(str[index] === '-' || str[index] ==='+') continue;
    let currentKey = str[index];
    number += equivalentStrNum[currentKey] * (10 ** (str.length -(index +1)));
    
   
  }
  
   if(str[0] === '-') {
      number = number * -1;
    } else {
      number = number;
    } 
  return number
  
}
  

stringToInteger("4321")

console.log(stringToInteger("-4321") === -4321); // logs true
console.log(stringToInteger("-570") === -570); // logs true

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("-570") === -570); // logs true
console.log(stringToInteger("+100") === 100); // logs true



