const fibonacci = (n) => {
  let i = 1, next;
  let n1 = 0, n2 = 1, arr = [];
  while (i <= n) {
    next = n1 + n2;
    n1 = n2;
    n2 = next;
    arr.push(n1)
    i++;
  }
  return arr;
}

module.exports = fibonacci;