//const tinderUser =new Object() //singleton object
const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = 'hari'
tinderUser.isLoggedIn =false

//console.log(tinderUser);

const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'arleen',
            lastname: 'nakarmi'
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1:'a', 2: 'b'}
const obj2 = {3:'c', 4: 'd'}
const obj4 = {5:'e', 6: 'f'}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: 'arleen@gmail.com'
    },
    {
        id: 2,
        email: 'hari@gmail.com'
    },
    {
        id: 3,
        email: 'sita@gmail.com'
    }, {
        id: 4,
        email: 'gitan@gmail.com'
    },
]
 
users[1].email
// console.log(tinderUser); 

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: 'math',
    price: '999',
    courseInstructor : 'arleen'

}
//course.courseInstructor //usually tedious

const {courseInstructor: instructor} = course // makes it easier instead of writing full name
console.log(instructor); 
//console.log(courseInstructor);


const {price: price} = course
console.log(price);