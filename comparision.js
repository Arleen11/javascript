//console.log('2' > 1);
//console.log('02' > 1);

//console.log(null > 0);
//console.log(null >= 0);

//console.log(undefined == 0);

// === is strict check aka datatype
 //console.log('2' === 2);

 

//*********************************Datatypes***************************** */

//Primitive datatype(7 types)
//string / number / boolean / null/ undefined  / symbol / BigInt /

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp =null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);// not same

const bigNumber = 909890809800


//Reference (Non Primitive)
//Array / objects / functions /

const people = ['ram',' hari', 'shyam', 'sita']

let myObj = {
    name : 'arleen',
    age : 23,
}
 
const myFunction = function(){
    //console.log("hello world");
}

//console.log(typeof id);

//***************************************************************** */

//Stack (Primitive), Heap (Non-Primitive)
let myName = 'arleen'
let anothername = myName 
 anothername = 'ram' 
console.log(anothername);

let userOne = {
    email: 'arleen@gmail.com',
    address: 'kathmandu'
}

let userTwo = userOne

userTwo.email = 'hari@gmail.com'
console.log(userOne.email);
console.log(userTwo.email);



