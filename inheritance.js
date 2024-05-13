class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)  
        this.email = email
        this.password = password 
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const client = new teacher('hari' , 'hariram', '12345')
// client.addcourse()
const person = new user('person')
// person.addcourse()
// person.logMe()
console.log(client instanceof teacher);
