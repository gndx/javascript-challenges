const trialDivision = (num) => {
  // your code here
  if (!Number.isInteger(num))return false 

  for (i= 2; i<num; i++){
    if (num % i == 0) return false
  }
  return num>1
};


module.exports = trialDivision;