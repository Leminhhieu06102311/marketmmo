"use client";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import DetailProduct from "@/components/DetailProduct/DetailProduct";
import { useEffect, useRef, useState } from "react";
import {
  getAccountTrending,
  getSellingProduct,
  getSoftwareTrending,
} from "@/services/product";
import Product from "@/interfaces/product";
import ProductLoader from "@/components/Skeleton/ProductLoader";
import ProductItem from "@/components/Product/ProductItem";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import WrapResponsive from "@/components/WrapResponsive";
import { fetchUser } from "@/redux/userSlice";
import CartModal from "@/components/Cart/CartModal";
export default function Home() {
  const dispatch = useAppDispatch()
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
    import("preline");
  });
  useEffect(() => {
    const fetchProduct = async () => {
      const sellingProduct: Product[] = await getSellingProduct();
      const accountTrendingProduct: Product[] = await getAccountTrending();
      const softwareTrendingProduct: Product[] = await getSoftwareTrending();
      setSoftwareTrendingProduct(softwareTrendingProduct);
      setAccountTrendingProduct(accountTrendingProduct);
      setSellingProduct(sellingProduct);
      setLoading(false);
    };
    fetchProduct();
  }, []);
  
  return (
    <>
      <CartModal />
      <Header />
      <div className="w-full bg-[url('/images/slide/slide1.gif')] bg-cover bg-center">
        <div
          className="w-full h-full backdrop-blur-2xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(129,131,145,0.01) 0%, rgba(255,255,255,1) 100%)",
          }}
        >
          <WrapResponsive>
            <div className="pt-20">
              <Swiper
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={"auto"}
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
                </SwiperSlide>
              </Swiper>
            </div>
          </WrapResponsive>
        </div>
      </div>

      <WrapResponsive>
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
                <Link
                  href="/gmail"
                  className="bg-[#1212120a] rounded-xl px-3 text-sm hover:bg-[#12121214] transition-all py-1 text-[#121212] flex items-center gap-2"
                >
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
      </WrapResponsive>
      <WrapResponsive>
        <div className="mt-10">
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
          <div className="my-3 top-0">
            <div className="flex justify-between items-center">
              <div className="mx-2 flex justify-between w-full items-center">
                <h2 className="font-bold text-xl md:text-2xl text-[#121212] ">
                  Tài khoản xu hướng
                </h2>
                <Link href="/6544c5879d85a36c1ddbc645">
                  <button className="bg-[#1212120a] rounded-xl px-4 hover:bg-[#12121214] transition-all py-3 text-[#121212] flex items-center gap-2 font-bold text-sm">
                    Xem danh mục
                  </button>
                </Link>
              </div>
            </div>
          </div>
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
          <div className="my-3 top-0">
            <div className="flex justify-between items-center">
              <div className="mx-2 flex justify-between w-full items-center">
                <h2 className="font-bold text-xl md:text-2xl text-[#121212] flex items-center">
                  Phần mềm{" "}
                  <span className="h-5 hidden md:block w-[1px] bg-[#121212] mx-2"></span>
                  <span className="hidden md:block">Tools xu hướng</span>
                </h2>
                <Link href="/6544c5879d85a36c1ddbc643">
                  <button className="bg-[#1212120a] rounded-xl px-4 hover:bg-[#12121214] transition-all py-3 text-[#121212] flex items-center gap-2 font-bold text-sm">
                    Xem danh mục
                  </button>
                </Link>
              </div>
            </div>
          </div>
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
      <DetailProduct productId={productId} />
      <Footer />
    </>
  );
}
