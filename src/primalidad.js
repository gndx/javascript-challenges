const trialDivision = (number) => {
  if( ( number > 1 ) && ( number % 1 === 0 ) ){
    for( i=2; i<number; i++ ){
      if( number % i === 0 ){
        return false;
      }
    }
    return true;
  }
  return false;
}

module.exports = trialDivision;