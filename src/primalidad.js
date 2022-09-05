const trialDivision = (n) => {
  if (n % 1 !== 0) return false;
  const squareRoot = Math.sqrt(n);
  for (let i = 2; i <= squareRoot; i++)
    if (n % i === 0) return false;
  return n > 1;
}

module.exports = trialDivision;