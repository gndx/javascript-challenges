const fibonacci = (n) => {
  if(n > 1){
    //Si lees esto, ¿por qué no tomas en cuenta el 0?
    let result = [1, 1];
    for (let i = 0; i < n-2; i++) {
      result.push(result[result.length-1]+result[result.length-2]);
    }

  
    return result;
  }else{
    return [1];
  }

}

module.exports = fibonacci;