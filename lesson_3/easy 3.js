//Question 1
//Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

//numbers.length = 0;

//numbers.splice(0);

while(numbers.length) {
  numbers.pop()
}
numbers

//question 2
console.log([1, 2, 3] + [4, 5]);
console.log( 1 + "hero")
console.log( 1 + [2, 3])

//quesiton 4
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
arr2[3] = 10;
console.log(arr1)

//question 5
/*function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}*/

function isColorValid(color) {
  return (color === "blue" || color === 'green'); 
}

let isColorValid2 = color => color === "blue" || color === "green";


function isColorValid3(color) {
  return color.includes("blue", "green");
}
const isColorValid4 = color => ["blue", "green"].includes(color);



