
//Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.


let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};



Object.values(obj).forEach(elem => {
  elem.forEach(word => {
    word.split('').forEach(char => {
     if('aiueo'.includes(char)) {
       console.log(char)
     };
    })
  })
})

