const fibonacci = (n) => {
  let x = 0, y = 1, num;
  let arr = [];
  num = x + y;
  for (let i = 1; i <= n; i++) {
    arr.push(num);
    num = x + y;
    x = y;
    y = num;
  }
  return arr;
}

module.exports = fibonacci;