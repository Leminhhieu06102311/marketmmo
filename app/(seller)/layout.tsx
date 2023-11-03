"use client";
import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineMessage } from "react-icons/ai";
const links = [
  {
    name: 'Trang chủ',
    path: '/home-seller',
    icon: 'GoHome'
  }
]
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
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                    />
                  </svg>
                  Trang Chủ
                </a>
              </li>
              <li className="hs-accordion" id="users-accordion">
                <a
                  className=" items-center gap-x-3.5 py-3 px-6 hover:bg-white  text-black text-base rounded-full justify-center inline-flex  dark:bg-gray-900 dark:text-white"
                  href="javascript:;"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                  </svg>
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
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
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
                  <svg
                    className="w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z" />
                    <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z" />
                  </svg>
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
                  <svg
                    className="w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z" />
                    <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z" />
                  </svg>
                  Tài chính
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
                        Rút tiền
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-x-3.5 py-3 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                        href="javascript:;"
                      >
                        Lịch sử giao dịch
                      </a>
                    </li>
                  </ul>
                </div>
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
