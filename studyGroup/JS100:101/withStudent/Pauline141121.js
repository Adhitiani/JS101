// Given a total due and an array representing the amount of change in your pocket, 
// determine whether or not you are able to pay for the item. Change will always be 
// represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, 
// since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
// Examples

// Notes

//     quarter: 25 cents / $0.25
//     dime: 10 cents / $0.10
//     nickel: 5 cents / $0.05
//     penny: 1 cent / $0.01

function changeEnough(change, itemCost) {
  let totalChange = 0;
  change.forEach((num, index) => {
    /*if(index === 0) {
      totalChange += num * 0.25;
    } else if (index === 1) {
      totalChange += num * 0.10;
    } else if (index === 2) {
      totalChange += num * 0.05;
    } else {
      totalChange += num * 0.01;
    }
    */
    switch (index) {
      case 0:
      totalChange += num * 0.25;
      break;
      case 1:
      totalChange += num * 0.10;
      break;
      case 2:
      totalChange += num * 0.05;
      break;
      case 3:
      totalChange += num * 0.01;
      break;
    }
  })

   return totalChange >= itemCost; 

}

// function changeEnough(change, itemCost) {
//   const COINS = [25, 10, 5, 1];
//   let totalChange = change
//     .map((coin, index) => coin * COINS[index])
//     .reduce((acc, coin) => acc + coin);
//   return totalChange >= itemCost * 100;
// }

/*
input: an array (The ammount change) and a number( a total)
an array [quarter, dimes, nickels, pennies]
example [25, 20, 5, 0]

output: boolean (true or false)
true when the total in array is greater than the number, otherwise false.

Rules:
//     quarter: 25 cents / $0.25
//     dime: 10 cents / $0.10
//     nickel: 5 cents / $0.05
//     penny: 1 cent / $0.01

Example: 
[25 * .25, 20 * .10, 5 * .5, 0 * .01] => 6.25 + 2 + .25 + 0 = 8.50
 cents => $ // cents / 100
 25 cents => 25/ 100 = 0.25

 ALgoritm:
 1. convert the array element to dollar and add the total.
 - array[0] * 0.25
 - array[1] * 0.10
 - array[2] * 0.05
 - array[3] * 0.01

 Iterate over the array and convert each element to dollar, and add the total.


 2. compare the total with the itemcost value
  when the total > itemcost value return true
  when the total < itemcost value rturn false



([30, 40, 20, 5] 7.5, 4, 1, .05 $12.55



*/



console.log(changeEnough([2, 100, 0, 0], 14.11) === false);
console.log(changeEnough([0, 0, 20, 5], 0.75) === true);
console.log(changeEnough([30, 40, 20, 5], 12.55) === true);
console.log(changeEnough([10, 0, 0, 50], 13.85) ===false);
console.log(changeEnough([1, 0, 5, 219], 19.99) ===false);
console.log(changeEnough([1, 0, 2555, 219], 127.75) === true);
console.log(changeEnough([1, 335, 0, 219], 35.21) === true);
