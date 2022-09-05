const fibonacci = (n) => {
  let result = [1]
  for (let i = 1; i < n; i++) {
    result.push(result[i - 1] + (result[i - 2] ?? 0))
  }
  return result
}

module.exports = fibonacci;