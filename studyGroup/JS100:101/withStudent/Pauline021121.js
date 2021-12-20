/**
 * write a function keepIf(arr, callBackFunction) that returns a new array 
 * the new array includes only elements where callBackFunction evaluates to true
 * use filter in your solution
 */

 function keepIf(arr, callBackFunction) {
  
  return arr.filter(callBackFunction);
}

function isDivisibleByThree(num) {
  if(num % 3 === 0) return num;
}
console.log(keepIf([3,4,5,9,12], isDivisibleByThree)); // [3,9,12]

/**
 * write a function rejectIf(arr, callBackFunction ) that returns a new array
 * the new array includes only elements were callBackFunction evaluates to false
 * use filter in your solution 
 */

function rejectIf(arr, callBackFunction) {
  return arr.filter(num => !callBackFunction(num))
}

 console.log(rejectIf([3,4,5,9,12], isDivisibleByThree)); // [4,5]


/**
 * write a function, onlyTheOddsButDoubled(arr) that returns a new array
 * the new array include only elements that were originally odd, but those values are doubled
 */

function onlyTheOddsButDoubled(arr) {
  return arr.filter(num => {
    return num % 2 === 1;
  }).map(ele => ele * 2);
}

console.log(onlyTheOddsButDoubled([3, 5, 8])); // [6,10]
console.log(onlyTheOddsButDoubled([0, 2, 8])); // []
console.log(onlyTheOddsButDoubled([])); // []
console.log(onlyTheOddsButDoubled([3, 5, 8, 5.5])); // [6,10]
