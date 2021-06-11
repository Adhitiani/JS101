
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

function runningTotal(arr) {
  let currentNum = 0;
  return arr.map(num => {
    return currentNum += num;
  })
};