const trialDivision = (number) => {
  if (number < 1 || !Number.isInteger(number)) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
};

module.exports = trialDivision;
