const trialDivision = (number) => {
	// your code here
	if (number === 1 || number <= 0 || number % 1 != 0) return false
	for (index = 2; index < number; index++) {
		if (number % index == 0) return false
	}
	return true
}

module.exports = trialDivision;