const trialDivision = (number) => {
  // your code here
  if (number < 2) {
    return false;
  }
  for (var i = 2; i <= number-1; i++){
      if (number % i === 0 || !Number.isInteger(number)){
        return false;
      }
  }
  return true;
}

module.exports = trialDivision;