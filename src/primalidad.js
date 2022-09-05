const trialDivision = (number) => {
  const intNumber = Math.trunc(number);
  if (intNumber <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(intNumber); i++) {
    if (intNumber % i == 0) {
      return false;
    }
  }

  return true;
};

module.exports = trialDivision;
