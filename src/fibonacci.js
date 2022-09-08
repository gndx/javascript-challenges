const fibonacci = (n) => {
  let fib = [];
  for (let i = 0; i < n; i++) //[1,1+]
  {
  	if((i-2)<0)
  	{
  		fib.push(1);
  	}
  	else
  	{
  		fib.push(fib[i-2]+fib[i-1]);
  	}
  }

  return(fib);

}

module.exports = fibonacci;