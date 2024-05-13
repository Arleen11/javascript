
// function sub(c,d,de){
//     let res= c - d
//     de(res)
// }
// sub(3,4, (value) =>console.log(value))

function add (a , b , cd){
    let result = a+ b 
    cd(result)
}

add(2, 4, (val) =>  console.log(val))
// add(400, 10, (res) => console.log(res))