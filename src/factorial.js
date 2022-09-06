const factorial = (number) => {
  // your code here
  function factorial (num){
    if(num <= 0){
         console.log("Lo sentimos, el numero debe ser mayor que cero");
    }else{
         let factorial = num;
         for(let i = (num - 1); i > 1; i--){
              factorial *= i;
         }
         return `El factorial de ${num} es: ${factorial}`
    }
}
}

module.exports = factorial;
