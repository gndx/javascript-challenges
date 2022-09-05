const trialDivision = (number) => {
  // your code here

  if (!Number.isInteger(number))return false 
  
  for (let i = 2; i < number; i++){
    if (number % i == 0) return false
  }
  return number > 1
  
};

module.exports = trialDivision;
