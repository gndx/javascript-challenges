const fibonacci = (n) => {
  // your code here
  let sucesion = [0,1];
  for( let i = 2; i < n; i++ ){
    sucesion[ i ] = sucesion[ i - 2 ] + sucesion[ i - 1 ]
  }

}

module.exports = fibonacci;