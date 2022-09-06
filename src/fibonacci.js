const fibonacci = (n) => {
    let n1 = 0, n2 = 1, nextNumber;
    var array = [];

    for (let i = 1; i <= n; i++) {
        array.push(n1);
        nextNumber = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    return array;
}

module.exports = fibonacci;