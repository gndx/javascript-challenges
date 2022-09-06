const fibonacci = (n) => {
  
  /*
  Creamos el arreglo donde estará la secuencia
  de Fibonacci.
  */
  let secuenciaFibonacci = [];

  /*
  Definimos las variables que nos servirán de
  auxiliares para ir realizando las sumas.
  */
  let n1=1, n2=1, nProximo;

  /*
  Definimos un ciclo desde 1 al valor digitado.
  Dentro del ciclo, guardamos el primer valor
  con el que llegue n1, y la suma de este con
  n2 será el próximo número. Luego intercambiamos
  los valores para la siguiente repetición.
  */
  for (let i=1; i<=n; i++) {
    secuenciaFibonacci.push(n1);
    nProximo = n1 + n2;
    n1 = n2;
    n2 = nProximo;
  }

  /*
  Después de lo anterior, solo nos queda retornar
  la secuencia de Fibonacci en forma de arreglo.
  */
  return secuenciaFibonacci;
}

module.exports = fibonacci;