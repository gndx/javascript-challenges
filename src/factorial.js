const factorial = (number) => {
  // your code here
  let factorial = 1;
  while (number > 0) {
    factorial *= number;
    number -= 1;
  }
  return factorial;
}

module.exports = factorial;
