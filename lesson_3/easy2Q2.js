let numbers = [1, 2, 3, 4, 5];
let reverseNumber = [];
let index = numbers.length -1;

numbers.forEach(function(num) {
  num = numbers[index];
  reverseNumber.push(num);
  index -= 1
}
);

reverseNumber

let anotherReverseNumbers = [];
numbers.forEach(function(num) {
  anotherReverseNumbers.unshift(num);
})

anotherReverseNumbers

let shortNumbers = [...numbers].sort((num1, num2) => num2 - num1 );
shortNumbers

let reverseNum = [...numbers].reverse();
reverseNum
numbers
