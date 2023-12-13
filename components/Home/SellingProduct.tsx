// 'use client'
// import ProductItem from "../Product/ProductItem";
// import Heading from "./Heading";
// import { getSellingProduct } from "@/services/product";
// import Product from "@/interfaces/product";
// import 'swiper/css';
// import { useEffect, useState } from "react";
// export default  function SellingProduct() {
//     const [sellingProduct, setSellingProduct] = useState<Product[]>()
//     useEffect(() =>{
//         const getSellingProduct = async () => {
//             const data : Product[] = await getSellingProduct()
//             setSellingProduct(data)

//         }
//     })
//     return (
//         <div className="mt-10">
//             <Heading heading="Những sản phẩm bán chạy" />
//             <div className="grid grid-cols-6 gap-5">
//                 {sellingProduct.map((item) => (
//                     <ProductItem product={item} />
//                 ))}
//             </div>
//         </div>
//     )
// }