function orderPizza(topping, callback) {
    console.log("Placing order for a pizza with " + topping);
    // Simulate making the pizza (wait 2 seconds)
    setTimeout(function() {
      console.log("Pizza is ready!");
      callback();
    }, 2000);
  }
  
  function eatPizza() {
    console.log("Mmm, pizza with " + topping + " is delicious!");
  }
  
  const topping = "mushrooms";
  orderPizza(topping, eatPizza); // Pass eatPizza as the callback function
  