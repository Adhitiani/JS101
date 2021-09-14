//Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

//Write a function that takes no arguments and returns a string that contains a UUID.


/*
PEDAC
Problem:
- What is UUID?
- it containst: 
32 hexadecimal chars in a string
- 0 -9 digits
- a - f letters
Broken into 5 sections 8 - 4 - 4 - 4 - 12

Rules:
- a function takes no arguments and return a string that contains a UUID

Example:
'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'

Data structus and Algoritm

input: nothing
output: a string

Algoritm
create a variable name digits and character and assign it to a string of 0 -9 digits and a - f letters
create a uuid variable and assign it to  an emtpy string
create a random character from the letter variable and assign it to a variable:
- use the random math method combine with charCodeAt



*/

function createUuid() {
   let uuid = '';
  let digitsLetter = '0123456789abcdef';
  let digitLetterLength = digitsLetter.length
  let uuidLength = 36;
  
for (let i = 0; i < uuidLength; i++) {
  uuid += digitsLetter.charAt(Math.floor(Math.random()*digitLetterLength))
}

  return uuid
}
 
createUuid()





//}