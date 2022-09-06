const trialDivision = (number) => {
   if (typeof(number) !== 'number') {
         // Generamos e informamos el error para datos no númericos.
        const NON_NUMERIC_ERROR = "El dato ingresado no es un número."
        console.error(NON_NUMERIC_ERROR)
        return Error(NON_NUMERIC_ERROR)
    } else {
         // Para los números negativos. En caso de que se quiera realizar algun proceso alternativo.
        // Indefinido por ahora.
        if (number <= 0){
            return undefined
        }

        // Usamos la Criba de Eratostenes.
        let limite = Math.floor(Math.sqrt(number))
        let n_aux = 2;
        while (n_aux <= limite){
          if ((number % n_aux) == 0) {
            return false
          }
          n_aux++
        }
        return true
    }
}

module.exports = trialDivision;
