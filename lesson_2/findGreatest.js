// eslint-disable-next-line max-len
// a function that determines which number in a collection has the greatest value
// Given a collection of integrer

// Iterate through the collection one by one
// saved the first value as the starting value
//for each iteration, compare the saved value with the current value
// if the current value is bigger than the saved value
// - reassign the current value to the saved value
// otherwise move to the next value in the collection
// After iterating through the collection, return the save value

let numbers = [2,4,5,3,6,7,8,4,5,9,3,5,10,8];

function findGreatest(num) {
  let savedNumber = num[0];

  num.forEach(number => {
    if (number > savedNumber) {
      savedNumber = number;

    }
  });
  return savedNumber;
}

console.log(findGreatest(numbers));