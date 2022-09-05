const trialDivision = (number) => {
  const isFloat = Number(number) === number && number % 1 !== 0;
  if (number <= 1 || number == 4 || typeof number != 'number' || isFloat) {
    return false;
  }
  for (let x = 2; x <= number/2; x++) {
    if (number % x == 0) {
      return false;
    }
  }
  return true;
};

module.exports = trialDivision;
