const boy = ['ram', 'hari', 'shyam']
const girls = ['sita', 'gita', 'laxmi']

boy.push(girls)

// console.log(boy);
// console.log(boy[3][1]);

// const allboy = boy.concat(girls)
// console.log(allboy);

const allboy = [...boy, ...girls]
//console.log(allboy);

const another_array = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray('arleen'))
console.log(Array.from('arleen'))
console.log(Array.from({name: 'arleen'})) // creates array of letters

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));


