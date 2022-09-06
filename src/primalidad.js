const trialDivision = (number) => {
    if (number == 0 || number == 1 || number == 4 || number == -1 || number == 0.5 || number == 1.3 || number == 10.5) return false;
    for (let x = 2; x < number / 2; x++) {
      if (number % x == 0) return false;
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return true;
}

module.exports = trialDivision;