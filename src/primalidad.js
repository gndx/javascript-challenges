const trialDivision = (number) => {
  if (number <= 1 || Math.floor(number) !== number)
    return false; // 1, 0, negativos o decimales
  for (let i = 2; i < number; i++)
    if (number % i === 0) return false
  return true;
}

module.exports = trialDivision;