const trialDivision = (number) => {
  if (number % 1 != 0) return false;
  if (number <=1) return false;
  if (number=== 2) return true;
  var sr = Math.sqrt(number);
  for(var i=2;i<=sr;i++)
  {
    if(number%i==0) return false;
  }
  return true;
}

module.exports = trialDivision;