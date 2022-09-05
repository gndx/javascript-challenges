const fibonacci = (n) => {
  var sequence = new Array();
  var n1 = 1
  var n2 = 1

  for (var i = 1; i <= n; i++) {
    sequence.push(n1)
    var n3 = n1 + n2
    n1 = n2
    n2 = n3
  }
  return sequence
}

module.exports = fibonacci;