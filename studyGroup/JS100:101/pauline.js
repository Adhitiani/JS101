//regex pattern to check if string has all characters
/*
Task:

Your function should return a valid regular expression. This is a pattern which is normally used to match parts of a string. In this case will be used to check if all the characters given in the input appear in a string.

Input

Non empty string of unique alphabet characters upper and lower case.

Output

Regular expression pattern string.

Examples

Your function should return a string.

function regexContainsAll(str) {
  return "abc";
}
That regex pattern will be tested like this.

const abc = "abc";
const pattern = regexContainsAll(abc);
const str = "zzzaaacccbbbzzz";
new RegExp(pattern).test(str);  // -> true

*/

function regexContainsAll(str) {
  return str.replace(/./g, '(?=.*$&)');
}

https://www.codewars.com/kata/5e4eb72bb95d28002dbbecde/solutions/javascript




//Snippet 1

// Lettercase Percentage Ratio
// Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// Examples:
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('./"-[]{}\()?,!@$#$%^&*)')); // 21 / 21 neither which is 100% 
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }



function letterPercentages(string) {  
  let lowercase = string.match(/[a-z]/g) || []; // If we get null, no matches, assign to empty array
  let uppercase = string.match(/[A-Z]/g) || [];
  let neither = string.match(/[^A-Z]/ig) || [];
  
  return {
    lowercase: (lowercase.length / string.length * 100).toFixed(2),
    uppercase: (uppercase.length / string.length * 100).toFixed(2),
    neither: (neither.length / string.length * 100).toFixed(2),    
  };
}










//Snippet 2

//Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

Examples:


staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

function staggeredCase(string) {
  return string
    .split("")
    .map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
}

function staggeredCase(stringP){
  let regex = new RegExp(/(.)(.)/,'gi');
  return stringP.replace(regex,(_,$1,$2) => $1.toUpperCase() + $2.toLowerCase());
}

//Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

//Notes:

//Only lower case letters will be used (a-z). No punctuation or digits will be included.
//Performance needs to be considered
//Input strings s1 and s2 are null terminated.
//Examples

scramble('rkqodlw', 'world')// True
scramble('cedewaraaossoqqyt', 'codewars')// True
scramble('katas', 'steak')// False

//Snippet 3

//The average human reads 200 words per minute.
// How many seconds will it take to read the provided text? 
// If it goes past 60 seconds, quote in minutes!
const passage = `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk.`

const timeToRead = text => { 
  const averageReadingTime = 200 // Humans read an average of 200 words per minute
  const cleanedPassage     = passage.split(" ").filter(el => el.trim() !== "")
  console.log(cleanePassesged)
  const timeInMinutes      = cleanedPassage.length / averageReadingTime;

  return timeInMinutes < 1 
    ? duration = `${Math.round(timeInMinutes * 60)}s` 
    : duration = `${Math.round(timeInMinutes)}mins`
}
console.log(timeToRead(passage)) // 37s


// Get Sum of People's Budget

// Create the function that takes an array with objects and returns the sum of people's budgets.
// Examples

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600

/*
input: an array with objects
output: number (the sum of the budgets)

How do I extract the budget?

array[2]['budget']
iterate over the array, and in each iteration:
- extract the budget add it to the result variable






*/

getBudgets(array) {



}


console.log(getBudgets([{name: "John",  age: 21, budget: 23000}, {name: "Steve",  age: 32, budget: 40000}, {name: "Martin",  age: 16, budget: 2700}]) === 65700)
console.log(getBudgets([{name: "John",  age: 21, budget: 29000}, {name: "Steve",  age: 32, budget: 32000}, {name: "Martin",  age: 16, budget: 1600}]) === 62600)
console.log(getBudgets([{name: "John",  age: 21, budget: 19401}, {name: "Steve",  age: 32, budget: 12321}, {name: "Martin",  age: 16, budget: 1204}]) === 32926)
console.log(getBudgets([{name: "John",  age: 21, budget: 10234}, {name: "Steve",  age: 32, budget: 21754}, {name: "Martin",  age: 16, budget: 4935}]) === 36923)
