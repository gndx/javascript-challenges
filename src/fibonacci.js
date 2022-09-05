const fibonacci = (n) => {
  // your code here
  fq = [1, 1]
  if (n <= 1){return [ (fq[1]) ] }
  if (n == 2){return (fq)}

  if (n > 2){
    for (let i = 1; i <= (n-2); i++) {
      fq.push(fq[fq.length-1] +  fq[fq.length-2])
    }
    return(fq)
  }
}

module.exports = fibonacci;
