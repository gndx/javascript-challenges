const fibonacci = (n) => {
  let total = [];

  if (n === 1) return [1];

  for (let i = 1; i < n; i++) {
    if (total.length === 0) total.push(i);
    const a = total.at(-2) ?? 0;
    const b = total.at(-1) ?? 0;
    total.push(a + b || i);
  }

  return total;
};

module.exports = fibonacci;
