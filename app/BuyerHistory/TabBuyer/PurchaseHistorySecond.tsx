import React, { useState } from "react";
import Link from "next/link";

const PurchaseHistorySecond = () => {
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
              className="flex delay-150 relative w-auto px-5 py-2.5 justify-center items-center rounded-[9px] border border-[#ececec] gap-2  hover:border-[#c8c8c8bb]"
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
                  <div className="flex justify-between border-b border-solid border-[#EFF2F5] py-2">
                    <div className="flex items-center">
                      <div className="flex items-center gap-x-2">
                        <div className="font-medium  leading-normal">
                          Từ:
                        </div>
                        <div className="w-[31px] h-auto">
                          <img
                            src="https://tse1.mm.bing.net/th?id=OIP.TOvPFfUYMxiXkomgmtTZ_AAAAA&pid=Api&P=0&h=220"
                            alt="Err"
                            className="w-full rounded-[50%]"
                          />
                        </div>
                        <p className="font-inter  leading-normal">
                          Nguyễn Văn A
                        </p>
                      </div>
                    </div>{" "}
                    <div className="block md:hidden lg:hidden">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://logos-download.com/wp-content/uploads/2021/05/Agribank_Logo_full-2048x2048.png"
                              alt="Err"
                              className="w-full rounded-[15%]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block lg:block">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="font-medium  leading-normal">
                          Đến:
                        </div>
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/369038383_1361113118088562_8993987260558909402_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EFDJOGZm7JkAX9BLrAA&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfBoxybEX8dPfJWeihoMGKEYkmZT26YcSJlJaqLPnut-fw&oe=652C3DCC"
                              alt="Err"
                              className="w-full rounded-[50%]"
                            />
                          </div>
                          <p className="font-inter  leading-normal">
                            Chấu Hoàng Luân
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-between px-4 mt-4 items-center md:flex lg:flex">
                    <div className="flex gap-x-4 item-center">
                      <div className="w-[118px] h-[57px] md:h-[71px] md:w-[81px] lg:h-[81px]">
                        {" "}
                        <img
                          src="https://sydneysocialmediamanagers.com.au/wp-content/uploads/2020/03/TikTok-for-Business.jpg"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="gap-y-2">
                        <div className="flex items-center gap-x-2 mb-1">
                          {" "}
                          <p className="font-semibold text-[15px] hidden md:hidden lg:block">
                            Sản phẩm:
                          </p>
                          <p className="w-50px text-[#3861FB] font-bold text-[15px] leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                            Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                          </p>
                        </div>
                        <p className="w-50px mb-1 text-black font-semibold  leading-[142%] line-clamp-1 lg:w-[420px]">
                          STK: 49293742203
                        </p>
                        <p className="w-50px text-black font-medium  leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                          <span className="font-semibold">Nội dung: </span>{" "}
                          chuyen tien giao dich tai khoan gmail gia 15k
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4 mt-4 md:mt-0 lg:mt-0">
                      <p className="text-[#3D3D4E] text-[12px] font-bold text-right">
                        11/10/2023 15:59:00
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="text-[#21BF73]  font-bold text-right">
                          GIAO DỊCH THÀNH CÔNG
                        </p>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] text-right">
                          <span className="font-bold text-[19px]">
                            <span>+ </span>
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
                    <div className="flex items-center">
                      <div className="flex items-center gap-x-2">
                        <div className="font-medium  leading-normal">
                          Từ:
                        </div>
                        <div className="w-[31px] h-auto">
                          <img
                            src="https://tse1.mm.bing.net/th?id=OIP.TOvPFfUYMxiXkomgmtTZ_AAAAA&pid=Api&P=0&h=220"
                            alt="Err"
                            className="w-full rounded-[50%]"
                          />
                        </div>
                        <p className="font-inter  leading-normal">
                          Nguyễn Văn A
                        </p>
                      </div>
                    </div>{" "}
                    <div className="block md:hidden lg:hidden">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://logos-download.com/wp-content/uploads/2021/05/Agribank_Logo_full-2048x2048.png"
                              alt="Err"
                              className="w-full rounded-[15%]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block lg:block">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="font-medium  leading-normal">
                          Đến:
                        </div>
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/369038383_1361113118088562_8993987260558909402_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EFDJOGZm7JkAX9BLrAA&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfBoxybEX8dPfJWeihoMGKEYkmZT26YcSJlJaqLPnut-fw&oe=652C3DCC"
                              alt="Err"
                              className="w-full rounded-[50%]"
                            />
                          </div>
                          <p className="font-inter  leading-normal">
                            Chấu Hoàng Luân
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-between px-4 mt-4 items-center md:flex lg:flex">
                    <div className="flex gap-x-4 item-center">
                      <div className="w-[118px] h-[57px] md:h-[71px] md:w-[81px] lg:h-[71px]">
                        {" "}
                        <img
                          src="https://sydneysocialmediamanagers.com.au/wp-content/uploads/2020/03/TikTok-for-Business.jpg"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="gap-y-2">
                        <div className="flex items-center gap-x-2 mb-1">
                          {" "}
                          <p className="font-semibold text-[15px] hidden md:hidden lg:block">
                            Sản phẩm:
                          </p>
                          <p className="w-50px text-[#3861FB] font-bold text-[15px] leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                            Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                          </p>
                        </div>
                        <p className="w-50px mb-1 text-black font-semibold  leading-[142%] line-clamp-1 lg:w-[420px]">
                          STK: 49293742203
                        </p>
                        <p className="w-50px text-black font-medium  leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                          <span className="font-semibold">Nội dung: </span>{" "}
                          chuyen tien giao dich tai khoan gmail gia 15k
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4 mt-4 md:mt-0 lg:mt-0">
                      <p className="text-[#3D3D4E] text-[12px] font-bold text-right">
                        11/10/2023 15:59:00
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="text-[#EA4335]  font-bold text-right">
                          GIAO DỊCH THẤT BẠI
                        </p>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] text-right">
                          <span className="font-bold text-[19px] line-through">
                            <span>+ </span>
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
                    <div className="flex items-center">
                      <div className="flex items-center gap-x-2">
                        <div className="font-medium  leading-normal">
                          Từ:
                        </div>
                        <div className="w-[31px] h-auto">
                          <img
                            src="https://tse1.mm.bing.net/th?id=OIP.TOvPFfUYMxiXkomgmtTZ_AAAAA&pid=Api&P=0&h=220"
                            alt="Err"
                            className="w-full rounded-[50%]"
                          />
                        </div>
                        <p className="font-inter  leading-normal">
                          Nguyễn Văn A
                        </p>
                      </div>
                    </div>{" "}
                    <div className="block md:hidden lg:hidden">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://logos-download.com/wp-content/uploads/2021/05/Agribank_Logo_full-2048x2048.png"
                              alt="Err"
                              className="w-full rounded-[15%]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block lg:block">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="font-medium  leading-normal">
                          Đến:
                        </div>
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/369038383_1361113118088562_8993987260558909402_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EFDJOGZm7JkAX9BLrAA&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfBoxybEX8dPfJWeihoMGKEYkmZT26YcSJlJaqLPnut-fw&oe=652C3DCC"
                              alt="Err"
                              className="w-full rounded-[50%]"
                            />
                          </div>
                          <p className="font-inter  leading-normal">
                            Chấu Hoàng Luân
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-between px-4 mt-4 items-center md:flex lg:flex">
                    <div className="flex gap-x-4 item-center">
                      <div className="w-[118px] h-[57px] md:h-[71px] md:w-[81px] lg:h-[71px]">
                        {" "}
                        <img
                          src="https://sydneysocialmediamanagers.com.au/wp-content/uploads/2020/03/TikTok-for-Business.jpg"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="gap-y-2">
                        <div className="flex items-center gap-x-2 mb-1">
                          {" "}
                          <p className="font-semibold text-[15px] hidden md:hidden lg:block">
                            Sản phẩm:
                          </p>
                          <p className="w-50px text-[#3861FB] font-bold text-[15px] leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                            Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                          </p>
                        </div>
                        <p className="w-50px mb-1 text-black font-semibold  leading-[142%] line-clamp-1 lg:w-[420px]">
                          STK: 49293742203
                        </p>
                        <p className="w-50px text-black font-medium  leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                          <span className="font-semibold">Nội dung: </span>{" "}
                          chuyen tien giao dich tai khoan gmail gia 15k
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4 mt-4 md:mt-0 lg:mt-0">
                      <p className="text-[#3D3D4E] text-[12px] font-bold text-right">
                        11/10/2023 15:59:00
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="text-[#EA4335]  font-bold text-right">
                          GIAO DỊCH THẤT BẠI
                        </p>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] text-right">
                          <span className="font-bold text-[19px] line-through">
                            <span>+ </span>
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
                    <div className="flex items-center">
                      <div className="flex items-center gap-x-2">
                        <div className="font-medium  leading-normal">
                          Từ:
                        </div>
                        <div className="w-[31px] h-auto">
                          <img
                            src="https://tse1.mm.bing.net/th?id=OIP.TOvPFfUYMxiXkomgmtTZ_AAAAA&pid=Api&P=0&h=220"
                            alt="Err"
                            className="w-full rounded-[50%]"
                          />
                        </div>
                        <p className="font-inter  leading-normal">
                          Nguyễn Văn A
                        </p>
                      </div>
                    </div>{" "}
                    <div className="block md:hidden lg:hidden">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://logos-download.com/wp-content/uploads/2021/05/Agribank_Logo_full-2048x2048.png"
                              alt="Err"
                              className="w-full rounded-[15%]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block lg:block">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="font-medium  leading-normal">
                          Đến:
                        </div>
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/369038383_1361113118088562_8993987260558909402_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EFDJOGZm7JkAX9BLrAA&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfBoxybEX8dPfJWeihoMGKEYkmZT26YcSJlJaqLPnut-fw&oe=652C3DCC"
                              alt="Err"
                              className="w-full rounded-[50%]"
                            />
                          </div>
                          <p className="font-inter  leading-normal">
                            Chấu Hoàng Luân
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-between px-4 mt-4 items-center md:flex lg:flex">
                    <div className="flex gap-x-4 item-center">
                      <div className="w-[118px] h-[57px] md:h-[71px] md:w-[81px] lg:h-[71px]">
                        {" "}
                        <img
                          src="https://sydneysocialmediamanagers.com.au/wp-content/uploads/2020/03/TikTok-for-Business.jpg"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="gap-y-2">
                        <div className="flex items-center gap-x-2 mb-1">
                          {" "}
                          <p className="font-semibold text-[15px] hidden md:hidden lg:block">
                            Sản phẩm:
                          </p>
                          <p className="w-50px text-[#3861FB] font-bold text-[15px] leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                            Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                          </p>
                        </div>
                        <p className="w-50px mb-1 text-black font-semibold  leading-[142%] line-clamp-1 lg:w-[420px]">
                          STK: 49293742203
                        </p>
                        <p className="w-50px text-black font-medium  leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                          <span className="font-semibold">Nội dung: </span>{" "}
                          chuyen tien giao dich tai khoan gmail gia 15k
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4 mt-4 md:mt-0 lg:mt-0">
                      <p className="text-[#3D3D4E] text-[12px] font-bold text-right">
                        11/10/2023 15:59:00
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="text-[#21BF73]  font-bold text-right">
                          GIAO DỊCH THÀNH CÔNG
                        </p>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] text-right">
                          <span className="font-bold text-[19px]">
                            <span>+ </span>
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
                    <div className="flex items-center">
                      <div className="flex items-center gap-x-2">
                        <div className="font-medium  leading-normal">
                          Từ:
                        </div>
                        <div className="w-[31px] h-auto">
                          <img
                            src="https://tse1.mm.bing.net/th?id=OIP.TOvPFfUYMxiXkomgmtTZ_AAAAA&pid=Api&P=0&h=220"
                            alt="Err"
                            className="w-full rounded-[50%]"
                          />
                        </div>
                        <p className="font-inter  leading-normal">
                          Nguyễn Văn A
                        </p>
                      </div>
                    </div>{" "}
                    <div className="block md:hidden lg:hidden">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://logos-download.com/wp-content/uploads/2021/05/Agribank_Logo_full-2048x2048.png"
                              alt="Err"
                              className="w-full rounded-[15%]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block lg:block">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="font-medium  leading-normal">
                          Đến:
                        </div>
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/369038383_1361113118088562_8993987260558909402_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EFDJOGZm7JkAX9BLrAA&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfBoxybEX8dPfJWeihoMGKEYkmZT26YcSJlJaqLPnut-fw&oe=652C3DCC"
                              alt="Err"
                              className="w-full rounded-[50%]"
                            />
                          </div>
                          <p className="font-inter  leading-normal">
                            Chấu Hoàng Luân
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-between px-4 mt-4 items-center md:flex lg:flex">
                    <div className="flex gap-x-4 item-center">
                      <div className="w-[118px] h-[57px] md:h-[71px] md:w-[81px] lg:h-[71px]">
                        {" "}
                        <img
                          src="https://sydneysocialmediamanagers.com.au/wp-content/uploads/2020/03/TikTok-for-Business.jpg"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="gap-y-2">
                        <div className="flex items-center gap-x-2 mb-1">
                          {" "}
                          <p className="font-semibold text-[15px] hidden md:hidden lg:block">
                            Sản phẩm:
                          </p>
                          <p className="w-50px text-[#3861FB] font-bold text-[15px] leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                            Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                          </p>
                        </div>
                        <p className="w-50px mb-1 text-black font-semibold  leading-[142%] line-clamp-1 lg:w-[420px]">
                          STK: 49293742203
                        </p>
                        <p className="w-50px text-black font-medium  leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                          <span className="font-semibold">Nội dung: </span>{" "}
                          chuyen tien giao dich tai khoan gmail gia 15k
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4 mt-4 md:mt-0 lg:mt-0">
                      <p className="text-[#3D3D4E] text-[12px] font-bold text-right">
                        11/10/2023 15:59:00
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="text-[#21BF73]  font-bold text-right">
                          GIAO DỊCH THÀNH CÔNG
                        </p>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] text-right">
                          <span className="font-bold text-[19px]">
                            <span>+ </span>
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
                    <div className="flex items-center">
                      <div className="flex items-center gap-x-2">
                        <div className="font-medium  leading-normal">
                          Từ:
                        </div>
                        <div className="w-[31px] h-auto">
                          <img
                            src="https://tse1.mm.bing.net/th?id=OIP.TOvPFfUYMxiXkomgmtTZ_AAAAA&pid=Api&P=0&h=220"
                            alt="Err"
                            className="w-full rounded-[50%]"
                          />
                        </div>
                        <p className="font-inter  leading-normal">
                          Nguyễn Văn A
                        </p>
                      </div>
                    </div>{" "}
                    <div className="block md:hidden lg:hidden">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://logos-download.com/wp-content/uploads/2021/05/Agribank_Logo_full-2048x2048.png"
                              alt="Err"
                              className="w-full rounded-[15%]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block lg:block">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="font-medium  leading-normal">
                          Đến:
                        </div>
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/369038383_1361113118088562_8993987260558909402_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EFDJOGZm7JkAX9BLrAA&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfBoxybEX8dPfJWeihoMGKEYkmZT26YcSJlJaqLPnut-fw&oe=652C3DCC"
                              alt="Err"
                              className="w-full rounded-[50%]"
                            />
                          </div>
                          <p className="font-inter  leading-normal">
                            Chấu Hoàng Luân
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-between px-4 mt-4 items-center md:flex lg:flex">
                    <div className="flex gap-x-4 item-center">
                      <div className="w-[118px] h-[57px] md:h-[71px] md:w-[81px] lg:h-[71px]">
                        {" "}
                        <img
                          src="https://sydneysocialmediamanagers.com.au/wp-content/uploads/2020/03/TikTok-for-Business.jpg"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="gap-y-2">
                        <div className="flex items-center gap-x-2 mb-1">
                          {" "}
                          <p className="font-semibold text-[15px] hidden md:hidden lg:block">
                            Sản phẩm:
                          </p>
                          <p className="w-50px text-[#3861FB] font-bold text-[15px] leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                            Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                          </p>
                        </div>
                        <p className="w-50px mb-1 text-black font-semibold  leading-[142%] line-clamp-1 lg:w-[420px]">
                          STK: 49293742203
                        </p>
                        <p className="w-50px text-black font-medium  leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                          <span className="font-semibold">Nội dung: </span>{" "}
                          chuyen tien giao dich tai khoan gmail gia 15k
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4 mt-4 md:mt-0 lg:mt-0">
                      <p className="text-[#3D3D4E] text-[12px] font-bold text-right">
                        11/10/2023 15:59:00
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="text-[#21BF73]  font-bold text-right">
                          GIAO DỊCH THÀNH CÔNG
                        </p>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] text-right">
                          <span className="font-bold text-[19px]">
                            <span>+ </span>
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
                    <div className="flex items-center">
                      <div className="flex items-center gap-x-2">
                        <div className="font-medium  leading-normal">
                          Từ:
                        </div>
                        <div className="w-[31px] h-auto">
                          <img
                            src="https://tse1.mm.bing.net/th?id=OIP.TOvPFfUYMxiXkomgmtTZ_AAAAA&pid=Api&P=0&h=220"
                            alt="Err"
                            className="w-full rounded-[50%]"
                          />
                        </div>
                        <p className="font-inter  leading-normal">
                          Nguyễn Văn A
                        </p>
                      </div>
                    </div>{" "}
                    <div className="block md:hidden lg:hidden">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://logos-download.com/wp-content/uploads/2021/05/Agribank_Logo_full-2048x2048.png"
                              alt="Err"
                              className="w-full rounded-[15%]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block lg:block">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="font-medium  leading-normal">
                          Đến:
                        </div>
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/369038383_1361113118088562_8993987260558909402_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EFDJOGZm7JkAX9BLrAA&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfBoxybEX8dPfJWeihoMGKEYkmZT26YcSJlJaqLPnut-fw&oe=652C3DCC"
                              alt="Err"
                              className="w-full rounded-[50%]"
                            />
                          </div>
                          <p className="font-inter  leading-normal">
                            Chấu Hoàng Luân
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-between px-4 mt-4 items-center md:flex lg:flex">
                    <div className="flex gap-x-4 item-center">
                      <div className="w-[118px] h-[57px] md:h-[71px] md:w-[81px] lg:h-[71px]">
                        {" "}
                        <img
                          src="https://sydneysocialmediamanagers.com.au/wp-content/uploads/2020/03/TikTok-for-Business.jpg"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="gap-y-2">
                        <div className="flex items-center gap-x-2 mb-1">
                          {" "}
                          <p className="font-semibold text-[15px] hidden md:hidden lg:block">
                            Sản phẩm:
                          </p>
                          <p className="w-50px text-[#3861FB] font-bold text-[15px] leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                            Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                          </p>
                        </div>
                        <p className="w-50px mb-1 text-black font-semibold  leading-[142%] line-clamp-1 lg:w-[420px]">
                          STK: 49293742203
                        </p>
                        <p className="w-50px text-black font-medium  leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                          <span className="font-semibold">Nội dung: </span>{" "}
                          chuyen tien giao dich tai khoan gmail gia 15k
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4 mt-4 md:mt-0 lg:mt-0">
                      <p className="text-[#3D3D4E] text-[12px] font-bold text-right">
                        11/10/2023 15:59:00
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="text-[#21BF73]  font-bold text-right">
                          GIAO DỊCH THÀNH CÔNG
                        </p>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] text-right">
                          <span className="font-bold text-[19px]">
                            <span>+ </span>
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
                          <Link href="">
              <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-md hover:bg-gray-50 duration-100 ">
                <div className="p-3">
                  <div className="flex justify-between border-b border-solid border-[#EFF2F5] py-2">
                    <div className="flex items-center">
                      <div className="flex items-center gap-x-2">
                        <div className="font-medium  leading-normal">
                          Từ:
                        </div>
                        <div className="w-[31px] h-auto">
                          <img
                            src="https://tse1.mm.bing.net/th?id=OIP.TOvPFfUYMxiXkomgmtTZ_AAAAA&pid=Api&P=0&h=220"
                            alt="Err"
                            className="w-full rounded-[50%]"
                          />
                        </div>
                        <p className="font-inter  leading-normal">
                          Nguyễn Văn A
                        </p>
                      </div>
                    </div>{" "}
                    <div className="block md:hidden lg:hidden">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://logos-download.com/wp-content/uploads/2021/05/Agribank_Logo_full-2048x2048.png"
                              alt="Err"
                              className="w-full rounded-[15%]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block lg:block">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="font-medium  leading-normal">
                          Đến:
                        </div>
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/369038383_1361113118088562_8993987260558909402_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EFDJOGZm7JkAX9BLrAA&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfBoxybEX8dPfJWeihoMGKEYkmZT26YcSJlJaqLPnut-fw&oe=652C3DCC"
                              alt="Err"
                              className="w-full rounded-[50%]"
                            />
                          </div>
                          <p className="font-inter  leading-normal">
                            Chấu Hoàng Luân
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-between px-4 mt-4 items-center md:flex lg:flex">
                    <div className="flex gap-x-4 item-center">
                      <div className="w-[118px] h-[57px] md:h-[71px] md:w-[81px] lg:h-[71px]">
                        {" "}
                        <img
                          src="https://sydneysocialmediamanagers.com.au/wp-content/uploads/2020/03/TikTok-for-Business.jpg"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="gap-y-2">
                        <div className="flex items-center gap-x-2 mb-1">
                          {" "}
                          <p className="font-semibold text-[15px] hidden md:hidden lg:block">
                            Sản phẩm:
                          </p>
                          <p className="w-50px text-[#3861FB] font-bold text-[15px] leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                            Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                          </p>
                        </div>
                        <p className="w-50px mb-1 text-black font-semibold  leading-[142%] line-clamp-1 lg:w-[420px]">
                          STK: 49293742203
                        </p>
                        <p className="w-50px text-black font-medium  leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                          <span className="font-semibold">Nội dung: </span>{" "}
                          chuyen tien giao dich tai khoan gmail gia 15k
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4 mt-4 md:mt-0 lg:mt-0">
                      <p className="text-[#3D3D4E] text-[12px] font-bold text-right">
                        11/10/2023 15:59:00
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="text-[#21BF73]  font-bold text-right">
                          GIAO DỊCH THÀNH CÔNG
                        </p>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] text-right">
                          <span className="font-bold text-[19px]">
                            <span>+ </span>
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
                    <div className="flex items-center">
                      <div className="flex items-center gap-x-2">
                        <div className="font-medium  leading-normal">
                          Từ:
                        </div>
                        <div className="w-[31px] h-auto">
                          <img
                            src="https://tse1.mm.bing.net/th?id=OIP.TOvPFfUYMxiXkomgmtTZ_AAAAA&pid=Api&P=0&h=220"
                            alt="Err"
                            className="w-full rounded-[50%]"
                          />
                        </div>
                        <p className="font-inter  leading-normal">
                          Nguyễn Văn A
                        </p>
                      </div>
                    </div>{" "}
                    <div className="block md:hidden lg:hidden">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://logos-download.com/wp-content/uploads/2021/05/Agribank_Logo_full-2048x2048.png"
                              alt="Err"
                              className="w-full rounded-[15%]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block lg:block">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="font-medium  leading-normal">
                          Đến:
                        </div>
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/369038383_1361113118088562_8993987260558909402_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EFDJOGZm7JkAX9BLrAA&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfBoxybEX8dPfJWeihoMGKEYkmZT26YcSJlJaqLPnut-fw&oe=652C3DCC"
                              alt="Err"
                              className="w-full rounded-[50%]"
                            />
                          </div>
                          <p className="font-inter  leading-normal">
                            Chấu Hoàng Luân
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-between px-4 mt-4 items-center md:flex lg:flex">
                    <div className="flex gap-x-4 item-center">
                      <div className="w-[118px] h-[57px] md:h-[71px] md:w-[81px] lg:h-[71px]">
                        {" "}
                        <img
                          src="https://sydneysocialmediamanagers.com.au/wp-content/uploads/2020/03/TikTok-for-Business.jpg"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="gap-y-2">
                        <div className="flex items-center gap-x-2 mb-1">
                          {" "}
                          <p className="font-semibold text-[15px] hidden md:hidden lg:block">
                            Sản phẩm:
                          </p>
                          <p className="w-50px text-[#3861FB] font-bold text-[15px] leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                            Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                          </p>
                        </div>
                        <p className="w-50px mb-1 text-black font-semibold  leading-[142%] line-clamp-1 lg:w-[420px]">
                          STK: 49293742203
                        </p>
                        <p className="w-50px text-black font-medium  leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                          <span className="font-semibold">Nội dung: </span>{" "}
                          chuyen tien giao dich tai khoan gmail gia 15k
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4 mt-4 md:mt-0 lg:mt-0">
                      <p className="text-[#3D3D4E] text-[12px] font-bold text-right">
                        11/10/2023 15:59:00
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="text-[#21BF73]  font-bold text-right">
                          GIAO DỊCH THÀNH CÔNG
                        </p>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] text-right">
                          <span className="font-bold text-[19px]">
                            <span>+ </span>
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
                    <div className="flex items-center">
                      <div className="flex items-center gap-x-2">
                        <div className="font-medium  leading-normal">
                          Từ:
                        </div>
                        <div className="w-[31px] h-auto">
                          <img
                            src="https://tse1.mm.bing.net/th?id=OIP.TOvPFfUYMxiXkomgmtTZ_AAAAA&pid=Api&P=0&h=220"
                            alt="Err"
                            className="w-full rounded-[50%]"
                          />
                        </div>
                        <p className="font-inter  leading-normal">
                          Nguyễn Văn A
                        </p>
                      </div>
                    </div>{" "}
                    <div className="block md:hidden lg:hidden">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://logos-download.com/wp-content/uploads/2021/05/Agribank_Logo_full-2048x2048.png"
                              alt="Err"
                              className="w-full rounded-[15%]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block lg:block">
                      {" "}
                      <div className="flex items-center gap-x-2 ">
                        <div className="font-medium  leading-normal">
                          Đến:
                        </div>
                        <div className="flex items-center gap-x-2">
                          <div className="w-[31px] h-auto">
                            <img
                              src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/369038383_1361113118088562_8993987260558909402_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EFDJOGZm7JkAX9BLrAA&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfBoxybEX8dPfJWeihoMGKEYkmZT26YcSJlJaqLPnut-fw&oe=652C3DCC"
                              alt="Err"
                              className="w-full rounded-[50%]"
                            />
                          </div>
                          <p className="font-inter  leading-normal">
                            Chấu Hoàng Luân
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-between px-4 mt-4 items-center md:flex lg:flex">
                    <div className="flex gap-x-4 item-center">
                      <div className="w-[118px] h-[57px] md:h-[71px] md:w-[81px] lg:h-[71px]">
                        {" "}
                        <img
                          src="https://sydneysocialmediamanagers.com.au/wp-content/uploads/2020/03/TikTok-for-Business.jpg"
                          alt="Err"
                          className="w-full h-full rounded-[10px]"
                        />
                      </div>
                      <div className="gap-y-2">
                        <div className="flex items-center gap-x-2 mb-1">
                          {" "}
                          <p className="font-semibold text-[15px] hidden md:hidden lg:block">
                            Sản phẩm:
                          </p>
                          <p className="w-50px text-[#3861FB] font-bold text-[15px] leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                            Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                          </p>
                        </div>
                        <p className="w-50px mb-1 text-black font-semibold  leading-[142%] line-clamp-1 lg:w-[420px]">
                          STK: 49293742203
                        </p>
                        <p className="w-50px text-black font-medium  leading-[142%] line-clamp-1 md:w-[300px] lg:w-[420px]">
                          <span className="font-semibold">Nội dung: </span>{" "}
                          chuyen tien giao dich tai khoan gmail gia 15k
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4 mt-4 md:mt-0 lg:mt-0">
                      <p className="text-[#3D3D4E] text-[12px] font-bold text-right">
                        11/10/2023 15:59:00
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="text-[#21BF73]  font-bold text-right">
                          GIAO DỊCH THÀNH CÔNG
                        </p>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] text-right">
                          <span className="font-bold text-[19px]">
                            <span>+ </span>
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

export default PurchaseHistorySecond;
