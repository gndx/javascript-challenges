const factorial = (number) => {
  // your code here
    if (number === 0)return 1;
    for (let i = number-1 ; i > 0 ; i--) {
        number = number * i;
    }
    return number;
}

module.exports = factorial;