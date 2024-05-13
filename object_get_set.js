const user = {
    _email: 'arleen@gmail.com',
    _password: 'hello',



    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const arleen = Object.create(user)
console.log(arleen.email);