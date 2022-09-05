const fibonacci = (n) => {
 if (typeof(num) !== 'number') {
       // Generamos e informamos el error para datos no númericos.
      const NON_NUMERIC_ERROR = "El dato ingresado no es un número."
      console.error(NON_NUMERIC_ERROR)
      return Error(NON_NUMERIC_ERROR)
  } else {

     let n0 = 0, n1 = 1;
     // Para que tome los casos especiales 0 y 1.
     let n_aux = n;
    
     // Para los números negativos. En caso de que se quiera realizar algun proceso alternativo.
     // Indefinido por ahora.
     if (fact_num < 0){
          return undefined
      }

      // Iteramos, sumamos e intercambiamos posiciones.
      // Para una sumatoria de fibbonaci, que empieza en n == 0.
      for (let i=0; i<(n-1);i++){
        n_aux = n0 + n1;
        n0 = n1;
        n1 = n_aux;
      }
    
      // Retornamos el valor de la posición en la sumatoria.
      return n_aux
  }
}

module.exports = fibonacci;
