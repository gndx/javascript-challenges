const trialDivision = (number) => {
  // first exclude negative, numbers less than two,
  // and decimal numbers
  if (number < 2 || number % 1 != 0) {
    return false;
  }

  for (let i = 0; i <= number; i++) {
    for (let j = 0; j <= number; j++) {
      if (i * j === number && i !== number && j !== number) {
        return false;
      }
    }
  }
  return true;
};

module.exports = trialDivision;
