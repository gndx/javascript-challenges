const factorial = (number) => {
  return (number > -1 && number < 2) ?  1 : (number < 0) ? 0 : number * factorial(number - 1);
}

module.exports = factorial;