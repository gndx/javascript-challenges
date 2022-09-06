const factorial = (number) => {
  /*
  Creamos un array de números donde estarán todos los
  números anteriores al número digitado por el usuario
  */
  let numeros = [];

  /*
  Variable donde se irá guradando el número anterior para
  después guardarse en el arreglo.
  */
  let nAnterior = number;

  /*
  Variable donde guardaremos el que será el número factorial
  resultante
  */
  let nFactorial=1;

  /*
  El primer número en guardarse en elarreglo debe ser el
  digitado por el usuario.
  */
  numeros.push(number);

  /*
  ciclo donde se recorrerá desde el número hasta 0 para
  determinar todos los anteriores
  */
  for(let i=number; i>0; i--) {
    nAnterior = nAnterior - 1;
    numeros.push(nAnterior);
  }

  /*
  Eliminamos el número 0 del arreglo.
  */
  numeros.pop();

  /*
  Recorremos el array multiplicando todos los números del arreglo
  para hallar el factorial.
  */
  numeros.forEach(e => {
    nFactorial = nFactorial * e;
  });

  /*
  Retornamos el factorial del número.
  */
  return nFactorial;
}

module.exports = factorial;