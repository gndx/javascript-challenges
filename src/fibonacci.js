const fibonacci = (number) => {
  const result = [];

  if(number > 0){
      var a = 0;
      var b = 1;
      var ope = 0;

    for (var i= 0; i < number; i++){
      if(i == 0){
          result.push(b)
      }
      else{
          ope = a + b;
          result.push(ope)
          a = b;
          b = ope;
      }
    }
    return result;
  }
  else
    return 0;
}

module.exports = fibonacci;