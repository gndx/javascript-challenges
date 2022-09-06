const fibonacci = (n) => {
  const fibo = [1];
  if(n == 1){
    return fibo
  } if(n == 2) {
    fibo.push(1);
    return fibo
  } else {
    fibo.push(1);
    for (let i=3; i <= n; i++) {
      var j = fibo[(fibo.length - 1)] + fibo[(fibo.length - 2)];
      fibo.push(j);
    }
    return fibo
  }
}

module.exports = fibonacci;