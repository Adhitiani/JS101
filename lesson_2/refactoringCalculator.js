let readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(MESSAGES['welcome']);

while (true) {


  prompt(MESSAGES["firstNumber"]);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES['invalidNumbers']);
    number1 = readline.question();
  }

  prompt(['secondNumber']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES['invalidNumbers']);
    number2 = readline.question();
  }

  prompt("What operation would you like to perform?\n 1) Add 2) Substract 3) Multipy 4) Divide");
  let operation = readline.question();

  while (!['1','2','3','4'].includes(operation)) {
    prompt('Must choose 1, 2, 3, or 4.');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;

  }

  prompt(`The result is ${output}`);


  prompt('Would you like to perform another calculation? (y/n)');
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;

}

