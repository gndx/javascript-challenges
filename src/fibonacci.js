const fibonacci = (n) => {
  let listNumbers = [0, 1];
  for (let index = 2; index < n; index++) {
    listNumbers.push(listNumbers[index - 1] + listNumbers[index-2]);
  }
  return listNumbers;
}

module.exports = fibonacci;
