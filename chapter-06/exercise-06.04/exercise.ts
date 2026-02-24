import { Product } from "../helper/utils.js";

type Post = {
  header: string,
  method: string,
  product: Product
}

type Put = {
  header: string,
  method: string,
  product: Product,
  productId: number

}
type SomeRequest = Post | Put
const products: Product[] = [];

function ProcessRequest(request: SomeRequest) {
  if ("productId" in request) {
    products.forEach(
      (p, i) => {
        if (i === request.productId) {
          products[i] = {
            ...request.product
          };
        }
      });
  } else {
    products.push(request.product);
  }
}
const apple: Product = {
  name: "apple",
  price: 12345,
  amount: 10,
  count: 0
};
const mango: Product = {
  name: "mango",
  price: 66666,
  amount: 15,
  count: 0
};
const postAppleRequest: Post = {
  header: "zzzzz",
  method: 'new',
  product: apple,
};

const putMangoRequest: Put = {
  header: "ggggg",
  method: 'update',
  product: mango,
  productId: 2
};

ProcessRequest(postAppleRequest);

ProcessRequest(putMangoRequest);
console.log(products)
