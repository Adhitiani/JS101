//Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// ask the length in meters
// ask the widht in meters
// log the area in both square meters and square feet

let readline = require('readline-sync');

console.log('Enter your input type (meters / feet)')
let inputType = readline.question();

if (inputType === 'meters') { 

console.log('Enter the length of the room in meters')
let lengthInMeter = readline.question();

console.log('Enter the width of the room in meters')
let widthInMeter = readline.question();

let areaInMeter = Number(lengthInMeter) * Number(widthInMeter);

let areaInFeet = areaInMeter * 10.7639;

console.log(`The area of the room is ${areaInMeter} squaremeters (${areaInFeet.toFixed(2)} square feet).`)

} else {

  console.log('Enter the length of the room in feet');
  let lengthInFeet = readline.question();

  console.log('Enter the width of the room in feet');
  let widthInFeet = readline.question();

  let areaInFeet = Number(lengthInFeet) * Number(widthInFeet);
  let areaInMeter = areaInFeet / 10.7639;

  console.log(`The area of the room is ${areaInFeet} square feet (${areaInMeter.toFixed(2)} squaremeters).`)
}

