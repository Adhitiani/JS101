// /* 
// - working with Arrays, especially the iteration methods working with Arrays, especially the iteration methods (forEach, map, filter, find, and sort)
// - object properties
// - working with Objects; accessing keys and values of an Object as arrays
// - side effect

//  */


// // Array.isArray(); // true or false

// // let arr = ['foo', 'bar', 'qux'];
// // arr['boo'] = 'hoo';
// // arr[-1] = 374;
// // arr;               // => [ 'foo', 'bar', 'qux', boo: 'hoo', '-1': 374 ]
// // arr.length;        // => 3 (not 5!)
// // arr.forEach(element => console.log(element)); // prints: foo, bar, qux
// // Object.keys(arr);  // => [ '0', '1', '2', 'boo', '-1' ]

// // What is an empty array? 

// // It depends. 



// // let arr1 = [];
// // arr1.length = 3; 
// // console.log(arr1.length);
// // Object.keys(arr1);  // []


// // - Empty slots count into the length of the array 
// // - Non-elements, (arrays with elements whose keys are not non-negative integers) can be set as a "non-element" of an array. Why? Because arrays are objects. 


// // (forEach, map, filter, and find)
// // - How does it work in general? What's the return value for each method? 
// // - What is the difference between map and filter? 

// // let arr3 = [1, 2, 3];

// // let result = arr3.map(elem => {
// //   elem + 1;
// // })

// // [undefined, undefined, undefined]


// // Given the code, below, explain what's happening? 


// // let arr4 = [[1, 2], [3, 4], [5, 6]];

// // arr4.forEach(arr => {
// //   arr.forEach(elem => {
// //     console.log(elem + 1);
// //   })
// // })


// let arr5 = [1, 2, [3, 4]];

// // console.log(arr5[2][0]);

// // How does sort work? Be able to explain it? 

// // This is the essence of how sort works. 
// // - it takes a callback 
// //   - the callback should return the values based on greater than, less than and equal. 

// // a > b  return 1

// // a < b return -1 

// // a === b return 0 

// let arr6 = [1, 2, 3, 5, 5, 5676, 2, 123]

// // arr6.sort((a, b) => a - b);
// arr6.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === b) return 0;
// });

// console.log(arr6);

// // OOP 

// let meat1 = {price: 20};
// let meat2 = {price: 30};



// // Sort them by the expensive price ;

// // Should the more expensive price come first or less expensive price come first? 
// ///


// // In the case of meat, you have to define how to compare the two values, which is to use the price. 

// let arr7 = [meat1, meat2]

// arr7.sort((a, b) => { 
//   if (a.price > b.price) return -1;
//   if (a.price < b.price) return 1;
//   if (a.price === b.price) return 0;
// });


// console.log(arr7);

// // arr6.sort((a, b) => a - b); by default
// // value , more than 1, less than 1, or 0 
// // 

// let obj = {
//   'a name': 'Jane',
//   age: 30,
// }


// // Log to the console Jane and 30. 


// console.log(obj['a name'])
// console.log(obj.age)


// obj.'a name' // you can't access dot notation using literal string. 
// obj.name // 


// // - the idea you can use variables with bracket notation and not with dot notation. 

// let person = {              // line 1
//   name: 'Jane', 
//   age: 24                   // line 3
// }                           // line 4
                      
// function changeName(name) { // line 6
//   person[name] = name; 
//   console.log(person);      // line 8
//   return person; 
// }                           // line 10

// changeName('Jessie');       // line 12


// What is a side effect? 

// 5 points that can be considered a side effect 
// - if we're re-assigning the value a non-local variable 
// - if we're mutating the value reference by a non-local variable. 
// - calling something that is not local to your program  //console.log
//   - writing or reading from outside of your proragm, Math.random , Date object, 
// - raises an exception without handling it. 
// - if you call a method that has a side efffect 

    


// let name = 'Pete';

// function changeName() {
//   name = 'Jake';
// }

/*A function is said to have side effects if it does any of the following:

It reassigns any non-local variable. Reassigning a variable in the outer scope would be a side effect.

It mutates the value of any object referenced by a non-local variable. Mutating an array or object argument, for instance, would be a side effect.

It reads from or writes to a file, network connection, browser, or the system hardware. Side effects like this include writing to the console log and reading input from the terminal.

It raises an exception without handling it.

It calls another function that has side effects.

*/


//The following functions have side effects:

// side effect: logs output to the console
// returns: undefined

// function displayTotal(num1, num2) {
//   console.log(num1 + num2);
// }

// // side effect: mutates the passed-in array
// // returns: updated array

// function append(targetArr, valueToAppend) {
//   targetArr.push(valueToAppend);
//   return targetArr;
// }

Why does this return this object? 

let person = {              // line 1
  name: 'Jane', 
  age: 24,
  jessie: 'jessie'// line 3
}   

let person = {              // line 1
  name: 'Jane', 
  age: 24                   // line 3
}                           // line 4
                      
function changeName(name) { // line 6
  person[name] = name; 
  console.log(person);      // line 8
  return person; 
}                           // line 10

changeName('Jessie');       // line 12


