const factorial = (number) => {
  // your code here
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    // console.log(`El factorial de ${number} es ${fact}.`);
    return fact;
}

module.exports = factorial;