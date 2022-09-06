const fibonacci = (n) => {
  let result = [1]
  for (let i = 1; i < n; i++) {
    let lastTwoNumbers = result.slice(-2)
    let newNumber = lastTwoNumbers.reduce((a, b) => a + b, 0)
    result.push(newNumber)
  }
  return result
}

console.log(fibonacci(10));

module.exports = fibonacci;