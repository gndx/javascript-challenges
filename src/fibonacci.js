const fibonacci = (n) => {
  const arr = [0, 1];
  for (let i = 1; i <= n; i++) {
    const x = arr[i] + arr[i - 1];
    arr.push(x);
  }
  return arr;
}

module.exports = fibonacci;
