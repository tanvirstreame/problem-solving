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

// Price less than 40
const lessThanFourtyList = productList.filter(product => product.price < 40);
console.log(lessThanFourtyList)
// Output: 
// [
//   { id: 3, name: 'Orange', price: 20 },
//   { id: 4, name: 'Banana', price: 10 }
// ]

// Price less than equal 40
const lessThanEqualFourtyList = productList.filter(product => product.price <= 40);
console.log(lessThanEqualFourtyList)
// Output:
// [
//   { id: 2, name: 'Apple', price: 40 },
//   { id: 3, name: 'Orange', price: 20 },
//   { id: 4, name: 'Banana', price: 10 }
// ]

// Price excluding / removing 40
const RemoveFourtyList = productList.filter(product => product.price !== 40);
console.log(RemoveFourtyList)
// Output:
// [
//   { id: 1, name: 'Mango', price: 50 },
//   { id: 3, name: 'Orange', price: 20 },
//   { id: 4, name: 'Banana', price: 10 }
// ]
