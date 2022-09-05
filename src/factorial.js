const factorial = (number) => {
  // your code here
  if (number === 0 || number === 1)
    return 1;
  else
    return number * factorial(number - 1);
}

module.exports = factorial;