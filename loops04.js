const myObject = {
    js : 'javascript',
    cpp: 'cpp',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
   //console.log(myObject[key]);
   //console.log(`${key} shortcut is for ${myObject[key]}`);
}
const programming = ['js', 'rb', 'py', 'java' ,'cpp']
for (const key in programming) {
    //console.log(key);
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('nep','nepal')
// map.set('ch','china')
// map.set('fr','france')

// for (const key in map) {
//    console.log(key);
// }