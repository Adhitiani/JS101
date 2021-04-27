let redlinc = require('readline-sync');
let noun = redlinc.question('Enter a noun:');
let verb = redlinc.question('Enter a verb:');
let adjective = redlinc.question('Enter an adjective:');
let adverb = redlinc.question('Enter an adverb:');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
The blue ${noun} ${verb}s q${adverb} over the lazy ${noun}.
The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`)