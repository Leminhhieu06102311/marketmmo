"use client";
import {
  faBars,
  faBookmark,
  faCaretRight,
  faEnvelope,
  faFileInvoice,
  faFontAwesome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="max-w-xxs mx-auto mt-3 md:max-w-3xl lg:max-w-7xl lg:mt-7">
        <h1 className="font-bold text-base lg:text-2xl">
          Nền tảng dịch vụ, sản phẩm cho MMO
        </h1>
        <p>The global crypto market cap is</p>
      </section>
      <section className="max-w-xxs mx-auto mt-3 md:max-w-3xl lg:max-w-7xl">
        <Swiper
          className=""
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image
              src="/images/slide/0bc8399d16bc43e5a7f953530a7a0b89.jpeg"
              width={0}
              height={0}
              sizes="100vw"
              alt="slide"
              className="w-full rounded-lg h-44 lg:h-60 object-cover"
            />
            <div className="pb-7"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/slide/6cd7d73f13094af0b3c7e37dc4ff1054.jpeg"
              width={0}
              height={0}
              sizes="100vw"
              alt="slide"
              className="w-full rounded-lg h-44 lg:h-60 object-cover"
            />
            <div className="pb-7"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/slide/77e8f066839d496f83806409d3b6fe89.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="slide"
              className="w-full rounded-lg h-44 lg:h-60 object-cover"
            />
            <div className="pb-7"></div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="max-w-xxs mx-auto md:max-w-3xl lg:max-w-7xl ">
        <div className="md:hidden lg:hidden p-2 box-shadow bg-white rounded-md">
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold"><span className="text-2xl">🔥</span> Danh sách sản phẩm</h2>
                <p className="text-primary text-xs font-bold">
                  <span>More</span> <FontAwesomeIcon icon={faCaretRight} />
                </p>
              </div>
              <ul className="ml-5">
                <li className="font-medium text-base justify-between py-2 flex items-center">
                  <div className="gap-3 flex items-center">
                    <span className="text-slate-500 text-sm">1</span>
                    <div>
                      <Image
                        src="/images/slide/lt.png"
                        width={25}
                        height={25}
                        alt="bnb"
                        className="rounded-full"
                      />
                    </div>
                    <p className="text-sm font-bold">Tài khoản</p>
                  </div>
                  <button className="py-2 px-3 bg-[#eff2f5] rounded-md text-xs font-bold">
                    Xem ngay
                  </button>
                </li>
                <li className="font-medium text-base justify-between py-2 flex items-center">
                  <div className="gap-3 flex items-center">
                    <span className="text-slate-500 text-sm">2</span>
                    <div>
                      <Image
                        src="/images/slide/btc.png"
                        width={25}
                        height={25}
                        alt="bnb"
                        className="rounded-full"
                      />
                    </div>
                    <p className="text-sm font-bold">Phần mềm</p>
                  </div>
                  <button className="py-2 px-3 bg-[#eff2f5] rounded-md text-xs font-bold">
                    Xem ngay
                  </button>
                </li>
                <li className="font-medium text-base justify-between py-2 flex items-center">
                  <div className="gap-3 flex items-center">
                    <span className="text-slate-500 text-sm">3</span>
                    <div>
                      <Image
                        src="/images/slide/bnb.png"
                        width={25}
                        height={25}
                        alt="bnb"
                        className="rounded-full"
                      />
                    </div>
                    <p className="text-sm font-bold">Blockchain</p>
                  </div>
                  <button className="py-2 px-3 bg-[#eff2f5] rounded-md text-xs font-bold">
                    Xem ngay
                  </button>
                </li>
              </ul>
              <div className="pb-7"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold"><span className="text-2xl">⭐️</span> Danh sách dịch vụ</h2>
                <p className="text-primary text-xs font-bold">
                  <span>More</span> <FontAwesomeIcon icon={faCaretRight} />
                </p>
              </div>
              <ul className="ml-5">
                <li className="font-medium text-base justify-between py-2 flex items-center">
                  <div className="gap-3 flex items-center">
                    <span className="text-slate-500 text-sm">1</span>
                    <div>
                      <Image
                        src="/images/slide/lt.png"
                        width={25}
                        height={25}
                        alt="bnb"
                        className="rounded-full"
                      />
                    </div>
                    <p className="text-sm font-bold">Giao dịch trung gian</p>
                  </div>
                  <button className="py-2 px-3 bg-[#eff2f5] rounded-md text-xs font-bold">
                    Xem ngay
                  </button>
                </li>
                <li className="font-medium text-base justify-between py-2 flex items-center">
                  <div className="gap-3 flex items-center">
                    <span className="text-slate-500 text-sm">2</span>
                    <div>
                      <Image
                        src="/images/slide/btc.png"
                        width={25}
                        height={25}
                        alt="bnb"
                        className="rounded-full"
                      />
                    </div>
                    <p className="text-sm font-bold">Dịch vụ mạng xã hội</p>
                  </div>
                  <button className="py-2 px-3 bg-[#eff2f5] rounded-md text-xs font-bold">
                    Xem ngay
                  </button>
                </li>
                <li className="font-medium text-base justify-between py-2 flex items-center">
                  <div className="gap-3 flex items-center">
                    <span className="text-slate-500 text-sm">3</span>
                    <div>
                      <Image
                        src="/images/slide/bnb.png"
                        width={25}
                        height={25}
                        alt="bnb"
                        className="rounded-full"
                      />
                    </div>
                    <p className="text-sm font-bold">Dịch vụ blockchain</p>
                  </div>
                  <button className="py-2 px-3 bg-[#eff2f5] rounded-md text-xs font-bold">
                    Xem ngay
                  </button>
                </li>
              </ul>
              <div className="pb-7"></div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="gap-3 hidden md:flex lg:flex w-full">
          <div className="p-2 box-shadow bg-white rounded-md w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold"><span className="text-2xl">🔥</span> Danh sách sản phẩm</h2>
              <p className="text-primary text-xs font-bold">
                <span>More</span> <FontAwesomeIcon icon={faCaretRight} />
              </p>
            </div>
            <ul className="ml-5">
              <li className="font-medium text-base justify-between py-2 flex items-center">
                <div className="gap-3 flex items-center">
                  <span className="text-slate-500 text-sm">1</span>
                  <div>
                    <Image
                      src="/images/slide/lt.png"
                      width={25}
                      height={25}
                      alt="bnb"
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-sm font-bold">Tài khoản</p>
                </div>
                <button className="py-2 px-3 bg-[#eff2f5] rounded-md text-xs font-bold">
                  Xem ngay
                </button>
              </li>
              <li className="font-medium text-base justify-between py-2 flex items-center">
                <div className="gap-3 flex items-center">
                  <span className="text-slate-500 text-sm">2</span>
                  <div>
                    <Image
                      src="/images/slide/btc.png"
                      width={25}
                      height={25}
                      alt="bnb"
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-sm font-bold">Phần mềm</p>
                </div>
                <button className="py-2 px-3 bg-[#eff2f5] rounded-md text-xs font-bold">
                  Xem ngay
                </button>
              </li>
              <li className="font-medium text-base justify-between py-2 flex items-center">
                <div className="gap-3 flex items-center">
                  <span className="text-slate-500 text-sm">3</span>
                  <div>
                    <Image
                      src="/images/slide/bnb.png"
                      width={25}
                      height={25}
                      alt="bnb"
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-sm font-bold">Blockchain</p>
                </div>
                <button className="py-2 px-3 bg-[#eff2f5] rounded-md text-xs font-bold">
                  Xem ngay
                </button>
              </li>
            </ul>
          </div>
          <div className="p-2 box-shadow bg-white rounded-md w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold"><span className="text-2xl">⭐️</span> Danh sách dịch vụ</h2>
              <p className="text-primary text-xs font-bold">
                <span>More</span> <FontAwesomeIcon icon={faCaretRight} />
              </p>
            </div>
            <ul className="ml-5">
              <li className="font-medium text-base justify-between py-2 flex items-center">
                <div className="gap-3 flex items-center">
                  <span className="text-slate-500 text-sm">1</span>
                  <div>
                    <Image
                      src="/images/slide/lt.png"
                      width={25}
                      height={25}
                      alt="bnb"
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-sm font-bold">Giao dịch trung gian</p>
                </div>
                <button className="py-2 px-3 bg-[#eff2f5] rounded-md text-xs font-bold">
                  Xem ngay
                </button>
              </li>
              <li className="font-medium text-base justify-between py-2 flex items-center">
                <div className="gap-3 flex items-center">
                  <span className="text-slate-500 text-sm">2</span>
                  <div>
                    <Image
                      src="/images/slide/btc.png"
                      width={25}
                      height={25}
                      alt="bnb"
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-sm font-bold">Mạng xã hội</p>
                </div>
                <button className="py-2 px-3 bg-[#eff2f5] rounded-md text-xs font-bold">
                  Xem ngay
                </button>
              </li>
              <li className="font-medium text-base justify-between py-2 flex items-center">
                <div className="gap-3 flex items-center">
                  <span className="text-slate-500 text-sm">3</span>
                  <div>
                    <Image
                      src="/images/slide/bnb.png"
                      width={25}
                      height={25}
                      alt="bnb"
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-sm font-bold">Blockchain</p>
                </div>
                <button className="py-2 px-3 bg-[#eff2f5] rounded-md text-xs font-bold">
                  Xem ngay
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className=" lg:max-w-7xl mx-auto">
          {/* Category */}
          <div className="my-3 top-0">
            <div className="flex items-center text-xs font-semibold text-gray-600 justify-center lg:justify-end md:w-full">
              <span className="">Filter by</span>
              <ul className="mx-2 inline-flex items-center bg-gray-100  rounded">
                <li className="">
                  <button className="px-4 py-2 m-1 rounded-md active:bg-white hover:bg-white">
                    Tất cả
                  </button>
                </li>
                <li className="">
                  <button className="px-4 py-2 m-1 rounded-md active:bg-white hover:bg-white">
                    Phổ biến
                  </button>
                </li>
                <li className="">
                  <button className="px-4 py-2 m-1 rounded-md active:bg-white hover:bg-white">
                    Giảm giá
                  </button>
                </li>
              </ul>
              <div className=" relative">
                <select className="bg-gray-100 p-3 rounded-lg outline-none">
                  <option className="py-2 px-4 hidden">Category</option>
                  <option className="py-2 px-4">All</option>
                  <option className="py-2 px-4">1</option>
                  <option className="py-2 px-4">2</option>
                </select>
              </div>
              <div className="mx-2 flex bg-gray-100 rounded">
                <span className="rounded p-2 m-1 hover:bg-white active:bg-white">
                  <FontAwesomeIcon icon={faBars} width={15} height={15} />
                </span>
                <span className="rotate-90 rounded p-2 m-1 hover:bg-white active:bg-white">
                  <FontAwesomeIcon
                    icon={faBars}
                    rotate={90}
                    width={15}
                    height={15}
                  />
                </span>
              </div>
            </div>
          </div>
          {/* Products */}
          <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 ">
            <Link href="">
              <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl box-shadow-product hover:-translate-y-3 hover:shadow-hover  duration-300 ">
                <Image
                  src="/images/product/1.webp"
                  alt=""
                  width={0}
                  height={0}
                  className="w-full h-[175px] object-cover rounded-t-2xl"
                  sizes="100vh"
                ></Image>
                <div className="p-3">
                  <div className=" w-full line-clamp-1 overflow-hidden">
                    <p className="w-full font-bold">
                      ArtBlocks: Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Hic, atque.
                    </p>
                  </div>
                  <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <span className="mr-1 text-gray-900">
                      <FontAwesomeIcon
                        icon={faFontAwesome}
                        width={12}
                        height={12}
                      />
                    </span>
                    <span>Etherium</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="my-1">
                      <h4 className="text-xs font-bold text-gray-500">
                        Starts
                      </h4>
                      <span className="my-2 text-base font-bold">Aug 22</span>
                    </div>
                    <div className="my-1">
                      <h4 className=" text-xs font-bold text-gray-500">
                        Mint Price
                      </h4>
                      <span className="my-2 text-base font-bold">0.01 ETH</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center my-3">
            <nav aria-label="Page navigation example">
              <ul className="flex items-center -space-x-px h-8 text-sm">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-2.5 h-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-2.5 h-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
