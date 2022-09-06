const fibonacci = (n) => {
  const sequence = [0, 1];
  for (let i = 1; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i]);
  }
  sequence.shift();
  return sequence;
};

module.exports = fibonacci;
