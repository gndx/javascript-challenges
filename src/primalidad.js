const trialDivision = (n) => {
  if (typeof numero != 'number') {
    throw TypeError('El argumento debe ser un número.');
}

if (!Number.isInteger(numero)) {
    throw TypeError('El argumento debe ser un número entero.');
}

if (numero <= 1) {
    throw Error('El argumento debe ser un número entero positivo.');
}

let raiz = Math.floor(Math.sqrt(numero)) + 1;

for(let i = 2; i < raiz; ++i) {
    if (numero % i == 0) {
        return false;
    }
}

return true;
}

/* console.log(trialDivision(5)); */

module.exports = trialDivision;