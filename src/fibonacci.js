const fibonacci = (n) => {
  sol = [0, 1];
  //if (n <= 1) return sol[1];
  for (let i = 2; i<= n; i++) {
      sol[i] = sol[i -1] + sol[i - 2];
    
  }
  sol.shift()
  return sol ;
}

module.exports = fibonacci;