const fibonacci = (n) => {
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(i < 2 ? 1 : arr[i - 1] + arr[i - 2])
  }
  return arr
}

module.exports = fibonacci