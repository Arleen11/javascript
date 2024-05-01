// function sum(a ,b){   
//   return  a + b
  
// }
// const value = sum(3, 5)
// console.log(`the value is ${value}`);



 function loginUserMessage(username) {
    if(!username){
    console.log('please enter a username');
    return
    }
    return `${username} just logged in`
}
const firstname = loginUserMessage 
//console.log(loginUserMessage('arleen'))
//console.log(loginUserMessage());
console.log(firstname('arleen'));