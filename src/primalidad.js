const trialDivision = (number) => {
  // your code here
  if (Number.isInteger(number)) {
    if (number <= 0 || number <= 1) return false
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) return false
    }
    return true
  } else {
    return false
  }
}

module.exports = trialDivision;