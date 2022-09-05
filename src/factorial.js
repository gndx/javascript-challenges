const factorial = (number) => {
  // your code here
  let factorial = 1
  let iterador = 1
  while(iterador <= number){
    factorial *= iterador
    iterador ++
  }
  return factorial
}

module.exports = factorial;
