const trialDivision = (number) => {
    let count = 0;
    number = Math.floor(number)
    if (number <= 1) {
        return false
    }
    for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
        count++
        }
    }
    return count > 2 ? false : true;
}

module.exports = trialDivision;