const trialDivision = (number) => {
  var num = parseInt(number);
  if (num <= 1) return false;
  for (var i = 2; i <= num-1; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

module.exports = trialDivision;