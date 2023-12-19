"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { getDetailSeller } from "@/services/SellerId";
import SellerId from "@/interfaces/SellerId";
import Product from "@/interfaces/product";
import axios from "axios";
import { getAllProducts } from "@/services/product";
import ProductItem from "@/components/Product/ProductItem";
import ProductItemSearch from "@/components/Product/ProductItemSearch";
import SellerIdLoader from "@/components/Skeleton/SellerIdLoader";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import WrapResponsive from "@/components/WrapResponsive";

const Seller = ({ params }: { params: { sellerId: string } }) => {

  const creatorId = params.sellerId;
  const [loading, setLoading] = useState(true);
  const [seller, setSeller] = useState<SellerId | null>(null);
  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const [sortDropDown, setSortDropDown] = useState(false);
  const [genreDropDown, setGenreDropDown] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filteredProductsSearch, setFilteredProductsSearch] = useState<
    Product[]
  >([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showAll, setShowAll] = useState(false);
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDropDown, setSearchDropDown] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Product[] = await getAllProducts(); // Lấy tất cả sản phẩm
        const filterProductsBySeller = data.filter(
          (product) => product.creator._id === creatorId
        );
        setProducts(filterProductsBySeller);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  // useEffect(() => {
  //   const filterProductsSearch = () => {
  //     const filtered = products.filter((product) => {
  //       return (
  //         product.creator._id === creatorId &&
  //         product.name.toLowerCase().includes(searchTerm.toLowerCase())
  //       );
  //     });
  //     setFilteredProductsSearch(filtered);
  //   };
  //   filterProductsSearch();
  // }, [products, creatorId, searchTerm]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getDetailSeller(params.sellerId); // Link to JSON Server
      setSeller(data);
    };
    fetchData();
  }, []);

  // const handleLoadMore = () => {
  //   setShowMore(true);
  // };
  // const handleHideItems = () => {
  //   setShowMore(false);
  // };
  // const handleSort = () => {
  //   setSortDropDown(!sortDropDown);
  //   setGenreDropDown(false);
  // };
  // const handleGenre = () => {
  //   setGenreDropDown(!genreDropDown);
  //   setSortDropDown(false);
  // };
  // const handleLoadMore1 = () => {
  //   setShowMore1(true);
  // };
  // const handleHide1 = () => {
  //   setShowMore1(false);
  // };

  // const handleSearch = (event: any) => {
  //   const inputValue = event.target.value;

  //   if (inputValue.trim().length > 0) {
  //     setSearchTerm(inputValue);
  //     setSearchDropDown(true);
  //   } else {
  //     setSearchTerm("");
  //     setSearchDropDown(false);
  //   }
  // };

  // const handleHideSearch = () => {
  //   setSearchDropDown(false);
  // };

  // const handleSortByPrice = (item:string) => {
  //   const sorted = [...filteredProducts].sort((a, b) =>
  //     sortOrder === "asc" ? a.price - b.price : b.price - a.price
  //   );
  //   setFilteredProducts(sorted);
  //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  //   setSelectedItem(item);

  // };
  // const handleSortByCreatedAt = () => {
  //   const sorted = [...filteredProducts].sort((a, b) =>
  //     sortOrder === "asc"
  //       ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  //       : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  //   );
  //   setFilteredProducts(sorted);
  //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  // };

  // const handleSortByRating = () => {
  //   const sorted = [...filteredProducts].sort((a, b) =>
  //     sortOrder === "asc"
  //       ? a.rating.count - b.rating.count
  //       : b.rating.count - a.rating.count
  //   );
  //   setFilteredProducts(sorted);
  //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  // };

  // const handleSortByBestSelling = () => {
  //   const sorted = [...filteredProducts].sort((a, b) =>
  //     sortOrder === "asc"
  //       ? a.numberHasSeller - b.numberHasSeller
  //       : b.numberHasSeller - a.numberHasSeller
  //   );
  //   setFilteredProducts(sorted);
  //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  // };
  // const handleShowAll = () => {
  //   const filterProducts = () => {
  //     const filtered = products.filter(
  //       (product) => product.creator._id === creatorId
  //     );
  //     setFilteredProducts(filtered);
  //     setCount(filtered.length);
  //   };
  //   setSortOrder("asc");
  //   filterProducts();
  //   setSortDropDown(false);
  //   setGenreDropDown(false);
  // };
  return (
    <>
      {seller ? (
        <div className="max-w-xxs mx-auto md:max-w-3xl md:px-0 lg:max-w-full pt-12 lg:px-10">
          <div className="mb-8 md:mb-0 lg:mb-0">
            <div className="lg:flex lg:gap-x-5 ">
              <div className="lg:items-center my-3 lg:w-[427px]">
                <div className="w-auto md:block md:w-auto my-3 mx-0 mb-8 lg:flex">
                  {" "}
                  <div className="flex justify-center md:flex lg:block">
                    {seller.online ? (
                      <>
                        {" "}
                        <img
                          src={
                            "https://i.pinimg.com/736x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg"
                          }
                          alt=""
                          className="items-center mb-5 w-[80px] h-[80px] md:w-[80px] md:h-[80px] lg:w-[80px] lg:h-[80px] lg:mr-5 rounded-[50%] border-[5px] border-white shadow-md"
                        />
                      </>
                    ) : (
                      <>
                        {" "}
                        <img
                          src={`${seller.avatar}`}
                          alt=""
                          className="items-center mb-5 w-[80px] h-[80px] md:w-[80px] md:h-[80px] lg:w-[80px] lg:h-[80px] lg:mr-5 rounded-[50%] border-[5px] border-white shadow-md"
                        />
                      </>
                    )}
                  </div>
                  <div className="items-start">
                    <div className="">
                      <h1 className="text-2xl text-center text-gray-800 font-semibold md:text-2xl md:text-center lg:text-[26px] lg:text-left  ">
                        <div>
                          <h1>{seller.name}</h1>
                        </div>
                      </h1>
                      <div className="flex items-center justify-center md:justify-center lg:justify-start gap-2">
                        {seller.online ? (
                          <div className="w-[12px] h-[12px] bg-green-500 rounded-[50%]"></div>
                        ) : (
                          <></>
                        )}
                        <p className="text-[15px] font-medium">
                          {seller.online ? (
                            <div>Đang hoạt động</div>
                          ) : (
                            <div>Đang offline</div>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="leading-10">
                      {" "}
                      <div className="flex justify-center leading-16 gap-x-4 font-inter text-[15px] md:justify-center lg:justify-start">
                        <p className="font-medium">
                          <span className="font-semibold">
                            {seller.followOverall.following}
                          </span>{" "}
                          Following
                        </p>
                        <p className="font-medium">
                          <span className="font-semibold">
                            {seller.followOverall.follower}
                          </span>{" "}
                          Followers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:gap-x-16 md:justify-center md:flex items-baseline my-3 mx-0 mb-8 lg:flex box-border m-0 lg:gap-0 ">
                <div className="w-auto mb-5 md:w-auto lg:w-[425px]">
                  <p className="lg:m-0 text-md font-semibold items-center">
                    Số lượng sản phẩm
                  </p>
                  <span className="leading-10 text-[26px] lg:m-0 text-gray-800 text-3xl font-semibold">
                    {products.length} Sản phẩm
                  </span>
                </div>
                <div className="w-auto md:mb-0 lg:mb-0 lg:w-[425px]">
                  <p className="lg:m-0 font-semibold ">Đánh giá tổng</p>
                  <span className="flex items-center gap-x-2 leading-10 text-[26px] lg:m-0 text-gray-800 text-3xl font-semibold">
                    {seller.totalRatingsOfSeller}
                  </span>
                </div>
                <div className="">
                  <p className="lg:m-0 font-semibold ">Sản phẩm đã bán</p>
                  <span className="flex items-center gap-x-2 leading-10 text-[26px] lg:m-0 text-gray-800 text-3xl font-semibold">
                    {seller.productsOverall.totalProductsSold}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="block md:w-auto md:gap-x-5 md:mb-[30px] md:flex lg:flex">
                <div className="mb-8 w-auto md:mb-8 lg:flex-none lg:w-[427px]">
                  <ul className="lg:flex flex-col flex-0.33 order-3 mb-7">
                    <li className="md:my-[4px] lg:my-1 flex items-center gap-2">
                      <MdEmail className="w-5 h-5" />
                      <p className="py-1 font-medium line-clamp-1 w-[80%]">
                        {seller.email}
                      </p>
                    </li>
                    <li className="md:my-[4px] lg:my-1 text-[15px] flex items-center gap-2">
                      <FaPhoneSquareAlt className="w-5 h-5" />
                      <p className="py-1 font-medium text-[15px] line-clamp-1 w-[70%]">
                        {seller.phone}
                      </p>
                    </li>
                    <li className="md:my-[4px] lg:my-1 flex items-center gap-2">
                      <FaLocationDot className="w-5 h-5" />
                      <p className="py-1 font-medium text-[15px] line-clamp-1 w-[70%]">
                        {seller.address}
                      </p>
                    </li>
                  </ul>
                  <div className="w-[100%]">
                    <p className="lg:leading-1.5 font-medium text-light-neutral-6 mb-1 text-[14px]">
                      Bạn cần tìm sản phẩm?
                    </p>
                    <button className="w-[350px] delay-150 md:w-auto items-center lg:items-center justify-center bg-[#3861FB] border-0 rounded-lg inline-flex text-white cursor-pointer font-semibold  h-[40px] text-base px-4 leading-6 hover:bg-[#3862fbdf]">
                      <Link
                        className="flex md:flex lg:flex items-center text-inherit leading-inherit "
                        href="/messenger"
                        target="_blank"
                      >
                        Nhắn tin ngay
                      </Link>
                    </button>
                  </div>
                </div>
                <div className="text-justify md:mb-[12px] lg:flex-grow flex-shrink">
                  <div>
                    <h2 className="text-[#58667E] text-[18px] lg:text-[24px] leading-34 my-0 font-bold">
                      Giới thiệu về Market MMO
                    </h2>
                    <div>
                      <div>
                        <h2
                          className="lg:text-base text-[#58667E] font-bold mt-3 mb-3"
                          id="what-is-binance"
                        >
                          Market MMO là gì?
                        </h2>
                        <p className="font-semibold text-sm text-[#58667E] leading-[1.8] break-words mb-2">
                          Market MMO là một trang web mua bán tài khoản cộng
                          đồng và giao dịch trung gian uy tín. Với quy mô lớn
                          và uy tín trong lĩnh vực tiền điện tử, Market MMO là
                          sàn giao dịch tiền điện tử hàng đầu trên thế giới.
                        </p>{" "}
                        <p className="font-semibold text-sm text-[#58667E] leading-[1.8] break-words mb-2">
                          Với hàng ngày có khối lượng giao dịch lên đến 76 tỷ
                          USD và hơn 90 triệu khách hàng trên toàn thế giới,
                          Market MMO đã tự xây dựng độ tin cậy trong không
                          gian tiền điện tử. Trang web cung cấp một nền tảng
                          an toàn và đáng tin cậy cho người dùng mua, bán và
                          lưu trữ tài sản kỹ thuật số của mình.
                        </p>
                        {showMore && (
                          <>
                            {" "}
                            <p className="font-semibold text-sm text-[#58667E] leading-[1.8] break-words mb-2">
                              Market MMO cung cấp truy cập vào hơn 350 loại
                              tiền điện tử được liệt kê và hàng ngàn cặp giao
                              dịch. Bạn có thể tìm thấy một loạt các tài khoản
                              cộng đồng có sẵn để mua, bao gồm cả các tài
                              khoản có khối lượng người theo dõi lớn, tài
                              khoản chuyên nghiệp và tài khoản có nội dung độc
                              đáo.
                            </p>
                            <p className="font-semibold text-sm text-[#58667E] leading-[1.8] break-words mb-2">
                              Market MMO không chỉ là một sàn giao dịch tiền
                              điện tử, mà còn là một hệ sinh thái đa dạng bao
                              gồm các dịch vụ như Labs, Launchpad, Thông tin,
                              Học viện, Nghiên cứu, Ví Trust, Từ thiện, và
                              NFT. Điều này tạo ra một môi trường đầy đủ và
                              phong phú cho các người dùng tham gia vào thế
                              giới tiền điện tử và tạo ra các cơ hội giao dịch
                              và tương tác đa dạng.
                            </p>
                            <p className="font-semibold text-sm text-[#58667E] leading-[1.8] break-words mb-2">
                              Với Market MMO, bạn có thể an tâm mua, bán và
                              giao dịch các tài khoản cộng đồng một cách tiện
                              lợi và đáng tin cậy, trong một môi trường được
                              đảm bảo bởi sự quản lý chất lượng và uy tín của
                              sàn giao dịch.
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <h2 className="text-xl text-black font-semibold m-4">Sản phẩm đang bán</h2>
            <div className="block md:block lg:flex items-center gap-x-4 mb-2">
              <div className="flex px-2 py-2.5 items-center rounded-[9px] border border-[#ececec] gap-2 font-semibold hover:border-[#c8c8c8bb] lg:px-5">
                <p className="text-[15px]  rounded-2xl   font-semibold ">
                  Tổng :
                </p>
                <p className="mb-4 rounded-2xl   line-clamp-1 w-[118px] justify-center font-semibold text-[14px] leading-20 md:m-0 lg:m-0">
                  {products.length} kết quả
                </p>
              </div>

              <div className="flex relative mt-0 transition ease-in-out  mb-4 rounded-[9px] border border-[#ececec] px-3 py-1 md:mt-2 md:w-[100%] md:m-0 lg:mt-0 lg:m-0  lg:w-[69%] flex-1 hover:border-[#c8c8c8bb]">
                <button className="items-center ">
                  <FiSearch />
                </button>
                <input
                  className="w-full delay-150 h-[36px] outline-none text-[#58667E] font-medium leading-20 px-3"
                  type="text"
                  placeholder="Tìm kiếm lịch sử mua hàng"
                />
              </div>
              <div className="flex justify-start gap-4 mt-0 items-center md:mt-3 lg:mt-0 md:justify-end">
                <div className="relative">
                  <button className="flex px-2 py-2.5 items-center rounded-[9px] border border-[#ececec] gap-2 font-semibold hover:border-[#c8c8c8bb] lg:px-5">
                    Sắp xếp theo
                    <IoIosArrowDown />
                  </button>
                </div>

              </div>
            </div>
            <div className="grid grid-cols-6 gap-5">
              {products.map((item) => (
                <ProductItem product={item} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <SellerIdLoader />
      )}

      {/* {sortDropDown && (
        <div className="block md:hidden lg:hidden">
          <div className="w-[100%] bg-zinc-50 fixed bottom-0 left-0">
            <div className="bg-zinc-50 rounded-lg shadow-xl z-20">
              <div className="grid grid-cols-1 pt-5">
                <button className="py-4 px-5 text-sm font-bold hover:bg-slate-100 rounded-lg text-center">
                  Mới nhất
                </button>
                <button className="py-4 px-5 text-sm font-bold hover:bg-slate-100 rounded-lg">
                  Từ thấp tới cao
                </button>
                <button className="py-4 px-5 text-sm font-bold hover:bg-slate-100 rounded-lg">
                  Từ cao tới thấp
                </button>
              </div>
              <div className="p-3">
                <button
                  onClick={handleSort}
                  className="py-4 px-5 text-sm font-bold w-full bg-[#EFF2F5] rounded-md"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {genreDropDown && (
        <div className="block md:hidden lg:hidden">
          <div className="w-[100%] bg-zinc-50 fixed bottom-0 left-0">
            <div className="bg-zinc-50 rounded-lg shadow-xl z-20">
              <div className="grid grid-cols-1 pt-5">
                <button className="py-4 px-5 text-sm font-bold hover:bg-slate-100 rounded-lg">
                  FaceBook
                </button>
                <button className="py-4 px-5 text-sm font-bold hover:bg-slate-100 rounded-lg">
                  Gmail{" "}
                </button>
                <button className="py-4 px-5 text-sm font-bold hover:bg-slate-100 rounded-lg">
                  Twitter{" "}
                </button>
                <button className="py-4 px-5 text-sm font-bold hover:bg-slate-100 rounded-lg">
                  Telegram{" "}
                </button>
              </div>
              <div className="p-3">
                <button
                  onClick={handleGenre}
                  className="py-4 px-5 text-sm font-bold w-full bg-[#EFF2F5] rounded-md"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Seller;
