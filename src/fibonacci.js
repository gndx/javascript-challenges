const fibonacci = (n) => {
  const basic = [0,1];
  for(let i = 2; i <= n; i++) {
    basic.push(basic[i-1] + basic[i - 2]);
  }
  return basic.splice(1,n);
}

/* console.log(fibonacci(2));
 */
module.exports = fibonacci;