const factorial = (number) => {
    if (Number.isInteger(number)) {
         // Generamos e informamos el error para datos no númericos.
        const NON_NUMERIC_ERROR = "El dato ingresado no es un número entero."
        console.error(NON_NUMERIC_ERROR)
        return Error(NON_NUMERIC_ERROR)
    } else {
        //variable auxiliar y variable con el resultado.
        let aux_num=number, fact_num=number;

        // Para los números negativos. En caso de que se quiera realizar algun proceso alternativo.
        // Indefinido por ahora.
        if (fact_num < 0){
            return undefined
        }
      
        // El caso especial: Factorial de cero definido matematicamente.
        if (fact_num === 0)
        {
            return 1
        }
      
        // El cuerpo principal de la operación.
        while ((aux_num > 1)){
            aux_num--
            fact_num *= aux_num
        }

        // Retornamos el valor calculado.
        return fact_num
    }
}

module.exports = factorial;
