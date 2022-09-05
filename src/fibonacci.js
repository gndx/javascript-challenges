const fibonacci = (n) => {
  // your code here
  const fibArr = [];

  for (let i = 1; i <= n; i++) {
    if (i <= 2) {
      fibArr.push(1);
    } else {
      fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    }
  }

  return fibArr;
};

module.exports = fibonacci;
