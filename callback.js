// hello(leave);
// wait(goodbye);


// function hello(callback){
//     console.log('hello');
//     callback();
// }
// function leave(){
//     console.log('leave');
// }
// function wait(){
//     console.log('wait');
// }
// function goodbye(){
//     console.log('bye bye');
// }





// function sum(callback , x, y){
//     let result = x +y
//     callback(result)
// }

// function displayConsole(result){
//     console.log(result);
// }

// function displayPage(result){
//     document.getElementById('hello').textContent = result
// }
// sum(displayPage, 1, 2)



setTimeout(function(){
    console.log('timer');
},4000)

function x(y) {
    console.log('X');
    y()
 }
x(function y(){
    console.log('y');
})
