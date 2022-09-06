const factorial = (number) => {
  // your code here
  let factorial = 1;

  for(let n = 1; n <= number; n++) {
    factorial *= n;
  }
  return factorial;
}

module.exports = factorial;