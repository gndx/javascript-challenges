const factorial = (number) => {
  let Rep = 1;
  for (let index = 0; index < number; index++) {
    Rep = Rep*(index+1);
  }
  return Rep;
}

module.exports = factorial;