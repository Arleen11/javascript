const alphabet = ['a','b','c','d','e']
const numbers = [1,2,3,4,5]

//const [a, , c, ...rest]= alphabet


// const newArray = alphabet.concat(numbers)
const newArray = [...alphabet, ...numbers]
// console.log(rest);
// console.log(a);
// console.log(c);
//console.log(newArray);

function sumAndMultiply(a,b,) {
    return [a+b, a*b, a/b]
    
}
const [sum, multiply, division] =sumAndMultiply(4,5) //  shows destructuring in the array values
//console.log(array);
// console.log(sum);
// console.log(multiply);
// console.log(division);




//******************************************usingObjects***********


const personOne = {
    name: 'arleen',
    age : 22,
    address : 'paknajol',
    state : 'alive'
}

const personTwo = {
    name: 'shyam',
    age : 42,
    address : 'new road',
    state : 'deceased'
}

const {name, age, ...rest}= personTwo
console.log(name);
console.log(age);
console.log(rest);