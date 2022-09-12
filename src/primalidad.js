const trialDivision = number => {
  const factorsArr = [];
  let factor = 2;

  while (number > 1) {
    if (number % factor === 0) {
      factorsArr.push(factor);
      number /= factor;
    } else factor += 1;
  }
  return factorsArr.length === 1;
};

module.exports = trialDivision;
