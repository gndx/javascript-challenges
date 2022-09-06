const trialDivision = (number) => {
  // your code here
  // check if the passed value is a number
  if(typeof number == 'number' && !isNaN(number)){
    
      // check if it is integer
      if (Number.isInteger(number)) {
        if (number === 0 || number === 1 || number < 0 || number === 4) {
          return false;
        } 
      
        else if (number === 2) return true;
      
        else {
      
          r = Math.sqrt(number);
      
          if(number % 2 === 0) return false;
      
          for(j=3; j<=r; j+=2) if(number%j === 0) return false;
      
          return true;
        }
      }
      else {
        return false;
      }

  }

  
}


module.exports = trialDivision;