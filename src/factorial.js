const factorial = (x) => {
  // your code here
    if (x == 0)
        return 1;
    return x * factorial(x - 1);
}

module.exports = factorial;