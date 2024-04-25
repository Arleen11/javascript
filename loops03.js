// for of

const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}

const greetings = 'hello world'
for (const greet of greetings) {
    //console.log(`each character is ${greet}`);
}

//Maps 

const map = new Map()
map.set('nep','nepal')
map.set('ch','china')
map.set('fr','france')


//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);

}
const myOject = {
    'game1': 'NFS',
    'game2': 'COD',

}
// for (const [key, value] of object) {
//     console.log((key), ':-', value);
// }



