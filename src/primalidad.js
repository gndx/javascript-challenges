const trialDivision = (number) => {
	// your code here
	if (number === 1 || number <= 0 || number % 1 != 0) return false
	for (i = 2; i < number; i++) {
		if (number % i == 0) return false
	}
	return true
}

module.exports = trialDivision;