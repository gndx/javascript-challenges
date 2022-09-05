const fibonacci = (n) => {
  const sequence = [1];
  let current = 1;
  let prev = 1;

  for (let i = 1; i < n; i++) {
    sequence.push(current);
    const swap = prev;
    prev = current;
    current += swap;
  }

  return sequence;
}

module.exports = fibonacci;