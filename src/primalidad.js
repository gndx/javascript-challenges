const trialDivision = (number) => {
  if (number < 2 || number === 4 || number % 1 !== 0) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return true;
};

module.exports = trialDivision;
