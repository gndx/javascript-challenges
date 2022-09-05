const fibonacci = (n) => {
  let result = [1];
  let a, b, res;
    a = 0;
    b = 1;
    for (let i = 2; i <= n; i++) {
        res = a + b;
        a = b;
        b = res;
        result.push(res);
    }
    return result;
};

module.exports = fibonacci;