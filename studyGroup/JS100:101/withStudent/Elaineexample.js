// What does this program log and why?
let animal = "dog"
const speak = animal => {
  if (animal === undefined) {
    console.log("Bark")
  } else {
    console.log("Meow")
  }
}
speak();

/*
This program logs 'Bark' to the console. This code snippet demonstrates
concepts of variable shadowing
if no arguments are passed to a function's parameters, the parameters are assigned the default value undefined.
On line 11 we call the speak() function and we do not pass any arguments to the function.
The speak() function has one parameter, animal, however as no arguments are passed to it, animal is assigned the default value undefined.
The function definition of speak() creates a new function scope for local variables. Because the local function variable animal shares the same name as the global variable animal declared on line 1, variable shadowing prevents us from using the outer scoped variable.
Therefore, on line 4 since animal contains the primitive value undefined, this results in the strict equality operator returning true, which is a truthy value. The if clause is then executed, and Bark is logged to the console.
*/