const trialDivision = (number) => {
  let isPrime = true
  // if (number === 2) isPrime = true
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false
      }
    }
  }
  // else return false
  return isPrime
}

module.exports = trialDivision;