let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

//Each output line should follow this pattern:


//(Name) is a (age)-year-old (male or female).

Object.keys(munsters).forEach(name => {
  console.log(`${name} is a ${munsters[name].age}-year-old ${munsters[name].gender}`)
})

let totalFemaleAge = 0;

Object.entries(munsters).forEach(elem => {
  if (elem[1].gender === 'female') {
    totalFemaleAge += elem[1].age
  }
})

totalFemaleAge


