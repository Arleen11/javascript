// Immediately Invoked Function Expressions(IIFE)

// (function db() {
    //named IIFE
//     console.log(`DB connected`);
// })()



// ( function database()  {
//     console.log(`DB is connected`);
// } ) () ;


(function() {
    var message = 'anoymous IIFE';
    console.log(message);
}) ();

( (name) => { //IIFE
    console.log(`DB has been connected ${name}`);
}) ('arleen')
