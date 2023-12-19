"use client";
import DetailProduct from "@/components/DetailProduct";
import ProductItem from "@/components/Product/ProductItem";
import ProductLoader from "@/components/Skeleton/ProductLoader";
import WrapResponsive from "@/components/WrapResponsive";
import Product from "@/interfaces/product";
import { getProductFromCategory } from "@/services/product";
import { FaChevronDown } from "react-icons/fa6";
import { RiArrowUpDownFill } from "react-icons/ri";
import Link from "next/link";
import CategoryDropdown from "@/components/CategoryDropdown/CategoryDropdown";
import { useEffect, useState } from "react";

export default function DetailCategory({
  params,
}: {
  params: { categoryId: string };
}) {
  // Render Product
  const { categoryId } = params;
  const [products, setProducts] = useState<Product[]>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>();
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [activeButton, setActiveButton] = useState("all");
  // this useState used show more product
  const [page, setPage] = useState(2);

  // Render Product from Json-sv
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await getProductFromCategory(categoryId, 1); // Link to JSON Server
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);
  const showMoreProduct = async () => {
    setPage(page + 1);
    let newProduct = await getProductFromCategory(categoryId, page)
    if (products) {
      setProducts([...products, ...newProduct]);
      setFilteredProducts([...products, ...newProduct]);
    }
  }

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

  const options = [
    { label: 'Tài Khoản Telegram', value: 'option1', imageUrl: './images/1.png' },
    { label: 'Option 2', value: 'option2', imageUrl: './images/2.png' },
    { label: 'Option 3', value: 'option3', imageUrl: './images/3.png' },
  ];
  return (
    <>
      <WrapResponsive>
        <div className="mt-10">
          <h3 className="mb-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Gian hàng{" "}
            <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
              {categoryId}
            </mark>{" "}
            dành cho bạn
          </h3>
          <p className="text-base font-normal text-gray-500 md:text-base lg:text-lg dark:text-gray-400">
            Tất cả những sản phẩm liên quan đến gmail có tất cả ở bên dưới mời
            bạn lựa chọn
          </p>
        </div>
        <div className="flex w-full">
          <div className="flex-1">
            {/* Category */}
            <div className="my-2 top-0">
              <div className="text-xs font-semibold  justify-center md:flex md:justify-end  md:mx-auto lg:flex lg:justify-end lg:-w-full relative">
                <div className="lg:justify-start md:justify-center my-2 flex items-center justify-between">
                  <span className="lg:mr-2 md:mr-2">Filter by</span>
                  <ul className="lg:mr-2 md:mr-2 inline-flex items-center bg-gray-100 rounded-lg">
                    <li className="">
                      <button
                        onClick={() => filterProducts("all")}
                        className={`px-4 py-2 m-1 rounded-md ${activeButton === "all" ? "bg-white" : "text-gray-500"
                          }`}
                      >
                        Tất cả
                      </button>
                    </li>
                    <li className="">
                      <button
                        onClick={() => filterProducts("sale")}
                        className={`px-4 py-2 m-1 text-gray-500 rounded-md ${activeButton === "sale" ? "bg-white" : ""
                          }`}
                      >
                        Giảm giá
                      </button>
                    </li>
                    <li className="">
                      <button
                        className={`px-4 py-2 m-1 text-gray-500 rounded-md ${activeButton === "price" ? "bg-white" : ""
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
                            {/* <RiArrowUpDownFill className="w-5 h-5"/> */}
                          </>
                        ) : (
                          <>
                            Giá cao đến thấp{" "}
                            {/* <RiArrowUpDownFill className="w-5 h-5"/> */}

                          </>
                        )}
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="w-max my-2 hover:bg-white text-gray-600">
                  <div className="w-max h-full  hs-dropdown relative">
                    {/* <button
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
                    </button> */}
                    <CategoryDropdown options={options} />
                    {/* <div>
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
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* Products */}
            {filteredProducts ? (
              <>
                <div className="grid xl:grid-cols-6 md:grid-cols-3 gap-x-5 gap-y-2">
                  {filteredProducts.map((product) => (
                    <ProductItem product={product} key={product._id} />
                  ))}
                </div>
                <div className="flex w-full justify-center my-4">
                  <button onClick={showMoreProduct} className="bg-primary text-white px-6 py-3 rounded-md font-semibold text-sm">
                    Xem thêm
                  </button>

                </div>
              </>
            ) : (
              <ProductLoader quantityProduct={15} />
            )}
          </div>
        </div>
      </WrapResponsive>

    </>
  );
}
