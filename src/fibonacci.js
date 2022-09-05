const fibonacci = (n) => {
  // your code here
    if (n === 1) return [1]
    let fib = [1, 1];

    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib
}

module.exports = fibonacci;