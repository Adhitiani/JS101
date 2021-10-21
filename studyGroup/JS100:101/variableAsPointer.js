// What does this program log and why?
let animal = "dog"
const speak = animal => {
  if (animal === undefined) {
    console.log("Bark")
  } else {
    console.log("Meow")
  }
}
speak();

/*
This program logs 'Bark' to the console. This code snippet demonstrates
concepts of variable shadowing
if no arguments are passed to a function's parameters, the parameters are assigned the default value undefined.
On line 11 we call the speak() function and we do not pass any arguments to the function.
The speak() function has one parameter, animal, however as no arguments are passed to it, animal is assigned the default value undefined.
The function definition of speak() creates a new function scope for local variables. Because the local function variable animal shares the same name as the global variable animal declared on line 1, variable shadowing prevents us from using the outer scoped variable.
Therefore, on line 4 since animal contains the primitive value undefined, this results in the strict equality operator returning true, which is a truthy value. The if clause is then executed, and Bark is logged to the console.
*/

let pets = ['dragon', 'turtle']
let newPets = pets
pets = []

console.log(newPets)

/*
Here's my full revised answer:
Line 7, `log` method call with the value referenced by the `newPets` global variable passed in as an argument will output `[ 'dragon', 'turtle' ]`, because:
1) `newPets` is initialized to the value referenced by the global variable `pets`
2) `newPets` isn't reasigned to another value
On line 1, the global variable `pets` is initialized to an array value. On line 2, the global variable `newPets` is initialized to the value referenced by the global variable `pets`. Now, each variable references the same array object in memory. On line 5, `pets` is reassigned to an empty array. The reassignment of `pets` doesn't affect what `newPets` references. Each variable points to a value and reassigning either one doesn't affect the other. On line 7, when the value referenced by `newPets` is passed as an argument to the `log` method call, `newPets` still references the array `['dragon', 'turtle']`.
This illustrates the concept of variables as pointers. A variable cannot point to another variable. Variables always point to values in memory. If a variable is assigned to another variable, it points to the value referenced by the other variable. When a variable is reassigned, it is reassigned without affecting what other variables point to.
*/

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

/*
The program logs 'hi' and 'hello' The reason behind this is that objects are mutable; strings and other primitives are not. Also, variable reassignment, such as that on line 10, doesn't mutate the original object even when the object is mutable. Thus, line 9 mutates the foo by assigning its a property to a new value ('hi'). Therefore, the code on line 15 logs hi. On the other hand, line 10 reassigns the argument2 variable, but it doesn't mutate the string represented by qux. Thus, line 16 logs hello: the original value of the qux variable.

*/

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
array2 = [5, 6];
console.log(array2);
console.log(array1);

/*
The code outputs:

Copy Code
[ 1, 4, 3]
This result demonstrates that array1 and array2 reference the same array: if we change an element using array1, it also changes that element in array2. The opposite is also true: if we change an element in array2, that also changes the element in array1.

This code also demonstrates that assignment of an array to another array doesn't create a new array, but instead copies a reference from the original array (array1 above) into the target array (array2).

Copy Code
> array1[1] = 4
= 4

> array1
= [ 1, 4, 3 ]

> array2
= [ 1, 4, 3 ]

*/

let data = { account: 1234, company: "IBM" }; // line 1 
let newData = data;                           // line 2 
newData.ceo = "Arvind Krishna";               // line 3 
newData.salary = "1.5 million";               // line 4  
                                              // line 5 
console.log(data);                            // line 6 
console.log(newData);                         // line 7 


let a = 5
let b = a
 a = 8


/////

let sherlock = {
  surname: 'Holmes',
  address: { city: 'London' }
};

let john = {
  surname: 'Watson',
  address: sherlock.address
};

john.surname = 'Lennon';
john.address.city = 'Malibu';

console.log(sherlock.surname); 
console.log(sherlock.address.city); 
console.log(john.surname); 
console.log(john.address.city); 

///
let batman = {
  address: { city: 'Gotham'}
};

let robin = {
  address: batman.address
};

batman.address = { city: 'ibiza'};
console.log(robin.address.city)

///
let ilana = {
  address: {city: 'New York'}
};

let place = ilana.address;
place = { city: 'Boulder'};
let abbi = {
  address: place,
};

console.log(ilana.address.city);

///

let fruits = ['orange', 'bananaa'];
let breakfast = fruits;

function lunch(food) {
  breakfast = food;
}

lunch('pasta')

console.log(fruits);
console.log(breakfast);

///

let flowers = ['rose', 'jasmine', 'lily'];
let plants = flowers;

flowers[0] = 'orchid';
plants = ['oak tree']


console.log(flowers);
console.log(plants);

///
let array3 = [1, 2, 3];
let array4 = array3;
array3[1] = 4;
array4 [2] = [5, 6];
console.log(array3);
console.log(array4);

//
let c = [1, 3];
let d = [2];
let arr = [c, d];

c[1] = 5;
arr[0][1] = 8;
console.log(arr); 
console.log(d);   

//

function addVeg(arr, vegetable) {
   arr.push(vegetable);
}

let vegetables = ['onion', 'carrot', 'spinach'];

addVeg(vegetables, 'tomato')
console.log(vegetables);

//

let cities = ['Tokyo', 'Jakarta']
let newCities = cities
cities = []

console.log(newCities);


