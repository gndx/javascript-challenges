const fibonacci = (n) => {
  let fibonacci_series = [];

  for (let i = 0; i < n; i++) {
    if (i>=2){
      fibonacci_series[i]= fibonacci_series[i-1] + fibonacci_series[i - 2];
    }
    else {
      fibonacci_series[i]=1;
    }
  }
  return fibonacci_series;
}


module.exports = fibonacci;