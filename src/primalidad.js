const trialDivision = (number) => {
  countDivisors = 0;

  for(let i = 1; i <= number; i++) {
    if((number % i) === 0) {
      countDivisors++;
    }
  }

  return countDivisors === 2 ? true : false;
}

module.exports = trialDivision;