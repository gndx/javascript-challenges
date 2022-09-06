const fibonacci = n => {
  if (n < 1) return [0];

  const resultsArr = [0, 1];
  let prev = 0;
  let current = 1;

  while (current !== n) {
    current = prev + current;
    if (current > n) return resultsArr;
    resultsArr.push(current);
    prev = current - prev;
  }

  return resultsArr;
};

module.exports = fibonacci;
