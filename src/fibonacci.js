const fibonacci = (n) => {
    if (n < 2) {
        return [1];   
    }
    if (n < 3) {
        return [1, 1];
    }

    var a = fibonacci(n - 1);
    a.push(a[n - 2] + a[n - 3]);
    return a;
}

module.exports = fibonacci;