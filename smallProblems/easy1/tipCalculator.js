/* PROBLEM
- Create a simple tip calculator. 
- The program should prompt for a bill amount and a tip rate. - The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
- You can ignore input validation and assume that the user will enter numbers.

UNDERSTAND THE PROBLEM
inputs:
- a bill amount
- a tip rate

outputs:
- the tip
- total amount of bill

Terms of the problem domain:
- a bill amount: the cost of costumer in a number literal
- a tip rate: a percentage of the tip, in a number literal
- the tip: a bill amount multiply by the tip rate
- total amount of the bill: a bill amount + the tip

Explicit and Impicit Requirement:
1. The program needs two pieces information:
- a bill amount - should be in natural number. Coerces the input in string to number
- a tip rate - in natural number. Coerces the input in string to number
2. Using the two informations calculate and log:
- the tip - in USD $ with 2 decimals
- total amount of the bill : in USD $ with 2 decimals.
3. Ignore input validation and assume that the user will enter numbers.

Clarifying Questions:
- What if the input is in floating number? use parseFloat() function to coerce string to number.

Mental Model:
Create a simple tip calculator. The program will receive two information, the bill amount and the tip rate in strings. Convert them to numbers and calculate the tip and the total amount of the bill then log them to the console.

EXAMPLE/ TEST CASE
Input:
What is the bill? 200
What is the tip percentage? 15

Output:
The tip is $30.00
The total is $230.00

DATA STRUCTURE AND ALGORITHM
Mental Model:
Create a simple tip calculator. The program will receive two information, the bill amount and the tip rate in strings. Convert them to numbers and calculate the tip and the total amount of the bill then log them to the console.

START

1. GET input the bill amount, convert it to number, and SET to billAmount
2. GET input the tip percentage, convert it from string to number and SET to tipNumber
3. Convert the tipNumber to number represent the percentage by dividing it with 100 and SET it to tipNumber
4. Compute the tip by multipling the bill amount with the tip percentage and SET it to tip.
5. Compute and retrun the sum of the tip and the billAmount and SET the return to total.
6. PRINT the tip and the total with USD symbols.

END

EXAMPLE
Input:
What is the bill? 200
What is the tip percentage? 15

Output:
The tip is $30.00
The total is $230.00

START

1. GET input the bill amount, convert it to number with parseFLoat() function, and SET to billAmount -> billAmount = 200
2. GET input the tip percentage, convert it from string to number and SET to tipNumber -> tipNumber = 15
3. Convert the tipNumber to number represent the percentage by dividing it with 100 and SET it to tipPercentage -> tipPercentage = (15 / 100 = 0.15)
4. Compute the tip by multipling the bill amount with the tip percentage and SET it to tip. -> tip = 200 * 0.15 = 30
5. Compute and retrun the sum of the tip and the billAmount and SET the return to total. -> total = (200 + 30 = 230)
6. PRINT the tip and the total with USD symbols. -> The tip is $30.00
The total is $230.00

END

CODE */

let readline = require('readline-sync');

console.log('Welcome to the tip calculator');

while (true) {

  let billAmount = parseFloat(readline.question('What is the bill?\n'));

  let tipPercentage = parseFloat(readline.question('What is the tip percentage\n'));

  let tip = billAmount * (tipPercentage / 100);

  let total = billAmount + tip;

  console.log(`The tip is $${tip.toFixed(2)}`);
  console.log(`The total is $${total.toFixed(2)}`);

  let answer = readline.question("Would you like to do another calculation? (yes/no)\n");

  if (answer[0].toLocaleLowerCase() !== 'y' ) break;

}
