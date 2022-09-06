const fibonacci = (n) => {
  if( n === 0 ){
    return [0];
  } else if( n === 1 ){
    return [1];
  } else {
    let tmp = 0;
    let fn_2 = 0;
    let fn_1 = 1;
    let res = [fn_1, fn_1 + fn_2];
    for( i=3; i<=n; i++ ){
      tmp = fn_1;
      fn_1 = fn_1 + fn_2;
      fn_2 = tmp;
      res.push( fn_1 + fn_2 );
    }
    return res;
  }
}

module.exports = fibonacci;