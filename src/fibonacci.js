const fibonacci = (n) => {
  // your code here
  if (n == 1)
    return [1];
  if (n == 2)
    return [1, 1];
  f = [1, 1];
  for (let i = 2; i < n; i++)
    f.push(f[i - 1] + f[i - 2]);
  return f;
}

module.exports = fibonacci;