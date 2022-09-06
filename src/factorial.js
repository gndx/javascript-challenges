const factorial = (number) => {
  // your code here
  if (number < 0) throw new Error("Entrada no válida");

  result = 1;

  for (let i = number; i > 1; i--) result *= i;

  return result;
}

module.exports = factorial;