const trialDivision = (n) => {
    n = parseInt(n);
  // your code here
    if (n <= 1)
        return false;
    for (let i = 2; i <= n - 1; i++)
        if (n % i == 0)
            return false;
    return true;
}

module.exports = trialDivision;