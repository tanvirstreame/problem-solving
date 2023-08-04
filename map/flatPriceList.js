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

// Increase all product price by 10 flat array
const productPriceList = productList.map(product => product.price + 10)
console.log(productPriceList) // Output: [ 60, 50, 30, 20 ]
