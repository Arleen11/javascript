// function person(){
//     this.name = 'Arleen Nakarmi'

// }
//  person.prototype.age = 20;
//  const person1 = new person();

//  person.prototype = {age:23}
//  const person2 = new person()


//  console.log(person1.age);
//  console.log(person2.age);

function createUser(username, score){
    this.username = username
    this.score = score
} 
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const user = new createUser('hari',800)
const user2 = new createUser('shyam',1000)

user.printMe()