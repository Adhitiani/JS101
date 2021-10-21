// Use a reduce function to sum the values in the object:

/*
from objArr, build a new array out of keys

then use that new array with reduce to sum the values
*/
let numArr = [];
let objArr = [{a: 5}, {b: 6}, {c: 3}, {d: 9}];

objArr.forEach(innerObject => {
  numArr.push(Object.values(innerObject)[0])
})

let sum = numArr.reduce((ele,acc) => ele += acc);
console.log(sum);