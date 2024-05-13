class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
   static createId(){
        return `123`
    }

}
const arleen = new user('arleen')
//console.log(arleen.createId())

class teacher extends user{
     constructor(email, username){
        super(username)
        this.email = email
     }
}
const hari = new teacher('hari', 'hari@123.com')
//console.log(hari.createId())
hari.logMe()