const trialDivision = (number) => {
  // your code here
  let conteo = 0;
  for( let i = 1; i <= number; i++ ) {
    if( number%i == 0){
      conteo = conteo + 1;
    }
    
  }
  conteo > 2 ? console.log( 'El numero no es primo' ) : console.log( 'El numero es primo' );
 
}

module.exports = trialDivision;