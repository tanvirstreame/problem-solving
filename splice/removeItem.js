const productList = [
  {
    id: 1,
    name: "Mango",
    price: 50
  },
  {
    id: 2,
    name: "Apple",
    price: 40
  }
];

const removeItemById = (id) => {
  const index = productList.findIndex(product => product.id === id);
  productList.splice(index, 1);
}

removeItemById(2);
console.log(productList) // Output: [ { id: 1, name: 'Mango', price: 50 } ]
