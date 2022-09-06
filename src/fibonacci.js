const fibonacci = (n) => {
  // your code here
  const fib =[0,1]
  for(let i = 2;i<=n;i++){
    fib[i]=fib[i-1]+fib[i-2]
  }
  console.log(fib)
  return fib[n]
}
fibonacci(15)

module.exports = fibonacci;
