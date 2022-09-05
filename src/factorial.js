const factorial = (number) => {
  if (number < 0) {
    return "error";
  } else if (number == 0) {
    return 1;
  } else {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
      fact *= i;
    }
    return fact;
  }
};
module.exports = factorial;