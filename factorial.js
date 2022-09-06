const factorial = (number) => {
  while (number > 1) {
	return number * factorial(number - 1);
  }
  return 1;
}

module.exports = factorial;