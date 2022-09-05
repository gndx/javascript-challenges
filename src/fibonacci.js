const fibonacci = (n) => {
    let arr = [];
    let numberToAppend;

    while (n >= 1){
        numberToAppend = arr.slice(-2).reduce(function(a, b) { return a + b; }, 0)
        numberToAppend === 0 ? arr.push(1) : arr.push(numberToAppend);
        n--
    }
    return arr;
}

module.exports = fibonacci;