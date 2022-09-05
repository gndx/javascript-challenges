const fibonacci = (n) => {
  // your code here
  //se crea el array que almacene
  if (n == 1) return [1];
  else if (n == 2) return [1, 1];
  let x = 1, y = 1, z;
  let array = [1, 1];
  for (let i = 0; i < n - 2; i++)
  {
    //se crea el push
    c = x + y;
    array.push(z);
    x = y;
    y = z;
  }

  return array;

}

module.exports = fibonacci;