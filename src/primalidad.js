const trialDivision = (number) => {
  const integeredNumber = Math.floor(number);
  if (integeredNumber < 2) {
	return false;
  }
  if (integeredNumber == 2) {
	return true;
  }
  if (integeredNumber % 2 == 0) {
	return false;
  }
  for (let i = 3; i <= Math.sqrt(integeredNumber); i += 2) {
	if (integeredNumber % i == 0) {
	  return false;
	}
  }
  return true;
}

module.exports = trialDivision;