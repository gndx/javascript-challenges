const trialDivision = (number) => {
  // your code here
  if (number <= 1 || number % 1 != 0) {
    flag = false;
    return flag;
  } else {
    flag = true;
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        flag = false;
      }
    }
    return flag;
  }
};

module.exports = trialDivision;
