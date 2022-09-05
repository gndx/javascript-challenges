const factorial = (number) => {
    if (number <= 1)
        return 1;
        
    for (let ix = number - 1; ix > 1; ix--) 
        number *= ix;
        
    return number;
}

module.exports = factorial;