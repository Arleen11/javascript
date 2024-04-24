

function myName() {
    console.log('a');
    console.log('r');
    console.log('l');
    console.log('e');
    console.log('e');
    console.log('n');
}

//myName()

function addTwoNumbers(number1, number2){ //parameters
    // console.log(number1 + number2);
    // let result = number1 + number2
    // return result
    return number1 + number2
}
//addTwoNumbers(3 , 4)  //arguements

const result = addTwoNumbers(3,5)
//console.log('result', result);

function loginUserMessage(username = 'hari'){
    if(!username){
    console.log('please enter a username');
    return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage('arleen'))
//console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(200, 300, 400, 2000));
const user= {
    username: 'arleen',
    price: 299
}
function handleObject(anyOject) {
console.log(`Username is ${anyOject.username} and price is ${anyOject.price}`);
}

//handleObject(user)
handleObject({
    username : 'shyam',
    price: 399
    
})
const myNewArray = [700 ,600, 100]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500])); //shows second array

