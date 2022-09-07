const fibonacci = (n) => {
  let array = [1, 1];
  if (n === 1) return [1];
  if (n === 2) return array;

  for (let i = 0; i < n - 2; i++) {
    array[i + 2] = array[i] + array[i + 1];
  }
  return array;
};

module.exports = fibonacci;
