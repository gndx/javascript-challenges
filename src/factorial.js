const factorial = (number) => {
  // your code here
  let resultado = 1;
    let i = 1;

    while(i <= number) {
        resultado *= i;

        ++i;
    }

    return resultado;
}

module.exports = factorial;