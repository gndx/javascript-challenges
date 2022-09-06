const factorial = (number) => {
  if( number >= 0 ){
    let f = 1;
    for( i=1; i<=number; i++ ){
      f = f * i;
    }
    return f;
  }
}

module.exports = factorial;