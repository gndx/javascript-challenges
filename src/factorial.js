const factorial = (number) => {
  // your code here
  let result = 1;
  for (let index = 1; index <= number; index++) {
    result = result * index;
  }
  return result;
}

module.exports = factorial;
