import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "../Product/ProductItem";
import Heading from "./Heading";
import { Navigation } from "swiper/modules";
import { getAccountTrending } from "@/services/product";
import Product from "@/interfaces/product";
import 'swiper/css';
export default async function AccountTrending() {
    const accountTrendingProduct: Product[] = await getAccountTrending()
    return (
        <div className="mt-10">
            <Heading heading="Danh mục tài khoản" />

            <div className="grid grid-cols-6 gap-5">
                {accountTrendingProduct.map((item) => (
                    <ProductItem product={item} />
                ))}
            </div>
        </div>
    )
}