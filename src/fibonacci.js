const fibonacci = (n) => {
  // your code here
  const sol = [0, 1];

    for (let i = 2; i<= n; i++) {
        sol[i] = sol[i -1] + sol[i - 2];
    }
    const fib = sol.filter(e => e !== 0)
    return fib;
}

module.exports = fibonacci;