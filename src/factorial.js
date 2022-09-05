const factorial = (number) => {
  if(number != Math.abs(number)){
    console.log("Ingrese valores enteros positivos")
  }else{
    let n = number;
    for (let i = 1; i < number; i++) {
      n = n*i;
    }
    return n;
  }
}

factorial(5);