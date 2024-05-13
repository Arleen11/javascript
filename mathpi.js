const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor);

const number = {
    name: 'thing',
    price: 299,
    isAvailable : true,

    orderNumber : function(){
        console.log('error has occured');
    }
}

console.log(Object.getOwnPropertyDescriptor(number, 'name'));

Object.defineProperty(number, 'name', {
   // writable: false,
    enumerable : false
})
console.log(Object.getOwnPropertyDescriptor(number, 'name'));

for (let [key, value] of Object.entries(number)) {
    if(typeof value !== 'function'){
        console.log(`${key} :${value}`);
    }
    
}
