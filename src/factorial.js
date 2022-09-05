const factorial = (number) => {
	var total = 1; 
	for (i=1; i<=number; i++) 
	    {
		total = total * i; 
    	}
	return total; 
}

module.exports = factorial;
