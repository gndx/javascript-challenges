const factorial = (number) => {
    // your code here
    if (number === 0) return 1
    let result = number
    for (let index = number-1; index != 0; index--) {
        result = result * index
    }
    return result
}

module.exports = factorial;