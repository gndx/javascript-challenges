const trialDivision = (number) => {
  if (!Number(number) || number < 2 || number % 1 !== 0)
     return false;
     
  let midPoint = number / 2;
  let primes = [];
  let isPrime;
  
  for (let ix = 2; ix <= midPoint; ix++) {
      
      isPrime = true;      
      for (let ip = 0; ip < primes.length; ip++)
        if (ix % primes[ip] == 0) {
            isPrime = false;
            break;
        }
        
      if (isPrime) {
        if (number % ix == 0)
            return false;
            
        primes.push(ix);
      }
      
  }
  
  return true;
        
}

module.exports = trialDivision;