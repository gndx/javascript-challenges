const trialDivision = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return n > 1;
}

module.exports = trialDivision;
