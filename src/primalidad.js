const trialDivision = (number) => {
  // your code here
    if(number<=1 || !Number.isInteger(number))  return false;
      for (let index = 2; index <= number-1; index++) 
          if(number%index === 0) return false
    return true;   
}

module.exports = trialDivision;