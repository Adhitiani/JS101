//PEDAC
// understanding the Problem:
/*
- write a program that outputs The Flintstones Rock! 
- write it for 10 times
- each line indented 1 space to the right of the line above it

input : strings
output: strings, log 10 times, each line indented 1 space to the right of the one above it

1. initialize a counter variable (at 1)
2. we loop throught 1 to 10:
for each counter log the string
3.increament the counter by 1
*/

for(let padding = 1; padding <= 10; padding++) 
{
  let str = "The Flintstone";
  console.log(str.padStart(str.length + padding, ));
}