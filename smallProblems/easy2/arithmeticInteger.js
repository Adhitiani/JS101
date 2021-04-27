let readline = require('readline-sync');
let firstNumber = Number(readline.question("Enter the first number:"));
let secondNumber = Number(readline.question("Enter the second number:"));
console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(`${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber % secondNumber}`);
console.log(`${Number.parseFloat(firstNumber ** secondNumber)}`);