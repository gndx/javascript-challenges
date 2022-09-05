const fibonacci = (n) => {
  // your code here
  const res = [0, 1];
  for (let i = 2; i <= n; i++) res.push(res[i - 1] + res[i - 2]);
  res.shift();
  return res;
};
module.exports = fibonacci;
