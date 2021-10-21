/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332 
110011 
54322345
You'll be given 2 numbers as arguments: (num, size). Write a function which returns an array of size number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count. 

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes. 



P

- input: 2 integers (greater than or equal to 0)
> num => first number considered in the algorithm
> s (size) => number of elements in the returned array


- output: array of numbers or 'Not valid'

- rules:
> if size is 0, returns an empty array
> if num is a palindrom, it's returned in the output array


> numerical palindrom definition?
- single digit numbers are not palindroms => number > 10
- A palindrome is a number which reads the same backward as forward.


> validity?
- both inputs (num and s) need to be numbers
- both inputs need to be greater or equal than 0



D

- input: 2 integers (greater than or equal to 0)
- output: array of numbers or 'Not valid'

- intermediary steps: 

num > string > array 


A 


- check for validity => isValid()
  - typeof to check that they're both numbers
  - check that num >= 0 and s >= 0



- is palindrom function:
  - return false if num < 10
  - num_str = convert num to string
  - split, reverse and join the num_str (to get the reversed string)
  - compare the num_str and its reverse => if they're equal, it's a palindrom
  


- first, check for validity
  - if isValid returns false, then exit and return "Not valid"
  - else, continue the function

- palindroms return array (empty)

- loop until palindroms array's length is equal to size
  - current number is a palindrom? 
    => yes, then add it to palindroms array 
  - num += 1

- return the palindroms array


*/

function isValid(num, s) {
  // returns boolean
  let boolTypeOf = ((typeof num) === 'number' && (typeof s) === 'number' );
  let isMoreThan0 = ( (num >= 0) && (s >= 0));
  
  return (boolTypeOf && isMoreThan0);
}

function isPalindrome(num) {
  if (num <= 10) {
    return false;
  }
  
  return String(num) === String(num).split('').reverse().join('');
}


function palindrome(num, size) {
  if (!isValid(num, size)) {
    return 'Not valid';
  }

  let palinArry = [];
  
  while (true) {
    
    // core logic
    if (isPalindrome(num)) {
      palinArry.push(num);
    }
    
    num += 1;
    
    // break cond when size === palinArry
    if (palinArry.length === size) {
      break;
    }
  }
  return palinArry;
}


console.log(isValid(6,4) === true);
console.log(isValid(6,"AAA") === false);
console.log(isValid(6,-3) === false);
console.log(isValid("AAA",2) === false);
console.log(isValid(0,0) === true);
console.log("---------")


console.log(isPalindrome(11) === true)
console.log(isPalindrome(1) === false)
console.log(isPalindrome(1441) === true)
console.log(isPalindrome(13) === false)
console.log("---------")


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


let animal = "dog"

const speak = animal => {
  if (animal === undefined) {
    console.log("Bark")
  } else {
    console.log("Meow")
  }
  }

speak();

let greeting = "Hello";

const test = str => {
  str = str.concat(" World!");
  return str;
}

test(greeting);
console.log(greeting);

let greeting = ["Hello"];

const test = arr => {
  arr = arr.concat("World!");
  return arr;
}

console.log(test(greeting));
console.log(greeting);

let greeting = ["Hello"];

const test = arr => {
  arr = arr.push("World!");
  return arr;
}

console.log(test(greeting));
console.log(greeting);

let b = 2;

function test(a) {
  a = b;
  return a;
}

test(5);
console.log(b);
console.log(a);

let b = 2;

function test(b) {
  return b += 5; // b = undefined + 5
}

console.log(test());

let result = [1, 2, 3, 4, 5].filter((num) => num + 1);
result;
//[1, 2, 3, 4, 5]

let something = ['a', 'b', 'c'].filter(function (item) {
  console.log(item);
});
something;
// []

let snippet = ["ant", "bear"].map((elem) => {
  if (elem.length > 3) {
    return elem;
  }
});

console.log(snippet);
