"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Histories } from "@/interfaces/Histories";
import { getAll, getTransactionHistory } from "@/services/transactionHistory";
import { format } from "date-fns";
import Cookies from "js-cookie";
import { setLoggedIn } from "@/redux/userSlice";
import TransactionLoader from "@/components/Skeleton/Transaction";
import WrapResponsive from "@/components/WrapResponsive";
import { FcNext } from "react-icons/fc";
import { IoSearchOutline } from "react-icons/io5";

const PurchaseHistory = () => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  const [histories, setHistories] = useState<Histories[]>([]);
  const [sortDropDown, setSortDropDown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDropDown, setSearchDropDown] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<Histories[]>([]);
  const [filteredProductsSearch, setFilteredProductsSearch] = useState<
    Histories[]
  >([]);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const access_token = Cookies.get("access_token");

  useEffect(() => {
    const fetchHistories = async () => {
      try {
        const transHis = await getTransactionHistory(access_token);
        setHistories(transHis);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching histories", error);
      }
    };
    fetchHistories();
  }, []);

  let sub: string | null = null;
  if (access_token) {
    const tokenParts = access_token.split(".");
    const encodedPayload = tokenParts[1];
    const decodedPayload = atob(encodedPayload);
    const payload = JSON.parse(decodedPayload);
    sub = payload.sub;
  }

  useEffect(() => {
    const filterProducts = () => {
      const filtered = histories.filter((product) => product.user._id === sub);
      setFilteredProducts(filtered);
    };

    // filterProducts();
  }, [histories, sub]);

  useEffect(() => {
    const filterProductsSearch = () => {
      const filtered = histories.filter((product) => {
        return (
          product.user._id === sub &&
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
    // filterProductsSearch();
  }, [histories, searchTerm, sub]);

  const handleSearch = (event: any) => {
    const inputValue = event.target.value;

    if (inputValue.trim().length > 0) {
      setSearchTerm(inputValue);
      setSearchDropDown(true);
    } else {
      setSearchTerm("");
      setSearchDropDown(false);
    }
  };

  const showMoreProducts = () => {
    setVisibleProducts(visibleProducts + 3);
  };

  const showLessProducts = () => {
    if (visibleProducts !== 4) {
      setVisibleProducts(4);
    }
  };
  return (
    <>

      {loading && isClient ? (
        <>
          <TransactionLoader />
        </>
      ) : (
        <>
          <WrapResponsive>
            <div className="mt-[30px]">
              <div className="block md:block lg:flex items-center gap-x-4">
                <div className="w-[12px] h-[12px] bg-green-500 rounded-[50%]"></div>
                <p className="mb-4 line-clamp-1 w-[118px] justify-center text-black font-semibold text-[14px] leading-20 md:m-0 lg:m-0">
                  {histories.length} kết quả
                </p>
                <div className="flex relative mt-0 transition ease-in-out  mb-4 rounded-[9px] border border-[#ececec] px-3 py-1 md:mt-2 md:w-[100%] md:m-0 lg:mt-0 lg:m-0  lg:w-[69%] hover:border-[#c8c8c8bb]">
                  <button className="items-center ">
                    < IoSearchOutline className="text-[25px]" />

                  </button>
                  <input
                    className="w-full delay-150 h-[36px] outline-none text-[#58667E] font-medium leading-20 px-3"
                    type="text"
                    placeholder="Tìm kiếm lịch sử mua hàng"
                    value={searchTerm}
                    onInput={handleSearch}
                  />
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
                                              <p>
                                                {item.product.categories.name}
                                              </p>
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
                  <button className="h-[40px] delay-150 px-5 items-center rounded-[9px] bg-[#3861FB] text-white hover:bg-[#3862fbdf]">
                    Lọc
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-5 grid grid-cols-1">
                {histories.length ? (
                  <>
                    {histories.map((item) => (
                      <a>
                        <div className="transition ease-in-out delay-150 rounded-2xl shadow-md hover:bg-gray-50 duration-100 ">
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
                                    href={`/transaction-history/${item._id}`}
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
                                  <FcNext className="text-[20px] text-primary" />
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
          </WrapResponsive>
        </>
      )}
    </>
  );
};

export default PurchaseHistory;
