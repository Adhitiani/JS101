//Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.


digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

// turn the number to string
//split the string into an array of character
//iterate over the array of character and convert each of element to number

function digitList(num) {
  let string = String(num);
  return string.split('').map(char => parseInt(char))
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));