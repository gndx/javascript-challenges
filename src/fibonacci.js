const fibonacci = (n) => {
  // your code here

  if (typeof n !== 'number'){
    return "Tipo de dato no válido"
  }
  let fibArray = [1, 1];

  if(n<2){
    return [fibArray[0]]
  } else if ( n < 3){
    return fibArray
  }

  for (let i = 1; i <= n-2; i++){
    fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2])
  } 
  
  return fibArray

}

module.exports = fibonacci;