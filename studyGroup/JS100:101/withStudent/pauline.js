

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};



function selectFruit(obj) {
  let newObject = {};

  for(let key in produce) {
    if(produce[key] === 'Fruit') {
      newObject[key] = produce[key];
    };
  };
  return newObject;
};

// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// Examples

// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []

// Notes

// Return an empty array if the object is empty.

console.log(toArray({ a: 1, b: 2 })) //[["a", 1], ["b", 2]]);
console.log(toArray({ foo: 33, bar: 45, baz: 67 })) //[["foo", 33], ["bar", 45], ["baz", 67]]);
console.log(toArray({ shrimp: 15, tots: 12 })) //  [["shrimp", 15], ["tots", 12]]);
console.log(toArray({})) //  []);

// input: an object
// output: an array, each element is a key-value pair in the form of array
// example:
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// rule: return an empty array if the object is empty


// We need a result variable to hold the result array, assign it to an empty array. let array = []
// extract the keys from the object assign it to a variable => ({ a: 1, b: 2 }) => ['a', 'b']
// 

/**
 * let ooo =[3,4,5];
 * let pauline = 6;
 */


function toArray(obj) {
let array = [];
let keys = Object.keys(obj) 

keys.forEach(key => {
  let subArray = []
  subArray[0] = key;
  subArray[1] = obj[key];
  //array[array.length] = subArray;
  array = array.concat(subArray);
  //subArray.push(key, obj[key]);
  //array.push(subArray)

})
return array;
}

/*
write a function, findNeedle that takes one parameter, haystack which is an array of strings, 
and returns the element that is a 'needle', or returns undifined if there is no needle
Use forEach in your solution; do not use find in your solution
*/

console.log(findNeedle(['haystack', 'haystack', 'needle', 'haystack']) === 'needle');
console.log(findNeedle(['haystack', 'haystack', 'haystack']) === undefined);
console.log(findNeedle([]) === undefined);
console.log(findNeedle(['needle', 'haystack', 'needle', 'haystack']) === 'needle');

//input: an array of strings
// output:  a string 'needle'  
//rule: 
// - return undefined if there is no string `needle`
// - use forEach
//
//We will need a result variable and assign it to an emtpy string 
// iterate over the array, in each iteration:
// - check if the element is 'needle'
// - if it is needle assign it to the result variable
// - if not check another element untill the last element and assign undefined to the result variable
// after the iteration return the result variable

function findNeedle(arr) {
  let stringNeedle;
  
  arr.forEach(str => {
    if (str === 'needle') {
      stringNeedle = 'needle'
    };
  })

  return stringNeedle;
}

/*
write a function, findNeedle that takes one parameter, haystack which is an array of strings, 
and returns the element that is a 'needle', or returns undifined if there is no needle
Use forEach in your solution; do not use find in your solution
*/

console.log(findNeedle(['haystack', 'haystack', 'needle', 'haystack']) === 'needle');
console.log(findNeedle(['haystack', 'haystack', 'haystack']) === undefined);
console.log(findNeedle([]) === undefined);
console.log(findNeedle(['needle', 'haystack', 'needle', 'haystack']) === 'needle');

//input: an array of strings
// output:  a string 'needle'  
//rule: 
// - return undefined if there is no string `needle`
// - use forEach
//
//We will need a result variable and assign it to an emtpy string 
// iterate over the array, in each iteration:
// - check if the element is 'needle'
// - if it is needle assign it to the result variable
// - if not check another element untill the last element and assign undefined to the result variable
// after the iteration return the result variable

function findNeedle(arr) {
  let stringNeedle;
  
  arr.forEach(str => {
    if (str === 'needle') {
      stringNeedle = 'needle'
    };
  })

  return stringNeedle;
}



Now refactor your findNeedle function to findSomething function. The new function should take 
two parameters, an array of strings, and the string you are looking to find
this time, you should use the find() instead of forEach()
*/

console.log(findSomething(['wallet', 'keys', 'transit card', 'cash', 'compact'], 'cash') === 'cash');
console.log(findSomething(['wallet', 'keys', 'transit card',  'compact'], 'cash') === undefined);
console.log(findSomething([], 'things')=== undefined);
console.log(findSomething(['wallet', 'keys', 'transit card', 'cash', 'compact'], '') === undefined);
console.log(findSomething(['wallet', 'keys', 'transit card', 'cash', 'compact'], 'orange') === undefined);
console.log(findSomething(['wallet', 'keys', 'transit card', 'cash', 'compact'], 'keys') === 'keys');

function findSomething(arr, str) {
   let stringNeedle = arr.find(ele => ele === str);
  return stringNeedle;
};


function sumOfSquaredOdds(integers) {

let oddNumber = integers.filter(num => num % 2 != 0)
if(oddNumber === []) {return undefined};
let square = oddNumber.map(num => num * num);
let sum = square.reduce((acc, curr) => acc + curr);

}


console.log(sumOfSquaredOdds([-5, 0, 4, 8, 3, 9])=== 115);
console.log(sumOfSquaredOdds([-4, 0, 4, 8, 8, 256])=== undefined);
console.log(sumOfSquaredOdds([-5, 0, 5, 8, 3, 13]) === 228);
console.log(sumOfSquaredOdds([]) === undefined);