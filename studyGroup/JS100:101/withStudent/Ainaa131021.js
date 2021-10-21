//What is this code log and why?
let array = [1, 2, 3];
array[-1] = 0;
array['number'] = 100;

console.log(array.length);
console.log(Object.keys(array));
console.log(array.forEach(arr => console.log(arr)));

/////

//Given the following code, what will the final values of a and b be? Try to answer without running the code.


let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

//What is the return value of map in the following code? Why?


['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});


[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

let arr = [[1, 2], [3, 4]].map(num => num * 2);
console.log(arr)


/////

[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]


let result = [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});


console.log(result);

// Which array and which element is the current value of the callback. 

// an array 
// inside => 2 objects

// filter - select the element based on the truthiness of the return value (if it fits condition then, it will be selected) - if it's true it will  be selected 


// 1st iteration of the callback function 

// object = { a: 'ant', b: 'elephant' }

// Callback function body 

// Object.keys(object) // ['a', 'b']

// ['a', 'b'].every(key => object[key][0] === key)
// returns true if every element is a truthy value. 

  // Let's dive into this callback function 

  // 1st iteration 
   
  // key = 'a' 

  // in the callback function body

  // object[key][0] === key

  // object[key] is equal to 'ant'
  // object['a'] which means we are referring to `ant`[0] 
  // object['a'][0] = 'a' === key // true 

  // 2nd iteration 

  // key = 'b'  
  // in the callback function body
  // object[key][0]
  // object['b'] is equal to 'elephant'
  //  object['b'][0] is referencing e
  // 'e' === 'b' // not true

  //Given the following code, what will the final values of a and b be? Try to answer without running the code.

let a = 2;
let b = [5, 8];
let arr = [a, b]; // [2, [5, 8]]

arr[0] += 2; // [4, [5, 8]] // now arr[0] is pointing to 4. it doesn't change a. 
arr[1][0] -= a; // [4, [3, 8]] // we are modifying the value of array reference by b and also arr[1] at index 0 - change this value into 3. therefore, it affects both b and arr. 

console.log(a); // 2 

console.log(b); // [3, 8]

//Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];



// input: an array
// output: a new array
// newArray = [{ a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 }];

//acces all the key in the object

let result = arr.map(obj => {
  let newObj = {}; // no issues here
  let keys = Object.keys(obj); // no issues, 1st iteration is ['a'], 2nd iteration is ['b', 'c']
  
  for(let i = 0; i < keys.length; i++) {
  
    newObj[keys[i]] = obj[keys[i]]; 
    newObj[keys[i]] += 1; 
  
  } 
  return newObj;
}) 



console.log(result); // 
console.log(arr);

// We have one new problem

// Problem ; we are only accessing key 0, but the second object has two key value pair
// we don't do anything with the second value

// Nested object inside an array 

// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];

// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// Notes:

// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.

// PEDAC 
// Input: Nested object inside an array (each object represents developers information (firstName, country etc))
// Output: number (represent the count of developers using Javascript from Europe, or 0 if none)

// Rules
// - the function takes a nested array with objects 
// - Return the count of developers coming from Europe
// - Or return 0 if none. 

// Example 
// In the list above, we have only one developer using Javascript from Europe which is Noah, therefore count = 1. 


// Data Structure 
// - array => number (count)
// to count, we have to iterate through this array 
// hunch - we have to use some sort of iteration method 

// Approach or Algorithm 
// - we need count variable (to count the developers), set count = 0 
// - iterate through the developers, for each developer 
//   - check if the developer's continent is Europe && language is Javascript
//      - if true count += 1
//      - if not, do nothing.
// - return count. 

let list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];


function countDevelopers(developers) {
  let count = 0; 
  developers.forEach(developer => {
    if (developer['continent'] === 'Europe' && developer['language'] === 'JavaScript') {
      count += 1;
    }
  })
  
  return count;
}

console.log(countDevelopers(list1)); // 1

// developers is an array 

// invoke the each method 

// 1st iteration, developer is this object
// developer is referencing { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' }

// developer['continent'] => Europe
// developer['language'] => 'JavaScript'

// ( Europe=== 'Europe' && 'JavaScript'  === 'JavaScript' ) =>  true

// count + 1 

// 2nd iteration
// developer is referencing   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' }

// developer['continent'] => Oceania
// developer['language'] => 'JavaScript'

// but when we run the  conditional statement it doesn't evaluate as true. 
// ('Oceania'=== 'Europe' && 'JavaScript'  === 'JavaScript' ) =>  false

// we don't do anything - nothing happens 


// 3rd iteration 

// developer is referencing     { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },

// developer['continent'] => Asis
// developer['language'] => 'HTML'

// but when we run the  conditional statement it doesn't evaluate as true. 
// ('Asia'=== 'Europe' && 'JavaScript'  === 'HTML' ) =>  false

// we don't do anything 

// do the same with 4th iteration 

// return count. 

//Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};


//The return value should look like this:

//[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

// Let's write what the array should look like? 

// only the fruits , no vegetables. 

// grape, carrot, apple, apricot

// return value [['Red', 'Green'], 'MEDIUM', ['Red', 'Green'], ['Orange'], 'LARGE'];

// PEDAC 

// Input = object of object (each object represents fruit or vegetable)
// Output = array (selected detail based on a condition)

// Rules
// - If it's a fruit, select the colors
// - if it's a vegetable, select the size 

// "select"  ?? do we need to use filter??/ 

// Data Structure 
// object => array
// - we are "selecting" based on condition, therefore maybe we should use "filter"

// Approach 
// - we need to return an array, we can create an array or if we use filter (filter return a new array)
// - iterate through the object, for each (item  which is either fruit or vegetable) 
//   - check if fruit, select colors with each color capitalized
//       - we put colors into our "array" that we want to return
//       - and we must also iterate through each color, for each color, capitalize it 
//   - check if vegetable, select size uppercased 
//       - we put size into the our "array", AND we must also uppercase it. 
// - return array

// Two concerns
// - We have to iterate through each color
//  How are we iterating through object??? - grab the keys and then iterate through the keys. 


function something(obj) {
  let keys = Object.keys(obj); // ['grape', 'carrot', 'apple', 'apricot', 'marrow'] 
  let newArr = [];
  
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let item = obj[key];

    if (item['type'] === 'fruit') {
      newArr.push(item['colors'].map(color => capitalize(color)));
    } else if (item['type'] === 'vegetable') {
      newArr.push(item['size'].toUpperCase());

    }

  }
  return newArr; 
}

// Question - is it possible to use filter????  - filter is not the right choice

// map ???  - transforming each object into what we want it to be.




function something2(obj) {
  let keys = Object.keys(obj); 
  
  return keys.map(key => {
    let item = obj[key];
    
    if (item['type'] === 'fruit') {
      return item['colors'].map(color => capitalize(color)); //  [ 'Red', 'Green' ] this is a truthy value
    } else if (item['type'] === 'vegetable') {
      return item['size'].toUpperCase();
    }
  })
}

function something3(obj) {
  let keys = Object.keys(obj); 
  let newArr = [];
  
  keys.forEach(key => {
    let item = obj[key];
    
    if (item['type'] === 'fruit') {
      newArr.push(item['colors'].map(color => capitalize(color)));
    } else if (item['type'] === 'vegetable') {
      newArr.push(item['size'].toUpperCase());
    }
  })
  return newArr;
}

console.log(something3(obj)); // I think this is going to return an array , with only 3 items

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}
