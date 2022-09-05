const fibonacci = (n) => {
  let a = 0, b = 1, c = 0, result = []
  for(let i=0; i<n; i++) {
    c = a + b
    b = a
    a = c
    result.push(c)
  }
  
  return result
}

module.exports = fibonacci;