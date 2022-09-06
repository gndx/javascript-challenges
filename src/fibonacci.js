const fibonacci = (n) => {
  // your code here
  if (n < 0) return [];
  const sequence = [];
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      sequence.push(1);
      continue;
    }
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
};

module.exports = fibonacci;
