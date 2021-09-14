//Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.



let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// return an array that contain:
// - the color of the fruit - capitalized
// - the size of vegetable - in uppercase

// input : object
// output: an array

//1. extract the values of the object and return it to an array - an array with the subarray that contain all those value.
//2. loop trhough the array, in each iteration:
// - if the type is fruit then return the color in capitalized - function helper to capitalized
// - if the type is vegetable then return the size in uppercase


let array = Object.values(obj);

array.map(obj => {
  if(obj['type'] === 'fruit') {
    return obj['colors'].map(color => {
      return capitalized(color);
    })
  } else {
    return obj['size'].toUpperCase();
  }
})

function capitalized(word) {
  return word[0].toUpperCase() + word.slice(1);
}



