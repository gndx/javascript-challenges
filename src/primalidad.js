const trialDivision = (number) => {
  if (number == 4 || number <=1 || !Number.isInteger(number)) return false;
	for (i = 2; i < number / 2; i++) {
		if (number % i == 0) return false;
	}
	return true;
}

module.exports = trialDivision;