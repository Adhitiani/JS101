//Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

//Words consist of any sequence of non-space characters.


/*
PEDAC
Problem:
1. What is word?
words consist of any sequence of non space char
2. How to handle an empty string? it return an empty object

input: a string
output: object
rules:
explicit requirment:
 - take a string and return an object that shows the number of words of different sizes
implicit requirement:
- if the input is an empty string it returns reuslt is an empty object

algoritm
1. create avariable result and assign it to an empty object
2. check if the given string is emtpy return the variable result
2. create a variable named words and assign it to an array of individual word
3. create a variable named wordLength and assign it to the lenght of each word element
4


*/

function wordSizes(str) {
  let wordCount = {};
  if (str === '') return wordCount;
  
  let words = str.split(' ');
  let wordLength = words.map(elem => elem.length);
  console.log(wordLength);
  
  wordLength.forEach(elem => {
    wordCount[elem] = wordCount[elem] || 0;
    wordCount[elem] += 1
  })
  
  return wordCount
  
}



wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}





