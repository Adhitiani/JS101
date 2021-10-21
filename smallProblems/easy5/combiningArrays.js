//Combining Arrays

//Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

//union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

//Problem
// - write a function that takes two arguments, both are arrays. 
// - return an array that contain:
// -- the union of the values from the two array argument
// -- there shouldn't have any duplication of values (even if the original value has the duplicate value)
// -- both arguments will always be arrays

// input: two arrays
// output: one array

//Question / edge cases
// - the order? the argument in the first array followed by the second elements' array

// Example:
// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
// union([1,1,2,2,3,3], [4,4,5,5])n //[1, 2, 3, 4, 5]

//Data Structure
// - array

// Algorithm
// create a variable result and assign it to an empty array
// concatenate the two array and assign it to a variable
// itterate over the new concatenated array, in each iteration:
// check if the element includes in the result variable, if not push it on the array
// return the variable result

function union(arr1, arr2) {
  let result = [];
  let twoArr = arr1.concat(arr2);
  
  twoArr.forEach(num => {
    if(!result.includes(num)) {
      result.push(num);
    }
  })
 return result;
}

union([1, 3, 5], [3, 6, 9])
union([1,1,2,2,3,3], [4,4,5,5])
