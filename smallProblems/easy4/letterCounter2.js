//Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

//Words consist of any sequence of non-space characters.




//wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
//wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
//wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
//wordSizes('');    

// A function that take a string
// -- the string is consist of zero or more space separated words-
// the function returns an object that:
// --show the number of words of different size
// --- object: key is the length of the word, value is the number of the word in that size
// words is any sequence of non space character

// input : string
// output: object

// rule:
//  explicit rule:
//  -- returns an object that shows the number of word of diffrent size
//  -- Words consist of any sequence of non-space characters
// impicit rule:
//  -- when the string is an empty string, it returns an empty object



// data Structure
// input : string
// output: object
// an array

//Algoritm
// - create a variable result and assign it to an emtpy object
// - split the string into individual word(any sequence of char separated by space) and put them in the array => an array of word
// loop trough the array of word, in each iteration:
// split the word into array of individual char
// filter the world that only letter
// put the char into the word
//- initialized a variable to the length of the word -- this will be the key of the new object
// - check whether the length of the word is equal to 0, if so return the empty object
// - if the object with the same key is there (exist) incremeant the value of the object
// - if the object is not there (doesn't exisxt ywt) the value is one

function wordSizes(str) {
  let object = {};
  let wordInArray = str.split(' ');
  
  wordInArray.forEach(word => {
    let key = word.length;
   
    if (key === 0) {
      return object
    }; 
    
    if(object[key]) {
      object[key] += 1;
    } else {
      object[key] = 1;
    }
  })
  return object
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes(''); 





