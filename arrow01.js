// const user = {
//     username : 'arleen', // dont forget comma
//     price: 399,

//     welcomeMessage: function(){
//         console.log(`${this.username} welcome to website`); // this.userame  helps to include the current context
//         console.log(this);
//     }

// }
// console.log(user.welcomeMessage())
// user.username = 'hari'
// user.welcomeMessage()

//console.log(this);

// function one(){
//     console.log(this);

// }
// one()
 
// const name = () => {
//     let username = "arleen"
//     console.log(this.username);
// }
// //name()

// const addTwo = (num1, num2 ) => {
//     return num1 + num2
// }

// const add = (num1, num2 ) => num1 + num2
const add = (num1, num2 ) => (num1 + num2) // this can also be done

// console.log(add(3, 4));
