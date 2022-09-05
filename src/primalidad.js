const trialDivision = (number) => {
  let count = 0;
  if (number <= 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for (let i = 2; i <= number; i++) {
      if (number % i === 0) {
        count++;
      }
    }
    if (count === 1) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = trialDivision;