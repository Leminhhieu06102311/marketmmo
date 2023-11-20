"use client";
import React, { useState,useEffect } from "react";
import Cookies from "js-cookie";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import PurchaseHistory from "./TabBuyer/PurchaseHistory";
import RachageHistory from "./TabBuyer/PurchaseHistory";
import PurchaseHistorySecond from "./TabBuyer/PurchaseHistory";
import { useRouter } from "next/navigation";
import { setLoggedIn } from "@/redux/userSlice";

const BuyerHistory = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const access_token = Cookies.get("access_token");
    if (!access_token) {
      dispatch(setLoggedIn(true));
      router.replace("/login");
      setLoading(false);
    }
  }, []);
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };
  return (
    <>
        <>
          {" "}
          <div className="max-w-xxs mx-auto md:max-w-3xl lg:max-w-full  px-5">
            <div className="pt-10">
              <div className="lg:px-5">
                <div className="flex gap-x-6 justify-between md:justify-around lg:justify-start">
                  {" "}
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
        </>

    </>
  );
};

export default BuyerHistory;
