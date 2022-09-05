const fibonacci = (n) => {
  const fibo = [0, 1]
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 2] + fibo[i - 1]
  }
  return fibo[n]
}
