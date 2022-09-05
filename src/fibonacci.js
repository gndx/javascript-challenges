const fibonacci = (n) => {
  let serie = [0, 1];
  let prevIndex = 0, nextIndex = 1;
  for (let iterator = 1; iterator <= n; iterator++) {
    serie.push(serie[prevIndex] + serie[nextIndex]);
    prevIndex++, nextIndex++;
  }
  return serie.slice(1, n + 1);
};

module.exports = fibonacci;
