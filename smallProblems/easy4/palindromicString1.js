function isPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  console.log(reverse)

  
  if(string === reverse) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true