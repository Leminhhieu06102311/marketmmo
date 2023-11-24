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
import { toast } from "react-toastify";
import { ratingProduct } from "@/services/rating";
import { IoCloseOutline } from "react-icons/io5";

import product from "@/interfaces/product";

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
  const [rating, setRating] = useState(0);
  const [showMore1, setShowMore1] = useState(false);

  const [notification, setNotification] = useState(false)
  const [messenges, setMessenges] = useState('')


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

  const handleShowMore1 = () => {
    setShowMore1(true);
  };

  const handleRatingClick = (value: any) => {
    setRating(value);
  };

  const handleSendRating = (productId: string) => {

    setMessenges('')
    toast.promise(ratingProduct(access_token, rating, productId), {
      pending: {
        render() {
          return "Vui lòng đợi"
        },
      }, success: {
        render() {
          setShowMore1(false)
          return "Xin cảm ơn, bạn đã đánh giá sản phẩm thành công!"
        },
        // other options
        icon: "🟢",
      },
      error: {
        render: ({ data }) => {
          const error: any = data
          if (error.response && error.response.status === 401) {
            // Lỗi 401 có nghĩa là "Sai tài khoản hoặc mật khẩu"
            setMessenges(error.response.data.message)
            setNotification(true);
            console.log(error);
          } else {
            setMessenges(error.response.data.message)
            setNotification(true);

            console.error("Lỗi, Vui lòng thử lại", error);
          }
          return <div>{error.response.data.message}</div>
        }
      }
    })
  }

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
                      <div>
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
                                    <button
                                      className="hidden px-3 py-2 rounded-[10px] bg-[#3861FB] text-white  font-medium leading-normal md:block lg:block delay-150 hover:bg-[#3862fbdf] delay-150 hover:bg-[#3862fbdf]" onClick={() => setShowMore1(!showMore1)}
                                    >
                                      Đánh giá
                                    </button>
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
                        <div>
                          <div>
                            {showMore1 === true ? (
                              <>
                                <div className="">
                                  <div className="flex justify-center">
                                    <div className="w-[40%] absolute top-0 z-100 bg-white pb-10 shadow-xl rounded-2xl box-shadow-product mx-auto">
                                      <button className="right-5 top-2 absolute text-gray-500" onClick={() => setShowMore1(false)}><IoCloseOutline className='text-[25px]' /></button>
                                      <div className="pt-10">
                                        <div className="w-[70%] mx-auto flex justify-center items-center">
                                          <div className="lg:w-[40px] lg:h-[40px] rounded-[50%] bg-primary text-center leading-10">
                                            <span className="text-[18px] text-white font-medium">
                                              1
                                            </span>
                                          </div>
                                          {rating ? (
                                            <>
                                              <div className="bg-primary h-2 w-[40%]"></div>
                                            </>
                                          ) : (
                                            <>
                                              <div className="bg-gray-300 h-2 w-[40%]"></div>
                                            </>
                                          )}

                                          <div className="lg:w-[15px] lg:h-[15px] rounded-[50%] bg-blue-800 text-center leading-10"></div>
                                          <div className="bg-gray-300 h-2 w-[40%]"></div>
                                          <div className="lg:w-[40px] lg:h-[40px] rounded-[50%] bg-primary text-center leading-10">
                                            <span className="text-[18px] text-white font-medium">
                                              2
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="text-center">
                                        <b className="text-[25px]">
                                          Đánh giá sản phẩm
                                        </b>
                                      </div>

                                      <div className="">
                                        <img
                                          src={`${item.product.pictures}`}
                                          alt=""
                                          className="items-center mx-auto mb-5 w-[80px] h-[80px] md:w-[80px] md:h-[80px] lg:w-[80px] lg:h-[80px] rounded-[50%] border-[5px] border-white shadow-md"
                                        />
                                      </div>
                                      <div>
                                        <div className="text-center">
                                          <b className="text-[20px] text-primary uppercase">
                                            {item.product.name}
                                          </b>
                                        </div>
                                      </div>
                                      <div className="flex justify-center items-center gap-x-2">
                                        <div className="w-[25px] h-auto">
                                          <img
                                            src={`${item.user.avatar}`}
                                            alt="Err"
                                            className="w-full rounded-[50%]"
                                          />
                                        </div>
                                        <p className="font-inter text-[14px] leading-normal">
                                          {item.user.name}
                                        </p>
                                      </div>
                                      <div className="w-[80%] mx-auto text-center my-5">
                                        <div>
                                          <div className="">
                                            <p className="font-semibold text-[16px] text-[#58667E] leading-[1.8] break-words mb-2">
                                              <span>
                                                Cảm ơn rất nhiều vì sự tin tưởng và sự
                                                ủng hộ của bạn! Sự hài lòng của bạn là
                                                động lực lớn để chúng tôi tiếp tục
                                                cung cấp dịch vụ và sản phẩm tốt nhất.
                                                Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu
                                                nào khác, hãy liên hệ với chúng tôi.
                                              </span>
                                            </p>{" "}
                                          </div>
                                          <div className="">
                                            <p className="font-semibold text-[16px] text-primary leading-[1.8] break-words uppercase mb-2">
                                              <span>Thanks you!</span>
                                            </p>{" "}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex gap-x-3 my-5 justify-center">
                                        {rating === 0 && (
                                          <p>
                                            <button
                                              onClick={() => handleRatingClick(1)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="gray"
                                                />
                                              </svg>
                                            </button>
                                            <button
                                              onClick={() => handleRatingClick(2)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="gray"
                                                />
                                              </svg>
                                            </button>{" "}
                                            <button
                                              onClick={() => handleRatingClick(3)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="gray"
                                                />
                                              </svg>
                                            </button>{" "}
                                            <button
                                              onClick={() => handleRatingClick(4)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="gray"
                                                />
                                              </svg>
                                            </button>
                                            <button
                                              onClick={() => handleRatingClick(5)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="gray"
                                                />
                                              </svg>
                                            </button>
                                          </p>
                                        )}
                                        {rating === 1 && (
                                          <p>
                                            <button
                                              onClick={() => handleRatingClick(1)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="#FFC000"
                                                />
                                              </svg>
                                            </button>
                                            <button
                                              onClick={() => handleRatingClick(2)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="gray"
                                                />
                                              </svg>
                                            </button>{" "}
                                            <button
                                              onClick={() => handleRatingClick(3)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="gray"
                                                />
                                              </svg>
                                            </button>{" "}
                                            <button
                                              onClick={() => handleRatingClick(4)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="gray"
                                                />
                                              </svg>
                                            </button>
                                            <button
                                              onClick={() => handleRatingClick(5)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="gray"
                                                />
                                              </svg>
                                            </button>
                                          </p>
                                        )}
                                        {rating === 2 && (
                                          <p>
                                            <button
                                              onClick={() => handleRatingClick(1)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="#FFC000"
                                                />
                                              </svg>
                                            </button>
                                            <button
                                              onClick={() => handleRatingClick(2)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="#FFC000"
                                                />
                                              </svg>
                                            </button>{" "}
                                            <button
                                              onClick={() => handleRatingClick(3)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="gray"
                                                />
                                              </svg>
                                            </button>{" "}
                                            <button
                                              onClick={() => handleRatingClick(4)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="gray"
                                                />
                                              </svg>
                                            </button>
                                            <button
                                              onClick={() => handleRatingClick(5)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="gray"
                                                />
                                              </svg>
                                            </button>
                                          </p>
                                        )}
                                        {rating === 3 && (
                                          <p>
                                            <button
                                              onClick={() => handleRatingClick(1)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="#FFC000"
                                                />
                                              </svg>
                                            </button>
                                            <button
                                              onClick={() => handleRatingClick(2)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="#FFC000"
                                                />
                                              </svg>
                                            </button>{" "}
                                            <button
                                              onClick={() => handleRatingClick(3)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="#FFC000"
                                                />
                                              </svg>
                                            </button>{" "}
                                            <button
                                              onClick={() => handleRatingClick(4)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="gray"
                                                />
                                              </svg>
                                            </button>
                                            <button
                                              onClick={() => handleRatingClick(5)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="gray"
                                                />
                                              </svg>
                                            </button>
                                          </p>
                                        )}
                                        {rating === 4 && (
                                          <p>
                                            <button
                                              onClick={() => handleRatingClick(1)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="#FFC000"
                                                />
                                              </svg>
                                            </button>
                                            <button
                                              onClick={() => handleRatingClick(2)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="#FFC000"
                                                />
                                              </svg>
                                            </button>{" "}
                                            <button
                                              onClick={() => handleRatingClick(3)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="#FFC000"
                                                />
                                              </svg>
                                            </button>{" "}
                                            <button
                                              onClick={() => handleRatingClick(4)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="#FFC000"
                                                />
                                              </svg>
                                            </button>
                                            <button
                                              onClick={() => handleRatingClick(5)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="gray"
                                                />
                                              </svg>
                                            </button>
                                          </p>
                                        )}
                                        {rating === 5 && (
                                          <p>
                                            <button
                                              onClick={() => handleRatingClick(1)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="#FFC000"
                                                />
                                              </svg>
                                            </button>
                                            <button
                                              onClick={() => handleRatingClick(2)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="#FFC000"
                                                />
                                              </svg>
                                            </button>{" "}
                                            <button
                                              onClick={() => handleRatingClick(3)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="#FFC000"
                                                />
                                              </svg>
                                            </button>{" "}
                                            <button
                                              onClick={() => handleRatingClick(4)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="#FFC000"
                                                />
                                              </svg>
                                            </button>
                                            <button
                                              onClick={() => handleRatingClick(5)}
                                            >
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                                                  fill="#FFC000"
                                                />
                                              </svg>
                                            </button>
                                          </p>
                                        )}
                                      </div>
                                      <div className="flex justify-center">
                                        <button
                                          type="button"
                                          className="py-2 mb-6 px-4 inline-flex justify-center items-center gap-2 rounded-lg bg-blue-500 border border-transparent font-semibold text-white hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm" onClick={() => handleSendRating(item.product._id)}
                                        >
                                          Gửi đánh giá
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div></div>
                                </div>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </div>

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
