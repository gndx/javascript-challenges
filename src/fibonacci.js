const fibonacci = (n) => {
  // your code here
  let fb = [1,1]
  let a = 0;
  if (n>=2){
    while (n > fb.length){

      a = fb[fb.length-1] + fb[fb.length-2]
      fb.push(a)
    }
    return fb
  }
  else{
    fb = [1]
    return fb
  }

}

// console.log(fibonacci(1))
module.exports = fibonacci;