//singleton

//object literals
//Object.create

const mySym = Symbol('key1')

const JsUser = {
    name: 'arleen',
    'full name': 'arleen nakarmi',
    [mySym]: 'mykey1',
    age: 23,
    location: 'Kathmandu',
    email: 'arleen@gmail.com',
    isLoggedIn: false,
    lastLogin: ['Monday', 'Saturday']
}

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser['full name']);
// console.log(JsUser[mySym]);

JsUser.email = 'arleen22@hotmail.com'
//Object.freeze(JsUser) //does not let the data change below it
JsUser.email = 'arleen22@mail.com'
// console.log(JsUser);

JsUser.greeting = function(){
    console.log('hello JS user');
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



