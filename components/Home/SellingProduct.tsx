import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "../Product/ProductItem";
import Heading from "./Heading";
import { Navigation } from "swiper/modules";
import { getSellingProduct } from "@/services/product";
import Product from "@/interfaces/product";
import 'swiper/css';
export default async function SellingProduct() {
    const sellingProduct: Product[] = await getSellingProduct()
    return (
        <div className="mt-10">
            <Heading heading="Những sản phẩm bán chạy" />
            <div className="grid grid-cols-6 gap-5">
                {sellingProduct.map((item) => (
                    <ProductItem product={item} />
                ))}
            </div>
        </div>
    )
}