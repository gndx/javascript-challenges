const fibonacci = (n) => {
  if (n <= 1) return [1];
  const result = [1, 1];
  if (n <= 2) return result;
  for (let i = 2; i < n; i++) {
    result[i] = result[i-2] + result[i-1]; 
  }
  return result;
}

module.exports = fibonacci;