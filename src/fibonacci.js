const fibonacci = (n) => {
  if ( n == 1 ){
    return [1]
  } else {
    let result = [1, 1];
    for (var i = 2; i < n; i++) {
      result.push(result[i-2] + result[i-1]);
    }
    return result;
  }
}

module.exports = fibonacci;