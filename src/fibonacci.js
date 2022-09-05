const fibonacci = (n) => {
  const basic = [0, 1];
  for(let i = 2; i <= n; i++) {
    basic.push(basic[i-1] + basic[i - 2]);
  }
  return basic;
}

console.log(fibonacci(20));

module.exports = fibonacci;