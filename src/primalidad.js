const trialDivision = (number) => {
  if ((number < 2) || (number % 2 == 0)) {
    return false;
  }  else {
    for (i = 3; i <= Math.sqrt(number); i += 2) {
      let operation = number % i
      console.log("operation " + operation)
      if ((operation == 0) || (Number.isInteger(operation) == false))
        return false;
    }
    return true;
  }
}

module.exports = trialDivision;