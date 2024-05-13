class user{
    constructor(email , password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password} arleen`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const arleen = new user('arleen22@gmail.com', 'hello')
console.log(arleen.email);
