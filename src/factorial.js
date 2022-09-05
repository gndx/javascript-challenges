const factorial = (number) => {
  let res = 1;
  for (let i = 2; i <= number; i++)
    res *= i;
  return res;
}

module.exports = factorial;
