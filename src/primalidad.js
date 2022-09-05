const trialDivision = (number) => {
  let prime = false
  if (Number.isInteger(number) && number >= 0) {
    let count = 0;
    for (let i = number; i >= 1; i--) {
      if ( (number % i) == 0) {
        count++
      }
    }
    if (count == 2) {
      prime = true
    }
  }
  return prime
}

module.exports = trialDivision;