/*** Optimized algorithm ***/
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);

/*** Most visible algorithm (comment line 2 and uncomment lines 5 to 11) ***/
// const factorial = (number) => {
//   if(number <= 1) {
//     return 1
//   } else {
//     return number * factorial(number - 1)
//   }
// }

module.exports = factorial;