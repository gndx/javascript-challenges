const fibonacci = (n) => {
  // your code here
  if (n === 0 || n === 1) {
    return n
  }
  else {
    return(fibonacci(n-1) * fibonacci(n - 2))
  }
  
}

module.exports = fibonacci;