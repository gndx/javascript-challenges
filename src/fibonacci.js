const fibonacci = (n) => {

  if(n <= 0)
  throw new Error("Fibonacci no permitido");

  if(n === 1)
    return [1];

  let actualFibonacci = n_fibonacci(n);

  return [...fibonacci(n-1), actualFibonacci];
}

const n_fibonacci = (n) => {
  
  if(n <= 0)
  throw new Error("N-esimo fibonacci no permitido");

  if(n === 1 || n === 2 )
  return 1;

  return n_fibonacci(n-1) + n_fibonacci(n-2);
}

module.exports = fibonacci;