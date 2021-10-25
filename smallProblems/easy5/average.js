
//Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.


average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

function average(array) {
 
 let total = array.reduce((acc, curr) => acc + curr);
 return  Math.floor(total / array.length);

 
}

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));

//we need the result variable and assign it to 0
// itterate over the array and sum up all the element
// divide the sum by the length of array and assign it to the result variable round down the result

function average2(array) {
 let total = 0;
 array.forEach(num => total += num);
 
return  Math.floor(total / array.length);

}

console.log(average2([1, 5, 87, 45, 8, 8]));
console.log(average2([9, 47, 23, 95, 16, 52]));