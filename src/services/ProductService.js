const products = [
  {
    id: 1,
    name: "Nicolas",
    lastname: "Sosa",
    age: 25,
  },
  {
    id: 2,
    name: "Angie",
    lastname: "Zárate",
    age: 24,
  },
  {
    id: 3,
    name: "Laura",
    lastname: "Cardona",
    age: 19,
  },
  {
    id: 4,
    name: "Karol",
    lastname: "Amaya",
    age: 22,
  },
];

export const listProducts = () => [...products];

export const createProduct = (product) => {

  if (product.id) {
    updateProduct(product);
    return;
  }

  let lastId = 0;
  
  if (products.length > 0)
    lastId = products[products.length - 1].id;

  product.id = ++lastId;
  products.push(product);
};

export const deleteProduct = (productId) => {
  const index = products.findIndex((product) => product.id == productId);
  products.splice(index, 1);
};

export const updateProduct = (updatedProduct) => {

  console.log(`Update function: id: ${updatedProduct.id}`);

  const index = products.findIndex((product) => product.id == updatedProduct.id);

  console.log(`Index: ${index}`);
  products[index] = updatedProduct;
};