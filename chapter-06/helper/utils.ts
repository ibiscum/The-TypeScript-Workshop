//primitive type
type Count = number;

// object type
export type Product = {
  name: string,
  count: Count, //reuse Count
  price: number,
  amount: number,
}


