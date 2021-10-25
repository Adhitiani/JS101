//Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").



let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];



// console output -- your output sequence may be different
//car => 4
//truck => 3
//SUV => 1
//motorcycle => 2

// we need a variable with an empty object
// - - the name of the car will be the Object keys
// - - the number of occurrences will be the value
// iterate over the array, in each iteration:
// - check if the object[element] is exist
// -- if exist increament the value of obejct by 1
// -- if not assign the value to 1
// iterate over the key of the object and in each itteration log key => value


const countOccurrences = arr => {
 let object = {};
 arr.forEach(carName => {
   object[carName] = object[carName] || 0;
   object[carName] += 1;
 })
 for(let name in object) {
   console.log(`${name} => ${object[name]}`)
 }
}

countOccurrences(vehicles);