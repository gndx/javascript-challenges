const fibonacci = (n) => {

  if (n == 1) return [1];
  else if (n == 2) return [1, 1];

  let a = 1, b = 1, c;
  let arr = [1, 1];


  for (let i = 0; i < n - 2; i++)
  {
    c = a + b;
    arr.push(c);
    a = b;
    b = c;
  }

  return arr;
}

module.exports = fibonacci;
