const fibonacci = (n) => {
  let res = [1,1];
  let a = 1, b = 1;
  let memory;

  if (n === 1) {
      return [1];
  }

  if (n === 2) {
      return [1,1];
  }

  for (let i = 2 ; i < n ; i++) {
      memory = a+b;
      res.push(memory);
      a = b;
      b = memory;
  }
  return res;
}

module.exports = fibonacci;