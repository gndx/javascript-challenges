const trialDivision = (number) => {
  if (number <=1 ) return false;
  for (let i = 2; i <= number-1; i++)
    if (number % i == 0) return false;
  return true;
}

module.exports = trialDivision;