"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Histories } from "@/interfaces/Histories";
import { getAll } from "@/services/transactionHistory";
import { format } from "date-fns";

const PurchaseHistory = () => {
  const [showMore, setShowMore] = useState(false);
  const [histories, setHistories] = useState<Histories[]>([]);
  const [sortDropDown, setSortDropDown] = useState(false);
  const [genreDropDown, setGenreDropDown] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDropDown, setSearchDropDown] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Histories[]>([]);
  const [filteredProductsSearch, setFilteredProductsSearch] = useState<
    Histories[]
  >([]);
  const [count, setCount] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(4);

  useEffect(() => {
    const fetchHistories = async () => {
      try {
        const transHis = await getAll();
        setHistories(transHis);
        setCount(transHis.length);
        console.log(transHis);
      } catch (error) {
        console.error("Error fetching histories", error);
      }
    };
    fetchHistories();
  }, []);
  const accessToken = localStorage.getItem("access_token");
  let sub: string | null = null;
  const a = "6544c8129d85a36c1ddbc6ac";
  if (accessToken) {
    const tokenParts = accessToken.split(".");
    const encodedPayload = tokenParts[1];
    const decodedPayload = atob(encodedPayload);
    const payload = JSON.parse(decodedPayload);
    sub = payload.sub;
  }
  useEffect(() => {
    const filterProducts = () => {
      const filtered = histories.filter((product) => product.user._id === a);
      setFilteredProducts(filtered);
      setCount(filtered.length);
    };

    filterProducts();
  }, [histories, a]);
  useEffect(() => {
    const filterProductsSearch = () => {
      const filtered = histories.filter((product) => {
        return (
          product.user._id === a &&
          (product.product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
            product.product.categories.name
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            product.product.creator.name
              .toLowerCase()
              .includes(searchTerm.toLowerCase()))
        );
      });
      setFilteredProductsSearch(filtered);
      console.log(filtered);
    };
    filterProductsSearch();
  }, [histories, searchTerm, a]);
  const handleSort = () => {
    setSortDropDown(!sortDropDown);
    setGenreDropDown(false);
  };
  const handleGenre = () => {
    setGenreDropDown(!genreDropDown);
    setSortDropDown(false);
  };
  const handleHide1 = () => {
    setShowMore1(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleSearch = (event: any) => {
    if (event.type === "change") {
      setSearchTerm(event.target.value);
    } else if (event.type === "click") {
      setSearchDropDown(true);
    }
  };

  const handleHideSearch = () => {
    setSearchDropDown(false);
  };
  const showMoreProducts = () => {
    setVisibleProducts(visibleProducts + 3);
  };
  const showLessProducts = () => {
    setVisibleProducts(4);
  };
  return (
    <>
      <div>
        <div className="mt-[30px]">
          <div className="block md:block lg:flex items-center gap-x-4">
            <div className="flex items-center justify-start py-2 md:py-2 gap-2 lg:p-0">
              <div className="w-[12px] h-[12px] bg-green-500 rounded-[50%]"></div>
              <p className="text-[15px] text-black font-semibold">Live</p>
            </div>
            {/* {transactionHistory.length ? ( */}
            <>
              <p className="mb-4 line-clamp-1 w-[118px] justify-center text-black font-semibold text-[14px] leading-20 md:m-0 lg:m-0">
                {count} kết quả
              </p>
            </>
            <div className="flex relative mt-0 transition ease-in-out  mb-4 rounded-[9px] border border-[#ececec] px-3 py-1 md:mt-2 md:w-[100%] md:m-0 lg:mt-0 lg:m-0  lg:w-[69%] hover:border-[#c8c8c8bb]">
              <button className="items-center ">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4088 11.6684L10.4685 8.72812C11.1764 7.78573 11.5585 6.63865 11.5572 5.46C11.5572 2.44938 9.10783 0 6.09721 0C3.08658 0 0.637207 2.44938 0.637207 5.46C0.637207 8.47062 3.08658 10.92 6.09721 10.92C7.27586 10.9213 8.42294 10.5391 9.36533 9.83125L12.3056 12.7716C12.4545 12.9046 12.6486 12.9756 12.8482 12.97C13.0477 12.9645 13.2376 12.8827 13.3787 12.7415C13.5199 12.6004 13.6017 12.4105 13.6073 12.211C13.6128 12.0114 13.5418 11.8173 13.4088 11.6684ZM2.19721 5.46C2.19721 4.68865 2.42594 3.93463 2.85448 3.29328C3.28301 2.65192 3.89211 2.15205 4.60474 1.85687C5.31737 1.56169 6.10153 1.48446 6.85806 1.63494C7.61459 1.78542 8.3095 2.15686 8.85492 2.70228C9.40035 3.24771 9.77179 3.94262 9.92227 4.69915C10.0728 5.45567 9.99552 6.23983 9.70034 6.95247C9.40516 7.6651 8.90528 8.27419 8.26393 8.70273C7.62258 9.13127 6.86855 9.36 6.09721 9.36C5.06324 9.35876 4.07198 8.94747 3.34086 8.21635C2.60974 7.48522 2.19845 6.49396 2.19721 5.46Z"
                    fill="#807B7B"
                  />
                </svg>
              </button>
              <input
                className="w-full delay-150 h-[36px] outline-none text-[#58667E] font-medium leading-20 px-3"
                type="text"
                placeholder="Tìm kiếm lịch sử mua hàng"
                value={searchTerm}
                onChange={handleSearch}
                onClick={handleSearch}
              />
              {searchDropDown && (
                <button onClick={handleHideSearch}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L13 13M1 13L13 1L1 13Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              )}
              {searchDropDown && (
                <div className="absolute mt-12 bg-white p-2 z-20 w-[97%] rounded-[7px] shadow-md">
                  <div className="">
                    <div className="flex font-semibold justify-between text-[14px] border-b border-[#ececec] p-3">
                      <p>Thông tin sản phẩm</p>
                      <p>...</p>
                    </div>
                    {filteredProductsSearch.length ? (
                      <>
                        <div className="min-h-[100px] max-h-[320px] overflow-y-auto">
                          {filteredProductsSearch.map((item: Histories) => (
                            <Link href={`/transaction-history/${item._id}`}>
                              <div className="transition ease-in-out delay-150 m-2 border-b border-[#ececec] hover:bg-gray-50 duration-100 ">
                                <div className="p-3">
                                  <div className="justify-between px-4 items-center md:flex lg:flex">
                                    <div className="flex gap-x-4 item-center">
                                      <div className="h-auto w-[81px] md:h-[71px] lg:w-[50px] lg:h-auto">
                                        {" "}
                                        <img
                                          src={`${item.product.pictures}`}
                                          alt="Err"
                                          className="w-full h-full rounded-[10px]"
                                        />
                                      </div>
                                      <p className="text-[#3861FB] font-bold text-[15px] line-clamp-1 lg:w-[420px]">
                                        {item.product.name}
                                      </p>
                                    </div>
                                    <div className="gap-x-4">
                                      <div className="flex justify-end items-center gap-x-2">
                                        <div className="w-[31px] h-auto">
                                          <img
                                            src={`${item.product.creator.avatar}`}
                                            alt="Err"
                                            className="w-full rounded-[50%]"
                                          />
                                        </div>
                                        <p className="font-inter  leading-normal">
                                          {item.product.creator.name}
                                        </p>
                                      </div>
                                      <div className="flex gap-x-1 items-center justify-end my-1">
                                        <p className="text-[#3D3D4E] font-normal text-[13px]">
                                          Thể loại:{" "}
                                        </p>
                                        <div className="flex w-auto items-center px-3 py-1 gap-x-2 rounded-[30px] bg-[#EFF2F5] text-[#616E85] text-[13px] font-normal">
                                          {/* <div className="w-[13px] h-auto">
                                                    <img
                                                      src="https://hotmail.best/wp-content/uploads/2020/01/gmail-login-768x580.png"
                                                      alt="Err"
                                                      className="w-full"
                                                    />
                                                  </div> */}
                                          <p>{item.product.categories.name}</p>
                                        </div>
                                      </div>
                                      <div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}{" "}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-center">
                          <p className="my-[40px] text-gray-600 font-medium">
                            Không tìm thấy lịch sử mua hàng nào
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-start gap-4 mt-0 items-center md:mt-3 lg:mt-0 md:justify-end">
              <div className="relative">
                <button
                  onClick={handleSort}
                  className="flex px-2 py-2.5 items-center rounded-[9px] border border-[#ececec] gap-2 font-semibold hover:border-[#c8c8c8bb] lg:px-5"
                >
                  Sắp xếp theo
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.32673 6.23594L0.804725 1.98594C0.492175 1.69219 0.492175 1.21719 0.804725 0.926562L1.55618 0.220313C1.86873 -0.0734375 2.37413 -0.0734375 2.68335 0.220313L5.88865 3.23281L9.09395 0.220313C9.4065 -0.0734375 9.9119 -0.0734375 10.2211 0.220313L10.9726 0.926562C11.2851 1.22031 11.2851 1.69531 10.9726 1.98594L6.45058 6.23594C6.14468 6.52969 5.63928 6.52969 5.32673 6.23594Z"
                      fill="black"
                    />
                  </svg>
                </button>
                {sortDropDown && (
                  <div className="absolute hidden mt-2 bg-white p-2 z-20 w-full rounded-[7px] shadow-md md:block lg:block">
                    <div className="py-2 px-1 hover:bg-slate-50">
                      <button className="font-medium">Mới nhất</button>
                    </div>
                    <div className="py-2 px-1 hover:bg-slate-100">
                      <button className="font-medium">Từ thấp tới cao</button>
                    </div>
                    <div className="py-2 px-1 hover:bg-slate-100">
                      <button className="font-medium">Từ cao tới thấp</button>
                    </div>
                  </div>
                )}
              </div>
              <button className="h-[40px] delay-150 px-5 items-center rounded-[9px] bg-[#3861FB] text-white hover:bg-[#3862fbdf]">
                Lọc
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-5 grid grid-cols-1">
            {filteredProducts.length ? (
              <>
                {filteredProducts.slice(0, visibleProducts).map((item) => (
                  <a>
                    <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-md hover:bg-gray-50 duration-100 ">
                      <div className="p-3">
                        <div className="flex justify-between border-b border-solid border-[#EFF2F5] py-2">
                          <div className="flex items-center gap-x-4">
                            <div className="flex items-center gap-x-2">
                              <div className="w-[31px] h-auto">
                                <img
                                  src={`${item.product.creator.avatar}`}
                                  alt="Err"
                                  className="w-full rounded-[50%]"
                                />
                              </div>
                              <p className="font-inter  leading-normal">
                                {item.product.creator.name}
                              </p>
                            </div>
                            <div>
                              <a
                                href={`/transaction-history/rating/${item._id}`}
                                className="hidden px-3 py-2 rounded-[10px] bg-[#3861FB] text-white  font-medium leading-normal md:block lg:block delay-150 hover:bg-[#3862fbdf] delay-150 hover:bg-[#3862fbdf]"
                              >
                                Đánh giá
                              </a>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Link
                              className="flex items-center gap-x-2"
                              href={`/transaction-history/${item._id}`}
                            >
                              <span className="text-[#3861FB] font-medium leading-normal">
                                Xem chi tiết
                              </span>{" "}
                              <svg
                                width="8"
                                height="11"
                                viewBox="0 0 8 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.00596 5.75625L2.75596 10.0063C2.46221 10.3 1.98721 10.3 1.69658 10.0063L0.990332 9.3C0.696582 9.00625 0.696582 8.53125 0.990332 8.24063L4.00283 5.22813L0.990332 2.21563C0.696582 1.92188 0.696582 1.44687 0.990332 1.15625L1.69658 0.450001C1.99033 0.156251 2.46533 0.156251 2.75596 0.450001L7.00596 4.7C7.29971 4.9875 7.29971 5.4625 7.00596 5.75625Z"
                                  fill="#3861FB"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="justify-between p-4 items-center md:flex lg:flex">
                          <div className="flex gap-x-4 item-center">
                            <div className="w-[81px] md:h-[71px] lg:h-[71px]">
                              {" "}
                              <img
                                src={`${item.product.pictures}`}
                                alt="Err"
                                className="w-full h-full rounded-[10px]"
                              />
                            </div>
                            <div className="gap-y-1">
                              <p className="w-50px text-[#3861FB] font-bold text-[15px] leading-[142%] line-clamp-1 lg:w-[420px]">
                                {item.product.name}
                              </p>
                              {/* <p className="hidden rounded-[10px] my-1 border-[1px] border-[rgba(0, 0, 0, 0.20)] text-[#3D3D4E] text-center text-[13px] py-1 w-[350px] line-clamp-1 lg:block">
                          Gmail random IP 7 ngày++ email|pass|recovery|geo
                        </p> */}
                              <p className="text-[#3D3D4E] font-normal  leading-normal">
                                số lượng: {item.quantity}
                              </p>
                            </div>
                          </div>
                          <div className="gap-x-4">
                            <p className="text-[#3D3D4E] text-[12px] font-bold text-right">
                              {format(
                                new Date(item.createdAt),
                                "dd/MM/yyyy HH:mm:ss"
                              )}
                            </p>
                            <div className="flex gap-x-1 items-center justify-end my-1">
                              <p className="text-[#3D3D4E] font-normal text-[13px]">
                                Thể loại:{" "}
                              </p>
                              <div className="flex w-auto items-center px-3 py-1 gap-x-2 rounded-[30px] bg-[#EFF2F5] text-[#616E85] text-[13px] font-normal">
                                {/* <div className="w-[13px] h-auto">
                            <img
                              src="https://hotmail.best/wp-content/uploads/2020/01/gmail-login-768x580.png"
                              alt="Err"
                              className="w-full"
                            />
                          </div> */}
                                <p>{item.product.categories.name}</p>
                              </div>
                            </div>
                            <div>
                              <p className="font-weight-500 text-[16px] text-right">
                                Tổng số tiền:{" "}
                                <span className="font-bold text-[19px]">
                                  {item.totalPrice.toLocaleString("vi-VN", {
                                    style: "currency",
                                    currencyDisplay: "symbol",
                                    currency: "VND",
                                  })}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
                {histories.length === 4 ? (
                  <div className="h-10"></div>
                ) : (
                  <div className="flex w-full justify-center my-4">
                    {visibleProducts < histories.length ? (
                      <button
                        onClick={showMoreProducts}
                        className="bg-primary text-white px-6 py-3 rounded-md font-semibold text-sm"
                      >
                        Xem thêm
                      </button>
                    ) : (
                      <button
                        onClick={showLessProducts}
                        className="bg-primary text-white px-6 py-3 rounded-md font-semibold text-sm"
                      >
                        Ẩn bớt
                      </button>
                    )}
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="h-[400px] text-center">
                  <p className="mt-[160px] text-gray-600 font-medium">
                    Chưa có lịch sử mua hàng nào
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="block md:hidden lg:hidden">
          <div className="w-[100%] bg-zinc-50 fixed bottom-0 left-0">
            <div className="bg-zinc-50 rounded-lg shadow-xl z-20">
              <div className="grid grid-cols-1 pt-5">
                <button className="py-4 px-5  font-bold hover:bg-slate-100 rounded-lg">
                  14 ngày gần đây
                </button>
                <button className="py-4 px-5  font-bold hover:bg-slate-100 rounded-lg">
                  30 ngày gần đây
                </button>
                <button className="py-4 px-5  font-bold hover:bg-slate-100 rounded-lg">
                  60 ngày gần đây
                </button>
                <button className="py-4 px-5  font-bold hover:bg-slate-100 rounded-lg">
                  90 ngày gần đây
                </button>
              </div>
              <div className="p-3">
                <button
                  onClick={toggleDropdown}
                  className="py-4 px-5  font-bold w-full bg-[#EFF2F5] rounded-md"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PurchaseHistory;
