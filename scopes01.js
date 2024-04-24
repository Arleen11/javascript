//var c = 300
let a = 300
if (1<4) {
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = 'arleen'
    console.log(username);
    function two(){
        const website = 'google'
        console.log(website);

    }
    //console.log(website);

    two()
}

//one()

if(true){
    const username = 'arleen'
    if (username === 'arleen') {
        const website = ' yahoo'
        //console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);


//**************************************more****************************** */

console.log(addone(5)); //works because of hoisting

function addone(num){
    return num + 1
}


addTwo(7) // does not work 
const addTwo = function(num){
    return num +2
}

