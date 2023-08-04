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

// Id equal to 1
const firstProduct = productList.find(product => product.id == 1);
console.log(firstProduct)
// Output:
// { id: 1, name: 'Mango', price: 50 }

// Price equal to 40
const secondProduct = productList.find(product => product.price == 40);
console.log(secondProduct)
// Output:
// { id: 2, name: 'Apple', price: 40 }
