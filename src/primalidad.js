const trialDivision = (number) => { 
  if (number % 1 !== 0) return false;
  for (let i = 2; i < number; i++)
    if (number % i === 0) return false;
  return number >= 2;
}

module.exports = trialDivision;