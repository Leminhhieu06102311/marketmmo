"use client";
import { faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function detailProduct({ productId }: { productId: string }) {
  const [selectType, setSelectType] = useState<Number>(1);
  const [selectQuantity, setSelectQuantity] = useState(1);
  const hanldeSelectType = (event: MouseEvent<HTMLButtonElement>) => {
    const element = event.target as HTMLElement;
    const typeId = element.getAttribute("data-type");
    setSelectType(Number(typeId));
  };
  const handleMinus = () => {
    if (selectQuantity == 1) {
      setSelectQuantity(1);
    } else {
      setSelectQuantity((pre) => pre - 1);
    }
  };

  return (
    <div className=" w-full h-full fixed top-0 right-0 left-0 ">
      <div className=" bg-overlay w-full flex justify-end  fixed z-50 top-0 items-center  ">
        <Link href="/transaction-history">
          <FontAwesomeIcon
            className="py-4 px-5 text-white text-lg cursor-pointer"
            icon={faXmark}
          />
        </Link>
      </div>
      <div className="bg-white rounded-l-lg w-full top-13  absolute bottom-0 left-0 right-0 overflow-y-scroll">
        <div className="w-full items-center pb-7 px-3 md:px-0 lg:px-0 mt-10 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl lg:flex justify-around">
          <div className="gap-y-3 lg:flex md:flex gap-3">
            <div className="w-[81px] md:h-[71px] lg:h-[71px] mb-2 md:mb-0 lg:mb-0">
              {" "}
              <img
                src="http://logos-download.com/wp-content/uploads/2016/05/Gmail_logo_icon.png"
                alt="Err"
                className="w-full h-full rounded-[10px]"
              />
            </div>{" "}
            <div>
              <p className="w-50px text-[#3861FB] font-bold text-2xl leading-[142%] lg:line-clamp-1 md:line-clamp-1">
                Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
              </p>

              <div className="flex gap-3 items-center">
                {" "}
                <h2 className="text-xl font-bold">Giá: 5.000 VND</h2>
                <h3
                  className="text-lg font-semibold text-[#616E85] "
                  style={{ textDecoration: "line-through" }}
                >
                  10.000 VND
                </h3>
                <div className="bg-red-600 text-sm inline px-3 py-2 text-white rounded-lg">
                  -50%
                </div>
              </div>
            </div>
          </div>
          <div className="gap-y-3 mt-3 md:mt-0 lg:mt-0">
            <div className="flex mt-0 gap-3 items-center md:mt-4 lg:mt-0 mb-2 lg:justify-end">
              <div className="w-[31px] h-auto">
                <img
                  src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/395552142_1398252534374620_4265249200004026910_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8Nnv5r2sAysAX-0Z5Ul&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDGC3BabIxNo6gsTrL6CDEJLcCbYBENqFVcFdW1pGEmDw&oe=655573B5"
                  alt="Err"
                  className="w-full rounded-[50%]"
                />
              </div>
              <p className="font-inter  leading-normal">ChauHoangLuan</p>
            </div>
            <div className="gap-x-3">
              <button
                type="button"
                className="py-2 mr-2 px-4 inline-flex justify-center items-center gap-2 rounded-lg bg-white border border-blue-500 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
              >
                Xem sản phẩm{" "}
              </button>
              <button
                type="button"
                className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-lg bg-blue-500 border border-transparent font-semibold text-white hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
              >
                Đánh giá
              </button>
            </div>
          </div>
        </div>
        <div className="w-full  bg-[#F9F3EF] rounded-3xl mb-5 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl py-10 gap-5 flex">
          <div className="mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl ">
            <div className="mx-auto h-auto rounded-3x">
              <div className="bg-white w-[350px] md:w-[700px] lg:w-[1000px] px-5 pb-10 py-10">
                <div className="flex gap-2">
                  <div className="">
                    <p className="text-[#3D3D4E] font-bold">
                      <span className="text-black font-normal">
                        Mã đơn hàng:{" "}
                      </span>{" "}
                      ww78f93hfhe
                    </p>{" "}
                  </div>
                </div>
                <div className="flex mt-2 gap-2">
                  <div className="">
                    <p className="text-[#3D3D4E] font-bold">
                      <span className="text-black font-normal">
                        Thời gian:{" "}
                      </span>{" "}
                      11/10/2023 15:59:00
                    </p>{" "}
                  </div>
                </div>
                <div className="flex gap-x-3 items-center pt-2">
                  <p className="text-[#3D3D4E]">Thể loại: </p>
                  <div className="flex w-auto items-center px-4 py-2 gap-x-2 rounded-[30px] bg-[#EFF2F5] text-[#616E85] font-normal">
                    <div className="w-[18px] h-auto">
                      <img
                        src="https://hotmail.best/wp-content/uploads/2020/01/gmail-login-768x580.png"
                        alt="Err"
                        className="w-full"
                      />
                    </div>
                    <p>Gmail</p>
                  </div>
                </div>
                <div className="pt-2 inline-flex flex-col">
                  <p>
                    Số lượng : <b>x2</b>
                  </p>
                </div>
                <div className="gap-3 items-center my-4 md:flex lg:flex">
                  <p>Gói sản phẩm: </p>
                  <p className="bg-white py-2 rounded-lg text-black text-sm border border-gray-300 line-clamp-1">
                    Gmail random IP 7 ngày++ email|pass|recovery|geo
                  </p>
                </div>
                <div className="flex gap-3 items-center my-2">
                  <p>Trạng thái: </p>
                  <p className="text-[#21BF73]  font-bold text-right">
                    GIAO DỊCH THÀNH CÔNG
                  </p>
                </div>
                <div className="mt-10 ">
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
                  <h2 className="text-2xl font-bold text-right">
                    Tổng số tiền: 10.000 VND
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
