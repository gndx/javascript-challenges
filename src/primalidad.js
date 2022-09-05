const trialDivision = (number) => {
  if (!Number.isInteger(number)) return false;
  let divisor = number - 1;
  while (divisor > 1) {
    if (number % divisor-- == 0) return false;

  }
  return number > 1;
}

module.exports = trialDivision;