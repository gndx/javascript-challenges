const fibonacci = (n) => {
  return n <= 1 ? [ n ] : Array.from({ length: n })
    .reduce((acc, _, i) => acc.concat(i <= 1 ? [] : acc[i - 1] + acc[i - 2]), [ 1, 1 ]);
}

module.exports = fibonacci;
