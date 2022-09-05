const trialDivision = number => {
  number =parseInt(number)
  if (number < 2) return false;
	for (let k = 2; k < number ; k++) {
		if (number % k == 0) return false;
	}
	return true;

}

// console.log(trialDivision(10.5))

module.exports = trialDivision
