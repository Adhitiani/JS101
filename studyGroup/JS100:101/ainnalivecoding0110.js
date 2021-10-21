// Create a function that takes a string as an argument and return a boolean, true if the string contains only vowels and false otherwise. For example:

//hasOnlyVowels('aaeuiooae'); //true
//hasOnlyVowels('tgbhrrf_00&'); //false

// Problem:
// Create a function that takes a string as an argument and return a boolean, true if the string contains only vowels and false otherwise. For example:

hasOnlyVowels('aaeuiooae'); //true
hasOnlyVowels('tgbhrrf_00&'); //false

// Problem 
// Input: string
// Output: Boolean 

// Rules
// - vowels are aeiou
// - check whether the string has only vowels or not?
//   - return true if yes
//   - return false if you see non-vowel

// Data Structure
// - string => boolean 
//  - might use arrays as needed. 

// Algorithm 
// create a constant that holds vowels aeiou. 
// - iterate through the string, for each letter
//   - if the current letter is a vowel, continue
//   - else, return false. 
// - return true (if we reach the end then all letters are vowels. )

// Edge cases? 
// What if the input is invalid??? 
// create a guard clause

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

// can take string and array and should return boolean 
// it cannot take number null and something, return undefined if null, number or object 


function hasOnlyVowels(string) {
  
  // guard clause
  // if it's not string or array, return undefined.
  // else proceed. 
  
  for (letter of string) {
    if (!VOWELS.includes(letter)) {
      return false;
    }
  }
  return true;
}

// console.log(hasOnlyVowels('aaeuiooae')); //true
// console.log(hasOnlyVowels('tgbhrrf_00&')); //false


// 215 level question - you have to build your own test cases. 



/*
Problem
-input: a string
-output: a boolean( true if the string contains only vowel, false not only vowel)
- case sensitive? a === A? assume it's not equal.

example: 
hasOnlyVowels('aeui'); //true
hasOnlyVowels('aaeuiooab'); //true
 data structure: 
 string => boolean
 if conditional
 
 Algorithm:
 iterate over the string:
 check if all the string is vowel, if yes return true
 How do we check if the string is vowel? use includes.method
 If not return false.
*/

function hasOnlyVowels(str) {
  for(let i = 0; i < str.length; i++) {
    if(!'aiueo'.includes(str[i])) {
      return false;
    } 
    
    return true; // 
  }
}


console.log(hasOnlyVowels('abc')); // should be false 
hasOnlyVowels('aaeuiooae')
hasOnlyVowels('tgbhrrf_00&')
hasOnlyVowels('a')

