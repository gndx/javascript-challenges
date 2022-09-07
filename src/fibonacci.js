const fibonacci = (n) => {
  var lista = new Array;
  var anterior = 0;
  var siguiente = 1;
  var numero = 0;
  lista.push(1)
//    for( ;lista.length<n;) {
  while(lista.length<n) {
    numero = anterior + siguiente;
    anterior = siguiente;
    siguiente = numero;
    lista.push(numero)
  }
  return lista;
}

module.exports = fibonacci;
