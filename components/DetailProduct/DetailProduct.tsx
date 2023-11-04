"use client";
import { faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useContext, useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { getDetailProduct } from "@/services/product";
import Product from "@/interfaces/product";
import Cart from "@/interfaces/cart";
import { Context } from "@/app/layout";

export default function DetailProduct({productId}: {productId: string}) {
  console.log(productId)
  const {statusAddToCart} = useContext(Context)
  const [dataProduct, setDataProduct] = useState<Product>()
  const [selectType, setSelectType] = useState<number>(0);
  const [selectQuantity, setSelectQuantity] = useState(1);
  const hanldeSelectType = (event: MouseEvent<HTMLButtonElement>) => {
    const element = event.target as HTMLElement;
    const typeId = element.getAttribute("data-type");
    setSelectType(Number(typeId));
  };
  const handleMinus = () => {
    if (selectQuantity == 1) {
      setSelectQuantity(1);
    } else {
      setSelectQuantity((pre) => pre - 1);
    }
  };
  const hanldeAddToCart = () => {
    statusAddToCart()
    if (dataProduct) {
      const cart : Cart = {
        type: selectType,
        quantity: selectQuantity,
        product: dataProduct
      }
      localStorage.setItem("product", JSON.stringify(cart))
    }
  }
  useEffect(() => {
    const getDataProduct = async () => {
      try {
      const dataDetailProduct: Product = await getDetailProduct(productId)
      setDataProduct(dataDetailProduct)
        
      } catch (error) {
        
        console.log(error)
      }
    }
    getDataProduct()
  },[productId])
  useEffect(() => {
    import('preline')
  })

  return (
    <div id="modal-detail-product" className="hs-overlay hs-overlay-open:translate-y-0 translate-y-full fixed bottom-0 inset-x-0 transition-all duration-300 transform  h-full w-full z-[60] border-b  hidden" >
      <div className="bg-overlay w-full flex justify-end fixed z-50 top-0 items-center">
        <button data-hs-overlay="#modal-detail-product">
          <FontAwesomeIcon
            className="py-2 px-5 text-white text-lg cursor-pointer"
            icon={faXmark}
          />
        </button>
      </div>
      {
        dataProduct ? (
          <>
          <div className="bg-white rounded-l-lg w-full top-9   absolute bottom-0 left-0 right-0  pb-52 overflow-y-scroll">
        <div className="w-full h-10  mt-10 mb-5 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl flex justify-around">
          <div className="flex gap-3">
            <div className="inline-block h-[2.875rem] w-[2.875rem] object-cover rounded-full ring-2 ring-white dark:ring-gray-800 border border-gray-200 overflow-hidden">

              <Image src={dataProduct.creator.avatar} width={200} height={200} alt="avatar" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="font-medium">{dataProduct.creator.name}</h4>
              <p className="text-sm">@{dataProduct.creator.username}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="border cursor-pointer border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hs-tooltip [--trigger:hover] [--placement:left] ">
              <div className="hs-tooltip-toggle block" >
                <div
                  style={{margin: '3px'}} className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block  absolute invisible z-10 py-2 px-4 bg-slate-900 text-white text-xs rounded-xl"
                >
                  Thích
                </div>
              </div>
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
                    fill="#1C274C"
                  />{" "}
                </g>
              </svg>
            </div>
            <div className="border cursor-pointer border-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                  <path
                    d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                  <path
                    opacity="0.4"
                    d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </g>
              </svg>
            </div>
            <div className="border cursor-pointer border-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
              <svg
                className="w-5 h-5"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>comment-1</title>{" "}
                  <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    {" "}
                    <g
                      id="Icon-Set"
                      transform="translate(-100.000000, -255.000000)"
                      fill="#121212"
                    >
                      {" "}
                      <path
                        d="M116,281 C114.832,281 113.704,280.864 112.62,280.633 L107.912,283.463 L107.975,278.824 C104.366,276.654 102,273.066 102,269 C102,262.373 108.268,257 116,257 C123.732,257 130,262.373 130,269 C130,275.628 123.732,281 116,281 L116,281 Z M116,255 C107.164,255 100,261.269 100,269 C100,273.419 102.345,277.354 106,279.919 L106,287 L113.009,282.747 C113.979,282.907 114.977,283 116,283 C124.836,283 132,276.732 132,269 C132,261.269 124.836,255 116,255 L116,255 Z"
                        id="comment-1"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full bg-white  lg:bg-[#F9F3EF] rounded-3xl mt-10 mb-5 mx-auto flex-wrap max-w-xxs md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl p-3 lg:p-10 gap-5 flex lg:flex-nowrap">
          <div className="w-full lg:w-1/2 flex gap-5 flex-col">
            <div className=" rounded-2xl w-full">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image
                    className="rounded-2xl object-cover w-full h-full"
                    src={dataProduct?.pictures[0]}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="bg-white rounded-2xl w-full p-4 hidden lg:flex gap-3">
              <div>
                <h4 className="font-semibold text-lg">Khuyến mãi </h4>
                <p>
                  Mua trên 100 sản phẩm với giá sỉ{" "}
                  <span className="text-primary">4.000 VND</span>
                </p>
                <div className="my-2 flex gap-2">
                  <input
                    type="text"
                    className="py-3 px-4 block w-full flex-1 text-base border border-gray-200 rounded-md  focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Nhập mã giảm giá"
                  />
                  <button
                    type="button"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Áp dụng
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center flex-1 gap-2">
                <h4 className="font-semibold text-lg">Chia sẽ</h4>
                <div className="flex gap-2">
                  <Link href="/" className="w-7 h-7  rounded-full">
                    <svg
                      viewBox="48.61 50.201 402.77399999999994 402.77399999999994"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <linearGradient
                          id="a"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="100.001%"
                        >
                          {" "}
                          <stop offset={0} stopColor="#00b2ff" />{" "}
                          <stop offset={1} stopColor="#006aff" />{" "}
                        </linearGradient>{" "}
                        <g fill="none" fillRule="evenodd">
                          {" "}
                          <path
                            d="M250 50.201c-112.676 0-200 82.452-200 193.81 0 58.25 23.903 108.582 62.817 143.356 3.26 2.935 5.231 6.995 5.392 11.377l1.087 35.537c.362 11.337 12.072 18.694 22.455 14.151l39.678-17.487a15.974 15.974 0 0 1 10.664-.804c18.229 5.025 37.666 7.678 57.907 7.678 112.676 0 200-82.452 200-193.809S362.676 50.201 250 50.201z"
                            fill="url(#a)"
                          />{" "}
                          <path
                            d="M129.92 300.693l58.752-93.105c9.336-14.794 29.376-18.493 43.38-8l46.72 35.015a12.022 12.022 0 0 0 14.447-.04l63.099-47.84c8.41-6.391 19.437 3.7 13.762 12.624l-58.712 93.065c-9.336 14.794-29.376 18.493-43.38 8l-46.72-35.015a12.022 12.022 0 0 0-14.447.04l-63.139 47.88c-8.41 6.392-19.437-3.699-13.762-12.624z"
                            fill="#ffffff"
                          />{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </Link>
                  <Link href="/" className="w-7 h-7  rounded-full">
                    <svg
                      viewBox="126.444 2.281 589 589"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <circle
                          cx="420.944"
                          cy="296.781"
                          r="294.5"
                          fill="#2daae1"
                        />
                        <path
                          d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z"
                          fill="#ffffff"
                        />
                      </g>
                    </svg>
                  </Link>
                  <Link href="/" className="w-7 h-7  rounded-full">
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <rect
                          x={2}
                          y={2}
                          width={28}
                          height={28}
                          rx={6}
                          fill="url(#paint0_radial_87_7153)"
                        />{" "}
                        <rect
                          x={2}
                          y={2}
                          width={28}
                          height={28}
                          rx={6}
                          fill="url(#paint1_radial_87_7153)"
                        />{" "}
                        <rect
                          x={2}
                          y={2}
                          width={28}
                          height={28}
                          rx={6}
                          fill="url(#paint2_radial_87_7153)"
                        />{" "}
                        <path
                          d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                          fill="white"
                        />{" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                          fill="white"
                        />{" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                          fill="white"
                        />{" "}
                        <defs>
                          {" "}
                          <radialGradient
                            id="paint0_radial_87_7153"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                          >
                            {" "}
                            <stop stopColor="#B13589" />{" "}
                            <stop offset="0.79309" stopColor="#C62F94" />{" "}
                            <stop offset={1} stopColor="#8A3AC8" />{" "}
                          </radialGradient>{" "}
                          <radialGradient
                            id="paint1_radial_87_7153"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                          >
                            {" "}
                            <stop stopColor="#E0E8B7" />{" "}
                            <stop offset="0.444662" stopColor="#FB8A2E" />{" "}
                            <stop offset="0.71474" stopColor="#E2425C" />{" "}
                            <stop
                              offset={1}
                              stopColor="#E2425C"
                              stopOpacity={0}
                            />{" "}
                          </radialGradient>{" "}
                          <radialGradient
                            id="paint2_radial_87_7153"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                          >
                            {" "}
                            <stop offset="0.156701" stopColor="#406ADC" />{" "}
                            <stop offset="0.467799" stopColor="#6A45BE" />{" "}
                            <stop
                              offset={1}
                              stopColor="#6A45BE"
                              stopOpacity={0}
                            />{" "}
                          </radialGradient>{" "}
                        </defs>{" "}
                      </g>
                    </svg>
                  </Link>
                  <Link href="/" className="w-7 h-7  rounded-full">
                    <svg
                      viewBox="0 0 256 256"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      preserveAspectRatio="xMidYMid"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path
                            d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z"
                            fill="#40B3E0"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308"
                            fill="#FFFFFF"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475"
                            fill="#D2E5F1"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624"
                            fill="#B5CFE4"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex gap-5 flex-col">
            <div className="bg-white  rounded-2xl w-full lg:p-4">
              <div className="inline">
                  <span
                    className="mr-2 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-lg bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                  >
                    Sản phẩm
                  </span>
                  <span className=" text-2xl text-primary font-bold">{dataProduct?.name}</span>
                  
               
              </div>
              <div className="block">
              <div className="flex-wrap gap-2 pt-2 py-5 inline-flex items-center border border-b-gray-300 border-l-0 border-r-0 border-t-0 ">
                <div className=" flex gap-2">
                  <div className="gap-2 flex">
                    <svg
                      viewBox="0 0 128 128"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--noto w-6 h-6"
                      preserveAspectRatio="xMidYMid meet"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                          fill="#fdd835"
                        />
                        <path
                          d="M67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                          fill="#ffff8d"
                        />
                        <path
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                          fill="#f4b400"
                        />
                      </g>
                    </svg>
                    <svg
                      viewBox="0 0 128 128"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--noto w-6 h-6"
                      preserveAspectRatio="xMidYMid meet"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                          fill="#fdd835"
                        />
                        <path
                          d="M67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                          fill="#ffff8d"
                        />
                        <path
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                          fill="#f4b400"
                        />
                      </g>
                    </svg>
                    <svg
                      viewBox="0 0 128 128"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--noto w-6 h-6"
                      preserveAspectRatio="xMidYMid meet"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                          fill="#fdd835"
                        />
                        <path
                          d="M67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                          fill="#ffff8d"
                        />
                        <path
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                          fill="#f4b400"
                        />
                      </g>
                    </svg>
                    <svg
                      viewBox="0 0 128 128"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--noto w-6 h-6"
                      preserveAspectRatio="xMidYMid meet"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                          fill="#fdd835"
                        />
                        <path
                          d="M67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                          fill="#ffff8d"
                        />
                        <path
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                          fill="#f4b400"
                        />
                      </g>
                    </svg>
                    <svg
                      viewBox="0 0 128 128"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--noto w-6 h-6"
                      preserveAspectRatio="xMidYMid meet"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                          fill="#fdd835"
                        />
                        <path
                          d="M67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                          fill="#ffff8d"
                        />
                        <path
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                          fill="#f4b400"
                        />
                      </g>
                    </svg>
                  </div>
                  <p>23 lượt đánh giá</p>
                </div>
                <div className="flex items-center">
                  <span className="h-5 w-[1px] bg-gray-300 mx-2"></span>
                </div>
                <p>50 đã bán</p>
                <div className="flex items-center">
                  <span className="h-5 w-[1px] bg-gray-300 mx-2"></span>
                </div>
                <p>khiếu nại 0.0%</p>
              </div>

              </div>
              <br />
              <div className="pt-2 py-5 inline-flex flex-col border border-b-gray-300 border-l-0 border-r-0 border-t-0 ">
                <p>Thể loại :</p>
                <p>
                  Số lượng : <b className="text-primary">{dataProduct?.quantity}</b>
                </p>
                <div className="mt-4">
                  <h2 className="text-2xl font-bold">{dataProduct?.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h2>
                  <div className="flex gap-2 items-center">
                    <h3
                      className="text-lg font-semibold text-[#616E85] "
                      style={{ textDecoration: "line-through" }}
                    >
                      {dataProduct?.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </h3>
                    <div className="bg-red-600 text-sm inline px-3 py-2 text-white rounded-lg">
                      -50%
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 flex-col my-2">
                <p>Chọn gói sản phẩm</p>
                <div className="inline-flex flex-wrap gap-2">
                  
                  {/* {dataProduct?.type.map((item,index) => (
                    <button key={index}
                    data-type={index}
                    onClick={(event) => hanldeSelectType(event)}
                    className={`${
                      selectType === index
                        ? "bg-primary text-white border-transparent"
                        : "text-black bg-white border-gray-200"
                    } p-2 rounded-lg text-sm inline cursor-pointer border`}
                  >
                    {item.name}
                  </button>
                  ))} */}
                </div>
              </div>
            </div>
            <div className="bg-white  rounded-2xl w-full lg:p-4">
              <p>Số lượng</p>
              <div className=" py-3 flex gap-2 flex-col">
                <div className="border border-gray-200 rounded-md inline-flex items-center">
                  <button onClick={handleMinus} className="py-3 px-4">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M6 12L18 12"
                          stroke="#000000"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />{" "}
                      </g>
                    </svg>
                  </button>
                  <input
                    type="text"
                    className=" inline px-3 w-full text-center text-base outline-none  focus:border-blue-500 focus:ring-blue-500 "
                    value={selectQuantity}
                  />
                  <button className="py-3 px-4 " onClick={() => setSelectQuantity(selectQuantity + 1)}>
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M6 12H18M12 6V18"
                          stroke="#000000"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />{" "}
                      </g>
                    </svg>
                  </button>
                </div>
                <button
                  onClick={() => hanldeAddToCart()}
                  data-hs-overlay="#cart-modal"
                  type="button"
                  className="py-3 flex-1 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Mua hàng
                </button>
                <button
                  type="button"
                  className="py-3 px-4 flex-1 inline-flex justify-center items-center gap-2 rounded-md border border-primary font-semibold bg-white  text-primary hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Nhắn tin cho người bán
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-xxs md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl ">
          <div className="flex justify-center gap-5 my-8">
            <button
              type="button"
              className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-lg bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
            >
              MÔ TẢ
            </button>
            <button
              type="button"
              className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-lg  border border-transparent font-semibold  text-black hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
            >
              ĐÁNH GIÁ
            </button>
          </div>
          <div className="w-full rounded-3xl border border-gray-200 py-4 px-3 lg:p-10">
            <h3 className="font-bold text-lg">Chi tiết sản phẩm</h3>
            <ul className="pl-10 list-disc">
              <li className="leading-7">
                Steam Wallet Code không còn lạ lẫm gì nữa với cộng đồng game thủ
                nữa khi nó ngày một được ưa chuộng và thịnh hành hơn so với nạp
                card Steam Wallet bởi khả năng nạp nhanh, cơ hội được chiết khấu
                lớn và đặc biệt là không cần phải chờ đợi ship hàng. Sau khi mua
                code xong bạn sẽ nhận được ngay lập tức mã code để nạp vào tài
                khoản Steam của mình.
              </li>
              <li className="leading-7">
                Steam Wallet Code là dạng mã thẻ Steam Wallet dưới dạng code
                online dùng để nạp tiền mua game Steam hoặc mua đồ trong game
                online như DOTA 2, CSGO, GTA, PUBG, v.v.v. Cũng giống như kiểu
                nạp thẻ điện thoại mà chỉ cần nạp mã thẻ cào thôi ấy mà, khỏi
                cần phải mua thẻ giấy mà vẫn được nạp tiền một cách nhanh chóng
                tiện lợi.
              </li>
              <li className="leading-7">
                Các bạn nạp Code Steam Wallet vào tài khoản và tài khoản sẽ có
                số dư được tính bằng VND.
              </li>
            </ul>
          </div>
        </div>
      </div>
          </>
        ) : (
          <>
          </>
        )
      }
    </div>

  );
}
