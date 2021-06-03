

//A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

//Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

// problem: return a number multiplied by two, if it is a double number return as it is.
// double number: even length number, left side === right side digit.
// input: a number
// output: a double number

//ALG:
// - check if the number even:
//.   - divide the number by two
//    - check if left side === right side then return the number
//.   - else double the number
// if its not even double the number

function twice(num) {
  if (num % 2 === 0) {
    let even = num + '';
    if(even.slice(0,even.length/2) === even.slice(even.length/2)) {
       num = num;
       } else {
         num = num * 2;
       }
  }
  return num
} 




twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

let number = 103103;

let str = number + '';

if(str.slice(0,str.length/2) === str.slice(str.length/2)) {
       number = number
       } else {
         number = number * 2;
       }
