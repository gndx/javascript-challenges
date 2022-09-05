const trialDivision = (n) => {
let raiz = Math.floor(Math.sqrt(n)) + 1;

for(let i = 2; i < raiz; ++i) {
    if (n % i == 0) {
        return false;
    }
}

return true;
}

/* console.log(trialDivision(5)); */

module.exports = trialDivision;