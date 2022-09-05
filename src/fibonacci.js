const fibonacci = (n) => {
  // your code here
  if (n <= 1) return [n]
  let array = [1, 1]
  for (let i = 2; i < n; i++) {
    array.push(array[i -1] + array[i - 2]);
  }
  return array
}

module.exports = fibonacci;