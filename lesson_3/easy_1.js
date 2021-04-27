//question 1

let numbers = [1, 2, 3];
numbers[6] = 5;

console.log(numbers);
numbers.length
numbers[4];

//bonus
let number = [1, 2, 3];

number[6] = 5;
number[5] = undefined; 
console.log(number)

number.map(() => 10);  // => [ 10, 10, 10, <2 empty items>, 10, 10 ]

//question2
//How can you determine whether a given string ends with an exclamation mark (!)?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function exclamationMark(str) {
 return str.includes('!');
}

exclamationMark(str1);
exclamationMark(str2);

//answer
str1.endsWith("!");
str2.endsWith("!");

//question3

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

ages.hasOwnProperty('Spot');

//question 4

//Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

//input = string
//output = a new string, all lower case letters except the first character
// 1. separate the first character with the rest of the string
//2. Make the first character capital letter
//3. Make the rest of the string lower case
// 4. concatenated them back

let newString =
munstersDescription[0].toUpperCase() +
munstersDescription.slice(1).toLowerCase();

console.log(newString);
console.log(munstersDescription)

munstersDescription.charAt(0).toUpperCase() +
munstersDescription.substring(1).toLowerCase(); 

//question 5
//What will the following code output?
console.log(false == '0');
console.log(false === '0');

//question 6

let ages1 = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };

// Add entries for Marilyn and Spot to the object:

Object.assign(ages1, additionalAges);

//question 7

let strA = "Few things in life are as important as house training your pet dinosaur.";

let strB = "Fred and Wilma have a pet dinosaur named Dino.";

//Determine whether the name Dino appears in the strings below -- check each string separately):

strA.includes("Dino");
strB.includes("Dino");

strA.match('Dino') !== null; // false
strB.match('Dino') !== null; // true

//Question 8

//How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push("Dino");
console.log(flintstones);

//question 9

//In the previous problem, our first answer added 'Dino' to the array like this:

let theFlintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];


//How can we add multiple items to our array? ('Dino' and 'Hoppy')

//theFlintstones.push('Dino','Hoppy');
let newFlinstones = theFlintstones.concat(['Dino', 'Hoppy']);
newFlinstones;

//Question 10

//Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.


let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

advice.slice(0, advice.indexOf('house'))