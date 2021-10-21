// Question: This code logs 'This is global' to the console.  . Why ? Explain the concept? 

let myVar = 'This is global';

function someFunction() {
  let myVar = 'This is local';
}

someFunction();
console.log(myVar); // returns undefined

// Written assessment 

// What does someFunction() returns? 
// - It doesn't return anything? 
// - There is no return value because there is no return statement. 


// What does line 10 log to the console? 
// output This is global. 
// variable shadowing? 

// Ainaa's answer 

// On line 9, invoking someFunction returns undefined, this is because JS implicitly returns undefined if a function does not have a have an explicit return value.

// On line 10, we are passing myVar as an argument to the function console.log and it outputs This is global to the consle. 

// This is because of JavaScript uses a lexical variable scoping where in this case, the myVar function that was declared inside of someFunction has a block scope that is local to the someFunction only. 

// Whereas on line 3, we declared a variable myVar which has a global scope. 

// Therefore, when we invoke the code on line 10 myVar outputs This is global because it does not have access to the myVar that is declared inside of someFunction. 



// Important Keyword
// - determines the scope of a variable by the structure of the program. 
// - Functions in JavaScript create a new scope



// Discussion
// JavaScript uses lexical scope. This means that it determines the scope of a variable by the structure of the program. This program declares a variable named myVar in two places. The first is outside of any function, giving the first myVar a global scope. The second place is inside of someFunction. Functions in JavaScript create a new scope — a scope that is "local" to the function. This local scope is also referred to as an "inner" scope in relation to the global "outer" scope.

// On line 8, console.log(myVar) logs "This is global" because the two myVar variables, on lines 1 and 4, belong to different scopes. someFunction has its own local "inner" scope, so the myVar declaration within the function has no effect on the global "outer" scope.

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

let myVar = 'This is global';

function someFunction() {
  let myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// This logs myVar which is This is local to the console. 
//  return value is undefined. 

// lexical scoping here as well? 

// because we invoke console.log inside of someFunction, it looks for myVar within it's surrounding scope, it sees This is local and outputs it? 


// Important 
// - variable shadowing (- this is more important for JS101)
// - JavaScript gives priority to the myVar in the local scope (this is because of lexical scoping rules where JS starts looking for a variable from where you invoke something) (JS210 material)



// Discussion
// There is only one small difference between this exercise and the previous one: this time, the console.log(myVar) expression is located inside of the function.

// Recall that there is a myVar variable in both the global scope (line 1) and a local scope (line 4). Supposedly, variables in the global scope are accessible from anywhere in the program. In this case however, JavaScript gives priority to the myVar in the local scope, since that's the same scope from which myVar is being referenced by console.log. Because it has the same name, the global myVar cannot be accessed from within the local scope of the function. This type of behavior is called variable shadowing.




// 109 
// - study guide
// - link to start the test
// - assesment feedback

// What does this code return or output? What concept does it demonstrate?
  
let name = ["Jane"];

function test(arr) {
  arr = arr.concat('Doe');
  return arr; // ['Jane', 'Doe'] 
}

test(name);
console.log(name);

// Ainaa's answer 

// What does this code return? 
// ON line 10, invoking test function returns ['Jane', 'Doe']

// On line 11, this outputs ['Jane']. 

// Why? 

// This is demonstrating the concept of variables as pointer  or pass by value / pass by reference 

// On line 10, we invoke test and pass into it name as an argument. (name is variable that is assigned the value of an ['Jane'])

// function test is defined with a parameter of `arr`

// At this point, arr is pointing to the same array object as name which is ['Jane']

// on line 6, we re-assign the value of arr to the return value of arr.concat('Doe'). concat returns a new array with Doe concatanted to it which results in ['Jane', 'Doe']. 

// on line 7, return the value of arr which is ['Jane', 'Doe'].

// When we run the code on line 11, this outputs ['Jane'] because of the re-assignment of arr to a new array. 
// This re-assignment doen't change or mutate the original array that name is pointing to. 

// Therefore it outputs ['Jane']. 


