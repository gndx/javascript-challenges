const fibonacci = (n) => {
  let numbers = [];

  // si n es igual a cero entonces devolvera un array vacio
  if (n === 0) {
    return numbers;
  }

  while (n !== 0) {
    // si el array numbers esta vacio entonces agrega 1.
    if (numbers.length === 0) {
      numbers.push(1);
    } else {
      // si ya tiene numeros entonces toma el ultimo y penultimo numnero
      // de la lista y suma los dos numeros
      // el resultado lo agrega al array numers
      let last_number = numbers[numbers.length - 1] ?? 0;
      let before_last = numbers[numbers.length - 2] ?? 0;

      numbers.push(before_last + last_number);
    }
    n--;
  }

  return numbers;
};

module.exports = fibonacci;
