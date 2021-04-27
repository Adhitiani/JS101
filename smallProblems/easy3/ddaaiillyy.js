//Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.


/*crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
*/

// Problem:
// input: a string
// output: a new string
// Rules:
// Explicit rules:
// - return the value with all concecutive duplacte character collaps into a singel character
// ALG:
// split the string to individual char and assging it to an array
// initilized a variable and assign it to an empty array to hold output
// initialzed a variable and assign it to the first elements as the starting point

// iterate over the array:
// - if the current character is the same as the next character continue,
// - if the current character is different, reassign to the current character and push it to the new variable
// after the loop finish iterating return the new array
// convert the array to the string by calling the join method on the array.

function crunch(str) {
  let singChar = [];
  let char = [];
  
    
 

 for ( let index = 0; index < str.length; index++) {
    let currentChar = str[index];
    
    if (currentChar !== char) {
       char = currentChar
       singChar.push(char);
    }  
    
  }
    return singChar.join('')
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                            // ""

function removeDuplicateCharacters(string) {
  return string
    .split('')
    .filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join('');
}
console.log(removeDuplicateCharacters('aa'));

[1, 2, 3].indexOf(1)