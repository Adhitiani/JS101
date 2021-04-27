/* PROBLEM 
Write a program that: 
- ask user to enter an integer greater than 0
- ask whether wants to determine the sum or the product of all numbers betweens 1 and the entered integer inclusive

UNDERSTANDING THE PROBLEM
Input:
an integer greater than 0

output:
-sum of all number between 1 and the entered integer or
-product of all number between 1 and the entered integer

Implicit and Explicit requirements:
- input is integer greater than 0
- output is sum or product
- sum is the result of adding all the number from 1 to the entered integrer
- product is the cumulative product of digtis of all number in the range 1 to the entered integrer.


mental model:
get the input integer from user, compute  the integer based on the user input, return the value.

Example case:
input: 5
Operation: sum
output: 15

input: 6
operation: product
output: 720

Data structure and algorithm
START
1. GET user input, convert it to number and SET it to number.
2. GET answer from user input and set it to operation
3. if operation === sum, then calculate the sum between 1 to the entered integrer, return the value and SET it to sum.
4. if operation === product, calculate the product between 1 to the entered integrer, return the value and SET it to product.
5. PRINT the final value
END

Check the algoritm.
input: 5
Operation: sum
output: 15

START
1. GET user input, convert it to number and SET it to number. (number = 5)
2. GET answer from user input and set it to operation (operation = sum)
3. if operation === sum, then calculate the sum between 1 to the entered integrer, return the value and SET it to sum. (sum = 1+2+3+4+5)
4. if operation === product, calculate the product between 1 to the entered integrer, return the value and SET it to product. (product = 1*2 * 3 * 4 * 5 * 6 )
5. PRINT the final value
END

CODE */

const readline = require('readline-sync');

//message function
function prompt(message) {
  console.log(`=> ${message}`);
}

//validation function
function inputValidation(input) {
  return operation !== 'p' && operation !== 's';
}


// sum function
function sum(number) {
  let sumNumber = 0;
  for(let i = 1; i <= number; i += 1) {
    sumNumber += i;
  }
  return sumNumber
}

// product function
function product(number) {
  let productNumber = 1;
  for (let num = 1; num <= number; num += 1) {
    productNumber *= num;
  }
  return productNumber
}

prompt("Welcome to Sum or Product calculator!")

prompt("Please enter a number greater than 0")
let number = Number(readline.question());

prompt("Enter 's' to compute the sum or 'p' to compute the product");
let operation = readline.question();
//input validation
while (inputValidation(operation)) {
  prompt("please enter 's' or 'p' only")
  operation = readline.question();
}

let total;
if (operation === 's') {
  total = sum(number);

  prompt(`The sum of the integers between 1 and ${number} is ${total}.`)
} else {
  total = product(number);

  prompt(`The product of the integers between 1 and ${number} is ${total}.`)
}

