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

// Increase all product price by 10
const productPriceList = productList.map(product => {
  product.price += 10
  // product.price += 10 same as product.price = product.price + 10 
  return product
})
console.log(productPriceList) 
// Output: 
// [
//   { id: 1, name: 'Mango', price: 60 },
//   { id: 2, name: 'Apple', price: 50 },
//   { id: 3, name: 'Orange', price: 30 },
//   { id: 4, name: 'Banana', price: 20 }
// ]
