const factorial = (number) => {
  // for loop for mul the total.
  var total = 1; 
	for (i=1; i<=number; i++) {
		total *= i; 
	}
	return total;
}

module.exports = factorial;