/*

Instructions

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332 
110011 
54322345

You'll be given 2 numbers as arguments: (num, s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count. 

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes. 


P

- inputs:
> num starting number
> s the number of numerical palindroms we want


- output:
> an array of numbers (numerical palindroms)


- rules:
> what is a palindrom?
- a number that reads the same backward as forward
- single digit numbers are not palindroms

> if num is a palindrom, it should be included in the return array
> the returned palindroms are greater than or equal to num
> if num or s is not a number, or if it's less than 0, then we return "Not valid"
> if s is 0, we return an empty array


D

- inputs:
> num starting number - 0 or greater
> s the number of numerical palindroms we want - 0 or greater


- output:
> an array of numbers (numerical palindroms)


- intermediary steps:
> array of numbers
> converting numbers into strings for palindrom checks


A
1. create a result variable and assign it to an empty array
2. create an array that contain all the number after num with s number of elements.
- create a variable and assign it to an empty array
- create the counter variable and assign it to 0
- while

3. if the element of array is polindrome, append it to the result variable.

Step 1 - Check for Data Type Validity -> Helper Function
- Determine if num is a data type of a number
  - if num is not a number, return the string 'Not valid'
  - if num is a number, determine if num is less than 0, and if so, return the string 'Not valid'
- Determine if s is a data type of a number
  - if s is not a number, return the string 'Not valid'
  - if num is a number, determine if num is less than 0, and if so, return the string 'Not valid'


- palindrome helper function
  - input is a Number
  - convert number to a string
  - if string is equal to itself reversed then return true - otherwise return false
  - If the length of the numCharArray is 1, 
    - return False - this number is NOT a palindrome
*/
*/


console.log(palindrome(6,4));
// [11,22,33,44]
console.log(palindrome(75,1));
// [77]
console.log(palindrome(101,2));
// [101,111]
console.log(palindrome(20,0));
// []
console.log(palindrome(0,4));
// [11,22,33,44]

console.log(palindrome("ACCDDCCA",3));
// "Not valid"
console.log(palindrome(773,"1551"));
// "Not valid"
console.log(palindrome(-4505,15));
// "Not valid"
console.log(palindrome(4505,-15));
// "Not valid"

function isPalindrome(num) {
  let str = String(num);
  if (str.length < 2) {
    return false;
  }
  return str === str.split('')
}

/*

Instructions

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332 
110011 
54322345

You'll be given 2 numbers as arguments: (num, s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count. 

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes. 


P

- inputs:
> num starting number
> s the number of numerical palindroms we want


- output:
> an array of numbers (numerical palindroms)


- rules:
> what is a palindrom?
- a number that reads the same backward as forward
- single digit numbers are not palindroms

> if num is a palindrom, it should be included in the return array
> the returned palindroms are greater than or equal to num
> if num or s is not a number, or if it's less than 0, then we return "Not valid"
> if s is 0, we return an empty array


D

- inputs:
> num starting number - 0 or greater
> s the number of numerical palindroms we want - 0 or greater

- output:
> an array of numbers (numerical palindroms)


- intermediary steps:
> array of numbers
> converting numbers into strings for palindrom checks


A
- if input args are not numbers then return "not valid"
- if input args are less than 0 then rreturn "not valid"
- initialize empty array for returning list of palindromes
- init palidrome found count to 0
- init current_num variable to "num"
- loop while palindrome count < "s"
  - if current_num is a palidrome then add to palindrome array and increment found count - use helper function to test for palidromes
  - increment current_num

- return palidrome array

- palidrome helper function
  - input is a Number
  - convert number to a string
  - if string is equal to itself reversed then return true - otherwise return false


Step 1 - Check for Data Type Validity -> Helper Function
- Determine if num is a data type of a number
  - if num is not a number, return the string 'Not valid'
  - if num is a number, determine if num is less than 0, and if so, return the string 'Not valid'
- Determine if s is a data type of a number
  - if s is not a number, return the string 'Not valid'
  - if num is a number, determine if num is less than 0, and if so, return the string 'Not valid'

Step 2 - Check for Rules -> Edge Case
- Determine if s is the number 0, and if so, return an Empty Array

Step 3 - Checking for a Palindrome (helper function - predicate to determine if a number is a palindrome)
- Starting with num, convert num into a string, and then into an array of characters (3 => '3' => ['3'])
  - If the length of the numCharArray is 1, 
    - return False - this number is NOT a palindrome
  - Else
    - Create a new empty array
    - Copy the numCharArray into the new empty array, and reverse it (revArray)
    - Note that since we are dealing with OBJECTS - JavaScript only considers objects the same
    - if they point to the same place in memory, AND have the same properties (i.e. they MUST 
      be the same object)
    - Rejoin the numCharArray and the revArray and convert both to strings
    - Check to see if the revString is equal to the originalString
    - If they are equal, return true - this is a palindrome number
    - If the strings are not equal, return false - this is not a palindrome number

Step 4 (Larger Opening Algorithm)
  - Initiate a palindrome counter variable, that will count palindrome numbers 
  - Initialize an Empty Array to return the palindrome numbers
  - Starting with num, determine if num is a Palindrome (see Step 3)
    a - If num is a palindrome, increment the palindrome counter variable
    b - Add num to the Array of Palindrome Numbers
    - While the palindrome counter variable is less than s (required number of palindrome numbers)
      Repeat steps a and b -> break
  - Return the Palindrome Number Array

Check Test Cases



Step 1 - Check for Data Type Validity -> Helper Function
- Determine if num is a data type of a number
  - if num is not a number, return the string 'Not valid'
  - if num is a number, determine if num is less than 0, and if so, return the string 'Not valid'
- Determine if s is a data type of a number
  - if s is not a number, return the string 'Not valid'
  - if num is a number, determine if num is less than 0, and if so, return the string 'Not valid'


- palindrome helper function
  - input is a Number
  - convert number to a string
  - if string is equal to itself reversed then return true - otherwise return false
  - If the length of the numCharArray is 1, 
    - return False - this number is NOT a palindrome
*/


