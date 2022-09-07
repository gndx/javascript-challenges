const factorialR = require('../factorial.js');

describe('factorial', () => {
  it('Debe calcular el numero factorial', () => {
    expect(factorialR(0)).toBe(1);
    expect(factorialR(1)).toBe(1);
    expect(factorialR(5)).toBe(120);
    expect(factorialR(8)).toBe(40320);
    expect(factorialR(10)).toBe(3628800);
  });
});
