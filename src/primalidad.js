const trialDivision = (number) => {
  // your code here
  if (number <= 1) return false;
  if (!Number.isInteger(number)) return false;
  for (let i = 2; i <= Math.round(Math.sqrt(number)); i++) {
    if (number % i === 0)
      return false;
  }
  return true;
}

module.exports = trialDivision;