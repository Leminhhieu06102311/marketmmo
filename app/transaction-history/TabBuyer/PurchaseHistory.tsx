"use client";
import { useState, useEffect } from "react";
import { Histories } from "@/interfaces/Histories";
import { getTransactionHistory } from "@/services/transactionHistory";
import Cookies from "js-cookie";
import TransactionLoader from "@/components/Skeleton/Transaction";
import WrapResponsive from "@/components/WrapResponsive";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { FcNext } from "react-icons/fc";
import convertTime from "@/utils/convertTime";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { PopupDetailProduct, setActiveTab } from "@/redux/productSlice";
import { toggleModal } from "@/redux/modalSlice";
import { setStatusRating } from "@/redux/ratingSlice";

const PurchaseHistory = () => {
  const [histories, setHistories] = useState<Histories[]>([]);
  const access_token = Cookies.get("token");
  const dispatch = useAppDispatch()
  const { statusRating } = useAppSelector((state) => state.rating)
  useEffect(() => {
    const fetchHistories = async () => {
      try {
        const transHis = await getTransactionHistory(access_token);
        transHis.reverse()
        setHistories(transHis);
      } catch (error) {
        console.error("Error fetching histories", error);
      }
    };
    fetchHistories();
  }, []);
  const hanldeRedirectRating = (slug: string) => {
    dispatch(PopupDetailProduct(slug))
    dispatch(toggleModal('product'))
    dispatch(setActiveTab("rating"))
    console.log('click', statusRating)
    dispatch(setStatusRating(!statusRating))
  }
  return (
    <>

      {histories ? (
        <WrapResponsive>
          <div className="mt-[30px]">
            <div className="block md:block lg:flex items-center gap-x-4">
              <div className="flex mb-2 md:mb-0 lg:mb-0 px-2 py-2.5 items-center rounded-[9px] border border-[#ececec] gap-2 font-semibold hover:border-[#c8c8c8bb] lg:px-5">
                <p className="text-[15px]  rounded-2xl   font-semibold ">
                  Tổng :
                </p>
                <p className="rounded-2xl   line-clamp-1 w-[118px] justify-center font-semibold text-[14px] leading-20 md:m-0 lg:m-0">
                  🟢{histories.length} kết quả
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
          </div>
          <div className="mt-5 grid grid-cols-1">
            {histories.length > 0 ? (
              <>
                {histories.map((item) => (
                  <div key={item._id}>
                    <a>
                      <div className="transition ease-in-out delay-150 rounded-2xl shadow-md hover:bg-gray-50 duration-100 mb-3">
                        <div className="p-3">
                          <div className="flex justify-between border-b border-solid border-[#EFF2F5] py-2">
                            <div className="flex items-center gap-x-4">
                              <div className="flex items-center gap-x-2">
                                <div className="w-[31px] h-[31px]">
                                  <img
                                    src={`${item.product.creator.avatar}`}
                                    alt="Err"
                                    className="w-full h-full rounded-[50%] object-cover"
                                  />
                                </div>
                                <p className="font-inter  leading-normal">
                                  {item.product.creator.name}
                                </p>
                              </div>
                              <div>
                                <button
                                  onClick={() => hanldeRedirectRating(item.product.slug)}
                                  className="hidden px-3 py-2 rounded-[10px] bg-[#3861FB] text-white  font-medium leading-normal md:block lg:block delay-150 hover:bg-[#3862fbdf] delay-150 hover:bg-[#3862fbdf]"
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
                                <FcNext className="hidden md:block lg:block text-[20px] text-primary" />
                              </Link>
                            </div>
                          </div>
                          <div className="justify-between p-4 items-center md:flex lg:flex">
                            <div className="flex gap-4 item-center flex-col md:flex-row lg:flex-row">
                              <div className="w-full md:h-[71px] lg:h-[71px]">
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

                                <p className="text-[#3D3D4E] font-normal  leading-normal">
                                  số lượng: {item.quantity}
                                </p>
                              </div>
                            </div>
                            <div className="gap-x-4">
                              <p className="text-[#3D3D4E] text-[12px] font-bold text-right">
                                {convertTime(item.createdAt)}

                              </p>
                              <div className="flex gap-x-1 items-center justify-end my-1">
                                <p className="text-[#3D3D4E] font-normal text-[13px]">
                                  Thể loại:{" "}
                                </p>
                                <div className="flex w-auto items-center px-3 py-1 gap-x-2 rounded-[30px] bg-[#EFF2F5] text-[#616E85] text-[13px] font-normal">

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
        </WrapResponsive>
      ) : (
        <TransactionLoader />
      )}
    </>
  );
};

export default PurchaseHistory;
