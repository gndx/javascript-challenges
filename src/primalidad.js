const trialDivision = (number) => {
  if (number <= 1 || Math.floor(number) !== number) return false;
  const base = [2, 3, 5, 7, 11, 13, 17, 19, 23];
  const limit = Math.floor(Math.sqrt(number));
  let result = base.filter((n) => n <= limit).every((n) => number % n !== 0);
  return result;
};

module.exports = trialDivision;
