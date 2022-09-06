const factorial = (number) => {
    var factorial=1;
             
    for (var i = 2; i <= number; i++)
        factorial = factorial * i;
    return factorial;
}

module.exports = factorial;