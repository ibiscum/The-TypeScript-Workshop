import { Product } from "../helper/utils.js";

// product array
const products_list: Product[] = [];

// add products to product array function
function makeProduct(p: Product) {
  products_list.push(p); // add product to end of array
}

// use a for loop to create 5 products
for (let index = 0; index < 5; index++) {
  const p: Product = {
    name: "Product" + "_" + `${index}`,
    count: index,
    price: 100,
    amount: 15
  }//make product
  makeProduct(p);
}

console.log(products_list);
