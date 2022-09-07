const trialDivision = (number) => {
  // your code here
  if (number < 2 || number % 1) return false;
  for (let i = 2; i < number; i += 1) {
    if (!(number % i)) return false;
  }
  return true;
}

module.exports = trialDivision;
