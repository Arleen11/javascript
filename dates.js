//dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2024, 0, 22)
// let myCreateDate = new Date(2024, 0, 22, 5, 7)
// let myCreateDate = new Date('2023-01-22')
let myCreateDate = new Date('01-15-2024')
// console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));
 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.get()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",

})
