const trialDivision = (number) => {
  // your code here
  if (!Number.isInteger(number)) {
    return false
  } else if (number === 2){
    return true;
  } else if (number < 2) {
    return false
  }
  for (var i = 2; i < number; i++) {
    if (number % i === 0){
      return false;
    }
  }
  return true;
}

module.exports = trialDivision;