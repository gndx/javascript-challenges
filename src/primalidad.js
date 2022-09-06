const trialDivision = (number) => {
  // your code here
  function primo (num){
    let contador = 0;
    let valor;
    let mensaje;
    if(num <= 1){
         mensaje = "Lo sentimos, el numero debe ser mayor que uno";
    }else{
         for(let i = num; i > 1; i--){
              for(let j = 1; j <= num; j++){
                   valor = i * j;
                   if(valor == num){
                        contador++;
                   }
              }
         }
         if(contador <= 2){
              mensaje = `El numero ${num} es primo`
         }else{
              mensaje = `El numero ${num} no es primo`
         }
    }

    return mensaje;
}
}

module.exports = trialDivision;
