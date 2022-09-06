const fibonacci = (n) => {
  // your code here
  let fib = [0, 1];
  let data = [1];
  
  for(let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]; 
    data.push(fib[i]);
  }
  
  return data;
}

module.exports = fibonacci;