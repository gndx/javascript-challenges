const trialDivision = (number) => {
  if (!Number.isInteger(number) || number <= 0) return false
  if (number === 1) return false
  if (number === 2) return true
  const limit = Math.sqrt(number) >> 0 
  for (let i = 2; i <= limit; i++)  if (number % i === 0) return false
  return true
}

module.exports = trialDivision;