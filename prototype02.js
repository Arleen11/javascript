function person(fName, lName){
    this.firstName = fName
    this.lastName = lName
}
//person.prototype.gender = 'Male';
person.prototype.fullName = function (){
    return this .firstName +' '+ this.lastName
}

const person1 = new person('arleen', 'nakarmi')
const person2 = new person('hari', 'bahadur')

//console.log(person1.gender);
console.log(person1.fullName())