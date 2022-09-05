const trialDivision = (number) => {
  if (number <= 1) return false;
  if (parseInt(number, 10) !== number) return false;

  for(let i = 2; i <= Math.sqrt(number); i++) {
    if(number % i === 0) return false; 
  }
  
  return true;
}

module.exports = trialDivision;