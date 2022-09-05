const fibonacci = (n) => {
  if (!n) return;

    let fibArr = [1];

    if (n === 1) {
      return fibArr;
    }

    fibArr.push(1);

    for(var i = 2, len = n; i < len; i++) {
        fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }

    return fibArr;
}

module.exports = fibonacci;