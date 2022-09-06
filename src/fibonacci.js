const fibonacci = (n) => {
  // your code here
  let elemento = new Array();
  for (let index = 0; index < n; index++) {
     if(index <= 1){
      elemento[index] = 1;
     }else{
      elemento[index] = (elemento[index-1])+(elemento[index-2]);
     }  
  }
  return elemento;
}

module.exports = fibonacci;