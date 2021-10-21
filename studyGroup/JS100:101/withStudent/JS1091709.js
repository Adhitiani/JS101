// snippet 1
let animal = "dog"

const speak = animal => {
  if (animal === undefined) {
    console.log("Bark")
  } else {
    console.log("Meow")
  }
  }

speak();

// Snipet 2

let greeting = "Hello";

const test = str => {
  str = str.concat(" World!");
  return str;
}

test(greeting);
console.log(greeting);

// snipet 3

let greeting = ["Hello"];

const test = arr => {
  arr = arr.concat("World!");
  return arr;
}

console.log(test(greeting));
console.log(greeting);

// snipet 4

let greeting = ["Hello"];

const test = arr => {
  arr = arr.push("World!");
  return arr;
}

console.log(test(greeting));
console.log(greeting);

// snipet 5

let b = 2;

function test(a) {
  a = b;
  return a;
}

test(5);
console.log(b);
console.log(a);

// snippet 6

let b = 2;

function test(b) {
  return b += 5; // b = undefined + 5
}

console.log(test());

// snipet 7

let result = [1, 2, 3, 4, 5].filter((num) => num + 1);
result;
//[1, 2, 3, 4, 5]

let something = ['a', 'b', 'c'].filter(function (item) {
  console.log(item);
});
something;
// []

// snippet 8

let snippet = ["ant", "bear"].map((elem) => {
  if (elem.length > 3) {
    return elem;
  }
});

console.log(snippet);

// explain these methods: Array.prototype.forEach, Array.prototype.map, and Array.prototype.filter