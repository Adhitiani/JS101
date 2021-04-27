/* eslint-disable max-len */

/* PROBLEM
  - Build a mortgage calculator
  - It needs three pieces of information:
    1. the loan amount
    2. the Annual Percentage Rate (APR)
    3. the loan duration

  - From the above, calculate the following two things:
    1. monthly interest rate
    2. loan duration in months

  - Calculate montly payment using following formula:
    let m = p * (j / (1 - Math.pow((1 + j), (-n))));

        m = monthly payment
        p = loan amount
        j = monthly interest rate
        n = loan duration in months

PEDAC (for the basic calculator without any adjustment):

UNDERSTAND THE PROBLEM
  inputs:
    the loan amount
    the Annual Percentage Rate (APR)
    the loan duration

  outputs:
    monthly payment

  Terms of the problem domain:
  // eslint-disable-next-line max-len
  // eslint-disable-next-line max-len
  - monthly intereset rate: divide the APR by 12 to reflect the 12 months in the year.

  Explicit and Impicit Requirement:
  - monthly interest rate needed for the formula
  - loan duration in months needed for the formula
  - use explicit name instead of single-letter variables
  - print the payment amount as a dollar and cents ( e.g., $123.45)
  - decide the input format:
      should the user enter an interest rate of 5% as 5 or .05? (as 5)
      should the user enter loan duration in months or years? (in years)

  Clarifying Questions:
  What if there is no interest rate? (monthly payment = loan payment / loan duration in months)

  Mental Model:
  Get three information from the user input: the loan amount, the Annual Percentage Rate(APR), the loan duration, convert inputs to numbers, convert APR to percentage in decimal, compute monthly interest rate and loan durations in months and use them to calculate monthly loan payment.

EXAMPLE/ TEST CASE
  (Based on the loan calculator website)
  inputs:
    the loan amount: $100,000.00
    the Annual Percentage Rate (APR): 5%
    the loan duration: 10 years
  outputs:
    monthly payment : $1,060.66

DATA STRUCTURE AND ALGORITHM
  START

  1. GET the loan amount from the user input, convert it to number and SET it to loanAmount.
  2. GET the Annual Percentage Rate(APR) from the user iput, convert it to number and SET it to annualPercentageRate.
  3. GET the loan duration in years, convert it to number and SET it to loanDurationYears.
  4. Compute monthly interest rate ( (annualPercentageRate / 100) / 12) SET it to monthlyPercentageRate.
  5. Compute loan duration in months( loanDurationYears / 12), SET it to loanDurationMonths
  6. Calculate and return monthly payment = loanAmount * (monthlyPercentageRate / (1 - Math.pow((1 + monthlyPercentageRate), (-loanDurationMonths)))) in monthlyPayment
  7. PRINT monthlyPayment in 2 decimal place

  END

  Check the algorithm works with the test case:
  inputs:
    the loan amount: $100,000.00
    the Annual Percentage Rate (APR): 5%
    the loan duration: 10 years
  outputs:
    monthly payment : $1,060.66

  START
  1. GET the loan amount from the user input, convert it to number and SET it to loanAmount. (loanAmount = 100000)
  2. GET the Annual Percentage Rate(APR) from the user iput, convert it to number and SET it to annualPercentageRate. (annualPercentageRate = 5)
  3. GET the loan duration in years, convert it to number and SET it to loanDurationYears. (loanDurationYears = 10)
  4. Compute monthly interest rate, (annualPercentageRate / 100) / 12, SET it to monthlyPercentageRate. (monthlyPercentageRate = 0.004166)
  5. Compute loan duration in months, loanDurationYears * 12, SET it to loanDurationMonths.(loanDurationMonths = 120)
  6. Calculate and return monthly payment = loanAmount * (monthlyPercentageRate / (1 - Math.pow((1 + monthlyPercentageRate), (-loanDurationMonths)))) in monthlyPayment. (monthlyPayment = 100000 * (0.4166 / (1 - Math.pow((1 + 0.4166), (-120))));
  7. PRINT monthlyPayment ($1,060.66)
  END */

//CODE

let readline = require('readline-sync');

function prompt(message) {
  console.log(`** ${message} **`);
}
//amount input validation function
function invalidAmountInput(number) {
  return Number.isNaN(Number(number)) ||
         number.trim() === '' ||
         Number(number) <= 0;
}

// interest rate input validation function
function invalidInterestInput(number) {
  return Number.isNaN(Number(number) ||
          number.trim() === '' ||
          Number(number) < 0);
}

// monthly payment with interest function
function paymentWithInterest(
  loanAmount, monthlyPercentageRate, loanDurationMonths) {
  let payment = Number(loanAmount) *
        (monthlyPercentageRate /
        (1 - Math.pow((1 + monthlyPercentageRate),(-loanDurationMonths))));

  return payment;

}

// monthly payment with no interest function
function paymentNoInterest(loanAmount, loanDurationMonths) {
  let payment = loanAmount / loanDurationMonths;
  return payment;
}

prompt("-----Welcome to Mortgage Calculator!-----");

while (true) {
  prompt("-----------------------------------------");

  let loanAmount = readline.question("\n=> What is your loan amount?\n");
  //validating user input
  while (invalidAmountInput(loanAmount)) {
    prompt("Please enter a number only");
    loanAmount = readline.question("=> What is your loan amount?\n");
  }

  let annualPercentageRate = readline.question("=> What is your annual percentage Rate(APR)? (enter 0 if no interest rate)\n");
  //validating user input
  while (invalidInterestInput(annualPercentageRate)) {
    prompt("Please enter a number only");
    annualPercentageRate = readline.question("=> What is your annual percentage Rate(APR)? (enter 0 if no interest rate)\n");
  }

  let loanDurationYears = (readline.question("=> What is your loan duration (in years)?\n"));
  //validating user input
  while (invalidAmountInput(loanDurationYears)) {
    prompt("Please enter a number only");
    loanDurationYears = readline.question("=> What is your loan duration (in years)?\n");
  }

  let monthlyPercentageRate = (Number(annualPercentageRate) / 100) / 12;
  let loanDurationMonths = Number(loanDurationYears) * 12;

  let monthlyPayment;
  // with interest rate
  if (Number(annualPercentageRate) !== 0) {
    monthlyPayment = paymentWithInterest(
      loanAmount, monthlyPercentageRate, loanDurationMonths);

    let totalPayment = monthlyPayment * loanDurationMonths;

    prompt(`Your payment every month is $${monthlyPayment.toFixed(2)}`);
    prompt(`Your total of ${loanDurationMonths} payments is $${totalPayment.toFixed(2)}`);
    prompt(`Your total interest is $${(totalPayment - loanAmount).toFixed(2)}`);

    //no interest rate
  } else {
    monthlyPayment = paymentNoInterest(loanAmount, loanDurationMonths);
    prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
  }

  let answer = readline.question("\n=> Do you want to calculate other amount? (y/n)\n");
  if (answer[0].toLowerCase() !== 'y') break;
  console.clear();
}
