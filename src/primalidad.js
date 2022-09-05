const trialDivision = (number) => {
  if (number < 0) return false;

  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) count++;
    else if (count >= 3) break;
  }

  return count === 2 ? true : false;
};

module.exports = trialDivision;
