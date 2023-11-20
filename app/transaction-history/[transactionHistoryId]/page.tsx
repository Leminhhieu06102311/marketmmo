"use client";
import Link from "next/link";
import { MouseEvent, useState, useEffect } from "react";
import { getAll, getTransactionHistory } from "@/services/transactionHistory";
import { format } from "date-fns";
import { toggleModal } from "@/redux/modalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import RatingRenderModal from "@/components/Rating/page";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import ContentModal from "@/components/Modal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Histories } from "@/interfaces/Histories";
import TransactionIdLoader from "@/components/Skeleton/TransactionIdLoader";
import { IoIosArrowBack } from "react-icons/io";
import WrapResponsive from "@/components/WrapResponsive";

export default function TransactionHistoryProduct({
  params,
}: {
  params: { transactionHistoryId: string };
}) {
  const dispatch = useAppDispatch();
  // const { status, name } = useAppSelector((state) => state.modal);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const { transactionHistoryId } = params;
  const [loading, setLoading] = useState(true);

  const router = useRouter();
 const [showMore1, setShowMore1] = useState(false);
  const transId = params.transactionHistoryId;
  const [TransacId, setTransacId] = useState<Histories[]>([]);
 

  const [filteredTransacId, setFilteredTransacId] = useState<Histories[]>([]);
  const access_token = Cookies.get("access_token");

  useEffect(() => {
    const fetchHistories = async () => {
      const transHis = await getTransactionHistory(access_token);
      setTransacId(transHis);
    };
    fetchHistories();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      const filtered = TransacId.filter((product) => product._id === transId);
      setFilteredTransacId(filtered);
      setLoading(false);
    };

    filterProducts();
  }, [TransacId, transId]);
    useEffect(() => {
      if (!access_token) {
        router.replace("/login");
      }
    }, []);
  const handleShowMore1 = () => {
    setShowMore1(true);
  };
  const hanldeToRating = () => {
    dispatch(toggleModal("rating"));
  };
  const handleToggle = (productId:any) => {
    setSelectedProductId(productId);

    dispatch(toggleModal("rating"));
  };
  return (
    <>
      {" "}
      {!loading ? (
        <>
          {" "}
          <div>
            <WrapResponsive>
              <div className="py-4">
                <Link
                  href="/transaction-history"
                  className="flex gap-2 items-center font-semibold"
                >
                  <IoIosArrowBack className="w-5 h-5" />
                  Lịch sử giao dịch
                </Link>
              </div>
            </WrapResponsive>
            {filteredTransacId.map((product: Histories) => (
              <>
                <div className="w-full items-center pb-7 px-3 md:px-0 lg:px-0 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl lg:flex justify-around">
                  <div className="gap-y-3 lg:flex md:flex gap-3">
                    <div className="w-[81px] md:h-[71px] lg:h-[71px] mb-2 md:mb-0 lg:mb-0">
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
                          {product.discount !== 0 ? (
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
                          )}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gap-y-3 mt-3 md:mt-0 lg:mt-0">
                    <div className="flex mt-0 gap-3 items-center md:mt-4 lg:mt-0 mb-2 lg:justify-end">
                      <a
                        href={`/seller/${product.product.creator._id}`}
                        className="w-[31px] h-auto"
                      >
                        <img
                          src={`${product.product.creator.avatar}`}
                          alt="Err"
                          className="w-full rounded-[50%]"
                        />
                      </a>
                      <a
                        href={`/seller/${product.product.creator._id}`}
                        className="font-inter  leading-normal"
                      >
                        {product.product.creator.name}
                      </a>
                    </div>
                    <div className="gap-x-3">
                      <button
                        type="button"
                        className="py-2 mr-2 px-4 inline-flex justify-center items-center gap-2 rounded-lg bg-white border border-blue-500 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                      >
                        Xem sản phẩm{" "}
                      </button>
                      <a
                        type="button"
                        onClick={() => handleToggle(product._id)}
                        className="py-2 px-4 inline-flex cursor-pointer justify-center items-center gap-2 rounded-lg bg-blue-500 border border-transparent font-semibold text-white hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                      >
                        Đánh giá
                      </a>
                    </div>
                    <ContentModal  nameModal="rating">
                      <div className="mt-10">
                        {/* {selectedProductId} */}
                        <RatingRenderModal productId={selectedProductId}/>
                      </div>
                    </ContentModal>
                  </div>
                </div>
                <div className="w-[70%] bg-[#F9F3EF] rounded-3xl mb-5 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl py-10 gap-5 flex">
                  <div className="mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl ">
                    <div className="mx-auto h-auto rounded-3xl">
                      <div className="bg-white w-[350px] md:w-[700px] lg:w-[1000px] px-5 pb-10 py-10">
                        <div className="flex gap-2">
                          <div className="">
                            <p className="text-[#3D3D4E] font-bold">
                              <span className="text-black font-normal">
                                Mã đơn hàng:{" "}
                              </span>{" "}
                              {product._id}
                            </p>{" "}
                          </div>
                        </div>
                        <div className="flex mt-2 gap-2">
                          <div className="">
                            <p className="text-[#3D3D4E] font-bold">
                              <span className="text-black font-normal">
                                Thời gian:{" "}
                              </span>{" "}
                              {format(
                                new Date(product.createdAt),
                                "dd/MM/yyyy HH:mm:ss"
                              )}
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

                        <div className="flex gap-3 items-center my-2">
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
                                  {product.orderPrice.toLocaleString("vi-VN", {
                                    style: "currency",
                                    currencyDisplay: "symbol",
                                    currency: "VND",
                                  })}
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
                <div></div>
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
