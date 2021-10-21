//Halvsies

//Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

//Examples:

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

//PROBLEM:
// - A function that takes an array as argument
// - it returns an array that contain two sub-array:
// Rules:
// -- the first element contain the first half of original array
// -- the second element contain the other half
// -- if the original array has odd number of element, put the middle element in the first array

// assumption: the argument is always arrays
// the return is always has two sub aray even the other is an empty array
// when the input is empty array, the outpu is two empty array

//input: an array
// output: an array with two subArray

// Data Structure:
// input: array
// output: array

// Algorithm:

// - create a variable result and assign it to an empty array with two empty subarray => [[], []]
// - chek the length of the array:
// -- if its even, divided by two, extraxt the first half to first sub array,the other to the rest of the half arrLength = 8 : 2 = 4
// -- if its odd, divided by two, the first half array length is the ceiling number and the second is the floor number


function halvsies(arr) {
  let result = [[], []];
  let arrLength = arr.length;

  if(arrLength % 2 === 0) {
    result[0] = arr.slice(0, arrLength / 2)
    result[1] = arr.slice(arrLength / 2)
  } else {
    result[0] = arr.slice(0, Math.ceil(arrLength / 2))
    result[1] = arr.slice(Math.ceil(arrLength / 2))
  }
  return result
} 

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
