const factorial = (number) => {
  if(number == 0 || number == 1) return 1
  let cont = 1
  for(let i =0; i < number; i ++){
    cont *= (i+1)   
  }
  return cont
}

module.exports = factorial;