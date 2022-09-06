const trialDivision = (number) => {
    if (number > 0) {
        if (number < 2)
            return false;
        if (!Number.isInteger(number))
            return false;
        for (i = 2; i < number; i++) {
            if ((number % i) == 0)
                return false;
        }
        return true;
    }
    return false;
}

module.exports = trialDivision;