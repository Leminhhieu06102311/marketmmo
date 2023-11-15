"use client";
import { useState, useEffect } from "react";
import PurchaseHistory from "./TabBuyer/PurchaseHistory";
import RachageHistory from "./TabBuyer/RachageHistory";
import PurchaseHistorySecond from "./TabBuyer/PurchaseHistorySecond";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
const BuyerHistory = () => {

  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };
  return (
    <>
      {isLoggedIn ? (
        <p>
          <br />
          <div>
          </div>
          <div className="max-w-xxs mx-auto md:max-w-3xl lg:max-w-full  px-5">
            <div className="pt-10">
              <div className="lg:px-5">
                <div className="flex gap-x-6 justify-between md:justify-around lg:justify-start">
                  <div
                    className="text-center"
                    onClick={() => handleTabClick(1)}
                  >
                    <button
                      className={`${
                        activeTab === 1
                          ? "text-black bg-[#1212120a]"
                          : "text-gray-700 bg-none"
                      } leading-16 font-semibold  px-4 py-3 rounded-[10px]`}
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
                  </div>
                  <div
                    className="text-center"
                    onClick={() => handleTabClick(2)}
                  >
                    <button
                      className={`${
                        activeTab === 2
                          ? "text-black bg-[#1212120a]"
                          : "text-gray-700 bg-none"
                      } leading-16 font-semibold  px-4 py-3 rounded-[10px]`}
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
                        className="block md:hidden lg:hidden"
                      >
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
                  </div>
                  <div className="text-center">
                    <button
                      className={`${
                        activeTab === 3
                          ? "text-black bg-[#1212120a]"
                          : "text-gray-700 bg-none"
                      } leading-16 font-semibold  px-4 py-3 rounded-[10px]`}
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
                        className="block md:hidden lg:hidden"
                      >
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
                  </div>
                </div>
              </div>
            </div>
            {activeTab === 1 && (
              <div>
                <PurchaseHistory />
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <RachageHistory />
              </div>
            )}
            {activeTab === 3 && (
              <div>
                <PurchaseHistorySecond />
              </div>
            )}
          </div>
        </p>
      ) : (
        <div className="w-full h-[600px] text-center pt-[200px]">
          <Link
            className="bg-primary text-white px-6 py-3 rounded-md font-semibold text-sm"
            href="/login"
          >
            Đăng nhập
          </Link>
          <p className="pt-4 font-medium">Vui lòng đăng nhập để xem lịch sử</p>
        </div>
      )}
    </>
  );
};

export default BuyerHistory;
