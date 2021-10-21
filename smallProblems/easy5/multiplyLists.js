//Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

//input: two arrays
// output: a new array (contain the product of numbers that have the same index)
// example: 
// [3, 5, 7], [9, 10, 11] => [27, 50, 77]

// we need a result variable with an empty array
// we iterate over the two array:
// on each iteration we multiply the element with the same index
// we push the result to the result array
// after finish iterating, return the result array

function multiplyList(arr1, arr2) {
  let productNum = [];

  for(let idx = 0; idx < arr1.length; idx++ ) {
    let currNum1 = arr1[idx];
    let currNum2 = arr2[idx];
   

    productNum.push(currNum1 * currNum2);
    
  }
  return productNum;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]))



// map
// we iterate over the elements in arr1, and in each iteration we multiply the current element with the element that has same index  in arr2

function multiplyList2(arr1, arr2) {
   return arr1.map((ele1, idx) => {
    return ele1 * arr2[idx];

  }) 
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]))