const name = 'arleen'
const repoCount = 50

//console.log(name + repoCount + ' value');

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('arleennn')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = ' arleen '
console.log(newStringOne.trim());

const url = 'https://google.com/hello%20world'
console.log(url.replace('%20' , '-'));

console.log(url.includes('hari'))

console.log(gameName.split('_'));
 
