let alphabet = 'abcdefghijklmnopqrstuvwxyz';

function cleanUp(str) {
  let cleanStr = '';
  for (let index = 0; index < str.length; index++) {
    let currentChar = str[index];
    if (currentChar = str[index - 1]) continue;

    if (alphabet.includes(currentChar)) {
      cleanStr += currentChar;
    } else {
      cleanStr += ' ';
    }
    
  }
  return cleanStr;
}

console.log(cleanUp("---what's my +*& line?"));
