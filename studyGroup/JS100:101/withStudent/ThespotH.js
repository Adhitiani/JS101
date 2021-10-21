// snippet 1
let animal = "dog"

const speak = animal => {
  if (animal === undefined) {
    console.log("Bark")
  } else {
    console.log("Meow")
  }
  }

speak();

// Snipet 235 Prepared Questions
*/
/* =======
Edward Q24
What are the three ways to define a function in JS? Give an example for each.
function declaration
function expression
arrow function
declaring a variable greeting initializing it to the function expression
*/
// (function greeting ( ) {
//     console.log()
// })
// let greeting = function () {
//   console.log()
// }
// let greeting = a => a + b
// let greeting = (a,b) => {
//   return
// }
/* ======
Jeff Q21
When do we say that a function has side effects? Give an example to demonstrate it.
side effect is anything
function greeting () {
console.log(‘Hi’);
}
// undefined
function sum (a,b) {
  console.log(a+b);
  return a+b;
}
Five Side Effects
1. logging to the terminal (obtaining user input or logging to the console)
2. mutating objects that are not local to the function
3. reassignment of a variable in an outer scope
4. raises an exception without handling
5. calls another function that causes a side effect
*/
/* =====
Edris Q7
What does this code log and what’s the principle being demonstrated?
*/
// let animal = “dog”;
// const speak = animal => {
//   if (animal) {
//     console.log(“Bark”);
//   } else {
//     console.log(“Meow”);
//   }
// };
// speak();
/* Answer
variable shadowing of the global variable animal with the variable
variable scope
nothing is passed into the function
speak()
- undefined evaluates to a falsy value
initialized to undefined which is a falsy value, so the else block gets executed
*/
/* =====
H Q11
What is the output and why?
*/
let name = ‘nina’;
function outer() {
  let name = ‘jill’;
  function inner() {
    return name[0].toUpperCase() + name.slice(1);
  }
  return inner();
}
outer();
console.log(name);
/*
The global variable name is declared and initialized to the string ‘nina’.
The console.log method on line 15 logs ‘nina’ because it passes in the global variable name. The call of the outer function returns ‘jill’. This is an example of variable shadowing.
locally scoped to the inner function
the inner function can access the outer function
variable shadowing
function scoping rules
name is a primitive value
all string methods return new strings because all strings are immutable
pass by value
*/
/* ====
Lucas Q3
*/
// let array = [1, 2, undefined, {1:2}, <2 empty items>, null, ‘-1’: 2]
// console.log(array.length); // What will this line return and why?
/* =======
Marcus Q35
What do we mean when we say that functions in JS are first-class values?
Give an example that demonstrates that.
Another Q30
Describe the difference between the array map and the filter method.
- both return new arrays
When would you use each?
selection and transformation
==========
Ainaa Q28
Give an example of explicit and one of implicit type coercion.
- Explicit when the programmer writes the coercion into the code
- Implicit is leaving the JavaScript engine to coerce the values
=========
Elaine Q2
Explain the concept of pass-by-reference and give an example to demonstrate it.
Pass by Reference
Is when we pass an argument to a function, and the argument is a variable that stores a reference/pointer to an object in memory. When we pass by reference, since we are passing the ACTUAL POINTER, IF our function MUTATES the variable, it has a permanent or persistent on the object itself. */
// let arr = [1, 2, 3];
// function mutateThis(array) {
//   array.push(5);
// }
// console.log(arr);
// mutateThis(arr);
// console.log(arr);
/* ======
Michael Q6
What is output and why? */
let firstName = ‘John’;
const getName = (name) => {
  name.concat(' Doe’);
  name = name.toLowerCase();
  return name;
};
getName(firstName);
console.log(firstName);
/*
console.log logs ‘John’ because the string is passed by value and is immutable
why return ‘john’ and not ‘John Doe’
concat
initialized initially
name is reassigned to name.toLowerCase()
*/

let greeting = "Hello";

const test = str => {
  str = str.concat(" World!");
  return str;
}

test(greeting);
console.log(greeting);

// snipet 3

let greeting = ["Hello"];

const test = arr => {
  arr = arr.concat("World!");
  return arr;
}

console.log(test(greeting));
console.log(greeting);

// snipet 4

let greeting = ["Hello"];

const test = arr => {
  arr = arr.push("World!");
  return arr;
}

console.log(test(greeting));
console.log(greeting);

// snipet 5

let b = 2;

function test(a) {
  a = b;
  return a;
}

test(5);
console.log(b);
console.log(a);

// snippet 6

let b = 2;

function test(b) {
  return b += 5; // b = undefined + 5
}

console.log(test());

// snipet 7

let result = [1, 2, 3, 4, 5].filter((num) => num + 1);
result;
//[1, 2, 3, 4, 5]

let something = ['a', 'b', 'c'].filter(function (item) {
  console.log(item);
});
something;
// []

// snippet 8

let snippet = ["ant", "bear"].map((elem) => {
  if (elem.length > 3) {
    return elem;
  }
});

console.log(snippet);

// explain these methods: Array.prototype.forEach, Array.prototype.map, and Array.prototype.filter