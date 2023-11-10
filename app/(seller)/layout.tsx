"use client";
import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import {LuUserCircle} from "react-icons/lu"
import {GoHome, GoPackage ,GoProjectRoadmap, GoGift} from "react-icons/go"
import {MdOutlinePayments} from "react-icons/md"

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #F7F5F0 0%, #FFF 138.09%)",
      }}
    >
      <button className="fixed bottom-10 right-10 bg-primary rounded-full text-white flex items-center py-2 px-3 gap-2">
        <AiOutlineMessage className="w-5 h-5 text-white" />
        <span>Tin nhắn từ người mua</span>
      </button>
      <div>
        {/* ========== MAIN CONTENT ========== */}
        {/* Sidebar Toggle */}
        <div className="sticky top-0 inset-x-0 z-20  border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center py-4">
            {/* Navigation Toggle */}
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600"
              data-hs-overlay="#application-sidebar"
              aria-controls="application-sidebar"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle Navigation</span>
              <svg
                className="w-5 h-5"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
            {/* End Navigation Toggle */}
            {/* Breadcrumb */}
            <ol
              className="ml-3 flex items-center whitespace-nowrap min-w-0"
              aria-label="Breadcrumb"
            >
              <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
                Người bán
                <svg
                  className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </li>
              <li
                className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
                aria-current="page"
              >
                Trang chủ
              </li>
            </ol>
            {/* End Breadcrumb */}
          </div>
        </div>
        {/* End Sidebar Toggle */}
        {/* Sidebar */}
        <div
          id="application-sidebar"
          className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64  border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="px-6">
            <a
              className="flex-none text-xl font-semibold dark:text-white"
              href="#"
              aria-label="MarKet MMO"
            >
              Sell MarKet MMO
            </a>
          </div>
          <nav
            className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
            data-hs-accordion-always-open
          >
            <ul className="space-y-1.5">
              <li>
                <a className=" items-center gap-x-3.5 py-3 px-6 bg-white  text-black text-base rounded-full justify-center inline-flex  dark:bg-gray-900 dark:text-white">
                  <GoHome className="w-6 h-6" />
                  Trang Chủ
                </a>
              </li>
              <li className="hs-accordion" id="users-accordion">
                <a
                  className=" items-center gap-x-3.5 py-3 px-6 hover:bg-white  text-black text-base rounded-full justify-center inline-flex  dark:bg-gray-900 dark:text-white"
                  href="javascript:;"
                >
                 <GoPackage className="w-6 h-6" />
                  Sản phẩm
                </a>
                <div
                  id="users-accordion-sub"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                >
                  <ul
                    className="hs-accordion-group pl-3 pt-2"
                    data-hs-accordion-always-open
                  >
                    <li className="hs-accordion" id="users-accordion-sub-1">
                      <Link
                        className=" items-center gap-x-3.5 py-3 px-6 hover:bg-white  text-black text-base rounded-full justify-center inline-flex  dark:bg-gray-900 dark:text-white"
                        href="/manager-product"
                      >
                        Quản lí sản phẩm
                        <svg
                          className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li className="hs-accordion" id="users-accordion-sub-2">
                      <a
                        className=" items-center gap-x-3.5 py-3 px-6 hover:bg-white  text-black text-base rounded-full justify-center inline-flex  dark:bg-gray-900 dark:text-white"
                        href="javascript:;"
                      >
                        Quản lí tồn kho
                        <svg
                          className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="hs-accordion" id="account-accordion">
                <a
                  className=" items-center gap-x-3.5 py-3 px-6 hover:bg-white  text-black text-base rounded-full justify-center inline-flex  dark:bg-gray-900 dark:text-white"
                  href="javascript:;"
                >
                 <GoProjectRoadmap className="w-6 h-6" />
                  Đơn hàng
                </a>
                <div
                  id="account-accordion-sub"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                >
                  <ul className="pt-2 pl-2">
                    <li>
                      <a
                        className="flex items-center gap-x-3.5 py-3 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                        href="javascript:;"
                      >
                        Quản lí đơn hàng
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-x-3.5 py-3 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                        href="javascript:;"
                      >
                        Quản lí yêu cầu hủy
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-x-3.5 py-3 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                        href="javascript:;"
                      >
                        Quản lí đơn hoàn trả
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="hs-accordion" id="projects-accordion">
                <Link
                  href="/promotion/marketing-tools"
                  className=" items-center gap-x-3.5 py-3 px-6 hover:bg-white  text-black text-base rounded-full justify-center inline-flex  dark:bg-gray-900 dark:text-white"
                >
                  <GoGift className="w-6 h-6" />
                  Khuyến mãi
                </Link>
                <div
                  id="projects-accordion-sub"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                >
                  <ul className="pt-2 pl-2">
                    <li>
                      <a
                        className="flex items-center gap-x-3.5 py-3 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                        href="javascript:;"
                      >
                        Công cụ quảng bá
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="hs-accordion" id="projects-accordion">
                <Link
                  className=" items-center gap-x-3.5 py-3 px-6 hover:bg-white  text-black text-base rounded-full justify-center inline-flex  dark:bg-gray-900 dark:text-white"
                  href="/finance"
                >
                  <MdOutlinePayments className="w-6 h-6" />
                  Tài chính
                </Link>
                
              </li>
              <li className="hs-accordion" id="projects-accordion">
                <Link
                  className=" items-center gap-x-3.5 py-3 px-6 hover:bg-white  text-black text-base rounded-full justify-center inline-flex  dark:bg-gray-900 dark:text-white"
                  href="/seller-settings"
                >
                  <LuUserCircle className="w-6  h-6 " />
                  Hồ sơ
                </Link>
                
              </li>
            </ul>
          </nav>
        </div>
        {/* End Sidebar */}
        {/* Content */}
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72 min-h-screen">
          {children}
        </div>
        {/* End Content */}
        {/* ========== END MAIN CONTENT ========== */}
      </div>
    </div>
  );
}
