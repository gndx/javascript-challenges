const fibonacci = (n) => {
  // your code here
  const fiboList = [];
  for (let i = 0; i < n; i += 1) {
    if (i < 2) {
      fiboList.push(1);
      continue;
    }
    fiboList.push(fiboList[fiboList.length - 1] + fiboList[fiboList.length - 2]);
  }
  return fiboList;
}

module.exports = fibonacci;
