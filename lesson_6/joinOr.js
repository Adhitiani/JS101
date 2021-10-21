//Write a function named joinOr that produces the following results:

joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"

//Problem
// A function that take 3 arguments: an array and two strings;
// It takes two default parameter, the separator comma and 'or' string before the last element.
// the second argument is the string deliminator, the default parameter is the comma
// the third argument is the additional word before the last, the default parameter has 'or' as it's argument
// The function return the string of the array element, divided by the deliminator and additional word before the last element

//Input: an array, two string
// output: a string

//Data Structure
//Input: an array, two string
// output: a string

//Algorithm:
// create a result variable and assign it to an empty string
// if the array only have one element, convert it to string and add it to the empty string
// if the array has two elements, iterate over the two element, convert and return the element divided by the third argument;

// else:
// itterate over the array, in each itteration:
// -- convert the number element to a string char
// -- concatenate the char
// -- concatenate the deliminator
// -- concatenate the empty space
// -- if the element is the last array:
// -- concatenate the word string argument and the empty space

function joinOr(arr, del = ', ', word = 'or'){
  let join = '';

  if (arr.length === 0) {
    return join
  }
  
  if (arr.length === 1) {
    return join += String(arr[0]);
  }

  if (arr.length === 2) {
     return join += `${String(arr[0])} ${word} ${String(arr[1])}`
  }

  if (arr.length > 2) {
    for (let index = 0; index < arr.length; index++) {
      let currEl = arr[index];

      if (index === arr.length - 1) {
        join += word + ' ' + currEl;
      } else {
        join += currEl + del;
      }
    }
    return join;
  }
  
}


console.log(joinOr([1, 2, 3]));
console.log(joinOr([1, 2, 3], '; '));
console.log(joinOr([1, 2, 3], ', ', 'and'));
console.log(joinOr([]));
console.log(joinOr([5]));
console.log(joinOr([1, 2]));

joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"

//if input array has three or more values, return the concatenation of all of the values as follows:
//Add the delimiter between each pair of values
//Add the join word before the last value