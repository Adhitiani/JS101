// - function declarations, function expressions, and arrow functions
// - function definition and invocation
// - the implicit return value of function invocations
// - passing arguments into and return values out of functions
// - understand the concepts of pass-by-reference and pass-by-value
// - first-class functions// 
// - side-effects
// - console.log vs. return
// - be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose.

/*
Function

109 has very little theoretical questions. Not zero but very less likely. 
- [Possbile type of questions asked] What is the difference between map and filter? 
- [Less likely to be asked] What is a function? What is a variable scope? 

109 has a lot of coding based questions. Majority of it are coding based context. 
- There is context of code and you have to explain the code in the context using the right concept. 
- The "theoretical" concept is explained through this code context. 

What is a function? 
-Function lets you extract the code and run it as separate unit.

Three ways to define a function:
1. function declaration
*/


// function greeting (str) {
 
//   console.log(str);

// }

//2. function expression

// - we assign the function to a variable
// - The function doesn't start with function keyword
// - it is a function that is part of a larger expression syntax (typically assignment to a variable)


// let greet = function(str) {
//   console.log(str);
// }

// function foo() {
//   return function () {
//     console.log("I'm a function expression")
//   }
// }


// From 210 material. 

// Function Expressions
// A function expression defines a function as part of a larger expression syntax (typically a variable assignment).

// 3. arrow function

// - similar to a function expression but has different syntax.
// - An arrow function is commonly used  as a callback function.

// let greet = str => console.log(str);

// let greet = str => {
//   return console.log(str);
// }

// let greet = (name, greeting) => {
//  return console.log(`${greeting} ${name}`);
// }



// What is the difference between function definition and invocation? 

// - function definition is when we define a function. Code example, show a function without calling it. 
// - function invocation is when we call the function. Code example, show a function calling it. 

// When we have a function definition, we can define a function definition to accept parameters. 
// However, when we invoke a function, we pass arguments. (Not parameters). Code example, show a invocation passing in an argument into the function. 

// Function definition and invocation
// ```
   // THis is function definition that takes parameter name. 
// 1 function foo(name) {
// 2    console.log(`Hello ${name}`)
// 3 }
// 4
// 5 foo("Ainaa") <= This is function invocation with argument. 
// ```

// Function invocation without function definition - Raise an error 
// ```
// 1 foo("Ainaa") <= Raises an error. 
// ```
 
// Function definition without function invocation - the function will never be invoked until we explicitly invoke it. Nothnig happens until we call the function. 

// ```
// 1 function foo(name) {
// 2    console.log(`Hello ${name}`)
// 3 }

// We can invoke a function before function definition. <= Related to hoisting



// - the implicit return value of function invocations



// What do you mean by implicit return value of function invocation? Show example. 

// All functions return a value and the default value is undefined if we don't use a return keyword. (This means we are not explicitly returning a value for the function.) JavaScript then implicitly returns an implicit value of undefined. 
// We can return a specific value using a return statement. This is an explicit return value.

// function with implicit return value
// function greeting () {
//  console.log('hello');
// };


// function with explicit return value
// function multiply(a,b) {
//  return a * b;

// };


// - passing arguments into and return values out of functions


// let name = 'Alice';
// function something(a) {
//    a = 'Beth';
//    return a;
//  }

//  console.log(something(name));
//  console.log(name); 

// What is logged here? 
// the code on line 141 will log 'Beth';
// the code on line 142 will log 'Alice';

// In the first code example, how can you change the code such that it will log `Beth` and not Alice on line 142. instead? 

// When I call console.log(name) it will log Beth and not Alice. You cannot change line 135 and you cannot change the function. 

// Option number one without changing the function. 
let name = 'Alice';
function something(a) {
   a = 'Beth';
   return a;
 }

name = something(name);

//name = something(a); // Raise an error. What is a? when we pass it as an argument like this. JavaScript is asssuming a is a variable. It tries to find a variable in the global scope named a but it cant find it there for you get reference error. 

console.log(name);  // This is now beth not Alice.


// Option number 2 - changing the function 

let name = 'Alice';
function something() {
   name = 'Beth';
   return name;
 };

console.log(name); 



// let name2 = ['Alice'];
// function something2(a) {
//   a[0] = 'Beth';
//   return a;
// }

// console.log(something2(name2));
// console.log(name2); 

// What is logged here? 
// the code on line 156 will log ['Beth'];
// the code on line 142 will log ['Beth'];


// Truthinesss

let a = false;

function bar(param) {
  if (param) {
    console.log("I'm not true");
  }
}

bar(a); // Returns undefined 

// Why does this code not log anything to the console.

// Lettercase Percentage Ratio
// Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// Examples:

/*

Input: 
- String
  - representing words sort of 
  - there can be spaces
  - there can be string number
  - there can be non alphbatical characers *-&
  - there can be alphbatical characers *-&

Output
- Object 
  - we have 3 keys representin lowercase, uppercase and neither
  - the value of each key is a percentage of how many characters in that category. 
  
Rules
- We have string, we have count the percentage of lowercase, uppercase and neither characters
- the string will always contain at least one character - no empty strings. 

Edge case 
- space is considered as neither 
- + is considered as neither
- literally anything that is not a-z upper or lowercase is considered neither. 
- ./"-[]{}\()?,!@$#$%^&*

'abCdef 123' => 10 characters
lowercase => 5 / 10 => 50percent
uppercase => 1 / 10 => 10 percent
neither => 4 / 10 => 40 percent

console.log(letterPercentages(./"-[]{}\()?,!@$#$%^&*)) // 21 / 21 neither which is 100% 

Invalid input - assuming I don't have to handle inputs that are not string.
Empty strings are  invalid and I don't have to worry about it as an input. 


Data Structure
- String - regex methods 
- Object 
  - 3 keys and the percentage are strings (not numbers) and padded with extra 0s. 

Algorithm 

- create an object with 3 keys, lowercase, uppercase and neither
- with the given argument, match each type of char
  - match lowercase /[a-z]/g
  - match upper case /[A-Z]/g
  - match neither (non-alphabetical characters) /[^a-z]/ig
- assign the value of each key with the appropriate percentage
  - the length of lowercase / total string length * 100 fixed to two decimal points
  - the length of upper case / total string length * 100 fixed to two decimal points
  - the length of neither / total string length * 100 fixed to two decimal points
- return the object 


. How to handle returning the percentage values as strings and pad with zeros
  - how to get 2 decimal points. 
  - how to make sure that they are correctly padded with 0s. 

  
*/

function letterPercentages(string) {  
  let lowercase = string.match(/[a-z]/g) || []; // If we get null, no matches, assign to empty array
  let uppercase = string.match(/[A-Z]/g) || [];
  let neither = string.match(/[^A-Z]/ig) || [];
  
  return {
    lowercase: (lowercase.length / string.length * 100).toFixed(2),
    uppercase: (uppercase.length / string.length * 100).toFixed(2),
    neither: (neither.length / string.length * 100).toFixed(2),    
  };
}

// 
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('./"-[]{}\()?,!@$#$%^&*)')); // 21 / 21 neither which is 100% 
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


function foo(name) {
  console.log(`Hello ${name}`)
  }