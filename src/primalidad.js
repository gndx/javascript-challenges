const trialDivision = (number) => {
  if (typeof number !== 'number') throw Error('Debes proveer un numero')
  if (number <= 1 || !Number.isInteger(number)) return false

  const raiz = Math.floor(Math.sqrt(number) + 1)
  
  for (let i = 2; i < raiz; i++) {
    if (number % i === 0) return false
  }

  return true
}

module.exports = trialDivision;