

//Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.


let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
//Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:


//[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]


/*
PEDAC
1.sort the array based on the sum of the odd numbers, mutate the original array
2. odd numbers is when num % 2 === 1
 input: an array
 output : the same array but sorted
 
 1. use sort method on the outer array
 2. use sort method on the each of subarray
  - the sort based on the sum of the odd number.
    - filter the odd elements on the subArray and sum it using reduce method

*/

arr.sort((a,b) => {
  let sumOddA = a.filter(num => num % 2 === 1)
                      .reduce((acc,currentVal) => acc + currentVal);
  let sumOddB = b.filter(num => num % 2 === 1)
                      .reduce((acc, currentVal) => acc + currentVal);
  
  return sumOddA - sumOddB
})