const fibonacci = (n) => {
  // your code here
  const array = [];

  let head = 1;
  let tail = 0;

  for (let i = 1; i <= n; i++) {
    array.push(head);

    buffer = head;
    head = head + tail;
    tail = buffer;
  }
  return array;
}

module.exports = fibonacci;