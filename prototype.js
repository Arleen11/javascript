// let myName = 'arleen   '
// let mySurname = 'Nakarmi  '

// console.log(myName.trueLength);

let people = ['ram', 'hari' , 'shyam' ]

let attributes = {
    ram: 'boy',
    hari: 'adult',
    shyam: 'senior citizen',
    

    getFeatures: function(){
        console.log(`ram is a ${ram}`);
    }
}

Object.prototype.laxman = function(){
    console.log(`laxman is present in all objects`);
}

Array.prototype.heyLaxman = function(){
    console.log(`laxman says hello`);
}
//people.laxman()
// attributes.laxman()
// people.heyLaxman()
// attributes.heyLaxman()


//inheritance

const user= {
    name:'arleen',
    email:'arleen123@gmail.com'
}
const teacher = {
    teachClass: true
}
const teachingSupport = {
    isAvailable: false
}

const TASupport ={
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: teachingSupport
}
teacher.__proto__= user

//modern syntax
 
// Object.setPrototypeOf(teachingSupport, teacher)


// let anotherUsername = "aryan  "
// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`${this.name}`);
//     console.log(`true length is ${this.trim().length}`);

// }
// anotherUsername.trueLength()


importantAction('hello')
    .then((res) => {
        console.log(res);
        return likeTheVideo('javascript interview Questions')
    })
.then((res) => {
    console.log(res);
    return sharetheVideo('javascript interview questions')
})
.then((res)=>{
    console.log(res);
})
.catch((err)=> console.error(err))

console.log('STOP');

// Promise.allSettled([
//     importantAction('hello'),
//     likeTheVideo('javascript interview Questions'),
//     sharetheVideo('javascript interview questions')

// ]) 