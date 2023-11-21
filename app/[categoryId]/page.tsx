"use client";
import DetailProduct from "@/components/DetailProduct";
import ProductItem from "@/components/Product/ProductItem";
import ProductLoader from "@/components/Skeleton/ProductLoader";
import WrapResponsive from "@/components/WrapResponsive";
import Product from "@/interfaces/product";
import { useAppSelector } from "@/redux/hooks";
import { getProductFromCategory } from "@/services/product";
// import {
//   faArrowDownShortWide,
//   faArrowUpShortWide,
//   faArrowUpWideShort,
//   faFireFlameCurved,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function DetailCategory({
  params,
}: {
  params: { categoryId: string };
}) {
  const { productId } = useAppSelector((state) => state.product);
  // Render Product
  const { categoryId } = params;
  const [products, setProducts] = useState<Product[]>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>();
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [activeButton, setActiveButton] = useState("all");

  // Render Product from Json-sv
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await getProductFromCategory(categoryId); // Link to JSON Server
        data = data.sort(
          (a: { sold: number }, b: { sold: number }) => b.sold - a.sold
        );
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    console.log(products)
  },[products])
  // Filter Product
  const filterProducts = (status: string) => {
    if (status === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products?.filter((product) => product.status === status);
      setFilteredProducts(filtered);
    }
    setFilterStatus(status);
    setActiveButton(status);
  };
  //Sort Product
  const sortProductsByPrice = (order: string) => {
    if (products) {
      let sortedProducts = [...products];

      sortedProducts.sort((a, b) => {
        if (order === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });

      setFilteredProducts(sortedProducts);
      setSortOrder(order);
      setActiveButton("price");
    }
  };
  return (
    <>
        <WrapResponsive>
        <div className="mt-10">
          <h3 className="mb-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Gian hàng{" "}
            <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
              gmail
            </mark>{" "}
            dành cho bạn
          </h3>
          <p className="text-base font-normal text-gray-500 md:text-base lg:text-lg dark:text-gray-400">
            Tất cả những sản phẩm liên quan đến gmail có tất cả ở bên dưới mời
            bạn lựa chọn
          </p>
        </div>
        <div className="flex w-full">
          {/* Aside */}
          <div className="lg:hidden lg:w-71 md:w-24 md:hidden hidden  border-r ">
            {/* Vertical navigation  */}
            <div className=" px-6 pt-6 block scroll-auto overflow-y-auto max-h-screen sticky top-0 overscroll-contain">
              <ul className="lg:block md:justify-center sticky flex flex-wrap ">
                <li className="bg-[#eff2f5] lg:my-1 lg:w-full md:m-0 md:w-7 rounded-lg  px-2 py-1">
                  <Link
                    href="/intermediary"
                    className="lg:justify-start md:justify-center flex items-center  "
                  >
                    <span className="lg:mr-4">
                      {/* <FontAwesomeIcon
                        icon={faFireFlameCurved}
                        width={17}
                        height={17}
                      /> */}
                    </span>
                    <span className="lg:block md:hidden text-sm font-medium leading-10">
                      Xu hướng
                    </span>
                  </Link>
                </li>
                <li className="lg:my-1 lg:w-full md:my-3 md:w-7 rounded-lg  px-2 py-1">
                  <Link
                    href="/intermediary"
                    className="lg:justify-start md:justify-center flex items-center "
                  >
                    <span className="lg:mr-4">
                      {/* <FontAwesomeIcon
                        icon={faArrowDownShortWide}
                        width={17}
                        height={17}
                        className="text-[#808a9d]"
                      /> */}
                    </span>
                    <span className="lg:block md:hidden text-sm font-medium leading-10">
                      Giảm giá
                    </span>
                  </Link>
                </li>
              </ul>
              <span className="lg:block hidden sticky text-sm  font-medium text-gray-400">
                Networks
              </span>
              <ul className="sticky">
                <li className="lg:my-1 md:my-3 rounded-md lg:hover:bg-gray-100 cursor-pointer">
                  <Link
                    href=""
                    className="lg:justify-start md:justify-center flex items-center "
                  >
                    <span className="lg:mx-2 md:mx-0">
                      <div className="flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-8 h-8 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                          <style
                            dangerouslySetInnerHTML={{
                              __html: "svg{fill:#ffffff}",
                            }}
                          />
                          <path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" />
                        </svg>
                      </div>
                    </span>
                    <span className="lg:block md:hidden py-1 leading-10 text-sm font-medium">
                      Gmail
                    </span>
                  </Link>
                </li>
                <li className="lg:my-1 md:my-3 rounded-md lg:hover:bg-gray-100 cursor-pointer">
                  <Link
                    href=""
                    className="lg:justify-start md:justify-center flex items-center "
                  >
                    <span className="lg:mx-2 md:mx-0">
                      <div className="flex justify-center items-center bg-sky-400 w-8 h-8 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                          <style
                            dangerouslySetInnerHTML={{
                              __html: "svg{fill:#ffffff}",
                            }}
                          />
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                      </div>
                    </span>
                    <span className="lg:block md:hidden py-1 leading-10 text-sm font-medium">
                      Hotmail
                    </span>
                  </Link>
                </li>
                <li className="lg:my-1 md:my-3 rounded-md lg:hover:bg-gray-100 cursor-pointer">
                  <Link
                    href=""
                    className="lg:justify-start md:justify-center flex items-center "
                  >
                    <span className="lg:mx-2 md:mx-0">
                      <div className="flex justify-center items-center bg-black w-8 h-8 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                        >
                          {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                          <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                        </svg>
                      </div>
                    </span>
                    <span className="lg:block md:hidden py-1 leading-10 text-sm font-medium">
                      OutlookMail
                    </span>
                  </Link>
                </li>
                <li className="lg:my-1 md:my-3 rounded-md lg:hover:bg-gray-100 cursor-pointer">
                  <Link
                    href=""
                    className="lg:justify-start md:justify-center flex items-center "
                  >
                    <span className="lg:mx-2 md:mx-0">
                      <div className="flex justify-center items-center bg-red-800 w-8 h-8 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                        </svg>
                      </div>
                    </span>
                    <span className="lg:block md:hidden py-1 leading-10 text-sm font-medium">
                      RuMail
                    </span>
                  </Link>
                </li>
                <li className="lg:my-1 md:my-3 rounded-md lg:hover:bg-gray-100 cursor-pointer">
                  <Link
                    href=""
                    className="lg:justify-start md:justify-center flex items-center "
                  >
                    <span className="lg:mx-2 md:mx-0">
                      <div className="flex justify-center items-center bg-fuchsia-600 w-8 h-8 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                          <path d="M223.69,141.06,167,284.23,111,141.06H14.93L120.76,390.19,82.19,480h94.17L317.27,141.06Zm105.4,135.79a58.22,58.22,0,1,0,58.22,58.22A58.22,58.22,0,0,0,329.09,276.85ZM394.65,32l-93,223.47H406.44L499.07,32Z" />
                        </svg>
                      </div>
                    </span>
                    <span className="lg:block md:hidden py-1 leading-10 text-sm font-medium">
                      DomainMail
                    </span>
                  </Link>
                </li>
                <li className="lg:my-1 md:my-3 rounded-md lg:hover:bg-gray-100 cursor-pointer">
                  <Link
                    href=""
                    className="lg:justify-start md:justify-center flex items-center "
                  >
                    <span className="lg:mx-2 md:mx-0">
                      <div className="flex justify-center items-center bg-sky-700 w-8 h-8 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 320 512"
                        >
                          {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                          <style
                            dangerouslySetInnerHTML={{
                              __html: "svg{fill:#ffffff}",
                            }}
                          />
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                      </div>
                    </span>
                    <span className="lg:block md:hidden py-1 leading-10 text-sm font-medium">
                      YahoMail
                    </span>
                  </Link>
                </li>
                <li className="lg:my-1 md:my-3 rounded-md lg:hover:bg-gray-100 cursor-pointer">
                  <Link
                    href=""
                    className="lg:justify-start md:justify-center flex items-center "
                  >
                    <span className="lg:mx-2 md:mx-0">
                      <div className="flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-8 h-8 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                          <style
                            dangerouslySetInnerHTML={{
                              __html: "svg{fill:#ffffff}",
                            }}
                          />
                          <path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" />
                        </svg>
                      </div>
                    </span>
                    <span className="lg:block md:hidden py-1 leading-10 text-sm font-medium">
                      ProtonMail
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Product Filt */}
          <div className="flex-1">
            {/* Category */}
            <div className="my-2 top-0">
              <div className="text-xs font-semibold  justify-center md:flex md:justify-end  md:mx-auto lg:flex lg:justify-end lg:-w-full ">
                <div className="lg:justify-start md:justify-center my-2 flex items-center justify-between">
                  <span className="lg:mr-2 md:mr-2">Filter by</span>
                  <ul className="lg:mr-2 md:mr-2 inline-flex items-center bg-gray-100 rounded-lg">
                    <li className="">
                      <button
                        onClick={() => filterProducts("all")}
                        className={`px-4 py-2 m-1 rounded-md ${
                          activeButton === "all" ? "bg-white" : "text-gray-500"
                        }`}
                      >
                        Tất cả
                      </button>
                    </li>
                    <li className="">
                      <button
                        onClick={() => filterProducts("sale")}
                        className={`px-4 py-2 m-1 text-gray-500 rounded-md ${
                          activeButton === "sale" ? "bg-white" : ""
                        }`}
                      >
                        Giảm giá
                      </button>
                    </li>
                    <li className="">
                      <button
                        className={`px-4 py-2 m-1 text-gray-500 rounded-md ${
                          activeButton === "price" ? "bg-white" : ""
                        }`}
                        onClick={() => {
                          const newSortOrder =
                            sortOrder === "asc" ? "desc" : "asc";
                          sortProductsByPrice(newSortOrder);
                          setSortOrder(newSortOrder);
                          setActiveButton("price"); // Cập nhật activeButton với 'price'
                        }}
                      >
                        {sortOrder === "asc" ? (
                          <>
                            Giá thấp đến cao{" "}
                            {/* <FontAwesomeIcon icon={faArrowUpWideShort} /> */}
                          </>
                        ) : (
                          <>
                            Giá cao đến thấp{" "}
                            {/* <FontAwesomeIcon icon={faArrowUpShortWide} /> */}
                          </>
                        )}
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="w-full my-2 hover:bg-white text-gray-600 md:w-32 lg:w-32">
                  <div className="w-full h-full  hs-dropdown relative inline-flex">
                    <button
                      id="hs-dropdown-with-icons"
                      type="button"
                      className="w-full  px-4 py-2 bg-gray-100 hs-dropdown-toggle inline-flex justify-between items-center gap-2 rounded-md  outline-none text-xs font-semibold text-gray-500 align-middle focus:outline-none focus:ring-0 transition-all "
                    >
                      Danh mục
                      <svg
                        className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                      aria-labelledby="hs-dropdown-with-icons"
                    >
                      <div className="py-2 first:pt-0 last:pb-0">
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          Youtube
                        </a>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          Twitter
                        </a>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          Tiktok
                        </a>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Products */}
            {filteredProducts ? (
             <>
              <div className="grid xl:grid-cols-6 md:grid-cols-3 gap-x-5 gap-y-2">
                {filteredProducts.map((product) => (
                  <ProductItem product={product}/>
                ))}
              </div>
              <div className="flex w-full justify-center my-4">
              <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold text-sm">
                Xem thêm
              </button>

              </div>
              </>
            ) : (
              <div className="grid xl:grid-cols-5 md:grid-cols-3">
                <ProductLoader quantityProduct={15} />
              </div>
            )}
          </div>
        </div>
        </WrapResponsive>
      <DetailProduct productId={productId} />

    </>
  );
}
