const fibonacci = (n) => {
    if (n === 0) { return [] }
    else if (n === 1) { return [1] }
    let lista = [1, 1]
    let j = 0;
    let res = 0;
    while (lista.length < n) {
      res = lista[j] + lista[j + 1]
      lista.push(res)
      j += 1
    }
    return lista
}

module.exports = fibonacci;
