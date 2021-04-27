
//Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";
//The output will look something like the following:

//{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }

//input = a string
// output = an object
// create an object that express the frequency with which each letter occurs in the string

//ALGH
//1. initialized a variable to an empty object
//2. split the string to an array of character and assgin it to a variable only the character without the space.
//3. iterate over an array:
//4. if the character appear in the empty object variable, add the value by one if notassgin the value on to it. 

let freqLetter = {};
 let arrChar = statement.split('').filter(char => char !== ' ')

 
arrChar.forEach(char => {
   if(Object.keys(freqLetter).includes(char)) {
     freqLetter[char] += 1;
   } else {
     freqLetter[char] = 1
   }
   })

freqLetter
 
