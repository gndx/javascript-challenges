const fibonacci = (n) => {
  // your code here
    let cont = 1;
    let num1 = 0;
    let num2 = 1;
    let arraySerie = []
    for (let i = 1; i <= n ; i++) {
        arraySerie.push(cont)
        cont = num1 + num2;
        num1 = num2
        num2 = cont
    }
    return arraySerie
}

module.exports = fibonacci;