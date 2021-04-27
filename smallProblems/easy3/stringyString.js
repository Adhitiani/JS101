//Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

//Examples:
//stringy(6);    // "101010"
//stringy(9);    // "101010101"
//stringy(4);    // "1010"
//stringy(7);    // "1010101"

// Question:
// input: a positif integer
// output: string
//rules:
// Explicit rules:
// - take a positive integer and return string of alterating '1' and '0'
// - strating with a '1'
// - the length of the string should match the given integer

//1.initialize a variable that will hold the output string to an empty string
//2. the length of the string should equal to the given integer / function argument
//3. initialize a counter variable to 0;
//4. use a loop to add the string '1' and '0' to the variable string number until the counter = the integer.
// - 
//

function stringy(integer) {
  
let stringNumber = '';
stringNumber.length = integer;
let counter = 1;
  
while (counter <= integer) {
  stringNumber += '1';
  counter++;
if(counter > integer) break;
  stringNumber += '0';
  counter++
 
  }

  return stringNumber
}

stringy(6);    // "101010"
stringy(9);    
stringy(4);    // "1010"
stringy(7);    // "1010101"