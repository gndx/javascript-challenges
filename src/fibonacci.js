const fibonacci = (n) => {
  let array = [0,1]
  
	if(n < 2){
    return [n]
  }
  
	for(let i = 1; i < n; i++){
    array.push(array[i] + array[i - 1])
  }
  
  array.shift()
  
  return array
}

module.exports = fibonacci;