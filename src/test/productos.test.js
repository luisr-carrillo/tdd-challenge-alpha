import { products } from "../lib/productos";

describe('createStore', () => {
  it('should return empty object', () => {
    expect(products.length).toEqual(0);
  });
});
