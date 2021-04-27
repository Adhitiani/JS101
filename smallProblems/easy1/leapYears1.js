// leap year: - evenly divisible by 4
// - not evenly divisible by 100
// evenly divisible by 400

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return (year % 4 === 0)
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true

function leapYear(year) {
  return (year < 1752 && year % 4 === 0) || 
  (year % 400 === 0) || 
  (year % 100 !== 0 && year % 4 === 0)
}

console.log(leapYear(2016));      // true
console.log(leapYear(2015));      // false
console.log(leapYear(2100));      // false
console.log(leapYear(2400));      // true
console.log(leapYear(240000));    // true
console.log(leapYear(240001));    // false
console.log(leapYear(2000));      // true
console.log(leapYear(1900));      // false
console.log(leapYear(1752));      // true
console.log(leapYear(1700));      // false
console.log(leapYear(1));         // false
console.log(leapYear(100));       // false
console.log(leapYear(400));       // true