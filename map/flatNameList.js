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

// product name flat array
const productNameList = productList.map(product => product.name)
console.log(productNameList) // Output: [ 'Mango', 'Apple', 'Orange', 'Banana' ]
