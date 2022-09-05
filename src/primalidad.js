const trialDivision = (number) => {
    if (!Number.isInteger(number)){
    return false;
  }
  if(number <= 1) {
    return false;
  }
   for (var n = 2;  n<number;  n += 1) {
    if(number % n == 0) {
      return false;
    }
}
return true;
} 

module.exports = trialDivision;
