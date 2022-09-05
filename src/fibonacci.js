const fibonacci = (n) => {
  if(n===1) return [1];
  else if(n===2) return [1,1];
  else{
    var array = fibonacci(n - 1);
    array.push(array[array.length-1]+array[array.length-2]);
    return array;
  }
}

module.exports = fibonacci;