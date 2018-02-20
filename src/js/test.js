var evens;
var odds = evens.map(v => v + 1); 
var nums = evens.map((v, i) => v + i);

var name = 'John', mood = 'happy';
console.log(`Hey ${name}, are you feeling ${mood} today?` );

var a = 'dev';
var b = (a === 'dev') ? 'build' : 'pub';
console.log(b);
