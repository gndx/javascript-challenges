const trialDivision = (number) => {
  // your code here
  if (Number.isInteger(number)) {
    if (number <= 1) {
      return false;
    }
    for (var i = 2, x = Number.parseInt(Math.sqrt(number)) + 1; i < x; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

module.exports = trialDivision;