//you will write a function named xor that takes two arguments, 
//and returns true if exactly one of its arguments is truthy, 
//false otherwise. 
//Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

//Problem:
//Question:
// can the two arguments be any values?
// yes

//input: two values
// output: true or false
//rules:
// explicit requirement:
// - return true if just one of its argumnet is truthy, false if both of them are true

// Example:
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

// check the first argument, if it's truthy or falsy
// check the second argument, if it's truthy or falsy
// if the first arguement is truthy and the second is falsy return true
// if the first arguemnet is truthy and the second is truthy return false
// else return false.

function xor(ar1, ar2) {
if (ar1) {
  if (ar2) {
    return false;
  } else {
    return true;
  }
} else {
  if (ar2) {
    return true;
  } else {
    return false;
  } 
  }
}
  

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
