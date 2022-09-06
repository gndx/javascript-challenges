const trialDivision = (number) => {
  if(number % 1 == 0){
      for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        console.log(false);
        return false;
      }

    }

    if (number === 1 || number === -1 || number === 0) {
      console.log(false);
      return false;
    } else {
      console.log(true);
      return true;
    }
  }else{
    console.log(false);
    return false;
  }

}

module.exports = trialDivision;