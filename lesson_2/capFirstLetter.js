// Write a function that change every first letter of string elements of an array

let names = ['emma', 'rian', 'eddy', 'chris', 'anna'];

function capitalize(names) {
  for ( let index = 0; index < names.length; index++) {
    names[index] = names[index][0].toUpperCase() + names[index].slice(1);
  }
}

capitalize(names);
console.log(names);

function anotherCapitalize (names) {
  let capNames = [];
  // eslint-disable-next-line max-len
  return capNames.push(names.map(name => name[0].toUpperCase() + name.slice(1)));

}

anotherCapitalize(names);
console.log(names);