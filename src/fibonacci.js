const fibonacci = (n) => {
  var fibon = [1, 1];
  if (n === 1)
    fibon = [1];
  for(var i = fib.length; i < n; i++) {
    fibon[i] = fibon[i-2] + fibon[i-1];
  }
  return fibon;
}

module.exports = fibonacci;