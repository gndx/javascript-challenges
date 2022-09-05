

const fibonacci = (n) => {
  let n1 = 1
  let n2 = 1
  let next = 0;
  let fibo = []
  for (let i = 0; i < n; i++) {
    fibo.push(n1)
    next = n1 + n2
    n1 = n2
    n2 = next
  }
  return fibo
}

module.exports = fibonacci;