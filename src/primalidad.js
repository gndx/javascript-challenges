const trialDivision = (number) => {
  n = number-1;
  while (n>=1){
    if (number%n == 0){
      break;
    }
    n--;
  }
  return !((number%n == 0 && n!=1) || ((number<2) && (number>-2)));
}

module.exports = trialDivision;

