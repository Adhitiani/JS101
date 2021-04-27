// Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

// console.log(isOdd(2)) false

//PROBLEM
//inputs: integer
//output: boolean (true or false)

//requirement: input is the number that can  be positive, negatives, or zero
// The number evaluates is absolute number
// return true if the number is odd

//mental model: assume that the argument is valid integrer value (positive, negative and zero), turn the number to absolute valuse and then check whether the number is odd then return true or false.

//EXAMPLE/TEST CASE

//input: 2
//output: false

//input: 3
//output: true

//ALGORITHM
//1. Take an argument that is integrer
//2. Turn the integrer to absolute value
//2.Check if the absolute value is odd? number % 2 === 1
//3. Return true if the number is odd

function isOdd(num) {
   return Math.abs(num) % 2 === 1;
    
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true