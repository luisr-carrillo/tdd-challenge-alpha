export const products = [];

// {
//     name: "TV",
//     price: 1200.5,
//     iva: 0,
//     units: 1
// }
// Calcular iva

export const getIVA = async (product) => product.price * 0.16;

// Agregar productos
export const addProduct = async (product) => {
  product.iva = await getIVA(product);
  products.concat(product);
  return products;
};

// Total productos
export const countProducts = async () => {
  let result = 0;
  for (let prod of products) {
    result += prod.units;
  }
  return result;
};

// Total precio
export const getTotal = async () => {
  let result = 0;
  for (let prod of products) {
    result += prod.units * prod.price + prod.iva;
  }
  return result;
};
