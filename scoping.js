function outerFunction() {
    let x = 5;
  
    function innerFunction() {
      console.log(x); // will output 5
    }
  
    innerFunction();
  }
  
  outerFunction();
  