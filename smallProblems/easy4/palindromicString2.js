function isRealPalindrome(string) {
  let alphaNumeric = string.toLowerCase().split('').filter(char => {
    return 'abcdefghijklmnopqrstuvwxyz0123456789'.includes(char);
  })
 let original = alphaNumeric.join('')
  
  let reverse = alphaNumeric.reverse().join('');
  console.log(reverse)

  
  if(original == reverse) {
    return true;
  } else {
    return false;
  }
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false