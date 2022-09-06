const trialDivision = (number) => {
  if (number <= 1)
    return false;

  if (!Number.isInteger(number))
    return false;

  for (let index = 2; index < number; index++) {
    if ((number % index) == 0) {      
      return false;
    }
  }
  return true;
}
module.exports = trialDivision;