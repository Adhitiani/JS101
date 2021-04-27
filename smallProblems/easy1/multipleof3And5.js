//write a function:
// - sum all numbers between 1 and the given number, that are multiples of 3 or 5
// input: 20
// output: 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
// test case:
//multisum(3);       // 3
//multisum(5);       // 8
//multisum(10);      // 33
//multisum(1000);    // 234168
// mental model: take an integrer greater than 1, check if the number between 1 and the number is multiples of 3 or 5, add the number if they are, return the sum.
// algorithm 
//1. set a variable and assign it to a number. 3
//2. set a variable sum to hold the result value, and nitialized the number with 0
// iterate to the number between 1 to the given number: 1,2,3
// and check if each of them are multiplise of 3 or 5, number[1]/3 === 0 or number[n] % 5 === 0.
// if they are sum them. 3

function multisum(maxValue) {
  let sum = 0;
  for(let number = 0; number <= maxValue; number += 1) {
    if (number % 3 === 0 || number % 5 === 0) {
      sum += number
    }
  } return sum;
}

console.log(multisum(20));