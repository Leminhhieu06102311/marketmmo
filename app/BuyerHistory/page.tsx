"use client"
import React, { useState } from "react";
import Link from "next/link";
import PurchaseHistory from "./TabBuyer/PurchaseHistory";
import RachageHistory from "./TabBuyer/RachageHistory";
import PurchaseHistorySecond from "./TabBuyer/PurchaseHistorySecond";
const BuyerHistory = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };
  return (
    <>
      <div className="max-w-xxs mx-auto md:max-w-3xl lg:max-w-7xl  px-5 pt-12">
        <div className="block justify-between items-center md:flex md:px-[60px] lg:flex lg:px-[60px]">
          <div className="block items-center gap-x-5 md:flex lg:flex">
            <div className="flex justify-center">
              <div className="w-[110px] h-auto justify-center">
                <img
                  src="data:image/png;base64,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"
                  alt="Binance"
                  className="w-full flex-shrink-0 rounded-[110px] border-[10px] border-white shadow-md"
                />
              </div>
            </div>
            <div>
              <p className="text-black text-center font-semibold text-[19px] leading-27 tracking-tighter md:text-left lg:text-left">
                Chấu Hoàng Luân
              </p>
              <p className="text-center text-gray-500 font-inter text-[15px] leading-16 md:text-left lg:text-left">
                @chauhoangluan167
              </p>
              <div className="flex justify-center leading-16 gap-x-4 font-inter text-[15px]">
                <p>
                  <span className="font-semibold">1.020</span> Fllowing
                </p>
                <p>
                  <span className="font-semibold">546</span> Followers
                </p>
              </div>
            </div>
          </div>
          <div className="block gap-x-2 my-3 items-center text-left md:gap-0 md:m-0 lg:gap-0 lg:m-0">
            <p className="text-center text-black text-[15px] font-semibold leading-27 tracking-tighter md:text-[18px] md:text-left lg:text-[20px] lg:text-left">
              Số tiền đã mua
            </p>
            <p className="text-center text-black font-semibold text-[20px] leading-16 lg:text-[25px] lg:text-left">
              12,340,000 VND
            </p>
          </div>
        </div>
        <div className="pt-10">
          <div className="lg:px-[145px] ">
            <div className="flex justify-around lg:justify-between">
              {" "}
              <div className="text-center" onClick={() => handleTabClick(1)}>
                <button
                  className={`${
                    activeTab === 1 ? "font-medium" : "font-inter"
                  } leading-16`}
                  onClick={() => handleTabClick(1)}
                >
                  <span className="hidden md:block lg:block">
                    Lịch sử mua hàng
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="block md:hidden lg:hidden"
                  >
                    <path
                      d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 8H21"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`${
                    activeTab === 1 ? "bg-primary" : "bg-white"
                  } w-[55px] h-1 rounded-[99px] bg-primary mx-auto mt-2`}
                ></div>
              </div>
              <div className="text-center" onClick={() => handleTabClick(2)}>
                <button
                  className={`${
                    activeTab === 2 ? "font-medium" : "font-inter"
                  } leading-16`}
                  onClick={() => handleTabClick(2)}
                >
                  <span className="hidden md:block lg:block">
                    Lịch sử nạp tiền
                  </span>

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="block md:hidden lg:hidden"                  >
                    <path
                      d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 7.5V16.5"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 3V7H21"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 2L17 7"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`${
                    activeTab === 2 ? "bg-primary" : "bg-white"
                  } w-[55px] h-1 rounded-[99px] bg-primary mx-auto mt-2`}
                ></div>
              </div>
              <div className="text-center">
                <button
                  className={`${
                    activeTab === 3 ? "font-medium" : "font-inter"
                  } leading-16`}
                  onClick={() => handleTabClick(3)}
                >
                  <span className="hidden md:block lg:block">
                    Lịch sử giao dịch trung gian
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="block md:hidden lg:hidden"                  >
                    <path
                      d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`${
                    activeTab === 3 ? "bg-primary" : "bg-white"
                  } w-[55px] h-1 rounded-[99px] bg-primary mx-auto mt-2`}
                ></div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200 mt-1"></div>
          </div>
        </div>
        {activeTab === 1 && (
          <div>
            <PurchaseHistory />
          </div>
        )}
        {activeTab === 2 && <div><RachageHistory/></div>}
        {activeTab === 3 && <div><PurchaseHistorySecond/></div>}
      </div>
    </>
  );
};

export default BuyerHistory;
