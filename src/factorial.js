const factorial = (number) => {
  return Array.from({ length: number })
    .reduce((acc, _, i) => ++i * acc, 1);
}

module.exports = factorial;
