const fibonacci = (n) => {
  // your code here
  if(n === 1 ) return [1];
  if(n === 2 ) return [1,1];

  let fib = [1,1];
  for(let i = 0 ; i < n-2;  i++) fib.push((fib[i] + fib[i+1]));
  return fib;
}

module.exports = fibonacci;
