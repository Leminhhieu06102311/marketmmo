"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import {
  getAccountTrending,
  getSellingProduct,
  getSoftwareTrending,
} from "@/services/product";

import Image from "next/image";
import Link from "next/link";

import DetailProduct from "@/components/DetailProduct";
import Product from "@/interfaces/product";
import ProductLoader from "@/components/Skeleton/ProductLoader";
import ProductItem from "@/components/Product/ProductItem";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WrapResponsive from "@/components/WrapResponsive";
import Heading from "@/components/Home/Heading";


import "swiper/css";
import "swiper/css/pagination";
import HomeSlide from "@/components/Home/Slide";


export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const dispatch = useAppDispatch()
  useEffect(() => {
    setIsClient(true)
  }, [])
  const [loading, setLoading] = useState(true);
  const [sellingProduct, setSellingProduct] = useState<Product[]>([]);
  const [accountTrendingProduct, setAccountTrendingProduct] = useState<
    Product[]
  >([]);
  const [softwareTrendingProduct, setSoftwareTrendingProduct] = useState<
    Product[]
  >([]);
  const navigationSellingPrevRef = useRef(null);
  const navigationSellingNextRef = useRef(null);
  const { productId } = useAppSelector((state) => state.product);
  useEffect(() => {
    const fetchProduct = async () => {
      Promise.all([getSellingProduct(), getAccountTrending(), getSoftwareTrending()]).then((values) => {
        setSellingProduct(values[0]);
        setAccountTrendingProduct(values[1]);
        setSoftwareTrendingProduct(values[2]);
      });
      setLoading(false);
    };
    fetchProduct();
  }, []);


  return (
    <div>
      <>
        <HomeSlide />
       
        <WrapResponsive>
          <div className="mt-10">
            {/* Category */}
            <Heading heading="Những mặt hàng bán chạy" />
            {/* Products */}
            <div className="">
              {loading ? (
                <div className="grid xl:grid-cols-6 lg:grid-cols-2 md:grid-cols-3 ">
                  <ProductLoader quantityProduct={6} />
                </div>
              ) : (
                <>
                  <Swiper
                    navigation={{
                      prevEl: navigationSellingPrevRef.current,
                      nextEl: navigationSellingNextRef.current,
                    }}
                    spaceBetween={20}

                    modules={[Navigation]}
                    slidesPerView={1.2}
                    breakpoints={{
                      640: {
                        spaceBetween: 20,
                        centeredSlides: true,
                        loop: true,
                      },
                      768: {
                        spaceBetween: 20,

                        slidesPerView: 3,
                      },
                      1024: {
                        spaceBetween: 20,
                        slidesPerView: 6,
                      },
                    }}
                  >
                    {sellingProduct.map((item) => (
                      <SwiperSlide className="" key={item._id}>
                        <ProductItem product={item} />
                      </SwiperSlide>
                    ))}

                    <button
                      ref={navigationSellingPrevRef.current}
                      className=" cursor-pointer z-10 hover:bg-white left-0 shadow-sm top-[50%] group backdrop-blur-md rounded-xl px-5 absolute  bg-[rgba(255,255,255,0.4)] group-hover:bg-white  group-hover:text-[#121212] transition-all py-4 text-white flex items-center gap-2 font-bold"
                      style={{ transform: "translateY(-50%)" }}
                    >
                      <AiOutlineDoubleLeft className="text-black  text-3xl" />
                    </button>
                    <button
                      ref={navigationSellingNextRef.current}
                      className="cursor-pointer next z-10 hover:bg-white right-0 shadow-sm top-[50%] group backdrop-blur-md rounded-xl px-5 absolute  bg-[rgba(255,255,255,0.4)] group-hover:bg-white  group-hover:text-[#121212] transition-all py-4 text-white flex items-center gap-2 font-bold"
                      style={{ transform: "translateY(-50%)" }}
                    >
                      <AiOutlineDoubleRight className="text-black text-3xl" />
                    </button>
                  </Swiper>
                </>
              )}
            </div>
          </div>
        </WrapResponsive>
        <WrapResponsive>
          <div className="mt-10">
            {/* Category */}
            <Heading heading="Tài khoản xu hướng" />
            {/* Products */}
            <div className="">
              {loading ? (
                <div className="grid xl:grid-cols-6 lg:grid-cols-2 md:grid-cols-3 ">
                  <ProductLoader quantityProduct={6} />
                </div>
              ) : (
                <>
                  <Swiper
                    modules={[Navigation]}
                    slidesPerView={1.2}
                    spaceBetween={20}
                    breakpoints={{
                      640: {
                        spaceBetween: 20,
                        centeredSlides: true,
                        loop: true,
                      },
                      768: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                      },
                      1024: {
                        spaceBetween: 20,
                        slidesPerView: 6,
                      },
                    }}
                  >
                    {accountTrendingProduct.map((item) => (
                      <SwiperSlide className="" key={item._id}>
                        <ProductItem product={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              )}
            </div>
          </div>
        </WrapResponsive>
        <WrapResponsive>
          <div className="my-10">
            {/* Category */}
            <Heading heading="Phần mềm xu hướng" />
            {/* Products */}
            <div className="">
              {loading ? (
                <div className="grid xl:grid-cols-6 lg:grid-cols-2 md:grid-cols-3 ">
                  <ProductLoader quantityProduct={6} />
                </div>
              ) : (
                <>
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    breakpoints={{
                      640: {
                        spaceBetween: 20,
                        centeredSlides: true,
                        loop: true,
                      },
                      768: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                      },
                      1024: {
                        spaceBetween: 20,
                        slidesPerView: 6,
                      },
                    }}
                  >
                    {softwareTrendingProduct.map((item) => (
                      <SwiperSlide className="" key={item._id}>
                        <ProductItem product={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              )}
            </div>
          </div>
        </WrapResponsive>
        {productId && <DetailProduct productId={productId} />}
      </>
    </div>
  )
}

