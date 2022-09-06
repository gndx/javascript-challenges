const factorial = (number) => {
  let x = 1;
  for (let i = 0; i < number; i++)
    x *= number - i;
  return x;
} // When lo que querías hacer con recursiva, but overflow

module.exports = factorial;