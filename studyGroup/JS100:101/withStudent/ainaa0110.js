
//// snipet 1

function fix(value) {
  value.push('xyz'); // 
  value = value.concat("abc");
  return value
}

let a = ['hello', 'world']
let b = fix(a)

console.log(a);
console.log(b);


// Advice 
// - Don't explain function definition (unless you have to), instead explain function invocation. 

// Start at line 13, 14, invoke function , 7 - 11, 16, 17 to explain the output value. 

// Start with function definition
// Start at line 7 - 11, 13, 14, invoke function, 7 - 11, 16, 17 - repeating yourself and higher possibility of making mistakes. 

// We declare variable named `a` and assigned it to an array on line 13

// On line 14 we declare a variable named `b` and assigned it to the return value of invoking `fix` function with the value of `a` passed to it as an argument
// When we invoke `fix` we pass the value of a which is `['hello', 'world']`. 

// At this point `b` and `value` are both pointing to this same array. 

// Within the funciton body, on line 8 we call the push method on `['hello', 'world']` with xyz passed as an argument. `push` is a destructive method that appends `xyz` to the array that variable value is pointing at. At this point, `value` and `b` are both pointing at `['hello', 'world', 'xyz]`. 

// It appends the argument to the array and returns `['hello', 'world', 'xyz].



//  2 options - 
// a) you mention that return value and say we don't do anything with this return value. mention the fact that is is a destructive that changes the value that the variable is pointing at. 
// b) you don't mention the return value at all because it's not relevant to the question. mention the fact that is is a destructive that changes the value that the variable is pointing at. 




// on line 9 we reassigned the variable value to the return value of calling concat method on variable `value` and passed 'abc' as an argument. The variable value now is reassigned to  `['hello', 'world', 'xyz', 'abc']. This is the value that returned on line 10. (concat is not a destructive method. It doesn't change the value being pointed at by `value` and it returns a new array which is then re-assigned to `value`. )

// on line 17 when we called `console.log' with the vallue of variable `b` passed as its argument, it logs `['hello', 'world', 'xyz', 'abc'].

// on line 16 when we called `console.log' with the vallue of variable `a` passed as its argument, it logs `['hello', 'world', 'xyz]. because on line 8 push method mutate the array.

// This code demonstrates the concept of variables as pointers and how destructive methods can mutate arguments that is passed into a function as explained above. This is why a logs `['hello', 'world', 'xyz']` and `['hello', 'world', 'xyz', 'abc']`

//// What is `names` at the end of this code? Explain what concept does it demonstrate? 


/// snippet 2

function addName(arr, name) {
   arr.push(name);
}

let names = ['anne', 'bella'];
addName(names, 'cathy')
console.log(names);

// On line 7 we declare a variable named `names` and assigned it to an array.
// On line 8 we invoke function `addName` and passed two arguments, a  the value of names and a string `cathy`.


// When we invoke the function,


// At this point, arr and names are pointing to the same array. and `name` is pointing to the string `cathy`.


// within the funciton body we call push method on the array `names` with string `cathy` passed as it's argument. Push method is a destructive method, it appends the argument to the array it's called on. At this point, the value of variable names is ['anne', 'bella', 'cathy']; Since the function doesn't explicitly return something, it returns undefined on line 8.

// on line 9 console.log is called with the value of variable names as the argument, it logs ['anne', 'bella', 'cathy']. It's because the push method is destructive method.
//This code describe the variable as pointer and the method destruction.




/// snippet 3

// This code logs 3, why doesn't it log 0. Explain the concept behind this code. 

let a = 0;

function log(a) {
  console.log(a)
}

log(3); 


// Snippet 4

let c = console.log(a) 
let d = 'hello world'

if (c) {
  console.log("I am truthy")
} else {
  console.log("I am output instead.")
}

