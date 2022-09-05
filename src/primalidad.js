const trialDivision = (number) => {
  if (number === -1 || number === 0 || number === 1) return false;
  for (var i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return parseInt(number) === number;
};

module.exports = trialDivision;