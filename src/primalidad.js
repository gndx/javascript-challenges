const trialDivision = (number) => {
  if (number == 2 || number == 3 || number == 5 || number == 7) {
    return true;
  } else if ((number < 2) || (number % 2 == 0)) {
    return false;
  } else {
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i == 0)
        return false;
    }
    return true;
  }
}

module.exports = trialDivision;