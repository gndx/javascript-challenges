const trialDivision = (number) => {
  if (number > 1 && Number.isInteger(number)) {
    let coincidencias = 0;

    for (let i = 2; i <= number; i++) {
      if (number % i === 0) {
        coincidencias++;
      }
    }

    if (coincidencias > 1) {
      return false;
    }else{
      return true;
    }
  }else{
    return false;
  }
}

module.exports = trialDivision;