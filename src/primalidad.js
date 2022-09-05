const trialDivision = (number) => {
  // your code here
  if (number <= 1 || number === 4 ) return false;
  if ( !Number.isInteger(number)) return false;
  for (let x = 2; x < number / 2; x++) {
		if (number % x == 0) return false;
	}
	return true;
}

module.exports = trialDivision;