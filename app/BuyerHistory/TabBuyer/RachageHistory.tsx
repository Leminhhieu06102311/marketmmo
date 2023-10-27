import React, { useState } from "react";
import Link from "next/link";

const RachageHistory = () => {
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
            <p className="font-medium leading-normal ">Lọc</p>
            <button
              onClick={toggleDropdown}
              className="flex relative delay-150 w-auto px-5 py-2.5 justify-center items-center rounded-[9px] border border-[#ececec] gap-2  hover:border-[#c8c8c8bb]"
            >
              <p className="font-medium  leading-normal">
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
                  <div className="block border-b border-solid border-[#EFF2F5] py-2 md:hidden lg:hidden">
                    <div className="">
                      <div className="flex items-center justify-end">
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
                  </div>
                  <div className="justify-between p-4 items-center md:flex lg:flex">
                    <div className="flex gap-x-4 item-center">
                      <div className="w-[67px] lg:h-[67px]">
                        {" "}
                        <img
                          src="https://logos-download.com/wp-content/uploads/2021/05/Agribank_Logo_full-2048x2048.png"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="">
                        <p className="w-50px text-[#0A0A0A] font-bold text-[15px] leading-[142%] line-clamp-1 lg:w-[420px]">
                          CHAU HOANG LUAN
                        </p>
                        <p className="hidden rounded-[10px] text-[#0A0A0A] font-bold text-[13px] py-1 w-[350px] line-clamp-1 md:block lg:block">
                          49293742203
                        </p>
                        <p className="font-bold text-[13px] leading-normal">
                          11/10/2023 15:39:00
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4 content-end">
                      <p className="text-[#21BF73]  font-bold text-right">
                        NẠP THÀNH CÔNG
                      </p>
                      <div>
                        <p className="font-bold text-[22px] text-right">
                          +15.000 VND
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
                  <div className="block border-b border-solid border-[#EFF2F5] py-2 md:hidden lg:hidden">
                    <div className="">
                      <div className="flex items-center justify-end">
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
                  </div>
                  <div className="justify-between p-4 items-center md:flex lg:flex">
                    <div className="flex gap-x-4 item-center">
                      <div className="w-[67px] lg:h-[67px]">
                        {" "}
                        <img
                          src="https://logos-download.com/wp-content/uploads/2021/05/Agribank_Logo_full-2048x2048.png"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="">
                        <p className="w-50px text-[#0A0A0A] font-bold text-[15px] leading-[142%] line-clamp-1 lg:w-[420px]">
                          CHAU HOANG LUAN
                        </p>
                        <p className="hidden rounded-[10px] text-[#0A0A0A] font-bold text-[13px] py-1 w-[350px] line-clamp-1 md:block lg:block">
                          49293742203
                        </p>
                        <p className="font-bold text-[13px] leading-normal">
                          11/10/2023 15:39:00
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4 content-end">
                      <p className="text-[#21BF73]  font-bold text-right">
                        NẠP THÀNH CÔNG
                      </p>
                      <div>
                        <p className="font-bold text-[22px] text-right">
                          +15.000 VND
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
                  <div className="block border-b border-solid border-[#EFF2F5] py-2 md:hidden lg:hidden">
                    <div className="">
                      <div className="flex items-center justify-end">
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
                  </div>
                  <div className="justify-between p-4 items-center md:flex lg:flex">
                    <div className="flex gap-x-4 item-center">
                      <div className="w-[67px] lg:h-[67px]">
                        {" "}
                        <img
                          src="https://logos-download.com/wp-content/uploads/2021/05/Agribank_Logo_full-2048x2048.png"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="">
                        <p className="w-50px text-[#0A0A0A] font-bold text-[15px] leading-[142%] line-clamp-1 lg:w-[420px]">
                          CHAU HOANG LUAN
                        </p>
                        <p className="hidden rounded-[10px] text-[#0A0A0A] font-bold text-[13px] py-1 w-[350px] line-clamp-1 md:block lg:block">
                          49293742203
                        </p>
                        <p className="font-bold text-[13px] leading-normal">
                          11/10/2023 15:39:00
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4 content-end">
                      <p className="text-[#EA4335]  font-bold text-right">
                        NẠP THẤT BẠI
                      </p>
                      <div>
                        <p className="font-bold text-[22px] text-right line-through">
                          +15.000 VND
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
                      <div className="block border-b border-solid border-[#EFF2F5] py-2 md:hidden lg:hidden">
                        <div className="">
                          <div className="flex items-center justify-end">
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
                      </div>
                      <div className="justify-between p-4 items-center md:flex lg:flex">
                        <div className="flex gap-x-4 item-center">
                          <div className="w-[67px] lg:h-[67px]">
                            {" "}
                            <img
                              src="https://logos-download.com/wp-content/uploads/2021/05/Agribank_Logo_full-2048x2048.png"
                              alt="Err"
                              className="w-full h-full rounded-[10px]"
                            />
                          </div>
                          <div className="">
                            <p className="w-50px text-[#0A0A0A] font-bold text-[15px] leading-[142%] line-clamp-1 lg:w-[420px]">
                              CHAU HOANG LUAN
                            </p>
                            <p className="hidden rounded-[10px] text-[#0A0A0A] font-bold text-[13px] py-1 w-[350px] line-clamp-1 md:block lg:block">
                              49293742203
                            </p>
                            <p className="font-bold text-[13px] leading-normal">
                              11/10/2023 15:39:00
                            </p>
                          </div>
                        </div>
                        <div className="gap-x-4 content-end">
                          <p className="text-[#21BF73]  font-bold text-right">
                            NẠP THÀNH CÔNG
                          </p>
                          <div>
                            <p className="font-bold text-[22px] text-right">
                              +15.000 VND
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
                <span className="lg: font-semibold  text-var(--text-color)">
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
                <span className="lg: font-semibold  text-var(--text-color)">
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

export default RachageHistory;
