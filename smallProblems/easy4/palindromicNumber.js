

function isPalindromicNumber(num) {
  let string = num.toString();
  let reverse = string.split('').reverse().join('');
 
  if (string === reverse) {
    return true;
  } else {
    return false;
  }
};

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true