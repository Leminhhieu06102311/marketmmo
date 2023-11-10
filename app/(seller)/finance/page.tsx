"use client";

import { faChevronRight } from "@/node_modules/@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@/node_modules/@fortawesome/react-fontawesome/index";
import { useState } from "react";
import Heading from "../components/Heading";

export default function Finance() {
  const [activeTab, setActiveTab] = useState("all");
  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };
  return (
    <>
       <div className="justify-center">
            <Heading heading="Số tiền rút" isSupport={false} isBreakcrumb={false}/>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="md:mr-2 w-full md:w-1/2 ">
                <div className="rounded	flex flex-col justify-center bg-white md:h-[220px] p-6      bg-[#ffffff] ">
                  <div className="flex items-center">
                    <div className="text-base font-medium w-44">
                      Dữ Liệu Trực tiếp
                    </div>
                    <div className="mt-4 ml-1 text-xs text-gray-500">
                      <span className="text-neutral-text3 ">
                        Đã cập nhật dữ liệu vào ngày{" "}
                        <span className="font-semibold">
                          Th10 25, 2023 00:43 AM (GMT+07:00)
                        </span>{" "}
                      </span>
                    </div>
                  </div>

                  <div className=" flex justify-between items-center">
                    <div>
                      <div className="flex flex-row items-center font-semibold text-sm text-gray-500 text-neutral-text2">
                        Số tiền rút khả dụng{" "}
                      </div>
                      <div className="mt-4 flex flex-row">
                        <div className="flex space-x-48">
                          <div className="max-w-[148px]">
                            <div className="flex ">
                              <div className="mt-1 font-semibold text-xl mr-0.5 break-all">
                                0
                              </div>
                              <div className="mt-1.5 font-semibold text-base text-gray-500 underline">
                                đ
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="cursor-pointer rounded-lg px-6 py-3 text-base w-fit font-semibold bg-primary text-white bg-opacity-30">
                        Rút
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="t-8 text-xs font-regular text-neutral-text3 text-gray-500">
                      Bạn có thể rút tiền một lần sau mỗi 24 giờ
                    </div>
                    <div className="">
                      <span className="text-xs text-gray-500">
                        Hoặc, bật tự động rút tiền hàng tuần.{" "}
                        <span className="font-semibold text-brand-norma text-teal-500 cursor-pointer text-xs">
                          Cài đặt tự động rút tiền
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:mr-0 w-full md:w-1/2">
                <div className="rounded bg-white  p-6     bg-[#ffffff] md:h-[220px]">
                  <div className="text-p1-semibold font-medium text-neutral-text1 mb-2 ">
                    Tài khoản ngân hàng chính
                  </div>
                  <div className="px-8 py-7 w-full border-gray-7 border border-solid rounded">
                    <div className="flex justify-between items-center">
                      <img
                        className="w-16 h-12 "
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjUiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA2NSA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik00IDAuNUg2MUM2Mi45MzMgMC41IDY0LjUgMi4wNjcgNjQuNSA0VjQ0QzY0LjUgNDUuOTMzIDYyLjkzMyA0Ny41IDYxIDQ3LjVINEMyLjA2NyA0Ny41IDAuNSA0NS45MzMgMC41IDQ0VjRDMC41IDIuMDY3IDIuMDY3IDAuNSA0IDAuNVoiIGZpbGw9IndoaXRlIiBzdHJva2U9IndoaXRlIi8+CiAgICA8cmVjdCB4PSIxNyIgeT0iMzYiIHdpZHRoPSIyNCIgaGVpZ2h0PSIzMiIgcng9IjIiIHRyYW5zZm9ybT0icm90YXRlKC05MCAxNyAzNikiIGZpbGw9IiNEREUyRjAiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcgMThMNDkgMThWMjNMMTcgMjNWMThaIiBmaWxsPSIjOEY5NUIyIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQxLjg0NjUgMjguODYyM0w0OSAyOC44NjIzVjMxLjkyODFINDEuODQ2NVYyOC44NjIzWiIgZmlsbD0iIzhGOTVCMiIvPgo8L3N2Zz4K"
                        alt=""
                      />
                      <div className="flex-1.1 w-64	">
                        <div className="text-sm font-bold text-neutral-text1">
                          Số tài khoản ngân hàng
                        </div>
                        <div>
                          <div className="flex">
                            <span className=" text-justify text-sm text-gray-500 text-neutral-text3 mr-4">
                              Không có tài khoản ngân hàng chính nào được cung
                              cấp
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <p className="cursor-pointer text-xs text-teal-500 font-bold">
                          Quản lý tài khoản ngân hàng
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-4">
            <div className="mr-2 w-full">
              <div className="rounded	flex flex-col justify-center bg-white w-full h-full p-6   bg-[#ffffff] ">
                <div className="flex items-center">
                  <div className="text-xl font-medium w-44 mb-5">Lịch sử</div>
                </div>

                <div className="">
                  <div className="flex items-center gap-x-4 flex-row mb-4">
                    <div className="w-[486px]">
                      <div className="h-9 inline-block align-top w-full">
                        <input
                          type="text"
                          placeholder="Chọn ngày quyết toán"
                          name=""
                          id=""
                          className="pl-4 border rounded focus:outline-none h-[34px] text-xs flex items-center bg-white border border-black-14 rounded box-border text-black-92 font-normal text-base relative transition-color duration-100 linear transition-border duration-100 linear transition-bg-color duration-100 linear w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-x-7">
                    <div
                      className={`flex flex-col items-center cursor-pointer  ${
                        activeTab === "all" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("all")}
                      data-target="all"
                    >
                      <div className="font-semibold relative pb-[9px] text-base">
                        Tất cả
                      </div>
                      <div
                        className={`h-0.5 w-full bg-brand-normal rounded relative top-1 bg-primary transition-transform duration-300 ease-in-out origin-left transform ${
                          activeTab === "all" ? "scale-x-1" : "scale-x-0"
                        }`}
                      ></div>
                    </div>
                    <div
                      className={`flex flex-col items-center cursor-pointer  ${
                        activeTab === "withdraw_money" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("withdraw_money")}
                      data-target="withdraw_money"
                    >
                      <div className="font-semibold relative pb-[9px] text-base">
                        Số tiền rút
                      </div>
                      <div
                        className={`h-0.5 w-full bg-brand-normal rounded relative top-1 bg-primary transition-transform duration-300 ease-in-out origin-left transform ${
                          activeTab === "withdraw_money"
                            ? "scale-x-1"
                            : "scale-x-0"
                        }`}
                      ></div>
                    </div>
                    <div
                      className={`flex flex-col items-center cursor-pointer  ${
                        activeTab === "collect_money" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("collect_money")}
                      data-target="collect_money"
                    >
                      <div className="font-semibold relative pb-[9px] text-base">
                        Số tiền thu được
                      </div>
                      <div
                        className={`h-0.5 w-full bg-brand-normal rounded relative top-1 bg-primary transition-transform duration-300 ease-in-out origin-left transform ${
                          activeTab === "collect_money"
                            ? "scale-x-1"
                            : "scale-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className={`border-solid gap-y-12 tab-pane ${
                      activeTab === "all" ? "" : "hidden"
                    }`}
                    id="all"
                  >
                    <div className="box-border  pt-4 w-full">
                      <div className="h-auto flex-shrink-0 h-4  w-full">
                        <div className="relative">
                          <div className="border rounded ">
                            <div className=" w-full">
                              <div className="w-full overflow-x-auto overflow-y-hidden">
                                <table className="text-left border-collapse border-border-color w-full">
                                  <colgroup>
                                    <col
                                      style={{
                                        maxWidth: "120px",
                                        minWidth: "120px",
                                        width: "120px",
                                      }}
                                    />
                                    <col
                                      style={{
                                        maxWidth: "120px",
                                        minWidth: "120px",
                                        width: "120px",
                                      }}
                                    />
                                    <col
                                      style={{
                                        maxWidth: "400px",
                                        minWidth: "400px",
                                        width: "400px",
                                      }}
                                    />
                                    <col
                                      style={{
                                        maxWidth: "260px",
                                        minWidth: "260px",
                                        width: "260px",
                                      }}
                                    />
                                  </colgroup>
                                  <thead className="h-[40px] bg-gray-100">
                                    <tr>
                                      <th className="font-semibold pl-4 pr-3 text-sm">
                                        Thời gian
                                      </th>
                                      <th className="font-semibold pl-4 pr-3 text-sm">
                                        Số tiền
                                      </th>
                                      <th className="font-semibold pl-4 pr-3 text-sm">
                                        Trạng thái
                                      </th>
                                      <th className="font-semibold pl-4 pr-3 text-sm">
                                        Số tham chiếu
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="">
                                    <tr className="h-[35px]">
                                      <td className=" pl-4 pr-3 text-sm">1</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        100,000VND
                                      </td>
                                      <td className=" pl-4 pr-3 text-sm">ok</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        123
                                      </td>
                                    </tr>
                                    <tr className="h-[35px]">
                                      <td className=" pl-4 pr-3 text-sm">1</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        100,000VND
                                      </td>
                                      <td className=" pl-4 pr-3 text-sm">ok</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        123
                                      </td>
                                    </tr>{" "}
                                    <tr className="h-[35px]">
                                      <td className=" pl-4 pr-3 text-sm">1</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        100,000VND
                                      </td>
                                      <td className=" pl-4 pr-3 text-sm">ok</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        123
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`border-solid gap-y-12 tab-pane ${
                      activeTab === "withdraw_money" ? "" : "hidden"
                    }`}
                    id="withdraw_money"
                  >
                     <div className="box-border  pt-4 w-full">
                      <div className="h-auto flex-shrink-0 h-4  w-full">
                        <div className="relative">
                          <div className="border rounded ">
                            <div className=" w-full">
                              <div className="w-full overflow-x-auto overflow-y-hidden">
                                <table className="text-left border-collapse border-border-color w-full">
                                  <colgroup>
                                    <col
                                      style={{
                                        maxWidth: "120px",
                                        minWidth: "120px",
                                        width: "120px",
                                      }}
                                    />
                                    <col
                                      style={{
                                        maxWidth: "120px",
                                        minWidth: "120px",
                                        width: "120px",
                                      }}
                                    />
                                    <col
                                      style={{
                                        maxWidth: "400px",
                                        minWidth: "400px",
                                        width: "400px",
                                      }}
                                    />
                                    <col
                                      style={{
                                        maxWidth: "260px",
                                        minWidth: "260px",
                                        width: "260px",
                                      }}
                                    />
                                  </colgroup>
                                  <thead className="h-[40px] bg-gray-100">
                                    <tr>
                                      <th className="font-semibold pl-4 pr-3 text-sm">
                                        Thời gian
                                      </th>
                                      <th className="font-semibold pl-4 pr-3 text-sm">
                                        Số tiền
                                      </th>
                                      <th className="font-semibold pl-4 pr-3 text-sm">
                                        Trạng thái
                                      </th>
                                      <th className="font-semibold pl-4 pr-3 text-sm">
                                        Số tham chiếu
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="">
                                    <tr className="h-[35px]">
                                      <td className=" pl-4 pr-3 text-sm">1</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        100,000VND
                                      </td>
                                      <td className=" pl-4 pr-3 text-sm">ok</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        123
                                      </td>
                                    </tr>
                                    <tr className="h-[35px]">
                                      <td className=" pl-4 pr-3 text-sm">1</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        100,000VND
                                      </td>
                                      <td className=" pl-4 pr-3 text-sm">ok</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        123
                                      </td>
                                    </tr>{" "}
                                    <tr className="h-[35px]">
                                      <td className=" pl-4 pr-3 text-sm">1</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        100,000VND
                                      </td>
                                      <td className=" pl-4 pr-3 text-sm">ok</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        123
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`border-solid gap-y-12 tab-pane ${
                      activeTab === "collect_money" ? "" : "hidden"
                    }`}
                    id="collect_money"
                  >
                       <div className="box-border  pt-4 w-full">
                      <div className="h-auto flex-shrink-0 h-4  w-full">
                        <div className="relative">
                          <div className="border rounded ">
                            <div className=" w-full">
                              <div className="w-full overflow-x-auto overflow-y-hidden">
                                <table className="text-left border-collapse border-border-color w-full">
                                  <colgroup>
                                    <col
                                      style={{
                                        maxWidth: "120px",
                                        minWidth: "120px",
                                        width: "120px",
                                      }}
                                    />
                                    <col
                                      style={{
                                        maxWidth: "120px",
                                        minWidth: "120px",
                                        width: "120px",
                                      }}
                                    />
                                    <col
                                      style={{
                                        maxWidth: "400px",
                                        minWidth: "400px",
                                        width: "400px",
                                      }}
                                    />
                                    <col
                                      style={{
                                        maxWidth: "260px",
                                        minWidth: "260px",
                                        width: "260px",
                                      }}
                                    />
                                  </colgroup>
                                  <thead className="h-[40px] bg-gray-100">
                                    <tr>
                                      <th className="font-semibold pl-4 pr-3 text-sm">
                                        Thời gian
                                      </th>
                                      <th className="font-semibold pl-4 pr-3 text-sm">
                                        Số tiền
                                      </th>
                                      <th className="font-semibold pl-4 pr-3 text-sm">
                                        Trạng thái
                                      </th>
                                      <th className="font-semibold pl-4 pr-3 text-sm">
                                        Số tham chiếu
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="">
                                    <tr className="h-[35px]">
                                      <td className=" pl-4 pr-3 text-sm">1</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        100,000VND
                                      </td>
                                      <td className=" pl-4 pr-3 text-sm">ok</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        123
                                      </td>
                                    </tr>
                                    <tr className="h-[35px]">
                                      <td className=" pl-4 pr-3 text-sm">1</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        100,000VND
                                      </td>
                                      <td className=" pl-4 pr-3 text-sm">ok</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        123
                                      </td>
                                    </tr>{" "}
                                    <tr className="h-[35px]">
                                      <td className=" pl-4 pr-3 text-sm">1</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        100,000VND
                                      </td>
                                      <td className=" pl-4 pr-3 text-sm">ok</td>
                                      <td className=" pl-4 pr-3 text-sm">
                                        123
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
