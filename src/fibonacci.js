const fibonacci = (n) => {
  var fib = [1, 1];
  if ( n === 1 )
    fib = [1];
  for(var i=fib.length; i<n; i++) {
    fib[i] = fib[i-2] + fib[i-1];
  }

  return fib;

}

module.exports = fibonacci;