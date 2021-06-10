function triangel(string) {
 let str = "";
for (let i = 1; i <= string; i++) {
  for (let k = 0; k < string - i; k++) {
    str += " ";
  }
  
  for (let j = 0; j < i; j++) {
   str += "*";
  }
 str += "\n";
} 
  return str;
}

triangel(9)

