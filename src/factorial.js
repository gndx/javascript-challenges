const factorial = (number) => {
  var res = 1;
  var num = number;
  if (num === 0 || num === 1) {
    return res;
  } else {
    for (var i=1; i<=num; i++) {
      res = res * i;
    }
    return res;
  }
}

module.exports = factorial;