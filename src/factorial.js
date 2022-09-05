const factorial = (number) => {
  let factorial = 1;
  while (number > 1) {
      factorial *= number;
      number--;
  }
  return factorial;
}

module.exports = factorial;