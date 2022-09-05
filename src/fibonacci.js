const fibonacci = (n) => {
  let n1 = 1;
  let n2 = 1;
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(n1);
    let x = n1 + n2;
    n1 = n2;
    n2 = x;
  }
  return arr;
};

module.exports = fibonacci;
