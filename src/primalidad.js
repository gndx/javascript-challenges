const trialDivision = (number) => {
  //comprobando de que sea mayor que 1
  if (number <= 1) return false
  //comprobando que sea un numero entero
  if (number % 1 !== 0) return false

  if (number == 2) return true
  if (number % 2 == 0) return false

  for (let i = 3; i < number; i++) {
    if (number % i == 0) return false
  }
  return true
}

module.exports = trialDivision