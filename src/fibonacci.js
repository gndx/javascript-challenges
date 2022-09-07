const fibonacci = (n) => {
  // your code here
  let listNumber = [];
  for (let i = 0; i < n; i++) {
    if (i <= 1) listNumber[i] = 1;
    else listNumber[i] = listNumber[i - 2] + listNumber[i - 1];
  }
  return listNumber;
};

module.exports = fibonacci;
