var factor = []
const factorial = (number) => {
  // your code here
  //The factor of 0 (0!) is 1, and the factor of 1 (1!) is 1 too
  if (number == 0 || number == 1) {
    return 1;
  }
  //if the factor
  if (factor[number] > 0) {
    return factor[number];
  }
  return factor[number] = factorial(number-1) * number;
}
module.exports = factorial;