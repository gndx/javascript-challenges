const fibonacci = (n) => {
    if (n === 1) {
        return [1];
    } else if (n === 2) {
        return [1, 1];
    }
    const result = [1, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}

module.exports = fibonacci;