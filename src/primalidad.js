const trialDivision = (number) => {
  /*
  Creamos un arreglo donde guardaremos los
  divisores del número.
  */
  let divisores = [];

  /*
  Creamos una variable donde guardaremos el
  resultado booleano a retornar que inicializamos
  en false.
  */
  let esPrimo = false;

  /*
  Recorremos todos los números desde 0 hasta
  el número digitado, y los guardamos en el
  arreglo si es divisor de dicho número.
  */
  for (let i=0; i<=number; i++) {
    if (number % i === 0) {
      divisores.push(i);
    }
  }

  /*
  Determinamos primero que el arreglo sea
  de 2 posiciones (1 y el mismo número).
  */
  if (divisores.length === 2) {
    /*
    Seguido a esto, determinamos que los 2
    elementos del arreglo sean efectivamente
    1 y el mismo número.
    */
    if (divisores[0] === 1 && divisores[1] === number) {
      /*
      Si todo lo anterior se cumple, el número
      es primo.
      */
      esPrimo = true;
    }
  }

  /*
  Si algo de lo anterior no se cumple, el valor
  sigue como false, lo que significa que el número
  no es primo.
  */

  return esPrimo;
}

module.exports = trialDivision;