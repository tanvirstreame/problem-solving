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
  },
  {
    id: 3,
    name: "Orange",
    price: 20
  },
  {
    id: 4,
    name: "Banana",
    price: 10
  }
];

// Increase only mango price

const newProductList = productList.map(product => {
  if (product.name === "Mango") {
    product.price += 10
  }
  return product
})
console.log(newProductList)

// Output:
// [
//   { id: 1, name: 'Mango', price: 60 },
//   { id: 2, name: 'Apple', price: 40 },
//   { id: 3, name: 'Orange', price: 20 },
//   { id: 4, name: 'Banana', price: 10 }
// ]
