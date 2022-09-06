const trialDivision = (number) => {
  let n = number;
  if (number !== Math.floor(number)) {
    return false
  } if (number <= 1) {
    return false
  } if (number == 2) {
    return true
  } else {
    let j = 0;
    for (let i = 2; i < number; i++) {
      if (number%i == 0){
        j = j + 1;
      }
    }
    if (j == 0){
      return true;
    } else {
      return false;
    }
  }
}

module.exports = trialDivision;