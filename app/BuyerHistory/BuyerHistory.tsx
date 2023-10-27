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
                  src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/369038383_1361113118088562_8993987260558909402_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EFDJOGZm7JkAX9BLrAA&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfBoxybEX8dPfJWeihoMGKEYkmZT26YcSJlJaqLPnut-fw&oe=652C3DCC"
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
