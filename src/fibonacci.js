const fibonacci = n => {
  let arr = []
  let a = 1
  let b = 1
  if (n === 1) {
    return [1]
  }
  arr.push(a, b)
  for (let k = 2; k < n; k++) {
    let c = a + b
    a = b
    b = c
    arr.push(b)
  }
  return arr
}

// console.log(fibonacci(4))

module.exports = fibonacci
