const fibonacci = (n) => {
  var fiboNumbers = [0,1]
  for(i=2; i<=n; i++){
    fiboNumbers.push(fiboNumbers[i-1]+fiboNumbers[i-2])
  }
  fiboNumbers.splice(0,1)
  return fiboNumbers
}

module.exports = fibonacci;