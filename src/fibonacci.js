const fibonacci = (n) => {
  // your code here
  function fibonacci(num){
    // El parametro indica la cantidad de numeros que se quieren obtener de la secuencia
    let partida = 0;
    let inicial = 1;
    let array = [];

    if(num <= 0){
       console.log("Lo sentimos, el numero debe ser mayor que uno");
    }else{
         for(let i = 0; i < num; i++){
              array.push(partida);
              partida += inicial;
              inicial = array[i];
         }
    }
    return array;
}
}

module.exports = fibonacci;
