const fibonacci = (n) => {
  // your code here
  let num1 = 1;
  let num2 = 1;
  let con = 0;
  let fibo = []
  for (let i = 0; i < n; i++) {
    fibo.push(num1)
    con = num1 + num2;
    num1 = num2;
    num2 = con;
  }
  return fibo;
};

module.exports = fibonacci;
