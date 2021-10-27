- evaluates as true, true or truthy

true is true but it is also truthy 

null is not true 
false is not true
only true is true 

but 'Adhit' is truthy

let a = 0;

a == false; // true
a === false; // false 

What kind of concept is this? 
  - strict equality and non-strict equality 
  - implicit type coercion
  - truthiness - 0 is not equal to false but it is a falsy value. 

These are falsey values in JS. But they only evaluate as false. false is the only value that is equal to false. 
- ''
- false
- undefined
- null
- 0 
- NaN 

let name = 'Adhit'

if (name === 'Adhit') { the first branch of the conditional statement evaluates as false, there for the code on line x doesn't get executed.
 
} else if (whateever expression) { then, the else if branch `code here` on line x eavaluates as true, therefore the `whate ever code` is executed and something is logged to the console. 

}

let person = {              
  name: 'Jane', 
  age: 24                   
}                           
                      
function changeName(name) { 
  person[name] = name;   // name is not a string, what is it? It's variable, what is the variable pointing to? String Jessie. 
  console.log(person);      
  return person; 
}                           

- creating new key value pair. 

- we use the value of variable name(which is Jessie) as the key. 
- and we assign the string 'Jessie' which is referenced by variable name as the value 



console.log(changeName('Jessie'))

const obj = {
  a: 1,
  b: 2,
}

// Log to the console 1, and 2. 

console.log(obj['a']);
console.log(obj.b);

// Use foreach to itereate and log 1 and 2. 

let key = Object.keys(obj);

console.log(key);

key.forEach(elem => console.log(obj[elem]));

// access a nested object.

let arr = [{a: 1, b: 2}]


// how to log to the terminal 1 and 2?


console.log(arr[0]['a'])


[[1, 2], [3, 4]].forEach(elem => {
  console.log(elem[0]);
})


Explain what this code does. 

Concept - nested arrays combined with forEach. 

// function foo() {
//   let bar = 1; 
  
//   while (true) {
//     let zee = 2;
//     break;
//   }
  
//   console.log(zee); // raise an error
// }


// what concept is this? 

// block scope 
// variable scoping rules -


// function foo(zee) {
//   let bar = 1; 
  
//   while (true) {
//     let zee = 2; // what concept is demonstrated here? variable shadowing. 
//     console.log(zee); // what does this log? 2
//     break;
//   }
  
//   console.log(zee); // logs 3 
// }

// foo('3');

// What does this log? 

let zee = 4;

function foo() {
  let bar = 1; 
  
  while (true) {
    zee = 2; // re-assign zee
    break;
  }
  
  console.log(zee); 
}

foo();

// variable scope
// global scope - you have re-assignment inside of the function
// zee inside function can "access" zee on the global scope

// function foo() {
//   let bar = 1; 
  
//   while (true) {
//     let zee = 2;
//     break;
//   }
  
//   console.log(zee); // raise an error
// }


// what concept is this? 

// block scope 
// variable scoping rules -


// function foo(zee) {
//   let bar = 1; 
  
//   while (true) {
//     let zee = 2; // what concept is demonstrated here? variable shadowing. 
//     console.log(zee); // what does this log? 2
//     break;
//   }
  
//   console.log(zee); // logs 3 
// }

// foo('3');

// What does this log? 

// let zee = 4;

// function foo() {
//   let bar = 1; 
  
//   while (true) {
//     zee = 2; // re-assign zee
//     break;
//   }
  
//   console.log(zee); 
// }

// foo();

// variable scope
// global scope - you have re-assignment inside of the function
// zee inside function can "access" zee on the global scope


let zee = 4;

function foo() {
  let bar = 1; 
  
  while (true) {
    let zee = 2; 
    break;
  }
  
  console.log(zee); // what does this log? 
}

foo();

// Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; otherwise, return false. Ignore characters that are not alphabetic.

// Examples:

// Copy Code

/*

Input 
  - string 
  - can contain more than one word

Output
  - boolean
  - representing whether the string are all uppercase
    - true if all characters are uppercase
    - false if there is any characters that are not uppercased. 
    
Rules
*Explicit
  - check if a string is all uppercased 
*Implicit
  - it should still work even if the string has spaces. (spaces count as uppercase.)
  - empty string return true. 
  - any string that contain string numbers can also return true if all the other characters are uppercased. 
  
Questions
- Should I expect all input to be valid? Will there be null, undefined, numbers, objects etc 
  - No, as far as the test case go. 
  - Do I need to handle them => no 
- Are there edge cases?  
  - Empty strings return true. 
  - string numbers count as uppercase.
  - non alphabetical letters return true

Data structure 
- String
  - work with string methods
  
Algorithm 

- check that the given string is equal to itself uppercased
  - this should return true if is equal to itself and false it is not. 


*/ 

function isUppercase(string) {
  return string === string.toUpperCase();
}

function isLowercase(string) {
  return string === string.toLowerCase();
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

console.log(capitalize('tomato'));

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase('4888564+_!'));        // true
console.log(isUppercase(''));                // true


// Can I solve it any other way???? 

// Imperative way - for loop to iterate over the string and check that each character is uppercased. 
// Regex way?? - research if there is a regex way to do this. 


// function isUppercase(string) {
//   return !/[a-z]/.test(string);
// }

// Discussion
// This is one of the problems where you can take advantage of regex (regular expressions) to process strings. The solution uses a regex pattern with the RegExp.prototype.test method to determine if there are any lowercase letters in the string argument. The solution then uses the ! (logical NOT) operator to reverse the boolean return value so that the function returns false if there are any lowercase letters.

