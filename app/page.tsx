"use client";
import {
  faAngleLeft,
  faAngleRight,
  faFontAwesome,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import DetailProduct from "@/components/DetailProduct/DetailProduct";
import { useContext, useEffect, useRef, useState } from "react";
import { getSellingProduct } from "@/services/product";
import Product from "@/interfaces/product";
import ProductLoader from "@/components/Skeleton/ProductLoader";
import { ProductContext } from "./layout";
import ProductItem from "@/components/Product/ProductItem";
export default function Home() {
  const [sellingProduct, setSellingProduct] = useState<Product[]>([]);
  const navigationSellingPrevRef = useRef(null);
  const navigationSellingNextRef = useRef(null);
  const { productId, handleClickProduct } = useContext(ProductContext);
  console.log('ok')
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      const data: Product[] = await getSellingProduct();
      setSellingProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <section className="max-w-xxs mx-auto mt-3 md:max-w-3xl  lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl lg:mt-7">
        <h1 className="font-bold text-base md:text-2xl lg:text-4xl">Make Money Online</h1>
      </section>
      <section className="max-w-xxs mx-auto mt-3 md:max-w-3xl lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl lg:py-5">
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide className="!w-5/6 md:!w-full">
            <div className="w-full relative group rounded-lg overflow-hidden">
              <Image
                src="/images/slide/slide1.gif"
                width={0}
                height={0}
                sizes="100vw"
                alt="slide"
                className="w-full rounded-lg h-96 md:h-96 lg:h-96 object-cover group-hover:scale-110 transition-all"
              />
              <div className="absolute w-full bg-[rgba(0,0,0,0.1)] h-full top-0 flex items-end justify-between">
                <div className="flex p-5 md:p-10 flex-col">
                  <Image
                    src="/images/services/sosical.avif"
                    alt="bnb"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-md border border-white mb-5 w-14 h-14 md:w-16 md:h-16"
                  />
                  <p className=" text-2xl md:text-4xl font-semibold text-white">
                    Giao dịch trung gian
                  </p>
                  <p className="text-white font-bold">By MarketMMO</p>
                  <p className="text-white font-bold">
                    Số lượng giao dịch : 14,035 giao dịch
                  </p>
                </div>
                <div className="hidden md:flex p-10 flex-col">
                  <button className="backdrop-blur-md rounded-xl px-5 bg-[rgba(255,255,255,0.4)] group-hover:bg-white  group-hover:text-[#121212] transition-all py-4 text-white flex items-center gap-2 font-bold">
                    Xem danh mục
                  </button>
                </div>
              </div>
            </div>
            <div className="pb-7"></div>
          </SwiperSlide>
          <SwiperSlide className="!w-5/6 md:!w-full">
            <Image
              src="/images/slide/slide2.gif"
              width={0}
              height={0}
              sizes="100vw"
              alt="slide"
              className="w-full rounded-lg h-96 md:h-96 lg:h-96 object-cover"
            />
            <div className="pb-7"></div>
          </SwiperSlide>
          <SwiperSlide className="!w-5/6 md:!w-full">
            <div className="w-full relative group rounded-lg overflow-hidden">
              <Image
                src="/images/slide/slide1.gif"
                width={0}
                height={0}
                sizes="100vw"
                alt="slide"
                className="w-full rounded-lg h-96 md:h-96 lg:h-96 object-cover group-hover:scale-110 transition-all"
              />
              <div className="absolute w-full bg-[rgba(0,0,0,0.1)] h-full top-0 flex items-end justify-between">
                <div className="flex p-5 md:p-10 flex-col">
                  <Image
                    src="/images/services/sosical.avif"
                    alt="bnb"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-md border border-white mb-5 w-14 h-14 md:w-16 md:h-16"
                  />
                  <p className=" text-2xl md:text-4xl font-semibold text-white">
                    Giao dịch trung gian
                  </p>
                  <p className="text-white font-bold">By MarketMMO</p>
                  <p className="text-white font-bold">
                    Số lượng giao dịch : 14,035 giao dịch
                  </p>
                </div>
                <div className="hidden md:flex p-10 flex-col">
                  <button className="backdrop-blur-md rounded-xl px-5 bg-[rgba(255,255,255,0.4)] group-hover:bg-white  group-hover:text-[#121212] transition-all py-4 text-white flex items-center gap-2 font-bold">
                    Xem danh mục
                  </button>
                </div>
              </div>
            </div>
            <div className="pb-7"></div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="max-w-xxs mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="gap-3 md:hidden w-full my-4">
          <div className=" bg-white w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">
                <span className="text-2xl">🔥</span> Danh sách sản phẩm
              </h2>
            </div>
            <ul className="">
              <li className="font-medium text-base gap-5 py-4 px-3 rounded-md flex items-center hover:bg-[#1212120a] my-1 justify-between">
                <div className="gap-5 flex items-center">
                  <span className="text-md leading-md font-semibold">1</span>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/services/sosical.avif"
                      width={40}
                      height={40}
                      alt="bnb"
                      className="rounded-md"
                    />
                    <p className="text-lg font-semibold text-[#121212]">
                      Tài khoản
                    </p>
                  </div>
                </div>
                <Link href="/gmail" className="bg-[#1212120a] rounded-xl px-3 text-sm hover:bg-[#12121214] transition-all py-1 text-[#121212] flex items-center gap-2">
                  <FontAwesomeIcon icon={faLocationArrow} />
                </Link>
              </li>
              <li className="font-medium text-base gap-5 py-4 px-3 rounded-md flex items-center hover:bg-[#1212120a] my-1 justify-between">
                <div className="gap-5 flex items-center">
                  <span className="text-md leading-md font-semibold">2</span>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/services/sosical.avif"
                      width={40}
                      height={40}
                      alt="bnb"
                      className="rounded-md"
                    />
                    <p className="text-lg font-semibold text-[#121212] flex items-center">
                      Phần Mềm{" "}
                      <span className="h-5 block w-[1px] bg-[#121212] mx-2"></span>{" "}
                      Tools
                    </p>
                  </div>
                </div>
                <button className="bg-[#1212120a] rounded-xl px-3 text-sm hover:bg-[#12121214] transition-all py-1 text-[#121212] flex items-center gap-2">
                  <FontAwesomeIcon icon={faLocationArrow} />
                </button>
              </li>
            </ul>
          </div>
          <div className="border border-t-gray-200 pt-4 border-r-0 border-l-0 border-b-0 w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">
                <span className="text-2xl">⭐️</span> Danh sách dịch vụ
              </h2>
            </div>
            <ul className="">
              <li className="font-medium text-base gap-5 py-4 px-3 rounded-md flex items-center hover:bg-[#1212120a] my-1 justify-between">
                <div className="gap-5 flex items-center">
                  <span className="text-md leading-md font-semibold">3</span>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/services/sosical.avif"
                      width={40}
                      height={40}
                      alt="bnb"
                      className="rounded-md"
                    />
                    <p className="text-lg font-semibold text-[#121212]">
                      Giao dịch trung gian
                    </p>
                  </div>
                </div>
                <button className="bg-[#1212120a] rounded-xl px-3 text-sm hover:bg-[#12121214] transition-all py-1 text-[#121212] flex items-center gap-2">
                  <FontAwesomeIcon icon={faLocationArrow} />
                </button>
              </li>
              <li className="font-medium text-base gap-5 py-4 px-3 rounded-md flex items-center hover:bg-[#1212120a] my-1 justify-between">
                <div className="gap-5 flex items-center">
                  <span className="text-md leading-md font-semibold">4</span>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/services/giaodichtrunggian.avif"
                      width={40}
                      height={40}
                      alt="bnb"
                      className="rounded-md"
                    />
                    <p className="text-lg font-semibold text-[#121212]">
                      Hỗ trợ bật kiếm tiền X
                    </p>
                  </div>
                </div>
                <button className="bg-[#1212120a] rounded-xl px-3 text-sm hover:bg-[#12121214] transition-all py-1 text-[#121212] flex items-center gap-2">
                  <FontAwesomeIcon icon={faLocationArrow} />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="gap-3 hidden md:flex lg:flex w-full">
          <div className="md:p-2 md:bg-transparent lg:p-6 lg:bg-white box-shadow  rounded-md w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">
                <span className="text-2xl">🔥</span> Danh sách sản phẩm
              </h2>
            </div>
            <ul className="">
              <li className="font-medium text-base justify-between py-4 px-3 rounded-md flex items-center hover:bg-[#1212120a] my-1">
                <div className="md:gap-3 gap-10 flex items-center">
                  <span className="text-md leading-md font-semibold">1</span>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/services/sosical.avif"
                      width={50}
                      height={50}
                      alt="bnb"
                      className="rounded-md"
                    />
                    <p className="text-lg font-semibold text-[#121212]">
                      Tài khoản{" "}
                    </p>
                  </div>
                </div>
                <button className="bg-[#1212120a] rounded-xl px-4 hover:bg-[#12121214] transition-all py-2 text-[#121212] flex items-center gap-2">
                  Xem ngay
                </button>
              </li>
              <li className="font-medium text-base justify-between py-4 px-3 rounded-md flex items-center hover:bg-[#1212120a] my-1">
                <div className="md:gap-3 gap-10 flex items-center">
                  <span className="text-md leading-md font-semibold">2</span>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/services/giaodichtrunggian.avif"
                      width={50}
                      height={50}
                      alt="bnb"
                      className="rounded-md"
                    />
                    <p className="text-lg font-semibold text-[#121212] flex items-center">
                      Tools
                    </p>
                  </div>
                </div>
                <button className="bg-[#1212120a] rounded-xl px-4 hover:bg-[#12121214] transition-all py-2 text-[#121212] flex items-center gap-2">
                  Xem ngay
                </button>
              </li>
            </ul>
          </div>
          <div className="p-6 box-shadow bg-white rounded-md w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">
                <span className="text-2xl">⭐️</span> Danh sách dịch vụ
              </h2>
            </div>
            <ul className="">
              <li className="font-medium text-base justify-between py-4 px-3 rounded-md flex items-center hover:bg-[#1212120a] my-1">
                <div className="gap-10 flex items-center">
                  <span className="text-md leading-md font-semibold">1</span>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/services/sosical.avif"
                      width={50}
                      height={50}
                      alt="bnb"
                      className="rounded-md"
                    />
                    <p className="text-lg font-semibold text-[#121212]">
                      Giao dịch trung gian
                    </p>
                  </div>
                </div>
                <button className="bg-[#1212120a] rounded-xl px-4 hover:bg-[#12121214] transition-all py-2 text-[#121212] flex items-center gap-2">
                  Xem ngay
                </button>
              </li>
              <li className="font-medium text-base justify-between py-4 px-3 rounded-md flex items-center hover:bg-[#1212120a] my-1">
                <div className="gap-10 flex items-center">
                  <span className="text-md leading-md font-semibold">2</span>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/services/giaodichtrunggian.avif"
                      width={50}
                      height={50}
                      alt="bnb"
                      className="rounded-md"
                    />
                    <p className="text-lg font-semibold text-[#121212]">
                      Hỗ trợ bật kiếm tiền Tweeter
                    </p>
                  </div>
                </div>
                <button className="bg-[#1212120a] rounded-xl px-4 hover:bg-[#12121214] transition-all py-2 text-[#121212] flex items-center gap-2">
                  Xem ngay
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className=" max-w-xxs md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl  mx-auto">
          {/* Category */}
          <div className="my-3 top-0">
            <div className="flex justify-between items-center">
              <div className="mx-2">
                <h2 className="font-bold text-2xl text-[#121212]">
                  Những mặt hàng bán chạy
                </h2>
              </div>
            </div>
          </div>
          {/* Products */}
          <div className="">
            {loading ? (
              <div className="grid xl:grid-cols-5 lg:grid-cols-2 md:grid-cols-3 ">
                <ProductLoader quantityProduct={5} />
              </div>
            ) : (
              <>
                <Swiper
                  navigation={{
                    prevEl: navigationSellingPrevRef.current,
                    nextEl: navigationSellingNextRef.current,
                  }}
                  modules={[Navigation]}
                  slidesPerView= {1.2}
                  breakpoints={{
                    640: {
                      spaceBetween: 20,
                      centeredSlides: true,
                      loop: true 
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 5,
                    },
                  }}
                 
                >
                  <SwiperSlide className="">
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <SwiperSlide className="">
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <SwiperSlide className="">
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <button
                    ref={navigationSellingPrevRef}
                    className=" z-10 hover:bg-white left-0 shadow-sm top-[50%] group backdrop-blur-md rounded-xl px-5 absolute  bg-[rgba(255,255,255,0.4)] group-hover:bg-white  group-hover:text-[#121212] transition-all py-4 text-white flex items-center gap-2 font-bold"
                    style={{ transform: "translateY(-50%)" }}
                  >
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="group-hover:text-black text-3xl"
                    />
                  </button>
                  <button
                    ref={navigationSellingNextRef}
                    className="next z-10 hover:bg-white right-0 shadow-sm top-[50%] group backdrop-blur-md rounded-xl px-5 absolute  bg-[rgba(255,255,255,0.4)] group-hover:bg-white  group-hover:text-[#121212] transition-all py-4 text-white flex items-center gap-2 font-bold"
                    style={{ transform: "translateY(-50%)" }}
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="group-hover:text-black text-3xl"
                    />
                  </button>
                </Swiper>
              </>
            )}
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className=" max-w-xxs md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl  mx-auto">
          {/* Category */}
          <div className="my-3 top-0">
            <div className="flex justify-between items-center">
              <div className="mx-2 flex justify-between w-full items-center">
                <h2 className="font-bold text-xl md:text-2xl text-[#121212] ">
                  Tài khoản xu hướng
                </h2>
                <button className="bg-[#1212120a] rounded-xl px-4 hover:bg-[#12121214] transition-all py-3 text-[#121212] flex items-center gap-2 font-bold text-sm">
                  Xem danh mục
                </button>
              </div>
            </div>
          </div>
          {/* Products */}
          <div className="">
            {loading ? (
              <div className="grid xl:grid-cols-5 lg:grid-cols-2 md:grid-cols-3 ">
                <ProductLoader quantityProduct={5} />
              </div>
            ) : (
              <>
                <Swiper
                  
                  modules={[Navigation]}
                  slidesPerView= {1.2}
                  breakpoints={{
                    640: {
                      spaceBetween: 20,
                      centeredSlides: true,
                      loop: true

                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 5,
                    },
                  }}
                 
                >
                  <SwiperSlide className="">
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <SwiperSlide className="">
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <SwiperSlide className="">
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                </Swiper>
              </>
            )}
          </div>
        </div>
      </section>
      <section className="mt-10 mb-10">
        <div className=" max-w-xxs md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl  mx-auto">
          {/* Category */}
          <div className="my-3 top-0">
            <div className="flex justify-between items-center">
              <div className="mx-2 flex justify-between w-full items-center">
                <h2 className="font-bold text-xl md:text-2xl text-[#121212] flex items-center">
                  Phần mềm{" "}
                  <span className="h-5 hidden md:block w-[1px] bg-[#121212] mx-2"></span>
                  <span className="hidden md:block">
                  Tools xu hướng</span>
                </h2>
                <button className="bg-[#1212120a] rounded-xl px-4 hover:bg-[#12121214] transition-all py-3 text-[#121212] flex items-center gap-2 font-bold text-sm">
                  Xem danh mục
                </button>
              </div>
            </div>
          </div>
          {/* Products */}
          <div className="">
            {loading ? (
              <div className="grid xl:grid-cols-5 lg:grid-cols-2 md:grid-cols-3 ">
                <ProductLoader quantityProduct={5} />
              </div>
            ) : (
              <>
                <Swiper
                  
                  modules={[Navigation]}
                  slidesPerView= {1.2}
                  breakpoints={{
                    640: {
                      spaceBetween: 20,
                      centeredSlides: true,
                      loop: true

                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 5,
                    },
                  }}
                 
                >
                  <SwiperSlide className="">
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <SwiperSlide className="">
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <SwiperSlide className="">
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem handleClickProduct={handleClickProduct} />
                  </SwiperSlide>
                </Swiper>
              </>
            )}
          </div>
        </div>
      </section>
      <DetailProduct productId={productId} />
    </>
  );
}
