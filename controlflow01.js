// if 

// if(condition){   //if true execute, if false not execute

// }

// const isUserLoggedIn = true

// if  (isUserLoggedIn){

// }

// const temperature = 90
// if (temperature < 50){
//     console.log('temperature is less than 40');
// }else{
//     console.log('temperature is greater than 50');
// }

// const score =  300
// if(score > 100){
//     let power = 'fly'
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

const balance = 20

//if(balance > 500)   console.log('test'),console.log('test2'); // can also be done but not recommended

// if(balance < 500){
//     console.log('less than 500');
// } else if (balance < 750){
//     console.log('less than 750');

// }else if(balance < 900){
//     console.log('less than 900');
// }else {
//     console.log(`balance is ${balance}`);
// }

const userLoggedIn = true 
const debitCard = true
const loggedInFromGoogle = false 
const loggedInFromEmail = true 


if(userLoggedIn && debitCard){
    console.log('allow to buy course');
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log('logged in');
}
