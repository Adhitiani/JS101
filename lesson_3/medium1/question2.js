/*
Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";
Return a new string that swaps the case of all of the letters:

`tHE mUNSTERS ARE CREEPY AND SPOOKY.`

PEDAC
input: string
output: replace capital letter with small letter and small letter with Capital letter.

1.split the string into a letter
2. iterate through the letter, if the character is small case replace it with cap letter,
3. if the letter is in capital letter replace it with small letter.


*/

let str = "The Munsters are creepy and spooky.";
let char = str.split('');

let charSwap = [];

 for(let index = 0; index < char.length; index++) {
    let changeChar;
if (char[index] === char[index].toUpperCase()) {
    changeChar = char[index].toLowerCase();
    charSwap.push(changeChar);
  } else {
    changeChar = char[index].toUpperCase();
    charSwap.push(changeChar);
  }
 };

charSwap.join('')



