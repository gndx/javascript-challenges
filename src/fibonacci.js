const fibonacci = (n) => {
  let arr = []
  if(n == 1) {
    arr.push(n)
    return arr
  }
  let A = 0
  let B = 0
  let C = 1
  for (let index = 0; index < n; index++) { 
    arr.push(C)
    A = B
    B = C
    C = A + B
  }
  return arr
}

module.exports = fibonacci;