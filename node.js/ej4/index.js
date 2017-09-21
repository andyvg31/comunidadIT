const oneLinerJoke = require('one-liner-joke');
var getRandomJoke= oneLinerJoke.getRandomJoke;
var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('stupid');
console.log(getRandomJoke);
console.log(getRandomJokeWithTag);