//Combine Two Lists

//Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

//You may assume that both input arrays are non-empty, and that they have the same number of elements.

//Example:

//interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

/* 
PEDAC
Problem
input: two arrays (both are non-empty and have the same number of element)
ouput: a new array (contain all elements from the two array, each element taken in alternation)


two arrays => one array

I need to combine two arrays to one array, which the element is taking turn first the element from the first array and second is from the second array until the last element.
Example:

interleave([1, 2, 3], ['a', 'b', 'c'])
// [1, 'a', 2, 'b', 3, 'c']

Data Structure
two arrays => one array
concatenate two array

Algoritm
-  I need to declare a variable result and assign it to an empty array. let combArr = []
- We need to iterate both array and push it to the new arr with alteration order, first the element from the first array, second the first element of second array. combArr = [arr1[0], arr2[0], arr1[1], arr2[1]]

How do we push two different array in the alteration order?
- I need a counter variable and set it to 0. let index = 0
use loop while true,
first push the element  the first array => arr1[idx]
second push the first element of the second array => arr2[idx];
increament the index by 1
when the counter is equal than the first array length, break.


function interleave(arr1, arr2) {
  let combArr = [];
  let idx = 0;
   
  while(true) {
    combArr.push(arr1[idx], arr2[idx]);
    idx += 1;

    if(idx === arr1.length) break;

  }
  return combArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]


*/

function interleave(arr1, arr2) {
let newArray = [];
arr1.forEach(ele1 => {
  newArray.push(ele1, arr2[arr1.indexOf(ele1)]);
})

return newArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]