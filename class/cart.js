class Product {

  constructor(name, quantity, price) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  increaseProduct(quantity) {
    this.quantity = this.quantity + quantity;
  }

  decreaseProduct(quantity) {
    this.quantity = this.quantity - quantity;
  }
}

class Cart {
  constructor(email, product) {
    this.email = email;
    this.product = product
  }

  addTOCart(quantity) {
    product.decreaseProduct(quantity);
  }
}

class Stock {
  constructor(product) {
    this.product = product
  }
  addToStock(quantity) {
    product.increaseProduct(quantity);
  }
}

const product = new Product("Mango", 4, 40);
console.log(product) // Output: Product { name: 'Mango', price: 40, quantity: 4 }

const cart = new Cart("example@gmail.com", product);
console.log(cart) // Output: Cart { email: 'example@gmail.com', product: Product { name: 'Mango', price: 40, quantity: 4 } }

cart.addTOCart(2);
console.log(cart) // Output: Cart { email: 'example@gmail.com', product: Product { name: 'Mango', price: 40, quantity: 2 } }

const stock = new Stock(product);
console.log(stock); // Output: Stock { product: Product { name: 'Mango', price: 40, quantity: 2 } }

stock.addToStock(10);
console.log(stock); // Output: Stock { product: Product { name: 'Mango', price: 40, quantity: 12 } }
