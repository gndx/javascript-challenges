const trialDivision = (number) => {
  // your code here
  let flag = true

  for (i = 2; i < Math.trunc(number/2); i++) {
    if (number % i === 0) {
      flag = false
      break;
    }
  }

  return flag
}

module.exports = trialDivision;