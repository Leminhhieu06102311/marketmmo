"use client";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { MouseEvent, useState, useEffect } from "react";
import { getAll } from "@/services/transactionHistory";
import { format } from "date-fns";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Cookies from "js-cookie";
import { setLoggedIn } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import { toggleModal } from "@/redux/modalSlice";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Histories } from "@/interfaces/Histories";
import TransactionIdLoader from "@/components/Skeleton/TransactionIdLoader";
export default function detailProduct({
  params,
}: {
  params: { transactionHistoryId: string };
}) {
  console.log(params.transactionHistoryId);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const transId = params.transactionHistoryId;
  const [TransacId, setTransacId] = useState<Histories[]>([]);
  const [rating, setRating] = useState(0);
  const [showMore1, setShowMore1] = useState(false);

  const [filteredTransacId, setFilteredTransacId] = useState<Histories[]>([]);
  const [selectType, setSelectType] = useState<Number>(1);
  useEffect(() => {
    const access_token = Cookies.get("access_token");
    if (!access_token) {
      dispatch(setLoggedIn(true));
      router.replace("/login");
    }
  }, []);
  useEffect(() => {
    const fetchHistories = async () => {
      const transHis = await getAll();
      setTransacId(transHis);
      console.log(transHis);
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
  const hanldeSelectType = (event: MouseEvent<HTMLButtonElement>) => {
    const element = event.target as HTMLElement;
    const typeId = element.getAttribute("data-type");
    setSelectType(Number(typeId));
  };
  const handleShowMore1 = () => {
    setShowMore1(true);
  };
  const handleHide1 = () => {
    setShowMore1(false);
  };
  const handleRatingClick = (value: any) => {
    setRating(value);
  };
  const handleRatingClick2 = () => {
    dispatch(toggleModal("rating"));
  };

  return (
    <>
      {" "}
      {!loading ? (
        <>
          {" "}
          <div>
            <div className="w-full h-full fixed bg-white right-0 left-0 ">
              <div className=" w-full flex justify-end top-0 items-center  ">
                <Link href="/transaction-history">
                  <FontAwesomeIcon
                    className="py-4 px-5 text-black text-lg cursor-pointer"
                    icon={faXmark}
                  />
                </Link>
              </div>
              {filteredTransacId.map((product: Histories) => (
                <div className="bg-white relative top-0 w-full mb-20 bottom-0 left-0 right-0">
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
                          onClick={handleRatingClick2}
                          className="py-2 px-4 inline-flex cursor-pointer justify-center items-center gap-2 rounded-lg bg-blue-500 border border-transparent font-semibold text-white hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                        >
                          Đánh giá
                        </a>
                      </div>
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
                              {/* <div className="w-[18px] h-auto">
                          <img
                            src="https://hotmail.best/wp-content/uploads/2020/01/gmail-login-768x580.png"
                            alt="Err"
                            className="w-full"
                          />
                        </div> */}
                              <p>{product.product.categories.name}</p>
                            </div>
                          </div>
                          <div className="pt-2 inline-flex flex-col">
                            <p>
                              Số lượng : <b>x{product.quantity}</b>
                            </p>
                          </div>
                          {/* <div className="gap-3 items-center my-4 md:flex lg:flex">
                      <p>Gói sản phẩm: </p>
                      <p className="bg-white py-2 rounded-lg text-black text-sm border border-gray-300 line-clamp-1">
                        Gmail random IP 7 ngày++ email|pass|recovery|geo
                      </p>
                    </div> */}
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
                  <div>
                    {" "}
                    <div>
                      {" "}
                      {showMore1 === true ? (
                        <>
                          <div className="">
                            <div className="flex justify-center">
                              <div className="w-[40%] absolute top-0 z-100 bg-white pb-10 shadow-xl rounded-2xl box-shadow-product mx-auto">
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
                                    src={`${product.product.pictures}`}
                                    alt=""
                                    className="items-center mx-auto mb-5 w-[80px] h-[80px] md:w-[80px] md:h-[80px] lg:w-[80px] lg:h-[80px] rounded-[50%] border-[5px] border-white shadow-md"
                                  />
                                </div>
                                <div>
                                  <div className="text-center">
                                    <b className="text-[20px] text-primary uppercase">
                                      {product.product.name}
                                    </b>
                                  </div>
                                </div>
                                <div className="flex justify-center items-center gap-x-2">
                                  <div className="w-[25px] h-auto">
                                    <img
                                      src={`${product.user.avatar}`}
                                      alt="Err"
                                      className="w-full rounded-[50%]"
                                    />
                                  </div>
                                  <p className="font-inter text-[14px] leading-normal">
                                    {product.user.name}
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
                                  {" "}
                                  {/* <svg
                    width="27"
                    height="27"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                      fill="#FFC000"
                    />
                  </svg>{" "} */}{" "}
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
                                    className="py-2 mb-6 px-4 inline-flex justify-center items-center gap-2 rounded-lg bg-blue-500 border border-transparent font-semibold text-white hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
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
            </div>
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
