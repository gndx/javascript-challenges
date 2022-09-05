const trialDivision = (number) => {
  // your code here
  let isPrime = true
  if (number > 1 && Number.isInteger(number)) {
    for (let n = 2; n < number; n++) {
      if (number % n === 0) {
        isPrime = false
        break
      }
    }

  } else { isPrime = false }
  return isPrime
}

module.exports = trialDivision;