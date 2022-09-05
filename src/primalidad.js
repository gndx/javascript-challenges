const trialDivision = (number) => {
  // your code here
  if(number<2){
    return false;
  }
  if(number % 1 != 0){
    //es un numero decimal
    return false;
  }
	for (i=2; i<number; i++) {
		if ((number % i)==0){
      return false;
    } 
	}
	return true; 
}
const modulo = (number2) => {


}
module.exports = trialDivision;