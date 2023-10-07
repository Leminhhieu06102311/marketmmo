import { FaCaretDown } from "react-icons/fa";
import Link from "next/link";
import React, { useState } from "react";

export default function TabFutures() {
  const [showMore1, setShowMore1] = useState(false);
  const handleLoadMore1 = () => {
    setShowMore1(true);
  };
  const handleHide1 = () => {
    setShowMore1(false);
  };
  return (
    <>
      {" "}
      <div className="lg:mt-[20px] w-[100%]">
        <div className="overflow-x-auto">
          <div>
            <table className="min-w-full lg:m-auto text-base w-full isolation-isolate">
              <thead className="lg:sticky top-0 z-11 bg-white">
                <tr>
                  <th className="sticky left-0 bg-white z-20 lg:border-t border-b border-solid border-table-divider-color py-2 px-2 z-11 text-sm ">
                    <div className="lg:flex justify-center items-center">
                      <div className="flex md:flex lg:flex items-center cursor-pointer">
                        <span className="lg:ml-1">
                          <FaCaretDown />
                        </span>
                        <p className="lg:sticky text-[12px]">#</p>
                      </div>
                    </div>
                  </th>
                  <th className="sticky left-[38px] bg-white z-10 lg:border-t border-b border-solid border-table-divider-color py-2 px-2 z-11 text-sm">
                    {" "}
                    <div>
                      <div>
                        <p className="whitespace-nowrap text-[12px] text-left">
                          Đơn vị tiền tệ
                        </p>
                        <span></span>
                      </div>
                    </div>
                  </th>
                  <th className="whitespace-nowrap lg:border-t border-b border-solid border-table-divider-color py-2 px-2 z-11 text-sm">
                    {" "}
                    <div>
                      <div>
                        <p className="text-[12px] text-left">
                          Cặp giao dịch
                        </p>
                        <span></span>
                      </div>
                    </div>
                  </th>
                  <th className="whitespace-nowrap lg:border-t border-b border-solid border-table-divider-color py-2 px-2 z-11 text-sm">
                    {" "}
                    <div>
                      <div>
                        <span></span>
                        <p className="text-[12px] text-right">
                          Giá
                        </p>
                      </div>
                    </div>
                  </th>
                  <th className="whitespace-nowrap lg:border-t border-b border-solid border-table-divider-color py-2 px-2 z-11 text-sm">
                    {" "}
                    <div>
                      <div>
                        <span></span>
                        <p className="text-[12px] text-right">
                          Giá chỉ số
                        </p>
                      </div>
                    </div>
                  </th>
                  <th className="whitespace-nowrap lg:border-t border-b border-solid border-table-divider-color py-2 px-2 z-11 text-sm">
                    {" "}
                    <div>
                      <div>
                        <span></span>
                        <p className="text-[12px] text-right">
                          Chênh lệch
                        </p>
                      </div>
                    </div>
                  </th>
                  <th className="whitespace-nowrap lg:border-t border-b border-solid border-table-divider-color py-2 px-2 z-11 text-sm">
                    {" "}
                    <div>
                      <div>
                        <span></span>
                        <p className="text-[12px] text-right">
                          Khối lượng giao dịch
                        </p>
                      </div>
                    </div>
                  </th>
                  <th className="whitespace-nowrap lg:border-t border-b border-solid border-table-divider-color py-2 px-2 z-11 text-sm">
                    {" "}
                    <div>
                      <div>
                        <div>
                          <span></span>
                          <p className="text-[12px] text-right">
                            Khối lượng giao dịch %
                          </p>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th className="whitespace-nowrap lg:border-t border-b border-solid border-table-divider-color py-2 px-2 z-11 text-sm">
                    {" "}
                    <div>
                      <div>
                        <div>
                          <span></span>
                          <p className="text-[12px] text-right">
                            Hết hạn
                          </p>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th className="whitespace-nowrap lg:border-t border-b border-solid border-table-divider-color py-2 px-2 z-11 text-sm">
                    {" "}
                    <div>
                      <div>
                        <div>
                          <span></span>
                          <p className="text-[12px] text-right">
                            Tổng số vị thế mở
                          </p>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th className="whitespace-nowrap md:text-[12px] lg:border-t border-b border-solid border-table-divider-color py-2 px-2 z-11 text-[12px] text-right">
                    Cập nhật
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="whitespace-nowrap hover:bg-slate-50">
                  <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                    <p
                      className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                      data-sensors-click="true"
                    >
                      1
                    </p>
                  </td>
                  <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                    <Link href="">
                      <div
                        data-sensors-click="true"
                        className="lg:box-border m-0 flex items-center overflow-hidden"
                      >
                        <img
                          className="lg:w-[24px] h-[24px] rounded-full"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                          <p
                            className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                            data-sensors-click="true"
                          >
                            Ethereum
                          </p>
                          <div data-nosnippet="true">
                            <div></div>
                            <p data-sensors-click="true"></p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                    <div className="flex  lg:flex items-center leading-none text-[14px]">
                      <Link
                        className="lg:font-medium text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                        href=""
                      >
                        BTC/TUSD
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        href=""
                      >
                        <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="12px"
                            width="12px"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $25,901.53
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    $10,952,560.94
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    --
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $1,031,031,182
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      -
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      2023-09-29 15:00:00
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $53,964,790.93
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      Recently
                    </p>
                  </td>
                </tr>
                <tr className="whitespace-nowrap hover:bg-slate-50">
                  <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                    <p
                      className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                      data-sensors-click="true"
                    >
                      2
                    </p>
                  </td>
                  <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                    <Link href="">
                      <div
                        data-sensors-click="true"
                        className="lg:box-border m-0 flex items-center overflow-hidden"
                      >
                        <img
                          className="lg:w-[24px] h-[24px] rounded-full"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                          <p
                            className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                            data-sensors-click="true"
                          >
                            Ethereum
                          </p>
                          <div data-nosnippet="true">
                            <div></div>
                            <p data-sensors-click="true"></p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                    <div className="flex lg:items-center leading-none text-[14px]">
                      <Link
                        className="lg:font-medium text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                        href=""
                      >
                        BTC/TUSD
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        href=""
                      >
                        <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="12px"
                            width="12px"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $25,901.53
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    $10,952,560.94
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    --
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $1,031,031,182
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      -
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      2023-09-29 15:00:00
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $53,964,790.93
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      Recently
                    </p>
                  </td>
                </tr>
                <tr className="whitespace-nowrap hover:bg-slate-50">
                  <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                    <p
                      className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                      data-sensors-click="true"
                    >
                      3
                    </p>
                  </td>
                  <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                    <Link href="">
                      <div
                        data-sensors-click="true"
                        className="lg:box-border m-0 flex items-center overflow-hidden"
                      >
                        <img
                          className="lg:w-[24px] h-[24px] rounded-full"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                          <p
                            className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                            data-sensors-click="true"
                          >
                            Ethereum
                          </p>
                          <div data-nosnippet="true">
                            <div></div>
                            <p data-sensors-click="true"></p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                    <div className="flex lg:items-center leading-none text-[14px]">
                      <Link
                        className="lg:font-medium text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                        href=""
                      >
                        BTC/TUSD
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        href=""
                      >
                        <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="12px"
                            width="12px"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $25,901.53
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    $10,952,560.94
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    --
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $1,031,031,182
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      -
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      2023-09-29 15:00:00
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $53,964,790.93
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      Recently
                    </p>
                  </td>
                </tr>
                <tr className="whitespace-nowrap hover:bg-slate-50">
                  <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                    <p
                      className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                      data-sensors-click="true"
                    >
                      4
                    </p>
                  </td>
                  <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                    <Link href="">
                      <div
                        data-sensors-click="true"
                        className="lg:box-border m-0 flex items-center overflow-hidden"
                      >
                        <img
                          className="lg:w-[24px] h-[24px] rounded-full"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                          <p
                            className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                            data-sensors-click="true"
                          >
                            Ethereum
                          </p>
                          <div data-nosnippet="true">
                            <div></div>
                            <p data-sensors-click="true"></p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                    <div className="flex lg:items-center leading-none text-[14px]">
                      <Link
                        className="lg:font-medium text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                        href=""
                      >
                        BTC/TUSD
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        href=""
                      >
                        <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="12px"
                            width="12px"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $25,901.53
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    $10,952,560.94
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    --
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $1,031,031,182
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      -
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      2023-09-29 15:00:00
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $53,964,790.93
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      Recently
                    </p>
                  </td>
                </tr>
                <tr className="whitespace-nowrap hover:bg-slate-50">
                  <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                    <p
                      className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                      data-sensors-click="true"
                    >
                      5
                    </p>
                  </td>
                  <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                    <Link href="">
                      <div
                        data-sensors-click="true"
                        className="lg:box-border m-0 flex items-center overflow-hidden"
                      >
                        <img
                          className="lg:w-[24px] h-[24px] rounded-full"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                          <p
                            className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                            data-sensors-click="true"
                          >
                            Ethereum
                          </p>
                          <div data-nosnippet="true">
                            <div></div>
                            <p data-sensors-click="true"></p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                    <div className="flex lg:items-center leading-none text-[14px]">
                      <Link
                        className="lg:font-medium text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                        href=""
                      >
                        BTC/TUSD
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        href=""
                      >
                        <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="12px"
                            width="12px"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $25,901.53
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    $10,952,560.94
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    --
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $1,031,031,182
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      -
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      2023-09-29 15:00:00
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $53,964,790.93
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      Recently
                    </p>
                  </td>
                </tr>
                <tr className="whitespace-nowrap hover:bg-slate-50">
                  <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                    <p
                      className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                      data-sensors-click="true"
                    >
                      6
                    </p>
                  </td>
                  <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                    <Link href="">
                      <div
                        data-sensors-click="true"
                        className="lg:box-border m-0 flex items-center overflow-hidden"
                      >
                        <img
                          className="lg:w-[24px] h-[24px] rounded-full"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                          <p
                            className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                            data-sensors-click="true"
                          >
                            Ethereum
                          </p>
                          <div data-nosnippet="true">
                            <div></div>
                            <p data-sensors-click="true"></p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                    <div className="flex lg:items-center leading-none text-[14px]">
                      <Link
                        className="lg:font-medium text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                        href=""
                      >
                        BTC/TUSD
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        href=""
                      >
                        <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="12px"
                            width="12px"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $25,901.53
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    $10,952,560.94
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    --
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $1,031,031,182
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      -
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      2023-09-29 15:00:00
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $53,964,790.93
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      Recently
                    </p>
                  </td>
                </tr>
                <tr className="whitespace-nowrap hover:bg-slate-50">
                  <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                    <p
                      className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                      data-sensors-click="true"
                    >
                      7
                    </p>
                  </td>
                  <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                    <Link href="">
                      <div
                        data-sensors-click="true"
                        className="lg:box-border m-0 flex items-center overflow-hidden"
                      >
                        <img
                          className="lg:w-[24px] h-[24px] rounded-full"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                          <p
                            className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                            data-sensors-click="true"
                          >
                            Ethereum
                          </p>
                          <div data-nosnippet="true">
                            <div></div>
                            <p data-sensors-click="true"></p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                    <div className="flex lg: items-center leading-none text-[14px]">
                      <Link
                        className="lg:font-medium text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                        href=""
                      >
                        BTC/TUSD
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        href=""
                      >
                        <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="12px"
                            width="12px"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $25,901.53
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    $10,952,560.94
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    --
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $1,031,031,182
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      -
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      2023-09-29 15:00:00
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $53,964,790.93
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      Recently
                    </p>
                  </td>
                </tr>
                <tr className="whitespace-nowrap hover:bg-slate-50">
                  <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                    <p
                      className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                      data-sensors-click="true"
                    >
                      8
                    </p>
                  </td>
                  <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                    <Link href="">
                      <div
                        data-sensors-click="true"
                        className="lg:box-border m-0 flex items-center overflow-hidden"
                      >
                        <img
                          className="lg:w-[24px] h-[24px] rounded-full"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                          <p
                            className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                            data-sensors-click="true"
                          >
                            Ethereum
                          </p>
                          <div data-nosnippet="true">
                            <div></div>
                            <p data-sensors-click="true"></p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                    <div className="flex lg:items-center leading-none text-[14px]">
                      <Link
                        className="lg:font-medium text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                        href=""
                      >
                        BTC/TUSD
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        href=""
                      >
                        <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="12px"
                            width="12px"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $25,901.53
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    $10,952,560.94
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    --
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $1,031,031,182
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      -
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      2023-09-29 15:00:00
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $53,964,790.93
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      Recently
                    </p>
                  </td>
                </tr>
                <tr className="whitespace-nowrap hover:bg-slate-50">
                  <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                    <p
                      className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                      data-sensors-click="true"
                    >
                      9
                    </p>
                  </td>
                  <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                    <Link href="">
                      <div
                        data-sensors-click="true"
                        className="lg:box-border m-0 flex items-center overflow-hidden"
                      >
                        <img
                          className="lg:w-[24px] h-[24px] rounded-full"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                          <p
                            className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                            data-sensors-click="true"
                          >
                            Ethereum
                          </p>
                          <div data-nosnippet="true">
                            <div></div>
                            <p data-sensors-click="true"></p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                    <div className="flex  lg:flex items-center leading-none text-[14px]">
                      <Link
                        className="lg:font-medium text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                        href=""
                      >
                        BTC/TUSD
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        href=""
                      >
                        <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="12px"
                            width="12px"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $25,901.53
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    $10,952,560.94
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    --
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $1,031,031,182
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      -
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      2023-09-29 15:00:00
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $53,964,790.93
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      Recently
                    </p>
                  </td>
                </tr>
                <tr className="whitespace-nowrap hover:bg-slate-50">
                  <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                    <p
                      className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                      data-sensors-click="true"
                    >
                      10
                    </p>
                  </td>
                  <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                    <Link href="">
                      <div
                        data-sensors-click="true"
                        className="lg:box-border m-0 flex items-center overflow-hidden"
                      >
                        <img
                          className="lg:w-[24px] h-[24px] rounded-full"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                          <p
                            className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                            data-sensors-click="true"
                          >
                            Ethereum
                          </p>
                          <div data-nosnippet="true">
                            <div></div>
                            <p data-sensors-click="true"></p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                    <div className="flex lg:items-center leading-none text-[14px]">
                      <Link
                        className="lg:font-medium text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                        href=""
                      >
                        BTC/TUSD
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        href=""
                      >
                        <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="12px"
                            width="12px"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $25,901.53
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    $10,952,560.94
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    --
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $1,031,031,182
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      -
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      2023-09-29 15:00:00
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $53,964,790.93
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      Recently
                    </p>
                  </td>
                </tr>
                <tr className="whitespace-nowrap hover:bg-slate-50">
                  <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                    <p
                      className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                      data-sensors-click="true"
                    >
                      11
                    </p>
                  </td>
                  <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                    <Link href="">
                      <div
                        data-sensors-click="true"
                        className="lg:box-border m-0 flex items-center overflow-hidden"
                      >
                        <img
                          className="lg:w-[24px] h-[24px] rounded-full"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                          <p
                            className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                            data-sensors-click="true"
                          >
                            Ethereum
                          </p>
                          <div data-nosnippet="true">
                            <div></div>
                            <p data-sensors-click="true"></p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                    <div className="flex  lg:flex items-center leading-none text-[14px]">
                      <Link
                        className="lg:font-medium text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                        href=""
                      >
                        BTC/TUSD
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        href=""
                      >
                        <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="12px"
                            width="12px"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $25,901.53
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    $10,952,560.94
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                    --
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $1,031,031,182
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      -
                    </p>
                  </td>
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      2023-09-29 15:00:00
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      $53,964,790.93
                    </p>
                  </td>{" "}
                  <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                    <p
                      className="lg:leading-6 m-0 font-medium text-[14px]"
                      data-sensors-click="true"
                    >
                      Recently
                    </p>
                  </td>
                </tr>
                {showMore1 && (
                  <>
                    {" "}
                    <tr className="whitespace-nowrap hover:bg-slate-50">
                      <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                        <p
                          className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                          data-sensors-click="true"
                        >
                          12
                        </p>
                      </td>
                      <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                        <Link href="">
                          <div
                            data-sensors-click="true"
                            className="lg:box-border m-0 flex items-center overflow-hidden"
                          >
                            <img
                              className="lg:w-[24px] h-[24px] rounded-full"
                              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                              <p
                                className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                                data-sensors-click="true"
                              >
                                Ethereum
                              </p>
                              <div data-nosnippet="true">
                                <div></div>
                                <p data-sensors-click="true"></p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                        <div className="flex  lg:flex items-center leading-none text-[14px]">
                          <Link
                            className="lg:font-medium text-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                            href=""
                          >
                            BTC/TUSD
                          </Link>
                          <Link
                            target="_blank"
                            rel="noopener nofollow noreferrer"
                            href=""
                          >
                            <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="12px"
                                width="12px"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $25,901.53
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        $10,952,560.94
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        --
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $1,031,031,182
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          -
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          2023-09-29 15:00:00
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $53,964,790.93
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          Recently
                        </p>
                      </td>
                    </tr>
                    <tr className="whitespace-nowrap hover:bg-slate-50">
                      <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                        <p
                          className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                          data-sensors-click="true"
                        >
                          13
                        </p>
                      </td>
                      <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                        <Link href="">
                          <div
                            data-sensors-click="true"
                            className="lg:box-border m-0 flex items-center overflow-hidden"
                          >
                            <img
                              className="lg:w-[24px] h-[24px] rounded-full"
                              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                              <p
                                className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                                data-sensors-click="true"
                              >
                                Ethereum
                              </p>
                              <div data-nosnippet="true">
                                <div></div>
                                <p data-sensors-click="true"></p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                        <div className="flex lg:items-center leading-none text-[14px]">
                          <Link
                            className="lg:font-medium text-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                            href=""
                          >
                            BTC/TUSD
                          </Link>
                          <Link
                            target="_blank"
                            rel="noopener nofollow noreferrer"
                            href=""
                          >
                            <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="12px"
                                width="12px"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $25,901.53
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        $10,952,560.94
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        --
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $1,031,031,182
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          -
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          2023-09-29 15:00:00
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $53,964,790.93
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          Recently
                        </p>
                      </td>
                    </tr>
                    <tr className="whitespace-nowrap hover:bg-slate-50">
                      <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                        <p
                          className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                          data-sensors-click="true"
                        >
                          14
                        </p>
                      </td>
                      <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                        <Link href="">
                          <div
                            data-sensors-click="true"
                            className="lg:box-border m-0 flex items-center overflow-hidden"
                          >
                            <img
                              className="lg:w-[24px] h-[24px] rounded-full"
                              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                              <p
                                className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                                data-sensors-click="true"
                              >
                                Ethereum
                              </p>
                              <div data-nosnippet="true">
                                <div></div>
                                <p data-sensors-click="true"></p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                        <div className="flex lg:items-center leading-none text-[14px]">
                          <Link
                            className="lg:font-medium text-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                            href=""
                          >
                            BTC/TUSD
                          </Link>
                          <Link
                            target="_blank"
                            rel="noopener nofollow noreferrer"
                            href=""
                          >
                            <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="12px"
                                width="12px"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $25,901.53
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        $10,952,560.94
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        --
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $1,031,031,182
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          -
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          2023-09-29 15:00:00
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $53,964,790.93
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          Recently
                        </p>
                      </td>
                    </tr>
                    <tr className="whitespace-nowrap hover:bg-slate-50">
                      <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                        <p
                          className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                          data-sensors-click="true"
                        >
                          15
                        </p>
                      </td>
                      <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                        <Link href="">
                          <div
                            data-sensors-click="true"
                            className="lg:box-border m-0 flex items-center overflow-hidden"
                          >
                            <img
                              className="lg:w-[24px] h-[24px] rounded-full"
                              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                              <p
                                className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                                data-sensors-click="true"
                              >
                                Ethereum
                              </p>
                              <div data-nosnippet="true">
                                <div></div>
                                <p data-sensors-click="true"></p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                        <div className="flex lg:items-center leading-none text-[14px]">
                          <Link
                            className="lg:font-medium text-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                            href=""
                          >
                            BTC/TUSD
                          </Link>
                          <Link
                            target="_blank"
                            rel="noopener nofollow noreferrer"
                            href=""
                          >
                            <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="12px"
                                width="12px"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $25,901.53
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        $10,952,560.94
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        --
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $1,031,031,182
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          -
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          2023-09-29 15:00:00
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $53,964,790.93
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          Recently
                        </p>
                      </td>
                    </tr>
                    <tr className="whitespace-nowrap hover:bg-slate-50">
                      <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                        <p
                          className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                          data-sensors-click="true"
                        >
                          16
                        </p>
                      </td>
                      <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                        <Link href="">
                          <div
                            data-sensors-click="true"
                            className="lg:box-border m-0 flex items-center overflow-hidden"
                          >
                            <img
                              className="lg:w-[24px] h-[24px] rounded-full"
                              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                              <p
                                className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                                data-sensors-click="true"
                              >
                                Ethereum
                              </p>
                              <div data-nosnippet="true">
                                <div></div>
                                <p data-sensors-click="true"></p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                        <div className="flex lg:items-center leading-none text-[14px]">
                          <Link
                            className="lg:font-medium text-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                            href=""
                          >
                            BTC/TUSD
                          </Link>
                          <Link
                            target="_blank"
                            rel="noopener nofollow noreferrer"
                            href=""
                          >
                            <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="12px"
                                width="12px"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $25,901.53
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        $10,952,560.94
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        --
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $1,031,031,182
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          -
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          2023-09-29 15:00:00
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $53,964,790.93
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          Recently
                        </p>
                      </td>
                    </tr>
                    <tr className="whitespace-nowrap hover:bg-slate-50">
                      <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                        <p
                          className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                          data-sensors-click="true"
                        >
                          17
                        </p>
                      </td>
                      <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                        <Link href="">
                          <div
                            data-sensors-click="true"
                            className="lg:box-border m-0 flex items-center overflow-hidden"
                          >
                            <img
                              className="lg:w-[24px] h-[24px] rounded-full"
                              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                              <p
                                className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                                data-sensors-click="true"
                              >
                                Ethereum
                              </p>
                              <div data-nosnippet="true">
                                <div></div>
                                <p data-sensors-click="true"></p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                        <div className="flex lg:items-center leading-none text-[14px]">
                          <Link
                            className="lg:font-medium text-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                            href=""
                          >
                            BTC/TUSD
                          </Link>
                          <Link
                            target="_blank"
                            rel="noopener nofollow noreferrer"
                            href=""
                          >
                            <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="12px"
                                width="12px"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $25,901.53
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        $10,952,560.94
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        --
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $1,031,031,182
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          -
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          2023-09-29 15:00:00
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $53,964,790.93
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          Recently
                        </p>
                      </td>
                    </tr>
                    <tr className="whitespace-nowrap hover:bg-slate-50">
                      <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                        <p
                          className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                          data-sensors-click="true"
                        >
                          18
                        </p>
                      </td>
                      <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                        <Link href="">
                          <div
                            data-sensors-click="true"
                            className="lg:box-border m-0 flex items-center overflow-hidden"
                          >
                            <img
                              className="lg:w-[24px] h-[24px] rounded-full"
                              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                              <p
                                className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                                data-sensors-click="true"
                              >
                                Ethereum
                              </p>
                              <div data-nosnippet="true">
                                <div></div>
                                <p data-sensors-click="true"></p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                        <div className="flex lg: items-center leading-none text-[14px]">
                          <Link
                            className="lg:font-medium text-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                            href=""
                          >
                            BTC/TUSD
                          </Link>
                          <Link
                            target="_blank"
                            rel="noopener nofollow noreferrer"
                            href=""
                          >
                            <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="12px"
                                width="12px"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $25,901.53
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        $10,952,560.94
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        --
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $1,031,031,182
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          -
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          2023-09-29 15:00:00
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $53,964,790.93
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          Recently
                        </p>
                      </td>
                    </tr>
                    <tr className="whitespace-nowrap hover:bg-slate-50">
                      <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                        <p
                          className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                          data-sensors-click="true"
                        >
                          19
                        </p>
                      </td>
                      <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                        <Link href="">
                          <div
                            data-sensors-click="true"
                            className="lg:box-border m-0 flex items-center overflow-hidden"
                          >
                            <img
                              className="lg:w-[24px] h-[24px] rounded-full"
                              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                              <p
                                className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                                data-sensors-click="true"
                              >
                                Ethereum
                              </p>
                              <div data-nosnippet="true">
                                <div></div>
                                <p data-sensors-click="true"></p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                        <div className="flex lg:items-center leading-none text-[14px]">
                          <Link
                            className="lg:font-medium text-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                            href=""
                          >
                            BTC/TUSD
                          </Link>
                          <Link
                            target="_blank"
                            rel="noopener nofollow noreferrer"
                            href=""
                          >
                            <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="12px"
                                width="12px"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $25,901.53
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        $10,952,560.94
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        --
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $1,031,031,182
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          -
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          2023-09-29 15:00:00
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $53,964,790.93
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          Recently
                        </p>
                      </td>
                    </tr>
                    <tr className="whitespace-nowrap hover:bg-slate-50">
                      <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                        <p
                          className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                          data-sensors-click="true"
                        >
                          20
                        </p>
                      </td>
                      <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                        <Link href="">
                          <div
                            data-sensors-click="true"
                            className="lg:box-border m-0 flex items-center overflow-hidden"
                          >
                            <img
                              className="lg:w-[24px] h-[24px] rounded-full"
                              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                              <p
                                className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                                data-sensors-click="true"
                              >
                                Ethereum
                              </p>
                              <div data-nosnippet="true">
                                <div></div>
                                <p data-sensors-click="true"></p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                        <div className="flex  lg:flex items-center leading-none text-[14px]">
                          <Link
                            className="lg:font-medium text-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                            href=""
                          >
                            BTC/TUSD
                          </Link>
                          <Link
                            target="_blank"
                            rel="noopener nofollow noreferrer"
                            href=""
                          >
                            <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="12px"
                                width="12px"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $25,901.53
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        $10,952,560.94
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        --
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $1,031,031,182
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          -
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          2023-09-29 15:00:00
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $53,964,790.93
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          Recently
                        </p>
                      </td>
                    </tr>
                    <tr className="whitespace-nowrap hover:bg-slate-50">
                      <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                        <p
                          className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                          data-sensors-click="true"
                        >
                          21
                        </p>
                      </td>
                      <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                        <Link href="">
                          <div
                            data-sensors-click="true"
                            className="lg:box-border m-0 flex items-center overflow-hidden"
                          >
                            <img
                              className="lg:w-[24px] h-[24px] rounded-full"
                              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                              <p
                                className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                                data-sensors-click="true"
                              >
                                Ethereum
                              </p>
                              <div data-nosnippet="true">
                                <div></div>
                                <p data-sensors-click="true"></p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                        <div className="flex lg:items-center leading-none text-[14px]">
                          <Link
                            className="lg:font-medium text-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                            href=""
                          >
                            BTC/TUSD
                          </Link>
                          <Link
                            target="_blank"
                            rel="noopener nofollow noreferrer"
                            href=""
                          >
                            <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="12px"
                                width="12px"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $25,901.53
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        $10,952,560.94
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        --
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $1,031,031,182
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          -
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          2023-09-29 15:00:00
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $53,964,790.93
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          Recently
                        </p>
                      </td>
                    </tr>
                    <tr className="whitespace-nowrap hover:bg-slate-50">
                      <td className="sticky text-center left-0 bg-white z-20 lg:font-medium p-[4px] border-b border-table-divider-color">
                        <p
                          className="lg:text-base leading-6 m-0 text-gray-500 text-[14px]"
                          data-sensors-click="true"
                        >
                          22
                        </p>
                      </td>
                      <td className="sticky left-[38px] bg-white z-10 text-left font-medium p-4 border-b border-table-divider-color">
                        <Link href="">
                          <div
                            data-sensors-click="true"
                            className="lg:box-border m-0 flex items-center overflow-hidden"
                          >
                            <img
                              className="lg:w-[24px] h-[24px] rounded-full"
                              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="lg:flex flex-row items-center overflow-hidden box-border m-0">
                              <p
                                className="lg:text-black font-semibold m-0 ml-[5px] text-[14px] leading-6"
                                data-sensors-click="true"
                              >
                                Ethereum
                              </p>
                              <div data-nosnippet="true">
                                <div></div>
                                <p data-sensors-click="true"></p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="lg:text-left font-medium p-4 border-b border-table-divider-color">
                        <div className="flex  lg:flex items-center leading-none text-[14px]">
                          <Link
                            className="lg:font-medium text-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                            href=""
                          >
                            BTC/TUSD
                          </Link>
                          <Link
                            target="_blank"
                            rel="noopener nofollow noreferrer"
                            href=""
                          >
                            <div className="lg:box-border mt-[4px] ml-[4px] text-neutral-500 h-[16px] cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="12px"
                                width="12px"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $25,901.53
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        $10,952,560.94
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color leading-6 m-0 text-[14px]">
                        --
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $1,031,031,182
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          -
                        </p>
                      </td>
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          2023-09-29 15:00:00
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          $53,964,790.93
                        </p>
                      </td>{" "}
                      <td className="lg:text-right font-medium p-4 border-b border-table-divider-color">
                        <p
                          className="lg:leading-6 m-0 font-medium text-[14px]"
                          data-sensors-click="true"
                        >
                          Recently
                        </p>
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="px-5 lg:box-border mt-[8px]">
        <p className="lg:leading-1.5 m-0 text-gray-600 text-xs text-center">
          Miễn trách nhiệm: Trang này có thể chứa các liên kết. Market MMO có
          thể nhận được phần thưởng khi bạn truy cập vào bất kỳ liên kết nào và
          thực hiện một số hành động nhất định như đăng ký và giao dịch trên các
          nền tảng liên kết này. Vui lòng xem chi tiết trong phần{" "}
          <Link href="/affiliate-disclosure/" className="lg text-blue-700">
            Thông tin về liên kết
          </Link>
        </p>
      </div>
      <div className="px-5 lg:flex justify-center mx-auto mt-[24px] mb-[16px] gap-56">
        {!showMore1 && (
          <button
            className="w-full md:w-[100%] lg:w-[260px] h-auto leading-none whitespace-nowrap p-0  bg-slate-100 rounded-md py-[16px]"
            data-sensors-click="true"
            onClick={handleLoadMore1}
          >
            <span className="lg: font-semibold text-[14px] text-var(--text-color)">
              Xem thêm
            </span>
          </button>
        )}
        {showMore1 && (
          <button
            className="w-full md:w-[100%] lg:w-[260px] h-auto leading-none whitespace-nowrap p-0  bg-slate-100 rounded-md py-[16px]"
            data-sensors-click="true"
            onClick={handleHide1}
          >
            <span className="lg: font-semibold text-[14px] text-var(--text-color)">
              Ẩn bớt
            </span>
          </button>
        )}
      </div>
    </>
  );
}
