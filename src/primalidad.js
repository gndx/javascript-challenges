const trialDivision = (number) => {
  // your code here
  if (number > 1 && number % 1 == 0) {
    for (let i = 2; i <= number/2; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
  return false;
}

module.exports = trialDivision;
