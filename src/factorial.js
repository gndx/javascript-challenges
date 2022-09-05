const factorial = (number) => {
  // your code here
  let fact = 1;
  if (number === 0 || number === 1) {
    return fact;
  } else {
    for (let i = 1; i <= number; i++) {
      fact = fact * i;
    }
    return fact;
  }
};

module.exports = factorial;
