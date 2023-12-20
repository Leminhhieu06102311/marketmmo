"use client";
import Link from "next/link";
import { MouseEvent, useState, useEffect } from "react";
import { getAll, getTransactionHistory } from "@/services/transactionHistory";
import { useAppDispatch } from "@/redux/hooks";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Histories } from "@/interfaces/Histories";
import TransactionIdLoader from "@/components/Skeleton/TransactionIdLoader";
import { IoIosArrowBack } from "react-icons/io";
import WrapResponsive from "@/components/WrapResponsive";
import { toast } from "react-toastify";
import { ratingProduct } from "@/services/rating";
import { IoCloseOutline } from "react-icons/io5";
import { PopupDetailProduct, setActiveTab } from "@/redux/productSlice";
import { toggleModal } from "@/redux/modalSlice";
import product from "@/interfaces/product";

export default function TransactionHistoryProduct({
  params,
}: {
  params: { transactionHistoryId: string };
}) {

  const transId = params.transactionHistoryId;
  const [TransacId, setTransacId] = useState<Histories[]>([]);
  const access_token = Cookies.get("token");

  const dispatch = useAppDispatch();


  useEffect(() => {
    const fetchHistories = async () => {
      const transHis: Histories[] = await getTransactionHistory(access_token);
      const filtered = transHis.filter((product) => product._id === transId);
      setTransacId(filtered);
    };
    fetchHistories();
  }, []);


  const hanldeClickProduct = () => {
    dispatch(PopupDetailProduct(TransacId[0].product.slug))
    dispatch(toggleModal('product'))
    dispatch(setActiveTab("detail"))
  }

  const hanldeClickProductRating = () => {
    dispatch(PopupDetailProduct(TransacId[0].product.slug))
    dispatch(toggleModal('product'))
    dispatch(setActiveTab("rating"))

  }

  return (
    <>
      {TransacId.length > 0 ? (
        <>
          <div>
            <WrapResponsive>
              <div className="py-4">
                <Link href="/transaction-history" className="flex gap-2 items-center font-semibold" >
                  <IoIosArrowBack className="w-5 h-5" />
                  Lịch sử giao dịch
                </Link>

              </div>
            </WrapResponsive>
            {TransacId.map((product: Histories) => (
              <>
                <div key={product._id} className="w-full items-center pb-7 px-3 md:px-0 lg:px-0 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl lg:flex justify-around">

                  <div className="gap-y-3 lg:flex md:flex gap-3">
                    <div className="w-full md:h-[71px] lg:h-[71px] mb-2 md:mb-0 lg:mb-0">
                      {" "}
                      <img
                        src={`${product.product.pictures}`}
                        alt="Err"
                        className="w-full h-full rounded-[10px]"
                      />
                    </div>{" "}
                    <div>
                      <p className="w-50px text-[#3861FB] font-bold text-2xl leading-[142%] lg:line-clamp-1 md:line-clamp-1">
                        {product.product.name}
                      </p>

                      <div className="flex gap-3 items-center">
                        {" "}
                        <h2 className="text-xl font-bold">
                          Giá:{" "}
                          {product.orderPrice.toLocaleString("vi-VN", {
                            style: "currency",
                            currencyDisplay: "symbol",
                            currency: "VND",
                          })}
                        </h2>
                        <div className="items-center flex gap-x-3">
                          {/* {product.discount !== 0 ? (
                            <>
                              {" "}
                              <h3
                                className="text-lg font-semibold text-[#616E85] "
                                style={{ textDecoration: "line-through" }}
                              >
                                {product.discount.toLocaleString("vi-VN", {
                                  style: "currency",
                                  currencyDisplay: "symbol",
                                  currency: "VND",
                                })}
                              </h3>
                              <div className="bg-red-600 text-sm inline px-3 py-2 text-white rounded-lg">
                                -50%
                              </div>
                            </>
                          ) : (
                            <></>
                          )}{" "} */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gap-y-3 mt-3 md:mt-0 lg:mt-0">
                    <div className="flex mt-0 gap-3 items-center md:mt-4 lg:mt-0 mb-2 lg:justify-end">
                      <Link
                        href={`/seller/${product.product.creator._id}`}
                        className="w-[31px] h-[31px]"
                      >
                        <img
                          src={`${product.product.creator.avatar}`}
                          alt="Err"
                          className="w-full h-full object-cover rounded-[50%]"
                        />
                      </Link>
                      <Link
                        href={`/seller/${product.product.creator._id}`}
                        className="font-inter  leading-normal"
                      >
                        {product.product.creator.name}
                      </Link>
                    </div>
                    <div className="gap-x-3">
                      <button
                        type="button"
                        className="py-2 mr-2 px-4 inline-flex justify-center items-center gap-2 rounded-lg bg-white border border-blue-500 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                        onClick={() => dispatch(hanldeClickProduct)}

                      >
                        Xem sản phẩm
                      </button>
                      <button
                        type="button"
                        onClick={() => dispatch(hanldeClickProductRating)}

                        className="py-2 px-4 inline-flex cursor-pointer justify-center items-center gap-2 rounded-lg bg-blue-500 border border-transparent font-semibold text-white hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                      >
                        Đánh giá
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="w-[70%] bg-[#F9F3EF] rounded-3xl mb-5 mx-auto md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl py-10 px-10 gap-5 flex">
                    <div className="mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl w-full ">
                      <div className="w-full h-auto rounded-3xl">
                        <div className="bg-white w-full px-5 pb-10 py-10">
                          <div className="flex gap-2">
                            <div className="">
                              <p className="text-[#3D3D4E] font-bold whitespace-normal">
                                <span className="text-black font-normal ">
                                  Mã đơn hàng:<span className="whitespace-normal">{" "}</span>
                                </span>{" "}
                                {product._id}
                              </p>{" "}
                            </div>
                          </div>
                          <div className="flex mt-2 gap-2">
                            <div className="">
                              <p className="text-[#3D3D4E] font-bold">
                                <span className="text-black font-normal ">
                                  Thời gian:{" "}
                                </span>{" "}
                                {/* {format(
                                  new Date(product.createdAt),
                                  "dd/MM/yyyy HH:mm:ss"
                                )} */}
                              </p>{" "}
                            </div>
                          </div>
                          <div className="flex gap-x-3 items-center pt-2">
                            <p className="text-[#3D3D4E]">Thể loại: </p>
                            <div className="flex w-auto items-center px-4 py-2 gap-x-2 rounded-[30px] bg-[#EFF2F5] text-[#616E85] font-normal">

                              <p>{product.product.categories.name}</p>
                            </div>
                          </div>
                          <div className="pt-2 inline-flex flex-col">
                            <p>
                              Số lượng : <b>x{product.quantity}</b>
                            </p>
                          </div>

                          <div className="flex flex-col items-start md:flex-row lg:flex-row gap-3 md:items-center lg:items-center my-2">
                            <p>Trạng thái: </p>
                            <p className="text-[#21BF73] font-bold text-right uppercase">
                              {product.status}
                            </p>
                          </div>
                          <div className="mt-10 ">
                            {product.discount !== 0 ? (
                              <>
                                {" "}
                                <div className="flex gap-3 justify-end items-center">
                                  {" "}
                                  <h3
                                    className="text-lg font-semibold text-[#616E85] "
                                    style={{ textDecoration: "line-through" }}
                                  >
                                    20.000 VND
                                  </h3>
                                  <div className="bg-red-600 text-sm inline px-3 py-2 text-white rounded-lg justify-end">
                                    -50%
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex gap-3 justify-end items-center">
                                  {" "}
                                  <h3 className="text-lg font-semibold text-[#616E85] ">
                                    {product.orderPrice.toLocaleString(
                                      "vi-VN",
                                      {
                                        style: "currency",
                                        currencyDisplay: "symbol",
                                        currency: "VND",
                                      }
                                    )}
                                  </h3>
                                  <div className="bg-blue-600 text-sm inline px-3 py-2 text-white rounded-lg justify-end">
                                    x{product.quantity}
                                  </div>
                                </div>
                              </>
                            )}{" "}
                            <h2 className="text-2xl font-bold text-right">
                              Tổng số tiền:{" "}
                              {product.totalPrice.toLocaleString("vi-VN", {
                                style: "currency",
                                currencyDisplay: "symbol",
                                currency: "VND",
                              })}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </>
            ))}
          </div>
        </>
      ) : (
        <>
          <TransactionIdLoader />
        </>
      )}
    </>
  );
}
