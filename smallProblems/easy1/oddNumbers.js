// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// PROBLEM
// input: ranges of numbers from 1 - 99.
// output: all odd number from 1 - 99 log in separate line

// requirement: 
// only odd number from 1-99 log in separate line

// mental model:
// take one number start from 1, cehck it if its odd, log it if its odd, continue to another number, do the same and stop after the number reach 99.

// EXAMPLE / Test case
/* 
1
3
5
7
9
...
99 */

// DATA STRUCTURE AND ALOGARITM
//1. Set oddNum, store the first number as 1.
// 2. add conditional if the number is less than 100 and odd (num % 2 ===) log true
// increament the number by 1
// stops when it reach 99

//CODE


for (let oddNum = 1; oddNum < 100; oddNum += 1) {
  if (oddNum % 2 === 1) {
    console.log(oddNum);
  }
 
}