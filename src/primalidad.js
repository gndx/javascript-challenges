const trialDivision = (number) => {
  
if(number % 1 == 0){
    
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }

    }

    if (number === -1 || number === 0 || number === 1) {
      return false;
    } else {
      return true;
    }

  } else {
    return false;
  }

}

module.exports = trialDivision;