function isPalindrome(num) {
  let str = String(num);
  if (str.length < 2) {
    return false;
  }
  
  return str === str.split('').reverse().join('');
}


console.log(isPalindrome(3) === false)
console.log(isPalindrome(33) === true)
console.log(isPalindrome(101) === true)
console.log(isPalindrome(1014) === false)

function isValid(num) {
  return typeof num === "number" && num >= 0;
}



console.log(isValid(3) === true)
console.log(isValid(0) === true)
console.log(isValid(-3) === false)
console.log(isValid("ABCD") === false)

console.log("====")

/*Step 4 (Larger Opening Algorithm)
  - Initiate a palindrome counter variable, that will count palindrome numbers 
  - Initialize an Empty Array to return the palindrome numbers
  - Starting with num, determine if num is a Palindrome (see Step 3)
    a - If num is a palindrome, increment the palindrome counter variable
    b - Add num to the Array of Palindrome Numbers
    - While the palindrome counter variable is less than s (required number of palindrome numbers)
      Repeat steps a and b -> break
  - Return the Palindrome Number Array
*/

function palindrome(num, s) {
  let palindromeArray = [];

  
  if (!isValid(num) || !isValid(s)) {
    return 'Not valid'
  }
  
  while (palindromeArray.length < s) {
    if (isPalindrome(num)) {
      palindromeArray.push(num);
    }  
      
    num += 1;
  }
  
  return palindromeArray;
  
}


/*
1. Define a helper method `isPalindrome`
 Convert Number to String
 Reverse the string and check if it's the equivalent in value
 Check if String is greater than length 1
 
2. Loop and increment num (first argument) by one each Iteration
 Invoke helper method `isPalindrome`
If true, push the number to a final array
Break out of the loop when array.length == second argument 

3. Define a helper method valid?
Are both arguments Number ?
Are both of them >= 0 ?

*/

console.log(palindrome(6,4));
// [11,22,33,44]
console.log(palindrome(75,1));
// [77]
console.log(palindrome(101,2));
// [101,111]
console.log(palindrome(20,0));
// []
console.log(palindrome(0,4));
// [11,22,33,44]

console.log(palindrome("ACCDDCCA",3));
// "Not valid"
console.log(palindrome(773,"1551"));
// "Not valid"
console.log(palindrome(-4505,15));
// "Not valid"
console.log(palindrome(4505,-15));
// "Not valid"