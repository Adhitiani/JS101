//Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

//Example:


//console.log(
 // greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
//);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.


/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  - If any part of the problem is unclear, ask for clarification.
  - Do your functions or methods only return something or does it only have side effects?

PROBLEM STATEMENT:
Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

RULES (make sure to check for things not explicitly stated):
  - Takes two arguments, an array and an object
  - The array contain 2 or more elements whhen combined with adjoining spaces, produce a person's name
  - The object contain two keys, title and occupation and the appropriate value
  - return a greeting that uses the person's full name and mention the persons title.
  -
  -

EDGE CASES:
  -
  -
  -

QUESTIONS:

-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE:
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

// logs Hello, John Q Doe! Nice to have a Master Plumber around.


------------------Data Structures and Algorithm--------------------
 Class:
  - constructor: 
    EXPECTED INPUT:
    -
    -
    -
    -
    -
    EXPECTED OUTPUT:

  - Method: 
    EXPECTED INPUT: greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
    - convert the array arguments to strings and concatenated the strings and return the strings
    - use tempelate literal to log the string.
    
    EXPECTED OUTPUT: Hello, John Q Doe! Nice to have a Master Plumber around.

*/
//---------------------------Code with Intent------------------------

function greetings(arr, obj) {
  let name = arr.join(' ');
  console.log(`Hello, ${name}! Nice to have a ${obj.title} ${obj.occupation} around`)
};

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
 );
 