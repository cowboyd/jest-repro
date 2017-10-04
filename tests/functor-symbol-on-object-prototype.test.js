const { Functor, map } = require('funcadelic');

const { getOwnPropertySymbols } = Object;

describe('A library that uses Symbols for anonymous properties', function() {
  it('has a symbol', function() {
    expect(Functor.symbol).toBeDefined();
  });
  it('can place that symbol on the Object prototype', function() {
    expect(getOwnPropertySymbols(Object.prototype)).toContain(Functor.symbol);
  });
  it('can use anonymous symbols to dispatch polymorphic functions', function() {
    expect(() => {
      map(x => x, {one: 1});
    }).not.toThrow();
  });
});
