//What is this code log and why?
let array = [1, 2, 3];
array[-1] = 0;
array['number'] = 100;

console.log(array.length);
console.log(Object.keys(array));
console.log(array.forEach(arr => console.log(arr));)