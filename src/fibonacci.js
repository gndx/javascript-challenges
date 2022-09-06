const fibonacci = (n) => {
    let array = [];
    if (n >= 1)
        array[0] = 1;
    if (n >= 2)
        array[1] = 1;
    for (i = 2; i < n; i++)
        array[i] = array[i - 1] + array[i - 2];
    return array;
}

module.exports = fibonacci;