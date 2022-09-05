const trialDivision = (number) => {
  if (number <= 1) return false;
  if (number % 2 == 0 && number > 2) return false;
  if (!Number.isInteger(number)) return false;
  const s = Math.sqrt(number);
  for (let i = 3; i <= s; i += 2) {
    if (number % i === 0) return false;
  }
  return true;
}

module.exports = trialDivision;