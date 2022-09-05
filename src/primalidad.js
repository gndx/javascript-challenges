const trialDivision = (number) => {
  if (number <= 1 || number - Math.floor(number) > 0) return false;
  for (let i = number; i >= 1; i--) {
    if ((i !== number && i !== 1) && number % i === 0) return false;
  }
  return true;
}

module.exports = trialDivision;