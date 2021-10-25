//Multiplicative Average

//Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.


multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

//we need a result variable and assign it to an empty string
//itterate over the array and multipy all of the element
// divides the result by the array length
// convert the result to string with the value rounded..

function multiplicativeAverage(arr) {
  
  let total = arr.reduce((acc, curr) => acc * curr, 1);
  return (total / arr.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]))