const fibonacci = (n) => {

  let fibonacci=[];
  let anterior=0;
  let actual=0;
  let indice=0;
  if(n==0){}
  else{
    if(n==1){
      fibonacci.push(1);
    }
    else{
      if(n>1){
        fibonacci.push(1);
        n=n-1;
        while(n>=1){
          indice=fibonacci.length -1;
          actual=fibonacci[indice]+anterior;
          anterior=fibonacci[indice];//1
          fibonacci.push(actual);      
          n=n-1;
        }
      }
    }
  }

  return fibonacci;
}

module.exports = fibonacci;