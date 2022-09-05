const trialDivision = (number) => {
  // your code here
  if (number <= 1) return false;
  let count = 1;
  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  return count === 2 ? true : false;
};

module.exports = trialDivision;
