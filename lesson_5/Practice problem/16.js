//Given the following data structure, write some code that returns an object where the key is the first item in each subarray, and the value is the second.

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// return an object where:
// -- the key is the first item in each sub array
// -- the value is the value of second in each subArray

// input : an Array
// output :an object

//create a variable result and assing it to an empty object
//loop trhough the array, in each itteration:
// - assign the object key to the subarray first item
// - assign the object value to the subarray scond item

let object = {};

arr.forEach(subArray => {
  object[subArray[0]] = [subArray[1]];
})

object