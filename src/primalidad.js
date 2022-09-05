const trialDivision = (number) => {
  // your code here
  if (number !=Math.round(number) || number <= 1 ) return false;
  if (Math.sqrt(number)>=2) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        return false;
      }
    }
  }
  return true;
  
};

module.exports = trialDivision;
