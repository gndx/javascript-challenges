const fibonacci = (n) => {
 if (!Number.isInteger(n)) {
       // Generamos e informamos el error para datos no númericos.
      const NON_NUMERIC_ERROR = "El dato ingresado no es un número entero."
      console.error(NON_NUMERIC_ERROR)
      return Error(NON_NUMERIC_ERROR)
  } else {

     let n0 = 0, n1 = 1;
     // Leí tarde que debía enviarse un array.
     let array_fibo = [n1];
     // Para que tome los casos especiales 0 y 1.
     let n_aux = n;
    
     // Para los números negativos. En caso de que se quiera realizar algun proceso alternativo.
     // Indefinido por ahora.
     if (n < 0){
          return undefined
      }

      // Iteramos, sumamos e intercambiamos posiciones.
      // Para una sumatoria de fibbonaci, que empieza en n == 0.
      for (let i=0; i<(n-1);i++){
        n_aux = n0 + n1;
        array_fibo.push(n_aux)
        n0 = n1;
        n1 = n_aux;
      }
    
      // Retornamos el array de factores de la secuencia fibonacci, hasta la posición dada.
      return array_fibo
  }
}

module.exports = fibonacci;
