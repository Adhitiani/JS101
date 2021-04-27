/* leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.

Understanding the problem:
input: integer > 0
output: booleans true or false  

mental model:
take an integer greater than 0, if number < 100 && num % 4 = 0, if 100 >= number < 400 divide by 4 && % 100 !== 0, or number >= 400 divide by 4 && 100 && 400 === leap year
*/

function isLeapYear(year) {
  if(year > 1752) {
    if ( year % 400 === 0) {
      return true;
    } else if ( year % 100 === 0) {
      return false;
    } else {
      return year % 4 === 0;
    }
  } else {
    return year % 4 === 0;
  }
  
}

console.log(isLeapYear(2016)); 
console.log(isLeapYear(2015)); 
console.log(isLeapYear(2100)); 
console.log(isLeapYear(2400)); 
console.log(isLeapYear(240000)); 
console.log(isLeapYear(240001)); 
console.log(isLeapYear(2000)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(1752));
console.log(isLeapYear(1700)); 
console.log(isLeapYear(1)); 
console.log(isLeapYear(100)); 
console.log(isLeapYear(400));  

function leapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
}

console.log(leapYear(2016)); 
console.log(leapYear(2015)); 
console.log(leapYear(2100)); 
console.log(leapYear(2400)); 

