const trialDivision = (number) => {
	// your code here
	if (!Number.isInteger(number) || number <= 1) {
		return false;
	}
	let isPrime = true;
	for (let i = 2; i < parseInt(Math.sqrt(number)) + 1; i++) {
		if (number % i == 0) {
			isPrime = false;
			break;
		}
	}
	return isPrime;
};

module.exports = trialDivision;
