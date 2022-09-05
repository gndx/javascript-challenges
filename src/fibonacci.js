const fibonacci = (n) => {
  // your code here
  let arr = [];
  let a0 = 0;
  let a1 = 1;
  arr.push(a1);
  for (let i = 1; i < n; i++) {
    let sum = a0 + a1
    arr.push(sum)
    a0 = a1
    a1 = sum
  }

  return arr
}

module.exports = fibonacci;