const trialDivision = (n) => {
  if (typeof n != 'number') {
    throw TypeError('El argumento debe ser un número.');
}

if (!Number.isInteger(n)) {
    throw TypeError('El argumento debe ser un número entero.');
}

if (n <= 1) {
    throw Error('El argumento debe ser un número entero positivo.');
}

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