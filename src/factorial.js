const factorial = (number) => {
  let fct = 1;

  if (number < 0){
    return "Error: enter a non-negative integer";
  }
  if (number > 0) {
    fct = number * factorial(number - 1);
  }

  return fct;
}

module.exports = factorial;