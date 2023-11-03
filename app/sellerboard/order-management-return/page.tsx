"use client";

import {
  faCamera,
  faLeaf,
  faMagnifyingGlass,
  faShieldAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { SetStateAction, useState } from "react";

export default function login() {
  const [activeTab, setActiveTab] = useState("all");
  const [checkedBox, setCheckedBox] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [boxes, setBoxes] = useState([
    { id: 1, text: "Tất cả", checked: true },
    {
      id: 2,
      text: "Đang chờ phê duyệt yêu cầu trả hàng và hoàn tiền",
      checked: false,
    },
    { id: 3, text: "Đang chờ chấp nhận kiện hàng trả lại ", checked: false },
    { id: 4, text: "Đang chờ phê duyệt yêu cầu chỉ hoàn tiền", checked: false },
    { id: 5, text: "Tải lên bằng chứng", checked: false },
  ]);

  const [successBoxes, setSuccessBoxes] = useState([
    { id: 1, text: "Cần quyết toán", checked: false },
    {
      id: 2,
      text: "Đã quyết toán",
      checked: false,
    },
  ]);

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const handleCheckedBox = () => {
    setCheckedBox(!checkedBox);
  };

  const handleBoxClick = (id: number) => {
    // Tạo một bản sao của mảng boxes để không thay đổi trực tiếp mảng gốc
    const updatedBoxes = boxes.map((box) => {
      if (box.id === id) {
        // Đảo trạng thái "checked" của ô đã chọn.
        return { ...box, checked: !box.checked };
      } else {
        return { ...box, checked: false };
      }
    });

    // Cập nhật trạng thái mới
    setBoxes(updatedBoxes);
  };

  const handleCheckedBoxSuccess = (id: number) => {
    const updatedBoxes = successBoxes.map((box) => {
      if (box.id === id) {
        // Đảo trạng thái "checked" của ô đã chọn.
        return { ...box, checked: !box.checked };
      } else {
        return { ...box, checked: false };
      }
    });

    setSuccessBoxes(updatedBoxes);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:max-w-7xl md:max-w-3xl md:m-auto max-w-xxs mx-auto">
      <section></section>
      <div className="lg:w-[calc(100%-220px)] lg:ml-[220px] lg:min-w-[1037px] flex  items-center flex-col h-full relative z-0 border-solid antialiased bg-[#00000] text-base overflow-overlay">
        <main className="flex flex-1 relative lg:w-[81%]  md:w-full">
          <div className="w-full">
            <div className="pb-4 min-h-full relative w-full">
              <div className="flex justify-between items-center my-4">
                <div className="flex flex-col justify-center">
                  <div className="flex flex-row items-center ">
                    <h2 className=" font-medium leading-9 lg:text-[28px]">
                      Quản lý đơn trả hàng/hoàn tiền
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <div className="z-1000">
                  <div>
                    <div className="p-4 bg-white rounded">
                      <div className="flex flex-col">
                        <div className="flex gap-x-12 flex-wrap gap-y-4 md:flex-nowrap">
                          <div
                            className={`flex flex-col items-center cursor-pointer px-6 ${activeTab === "all" ? "active" : ""
                              }`}
                            onClick={() => handleTabClick("all")}
                            data-target="all"
                          >
                            <div className="font-semibold relative lg:pb-[9px] text-base">
                              Tất cả
                            </div>
                            <div
                              className={`h-0.5 w-full bg-brand-normal rounded relative top-1 bg-primary transition-transform duration-300 ease-in-out origin-left transform ${activeTab === "all" ? "scale-x-1" : "scale-x-0"
                                }`}
                            ></div>
                          </div>
                          <div
                            className={`flex flex-col items-center cursor-pointer px-6 ${activeTab === "handle" ? "active" : ""
                              }`}
                            onClick={() => handleTabClick("handle")}
                            data-target="handle"
                          >
                            <div className="font-semibold relative lg:pb-[9px] text-base">
                              Đang chờ xử lý
                            </div>
                            <div
                              className={`h-0.5 w-full bg-brand-normal rounded relative top-1 bg-primary transition-transform duration-300 ease-in-out origin-left transform ${activeTab === "handle"
                                ? "scale-x-1"
                                : "scale-x-0"
                                }`}
                            ></div>
                          </div>
                          <div
                            className={`flex flex-col items-center cursor-pointer px-6 ${activeTab === "success" ? "active" : ""
                              }`}
                            onClick={() => handleTabClick("success")}
                            data-target="success"
                          >
                            <div className="font-semibold relative lg:pb-[9px] text-base">
                              Đã hoàn tất
                            </div>
                            <div
                              className={`h-0.5 w-full bg-brand-normal rounded relative top-1 bg-primary transition-transform duration-300 ease-in-out origin-left transform ${activeTab === "success"
                                ? "scale-x-1"
                                : "scale-x-0"
                                }`}
                            ></div>
                          </div>
                          <div
                            className={`flex flex-col items-center cursor-pointer px-6 ${activeTab === "closed" ? "active" : ""
                              }`}
                            onClick={() => handleTabClick("closed")}
                            data-target="closed"
                          >
                            <div className="font-semibold relative lg:pb-[9px] text-base">
                              Đã có tranh chấp
                            </div>
                            <div
                              className={`h-0.5 w-full bg-brand-normal rounded relative top-1 bg-primary transition-transform duration-300 ease-in-out origin-left transform ${activeTab === "closed"
                                ? "scale-x-1"
                                : "scale-x-0"
                                }`}
                            ></div>
                          </div>
                        </div>
                        <div className="h-0.5 bg-gray-line mb-4 mt-1 bg-black bg-opacity-10"></div>
                      </div>
                      <div className="" id="tab-content">
                        <div
                          className={` tab-pane ${activeTab === "all" ? "" : "hidden"
                            }`}
                          id="all"
                        >
                          <div className="flex flex-col border-solid gap-y-4">
                            <div className="border-solid gap-y-12 ">
                              <div className="flex boder-solid gap-x-2 flex-wrap md:flex-nowrap">
                                <div className="text-sm font-medium flex items-center flex-shrink-0 h-7">
                                  Nền tảng đã can thiệp
                                </div>
                                <div className="mx-2 inline-flex flex-wrap items-center">
                                  <div>
                                    <div
                                      className={`inline-flex items-center justify-center text-gray-500 h-7 py-1 px-2 font-medium text-sm border rounded cursor-pointer box-border leading-5 transition-all duration-100 ease-linear  ${checkedBox
                                        ? "border-primary text-primary bg-transparent"
                                        : ""
                                        }`}
                                      onClick={handleCheckedBox}
                                    >
                                      <span className="flex-1 mt-2 md:mt-0 overflow-hidden overflow-ellipsis whitespace-nowrap">
                                        <span className="flex items-center">
                                          Nền tảng đã tự động phê duyệt
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`border-solid gap-y-12 tab-pane ${activeTab === "success" ? "" : "hidden"
                            }`}
                          id="success"
                        >
                          <div className="flex flex-col border-solid gap-y-4">
                            <div className="border-solid gap-y-12 ">
                              <div className="flex boder-solid gap-x-2">
                                <div className="text-sm font-medium flex items-center flex-shrink-0 h-7">
                                  Trạng thái hoàn tiền
                                </div>
                                <div className="mx-2 inline-flex flex-wrap items-center">
                                  <div>
                                    {successBoxes.map((successBoxes) => (
                                      <div
                                        key={successBoxes.id}
                                        className={`mr-4 inline-flex items-center justify-center text-gray-500 h-7 py-1 px-2 font-medium text-sm border rounded cursor-pointer box-border leading-5 transition-all duration-100 ease-linear ${successBoxes.checked
                                          ? "border-primary text-primary bg-transparent"
                                          : ""
                                          }`}
                                        onClick={() =>
                                          handleCheckedBoxSuccess(
                                            successBoxes.id
                                          )
                                        }
                                      >
                                        <span className="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap">
                                          <span className="flex items-center">
                                            {successBoxes.text}
                                          </span>
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`border-solid gap-y-3 tab-pane ${activeTab === "handle" ? "" : "hidden"
                            }`}
                          id="handle"
                        >
                          <div className="flex flex-col border-solid gap-y-4">
                            <div className="border-solid gap-y-3 ">
                              <div className="flex boder-solid gap-x-2 mb-2">
                                <div className="text-sm font-medium flex items-center flex-shrink-0 h-7">
                                  Hành động
                                </div>
                                <div className="mx-2 inline-flex flex-wrap items-center">
                                  <div>
                                    {boxes.map((box) => (
                                      <div
                                        key={box.id}
                                        className={`mr-2 inline-flex items-center mb-2 justify-center text-gray-500 md:h-7 h-12 py-1 px-2 font-medium text-sm border rounded cursor-pointer box-border leading-5 transition-all duration-100 ease-linear ${box.checked
                                          ? "border-primary text-primary bg-transparent"
                                          : ""
                                          }`}
                                        onClick={() => handleBoxClick(box.id)}
                                      >
                                        <span className="flex-1 overflow-hidden overflow-ellipsis md:whitespace-nowrap">
                                          <span className="flex items-center">
                                            {box.text}
                                          </span>
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="flex boder-solid gap-x-2">
                                <div className="text-sm font-medium flex items-center flex-shrink-0 h-7">
                                  Khẩn cấp
                                </div>
                                <div className="mx-2 inline-flex flex-wrap items-center">
                                  <div>
                                    <div
                                      className={`inline-flex items-center justify-center text-gray-500 h-7 py-1 px-2 font-medium text-sm border rounded cursor-pointer box-border leading-5 transition-all duration-100 ease-linear  ${checkedBox
                                        ? "border-primary text-primary bg-transparent"
                                        : ""
                                        }`}
                                      onClick={handleCheckedBox}
                                    >
                                      <span className="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap">
                                        <span className="flex items-center">
                                          Phản hồi trong vòng 24h
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`border-solid gap-y-12 tab-pane ${activeTab === "closed" ? "" : "hidden"
                            }`}
                          id="closed"
                        >
                          <div className="flex boder-solid gap-x-2">
                            <div className="text-sm font-medium flex items-center flex-shrink-0 h-7">
                              Trạng thái tranh chấp
                            </div>
                            <div className="mx-2 inline-flex flex-wrap items-center ">
                              <div className="flex gap-y-2 flex-wrap">
                                {successBoxes.map((successBoxes) => (
                                  <div
                                    key={successBoxes.id}
                                    className={`mr-4 inline-flex items-center justify-center text-gray-500 h-7 py-1 px-2 font-medium text-sm border rounded cursor-pointer box-border leading-5 transition-all duration-100 ease-linear  ${successBoxes.checked
                                      ? "border-primary text-primary bg-transparent"
                                      : ""
                                      }`}
                                    onClick={() =>
                                      handleCheckedBoxSuccess(successBoxes.id)
                                    }
                                  >
                                    <span className="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap">
                                      <span className="flex items-center">
                                        {successBoxes.text}
                                      </span>
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                      <div>
                        <div className="flex items-center gap-x-2 relative flex-wrap md:flex-nowrap">
                          <div className="flex-1">
                            <div className="flex-1">
                              <div>
                                <div className="inline-block align-top w-full">
                                  <span className="table w-full h-full mt-4">
                                    <span className="bg-white border border-black-14 rounded box-border inline-flex  outline-none pl-3 pr-3 relative transition-color  linear transition-border  linear transition-bg-color duration-100 linear w-full  appearance-none">
                                      <input
                                        type="text"
                                        name=""
                                        className="bg-none border-none h-8 pl-0 pr-0 bg-white border border-black-14 rounded box-border  text-sm outline-none  relative transition-color  linear transition-border  linear transition-bg-color duration-100 linear w-full  appearance-none"
                                        id=""
                                        placeholder="Tìm kiếm ID đơn hàng trả lại, ID đơn hàng hoặc số theo dõi trả hàng"
                                      />
                                      <span className="border-l-1 pt-2 border-black-14 h-2.5 ml-1 pl-2 text-black-55 text-base items-center inline-flex h-full select-none whitespace-nowrap">
                                        <FontAwesomeIcon
                                          icon={faMagnifyingGlass}
                                          size="lg"
                                          color="#00000024"
                                        />
                                      </span>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div className="relative w-[255px] gap-x-2">
                                  <div className="py-2 px-3 h-9 items-center bg-white border border-black-14 rounded-4 box-border inline-flex leading-1.5715 pl-1 pr-[11px] py-1 relative transition-all duration-100 linear">
                                    <div className="inline-flex flex-1">
                                      <input
                                        type="date"
                                        placeholder="từ"
                                        name=""
                                        id=""
                                      />
                                    </div>
                                  </div>
                                </div> */}
                          <div className="">
                            <div className="inline-block">
                              <div className="cursor-pointer relative">
                                <div className="max-w-176 mt-4">
                                  <div className="relative inline-block text-left">
                                    <div>
                                      <button
                                        onClick={toggleMenu}
                                        className="inline-flex w-full justify-center h-9 gap-x-1.5 rounded bg-white p-2 pb-3 pr-3 text-sm font-semibold text-gray-500  border hover:bg-gray-50"
                                      >
                                        Sắp xếp theo
                                        <svg
                                          className="-mr-1 h-5 w-5 text-gray-400"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                          />
                                        </svg>
                                      </button>
                                    </div>

                                    {isOpen && (
                                      <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                          <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                          >
                                            Ngày
                                          </a>
                                          <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                          >
                                            Ngày
                                          </a>
                                        </div>
                                        <div className="py-1">
                                          <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                          >
                                            Tháng
                                          </a>
                                          <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                          >
                                            Tháng
                                          </a>
                                        </div>
                                        <div className="py-1">
                                          <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover-bg-gray-100"
                                          >
                                            Năm
                                          </a>
                                          <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                          >
                                            Năm
                                          </a>
                                        </div>
                                      </div>
                                    )}
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
              <div className="w-full lg:h-[58px] bg-white px-4 mt-2 pb-2 rounded flex justify-between items-center">
                <div className="flex gap-x-2 items-center">
                  <div className="flex gap-x-2 ">
                    <span className="font-semibold">0</span>
                    <span>Đơn hàng hủy đã được lọc</span>
                  </div>
                  <div>
                    <div className="flex gap-x-2">
                      <button className="rounded font-medium px-4 py-2 bg-gray-100 text-base hover:bg-gray-200">
                        Xuất đơn hàng
                      </button>
                      <button className="rounded font-medium px-4 py-2 bg-gray-100 text-base hover:bg-gray-200">
                        Lịch sử xuất
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <main>
                <div>
                  <div className="h-60 relative">
                    <table className="text-left border-collapse border-border-color text-indent-0 w-full">
                      <colgroup>
                        <col className="max-w-[30%] min-w-[30%] w-[30%]" />
                        <col className="max-w-[12%] min-w-[12%] w-[12%]" />
                        <col className="max-w-[15%] min-w-[15%] w-[15%]" />
                        <col className="max-w-[16%] min-w-[16%] w-[16%]" />
                        <col className="max-w-[12%] min-w-[12%] w-[12%]" />
                        <col className="max-w-[15%] min-w-[15%] w-[15%]" />
                      </colgroup>
                      <thead className="lg:h-[60px]">
                        <tr>
                          <th className="font-semibold pl-4 pr-3 text-xs text-gray-500">
                            ID đơn hàng hoàn trả
                          </th>
                          <th className="font-semibold pl-4 pr-3 text-xs text-gray-500">
                            ID đơn hàng
                          </th>
                          <th className="font-semibold pl-4 pr-3 text-xs text-gray-500">
                            Lý do hủy
                          </th>
                          <th className="font-semibold pl-4 pr-3 text-xs text-gray-500">
                            Tổng hoàn tiền
                          </th>
                          <th className="font-semibold pl-4 pr-3 text-xs text-gray-500">
                            Trạng thái
                          </th>
                          <th className="font-semibold pl-4 pr-3 text-xs text-gray-500">
                            Hành động
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="lg:h-[40px]">
                          <th className="font-semibold pl-4 pr-3 text-xs text-gray-500">
                            1
                          </th>
                          <th className="font-semibold pl-4 pr-3 text-xs text-gray-500">
                            1
                          </th>
                          <th className="font-semibold pl-4 pr-3 text-xs text-gray-500">
                            1
                          </th>
                          <th className="font-semibold pl-4 pr-3 text-xs text-gray-500">
                            1
                          </th>
                          <th className="font-semibold pl-4 pr-3 text-xs text-gray-500">
                            1
                          </th>
                          <th className="font-semibold pl-4 pr-3 text-xs text-gray-500">
                            1
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
