const fibonacci = (n) => {
  
 var fibo = [1];

  if (n === 1) {
    return fibo;
  }

  fibo.push(1);

  for(var i = 2, len = n; i < len; i++) {
    fibo.push(fibo[i-1] + fibo[i-2]);
  }

  return fibo;
}

module.exports = fibonacci;