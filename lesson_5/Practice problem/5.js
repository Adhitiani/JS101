let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

//Compute and display the total age of the male members of the family.

/*
1. create a variable named totalMaleAge and assign it to 0;
2. create an array of the object values using Object method
2. access the outer object using for each method
3. access the sub obejct using for each
   - if gender = Male then totalMaleAge += age

*/

let totalMaleAge = 0

Object.values(munsters)

Object.keys(munsters).forEach(name => {
if (munsters[name].gender === 'male') {
  totalMaleAge += munsters[name].age
}
})

totalMaleAge
