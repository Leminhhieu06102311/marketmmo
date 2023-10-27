import React, { useState } from "react";
import Link from "next/link";

const PurchaseHistory = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const handleLoadMore1 = () => {
    setShowMore1(true);
  };
  const handleHide1 = () => {
    setShowMore1(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div>
        <div className="lg:px-6 mt-7">
          <div className="flex gap-3 items-center justify-end">
            <p className="font-medium leading-normal">Lọc</p>
            <button
              onClick={toggleDropdown}
              className="flex delay-150 relative w-auto px-5 py-2.5 justify-center items-center gap-2 rounded-[9px] border border-[#ececec] hover:border-[#c8c8c8bb]"
            >
              <p className="font-medium leading-normal">
                7 ngày gần đây
              </p>
              {!isDropdownOpen && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                >
                  <path
                    d="M4.97178 7.00791L0.721777 2.75791C0.428027 2.46416 0.428027 1.98916 0.721777 1.69853L1.42803 0.992285C1.72178 0.698535 2.19678 0.698535 2.4874 0.992285L5.4999 4.00479L8.5124 0.992285C8.80615 0.698535 9.28115 0.698535 9.57178 0.992285L10.278 1.69853C10.5718 1.99229 10.5718 2.46729 10.278 2.75791L6.02803 7.00791C5.74053 7.30166 5.26553 7.30166 4.97178 7.00791Z"
                    fill="black"
                  />
                </svg>
              )}
              {isDropdownOpen && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                >
                  <path
                    d="M6.02822 0.992333L10.2782 5.24233C10.572 5.53608 10.572 6.01108 10.2782 6.30171L9.57197 7.00796C9.27822 7.30171 8.80322 7.30171 8.5126 7.00796L5.5001 3.99546L2.4876 7.00796C2.19385 7.30171 1.71885 7.30171 1.42822 7.00796L0.721973 6.30171C0.428224 6.00796 0.428224 5.53296 0.721973 5.24233L4.97197 0.992333C5.25947 0.698584 5.73447 0.698584 6.02822 0.992333Z"
                    fill="black"
                  />
                </svg>
              )}
              {isDropdownOpen && (
                <div className="hidden absolute w-auto mt-[250px] md:block lg:block">
                  {" "}
                  <div className="bg-zinc-50 rounded-lg shadow-xl z-20">
                    <div>
                      <button className="py-3 px-5  font-medium lg:w-full hover:bg-slate-100 rounded-lg">
                        14 ngày gần đây
                      </button>
                      <button className="py-3 px-5  font-medium lg:w-full hover:bg-slate-100 rounded-lg">
                        30 ngày gần đây
                      </button>
                      <button className="py-3 px-5  font-medium lg:w-full hover:bg-slate-100 rounded-lg">
                        60 ngày gần đây
                      </button>
                      <button className="py-3 px-5  font-medium lg:w-full hover:bg-slate-100 rounded-lg">
                        90 ngày gần đây
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
        <div>
          <div className="mt-5 grid grid-cols-1">
            <Link href="">
              <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-md hover:bg-gray-50 duration-100 ">
                <div className="p-3">
                  <div className="flex justify-between border-b border-solid border-[#EFF2F5] py-2">
                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center gap-x-2">
                        <div className="w-[31px] h-auto">
                          <img
                            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/369038383_1361113118088562_8993987260558909402_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aBUplvVWrMoAX-pYSHQ&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAEcp0EvkggZ6Me1ZoSwK5M0YPjNVAKi_bEkDU7xLJNaw&oe=652E380C"
                            alt="Err"
                            className="w-full rounded-[50%]"
                          />
                        </div>
                        <p className="font-inter  leading-normal">
                          Chấu Hoàng Luân
                        </p>
                      </div>
                      <div>
                        <button className="hidden px-3 py-2 rounded-[10px] bg-[#3861FB] text-white  font-medium leading-normal md:block lg:block delay-150 hover:bg-[#3862fbdf] delay-150 hover:bg-[#3862fbdf]">
                          Đánh giá
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Link className="flex items-center gap-x-2" href="">
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
                          src="http://logos-download.com/wp-content/uploads/2016/05/Gmail_logo_icon.png"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="gap-y-1">
                        <p className="w-50px text-[#3861FB] font-bold text-[15px] leading-[142%] line-clamp-1 lg:w-[420px]">
                          Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                        </p>
                        <p className="hidden rounded-[10px] my-1 border-[1px] border-[rgba(0, 0, 0, 0.20)] text-[#3D3D4E] text-center text-[13px] py-1 w-[350px] line-clamp-1 lg:block">
                          Gmail random IP 7 ngày++ email|pass|recovery|geo
                        </p>
                        <p className="text-[#3D3D4E] font-normal  leading-normal">
                          số lượng: 1
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4">
                      <p className="text-[#3D3D4E] text-[12px] font-bold text-right">
                        11/10/2023 15:59:00
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="text-[#3D3D4E] font-normal text-[13px]">
                          Thể loại:{" "}
                        </p>
                        <div className="flex w-auto items-center px-3 py-1 gap-x-2 rounded-[30px] bg-[#EFF2F5] text-[#616E85] text-[13px] font-normal">
                          <div className="w-[13px] h-auto">
                            <img
                              src="https://hotmail.best/wp-content/uploads/2020/01/gmail-login-768x580.png"
                              alt="Err"
                              className="w-full"
                            />
                          </div>
                          <p>Gmail</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] text-right">
                          Tổng số tiền:{" "}
                          <span className="font-bold text-[19px]">
                            5.000 VND
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="">
              <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-md hover:bg-gray-50 duration-100 ">
                <div className="p-3">
                  <div className="flex justify-between border-b border-solid border-[#EFF2F5] py-2">
                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center gap-x-2">
                        <div className="w-[31px] h-auto">
                          <img
                            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/369038383_1361113118088562_8993987260558909402_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aBUplvVWrMoAX-pYSHQ&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAEcp0EvkggZ6Me1ZoSwK5M0YPjNVAKi_bEkDU7xLJNaw&oe=652E380C"
                            alt="Err"
                            className="w-full rounded-[50%]"
                          />
                        </div>
                        <p className="font-inter  leading-normal">
                          Chấu Hoàng Luân
                        </p>
                      </div>
                      <div>
                        <button disabled className="hidden px-3 py-2 rounded-[10px] bg-[#F0F6FF] text-[#616E85]  font-medium leading-normal md:block lg:block">
                          Đã đánh giá
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Link className="flex items-center gap-x-2" href="">
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
                          src="http://logos-download.com/wp-content/uploads/2016/05/Gmail_logo_icon.png"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="gap-y-1">
                        <p className="w-50px text-[#3861FB] font-bold text-[15px] leading-[142%] line-clamp-1 lg:w-[420px]">
                          Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                        </p>
                        <p className="hidden rounded-[10px] my-1 border-[1px] border-[rgba(0, 0, 0, 0.20)] text-[#3D3D4E] text-center text-[13px] py-1 w-[350px] line-clamp-1 lg:block">
                          Gmail random IP 7 ngày++ email|pass|recovery|geo
                        </p>
                        <p className="text-[#3D3D4E] font-normal  leading-normal">
                          số lượng: 1
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4">
                      <p className="text-[#3D3D4E] text-[12px] font-bold text-right">
                        11/10/2023 15:59:00
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="text-[#3D3D4E] font-normal text-[13px]">
                          Thể loại:{" "}
                        </p>
                        <div className="flex w-auto items-center px-3 py-1 gap-x-2 rounded-[30px] bg-[#EFF2F5] text-[#616E85] text-[13px] font-normal">
                          <div className="w-[13px] h-auto">
                            <img
                              src="https://hotmail.best/wp-content/uploads/2020/01/gmail-login-768x580.png"
                              alt="Err"
                              className="w-full"
                            />
                          </div>
                          <p>Gmail</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] text-right">
                          Tổng số tiền:{" "}
                          <span className="font-bold text-[19px]">
                            5.000 VND
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="">
              <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-md hover:bg-gray-50 duration-100 ">
                <div className="p-3">
                  <div className="flex justify-between border-b border-solid border-[#EFF2F5] py-2">
                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center gap-x-2">
                        <div className="w-[31px] h-auto">
                          <img
                            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/369038383_1361113118088562_8993987260558909402_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aBUplvVWrMoAX-pYSHQ&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAEcp0EvkggZ6Me1ZoSwK5M0YPjNVAKi_bEkDU7xLJNaw&oe=652E380C"
                            alt="Err"
                            className="w-full rounded-[50%]"
                          />
                        </div>
                        <p className="font-inter  leading-normal">
                          Chấu Hoàng Luân
                        </p>
                      </div>
                      <div>
                        <button className="hidden px-3 py-2 rounded-[10px] bg-[#3861FB] text-white  font-medium leading-normal md:block lg:block delay-150 hover:bg-[#3862fbdf]">
                          Đánh giá
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Link className="flex items-center gap-x-2" href="">
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
                          src="http://logos-download.com/wp-content/uploads/2016/05/Gmail_logo_icon.png"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="gap-y-1">
                        <p className="w-50px text-[#3861FB] font-bold text-[15px] leading-[142%] line-clamp-1 lg:w-[420px]">
                          Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                        </p>
                        <p className="hidden rounded-[10px] my-1 border-[1px] border-[rgba(0, 0, 0, 0.20)] text-[#3D3D4E] text-center text-[13px] py-1 w-[350px] line-clamp-1 lg:block">
                          Gmail random IP 7 ngày++ email|pass|recovery|geo
                        </p>
                        <p className="text-[#3D3D4E] font-normal  leading-normal">
                          số lượng: 1
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4">
                      <p className="text-[#3D3D4E] text-[12px] font-bold text-right">
                        11/10/2023 15:59:00
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="text-[#3D3D4E] font-normal text-[13px]">
                          Thể loại:{" "}
                        </p>
                        <div className="flex w-auto items-center px-3 py-1 gap-x-2 rounded-[30px] bg-[#EFF2F5] text-[#616E85] text-[13px] font-normal">
                          <div className="w-[13px] h-auto">
                            <img
                              src="https://hotmail.best/wp-content/uploads/2020/01/gmail-login-768x580.png"
                              alt="Err"
                              className="w-full"
                            />
                          </div>
                          <p>Gmail</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] text-right">
                          Tổng số tiền:{" "}
                          <span className="font-bold text-[19px]">
                            5.000 VND
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            {showMore1 && (
              <>
                {" "}
                <Link href="">
              <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-md hover:bg-gray-50 duration-100 ">
                <div className="p-3">
                  <div className="flex justify-between border-b border-solid border-[#EFF2F5] py-2">
                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center gap-x-2">
                        <div className="w-[31px] h-auto">
                          <img
                            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/369038383_1361113118088562_8993987260558909402_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aBUplvVWrMoAX-pYSHQ&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAEcp0EvkggZ6Me1ZoSwK5M0YPjNVAKi_bEkDU7xLJNaw&oe=652E380C"
                            alt="Err"
                            className="w-full rounded-[50%]"
                          />
                        </div>
                        <p className="font-inter  leading-normal">
                          Chấu Hoàng Luân
                        </p>
                      </div>
                      <div>
                        <button className="hidden px-3 py-2 rounded-[10px] bg-[#3861FB] text-white  font-medium leading-normal md:block lg:block delay-150 hover:bg-[#3862fbdf]">
                          Đánh giá
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Link className="flex items-center gap-x-2" href="">
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
                          src="http://logos-download.com/wp-content/uploads/2016/05/Gmail_logo_icon.png"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="gap-y-1">
                        <p className="w-50px text-[#3861FB] font-bold text-[15px] leading-[142%] line-clamp-1 lg:w-[420px]">
                          Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                        </p>
                        <p className="hidden rounded-[10px] my-1 border-[1px] border-[rgba(0, 0, 0, 0.20)] text-[#3D3D4E] text-center text-[13px] py-1 w-[350px] line-clamp-1 lg:block">
                          Gmail random IP 7 ngày++ email|pass|recovery|geo
                        </p>
                        <p className="text-[#3D3D4E] font-normal  leading-normal">
                          số lượng: 1
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4">
                      <p className="text-[#3D3D4E] text-[12px] font-bold text-right">
                        11/10/2023 15:59:00
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="text-[#3D3D4E] font-normal text-[13px]">
                          Thể loại:{" "}
                        </p>
                        <div className="flex w-auto items-center px-3 py-1 gap-x-2 rounded-[30px] bg-[#EFF2F5] text-[#616E85] text-[13px] font-normal">
                          <div className="w-[13px] h-auto">
                            <img
                              src="https://hotmail.best/wp-content/uploads/2020/01/gmail-login-768x580.png"
                              alt="Err"
                              className="w-full"
                            />
                          </div>
                          <p>Gmail</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] text-right">
                          Tổng số tiền:{" "}
                          <span className="font-bold text-[19px]">
                            5.000 VND
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>            <Link href="">
              <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-md hover:bg-gray-50 duration-100 ">
                <div className="p-3">
                  <div className="flex justify-between border-b border-solid border-[#EFF2F5] py-2">
                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center gap-x-2">
                        <div className="w-[31px] h-auto">
                          <img
                            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/369038383_1361113118088562_8993987260558909402_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aBUplvVWrMoAX-pYSHQ&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAEcp0EvkggZ6Me1ZoSwK5M0YPjNVAKi_bEkDU7xLJNaw&oe=652E380C"
                            alt="Err"
                            className="w-full rounded-[50%]"
                          />
                        </div>
                        <p className="font-inter  leading-normal">
                          Chấu Hoàng Luân
                        </p>
                      </div>
                      <div>
                        <button className="hidden px-3 py-2 rounded-[10px] bg-[#3861FB] text-white  font-medium leading-normal md:block lg:block delay-150 hover:bg-[#3862fbdf]">
                          Đánh giá
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Link className="flex items-center gap-x-2" href="">
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
                          src="http://logos-download.com/wp-content/uploads/2016/05/Gmail_logo_icon.png"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="gap-y-1">
                        <p className="w-50px text-[#3861FB] font-bold text-[15px] leading-[142%] line-clamp-1 lg:w-[420px]">
                          Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                        </p>
                        <p className="hidden rounded-[10px] my-1 border-[1px] border-[rgba(0, 0, 0, 0.20)] text-[#3D3D4E] text-center text-[13px] py-1 w-[350px] line-clamp-1 lg:block">
                          Gmail random IP 7 ngày++ email|pass|recovery|geo
                        </p>
                        <p className="text-[#3D3D4E] font-normal  leading-normal">
                          số lượng: 1
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4">
                      <p className="text-[#3D3D4E] text-[12px] font-bold text-right">
                        11/10/2023 15:59:00
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="text-[#3D3D4E] font-normal text-[13px]">
                          Thể loại:{" "}
                        </p>
                        <div className="flex w-auto items-center px-3 py-1 gap-x-2 rounded-[30px] bg-[#EFF2F5] text-[#616E85] text-[13px] font-normal">
                          <div className="w-[13px] h-auto">
                            <img
                              src="https://hotmail.best/wp-content/uploads/2020/01/gmail-login-768x580.png"
                              alt="Err"
                              className="w-full"
                            />
                          </div>
                          <p>Gmail</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] text-right">
                          Tổng số tiền:{" "}
                          <span className="font-bold text-[19px]">
                            5.000 VND
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
              </>
            )}
          </div>
          <div className="px-5 lg:flex justify-center mx-auto mt-[24px] mb-[16px] gap-56">
            {!showMore1 && (
              <button
              className="w-full delay-150 md:w-[100%] lg:w-[260px] h-auto leading-none whitespace-nowrap p-0  bg-slate-100 rounded-md py-[16px] hover:bg-[#eff0f1]"
              data-sensors-click="true"
                onClick={handleLoadMore1}
              >
                <span className="lg: font-semibold text-var(--text-color)">
                  Xem thêm
                </span>
              </button>
            )}
            {showMore1 && (
              <button
              className="w-full delay-150 md:w-[100%] lg:w-[260px] h-auto leading-none whitespace-nowrap p-0  bg-slate-100 rounded-md py-[16px] hover:bg-[#eff0f1]"
              data-sensors-click="true"
                onClick={handleHide1}
              >
                <span className="lg: font-semibold text-var(--text-color)">
                  Ẩn bớt
                </span>
              </button>
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
        <button onClick={toggleDropdown} className="py-4 px-5  font-bold w-full bg-[#EFF2F5] rounded-md">
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
