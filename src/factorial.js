const factorial = (number) => {
  if (number == 0) return 1  
  let res = 1
  for(let i = 1; i <= number; i++) res *= i
  return res
}

module.exports = factorial;