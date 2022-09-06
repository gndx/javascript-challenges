function factorial(number) {
  var total =1
  if (number == 0|| number == 1){ 
		return 1; 
	}else{
    return number*factorial(number-1);
  }
  
  
}

let number = 10;
total = factorial(number)
console.log("The factorial of " + number + " is " + total);

module.exports = factorial;