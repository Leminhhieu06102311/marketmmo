import Product from "./product";

export default interface ProductByCate {
    _id: string,
    name: string,
    description: string,
    slug: string,
    products: Product[]
}