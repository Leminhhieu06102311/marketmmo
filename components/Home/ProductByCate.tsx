"use client"
import ProductItem from "../Product/ProductItem";
import Heading from "./Heading";
import { Navigation } from "swiper/modules";
import { getProductByCate } from "@/services/product";
import Product from "@/interfaces/product";
import 'swiper/css';
import { useEffect, useState } from "react";
import ProductLoader from "../Skeleton/ProductLoader";
import ProductByCate from "@/interfaces/ProductByCate";

export default function ProductByCate() {
    const [productByCate, setProductByCate] = useState<ProductByCate[]>()
    useEffect(() => {
        const getAllProduct = async () => {
            const data: ProductByCate[] = await getProductByCate()
            setProductByCate(data)
        }
        getAllProduct()
    }, [])
    return (
        <>
            {productByCate ? (<>
                {productByCate.map(product => (
                    <div className="mt-10">
                        <Heading heading={`Danh mục ${product.name}`} path={product.slug} />

                        <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
                            {product.products.map((item) => (
                                <ProductItem product={item} />
                            ))}
                        </div>
                    </div>

                ))}
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