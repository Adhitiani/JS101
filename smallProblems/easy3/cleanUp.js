
//Clean up the words

//Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).


//cleanUp("---what's my +*& line?");    // " what s my line


//Problem:
// input: a string
// output: a string with all the non-alphabetic char replace by space
// Rules:
//never have consecutive spaces

// We need a result variable and assign it to an empty string 

//iterate over the string, in each iteration:
// 
// check if the char is alphabetic:
// if so push it into an empty string 
// if not:
// -- check if the previous one in the variable result is an empty space:
// ---  if it is do nothing
// ---  if its not concatenate the variable result with an emtpy space
// return the result variable

function cleanUp(string) {
  let cleanStr = '';
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'

  for (let idx = 0; idx < string.length; idx ++) {
    let currChar = string[idx];

    if (alphabet.includes(currChar.toLowerCase())) {
      cleanStr += currChar;
    } else if (cleanStr[cleanStr.length - 1] !== ' ') {
      cleanStr += ' ';
    };
    
  };
  return cleanStr; 
}



//console.log(cleanUp("---what's my +*& line?"))

function cleanUp2(string) {
  let cleanStr = '';
  

  for (let idx = 0; idx < string.length; idx ++) {
    let currChar = string[idx];

    if (isLetter(currChar)) {
      cleanStr += currChar;
    } else if (cleanStr[cleanStr.length - 1] !== ' ') {
      cleanStr += ' ';
    };
    
  };
  return cleanStr; 
}

function isLetter(char) {
return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z'
}


console.log(cleanUp2("---what's my +*& line?"))