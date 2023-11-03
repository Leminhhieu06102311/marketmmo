import Product from "./product";

export default interface Cart {
    type: number;
    quantity: number,
    product: Product
}