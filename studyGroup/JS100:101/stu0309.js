
/*
let a = 'Hello';

if (true) {
  console.log(a);
}

Variable Scope
- determines where the variable is available in a program
- where you declare a variable 
- let a = 10
- Outer blocks cannot access variables from inner scopes.
- Inner blocks can access variables from outer scopes.
- Variables defined in an inner block can shadow variables from outer scopes.

Pass-by-value
- Passing an argument into a function
- That argument is a *primitive* type
- The parameter in the function, points to a new copy of the value


Pass-by-reference
- Passing an argument into a function
- That arugment is a *object* type -- {} object, Array, and Arrays are also objects
- The function can *change/modify/mutate* the arugment that is passed because we have a *reference* to that original argument
*/

// function func(number) {
//   console.log(number)
// }

// let test = 5;

// func(test)

//////////////////////

// function func(arr) {
//   console.log(arr)
// }

// let test = ['hello']; 

// func(test)

// `test` and `arr` point to the SAME array in memory

// PASS BY VALUE

let a = 'Hello';

function changeValue(a) {
  a = 'Goodbye';
}

changeValue(a);
console.log(a);

// what will happen when we run this code?


   // Hello will be logged to the console
    //When you pass primitive values to functions, this is pass-by-value
    //No operation performed on a primitive value will alter the value

// PASS BY REFERENCE
let b = ['Hello'];

function changeValue(b) {
  console.log(b)
  console.log(b[0])
  b[0] = 'Goodbye';
}

changeValue(b);
console.log(b);

// what will happen when we run this code?


