const trialDivision = (number) => {
  // your code here
  if (number <= 1 || number === 4 || !(number - Math.floor(number) == 0) ) {
    return false;
  }
  for (let index = 2; index < number /2; index++) {
    if (number % index == 0) {
      return false
    } 
  }
  return true
}

module.exports = trialDivision;