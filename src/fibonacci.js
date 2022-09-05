const fibonacci = (n) => {
  if (n == 1) return [1]
  if (n == 2) return [1, 1]
  const res = [1, 1]
  for(let i = 2; i < n; i++)  res.push(res.slice(-1)[0] + res.slice(-2)[0])
  return res
}

module.exports = fibonacci;