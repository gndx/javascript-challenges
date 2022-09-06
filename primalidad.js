const trialDivision = (n) => {
  if (n<=1 || !(Number.isInteger(n))) 
    return false;
  for (let i = 2; i <= n-1; i++)
    if (n % i == 0)
      return false;
  return true;
}

module.exports = trialDivision;