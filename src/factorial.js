const factorial = (number) => {
  let result = 1;
  for (let index = 1; index < number; index++) {
    result += (result * index);
  }
  return result;
}
module.exports = factorial;