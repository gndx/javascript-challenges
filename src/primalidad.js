const trialDivision = (number) => {
    if (number % 1 !== 0) {
        return false;
    }

    // 1 is not a prime number.
    if (number <= 1) {
        return false;
    }

    // 2 is the only even prime number.
    if (number === 2) {
        return true;
    }

    // All other even numbers are not prime.
    if (number % 2 === 0) {
        return false;
    }

    // Check all the odd numbers.
    const squareRoot = Math.sqrt(number);
    for (let i = 3; i <= squareRoot; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};

module.exports = trialDivision;