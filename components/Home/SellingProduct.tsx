'use client'
import ProductItem from "../Product/ProductItem";
import Heading from "./Heading";
import { getSellingProduct } from "@/services/product";
import Product from "@/interfaces/product";
import 'swiper/css';
import { useEffect, useState } from "react";
import ProductLoader from "../Skeleton/ProductLoader";
export default  function SellingProduct() {
    const [sellingProduct, setSellingProduct] = useState<Product[]>()
    useEffect(() =>{
        const fetchProduct = async () => {
            const data : Product[] = await getSellingProduct()
            setSellingProduct(data)

        }
        fetchProduct()
    },[])
    return (
        <>
            {sellingProduct ? (<>
                    <div className="mt-10">
                <Heading  heading={`Sản phẩm bán chạy`} path={''} />
                        <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
                            {sellingProduct.map((item) => (
                                <ProductItem product={item} />
                            ))}
                        </div>
                    </div>

            </>) : (<>
                <div className="my-3 top-0 mt-10">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-between w-full items-center">
                            <h2 className="font-bold text-2xl animate-pulse bg-gray-200 h-8 w-96 rounded-lg">
                            </h2>
                        </div>
                    </div>
                </div>
                <ProductLoader quantityProduct={12} />
            </>)}
        </>
    )
}