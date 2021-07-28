let alphabet = 'abcdefghijklmnopqrstuvwxyz';

function cleanUp(str) {
  let cleanStr = '';

  for (let index = 0; index < str.length; index++) {
    let currentChar = str[index];
    let previousChar = str[index -1];
    
    
    if (alphabet.includes(currentChar)) {
      cleanStr += currentChar;
    } else if (!alphabet.includes(previousChar)) {
      continue;

    } else {
      cleanStr += ' ';
    }
    
  }
  return cleanStr;
}

console.log(cleanUp("---what's my +*& line?"));
