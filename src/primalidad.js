const trialDivision = (number) => {
  let prime = true;
  
  for (let i = 2; i <= Math.sqrt(number) && prime; i++) {
    if (number % i === 0) {
      prime = false;
    }
  }

  return prime;
}

module.exports = trialDivision;
