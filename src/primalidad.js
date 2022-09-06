const trialDivision = (number) => {
   if (typeof(number) !== 'number') {
         // Generamos e informamos el error para datos no númericos.
        const NON_NUMERIC_ERROR = "El dato ingresado no es un número."
        console.error(NON_NUMERIC_ERROR)
        return Error(NON_NUMERIC_ERROR)
    } else {
         // Excluimos los números negativos y flotantes.
        if ((number <= 0) || (!Number.isInteger(number))){
            return false
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
