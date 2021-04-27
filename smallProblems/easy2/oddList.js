//Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.
//Question:
//1. what is every other element on array?
// - those values that are in the 1st, 3rd..so on

//input: an array
// output: a new array
// Rules:
//.  explicit requirment:
// - the return value in the returned list should be the value that are in 1st, 3rd, 5th..

// initialized a variable that will hold the new array result and assign it to an empty array
//iterate over the array:
// select the current number that are in 1st, 3rd...so on:
//    every other element = currentNumber + 2
// append the every other element to the variable that hold the new value
//after finishes iterating return the new variable

function oddities(arr) {
  let oddValues = [];
  
  for (let index = 0; index < arr.length; index += 2) {
     oddValues.push(arr[index]);
  }
  return oddValues;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []