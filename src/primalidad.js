const trialDivision = (number) => {
  // your code here
  if(number < 1) return false
  if (number % 1 != 0) return false
  if (number == 0 || number == 1 || number == 4) return false
  for (i = 2; i < number / 2; i++) {
    if (number % i == 0) return false
  }
  return true;

}

module.exports = trialDivision;

