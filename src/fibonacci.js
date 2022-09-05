const fibonacci = (n) => {
    const res = [];
    for (let i = 1; i <= n; i++) {
        res.push(_fibonacci(i));
    }
    return res;
}
const _fibonacci = (n) => {
    // your code here
    if (n < 2) {
        return n;
    }
    return _fibonacci(n - 1) + _fibonacci(n - 2);
}

module.exports = fibonacci;