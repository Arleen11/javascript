let name = "Alice"; // Global scope

function sayHello() {
  let message = "Hello, "; // Local scope to sayHello function

  function innerHello() {
    console.log(message + name); // Inner function can access message and name
  }

  innerHello();
}

sayHello(); // This will output "Hello, Alice"
//console.log(message); // This will cause an error because message is not in the global scope
