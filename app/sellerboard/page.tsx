"use client";

import { useEffect, useRef, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { MdEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { faker } from "@faker-js/faker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
const generateFakeData = (dataPoints: number) => {
  const data = [];
  for (let i = 0; i < dataPoints; i++) {
    data.push({
      date: `Date ${i + 1}`,
      value1: faker.datatype.number({ min: 0, max: 1000 }),
      value2: faker.datatype.number({ min: 0, max: 1000 }),
    });
  }
  return data;
};

export default function DashboardSeller() {
  const [chartData, setChartData] = useState(generateFakeData(10));
  const [dataFormat, setDataFormat] = useState("ngày");
  const [isOpen, setIsOpen] = useState(false);

  const regenerateData = () => {
    const newData = generateFakeData(10);
    setChartData(newData);
  };

  const handleDataFormatChange = (format: string) => {
    setDataFormat(format);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getXAxisLabel = (format: string) => {
    switch (format) {
      case "ngày":
        return "Ngày";
      case "tuần":
        return "Tuần";
      case "tháng":
        return "Tháng";
      case "năm":
        return "Năm";
      default:
        return "Ngày";
    }
  };

  return (
    <div>
      <div className="lg:w-[calc(100%-220px)] lg:ml-[220px] lg:min-w-[1037px] flex  items-center flex-col h-full relative z-0 border-solid antialiased bg-[#00000] text-base overflow-overlay">
        <main className="flex flex-1 relative lg:w-[81%] mt-5 md:w-full">
          <div className="w-full">
            <div>
              <div className="pb-4 min-h-full relative gap-x-4 flex">
                <div className="w-3/5 bg-white ">
                  <div className="flex justify-between mb-2">
                    <div
                      className="font-semibold ml-8"
                      onClick={regenerateData}
                    >
                      Tổng quan doanh số bán hàng{" "}
                    </div>
                    <div className="">
                      <div>
                        <button
                          onClick={toggleMenu}
                          className="inline-flex text-sm justify-center h-9 gap-x-1.5 rounded bg-white p-2 pb-3 pr-3 text-sm font-semibold text-gray-500  border hover:bg-gray-50"
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
                        <div className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <button
                              onClick={() => handleDataFormatChange("ngày")}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Ngày
                            </button>
                            <button
                              onClick={() => handleDataFormatChange("tuần")}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Tuần
                            </button>
                          </div>
                          <div className="py-1">
                            <a
                              onClick={() => handleDataFormatChange("tháng")}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Tháng
                            </a>
                            <a
                              onClick={() => handleDataFormatChange("năm")}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Năm
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                      <XAxis dataKey="ngày" name={getXAxisLabel(dataFormat)} />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="value1"
                        name="Dữ Liệu 1"
                        stroke="#8884d8"
                      />
                      <Line
                        type="monotone"
                        dataKey="value2"
                        name="Dữ Liệu 2"
                        stroke="#82ca9d"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="w-2/5 flex flex-wrap gap-x-2">
                  <div className="w-[48%] h-[150px] relative border-2 rounded-xl flex flex-col pl-4 pt-2 gap-y-2">
                    <div className="text-primary border rounded-2xl w-[50px] flex justify-center h-[50px] items-center       bg-slate-200">
                      <FontAwesomeIcon icon={faSackDollar} size="xl" />
                    </div>
                    <div className="  text-zinc-600 text-xs font-normal font-['Product Sans'] tracking-tight">
                      Tổng doanh thu
                    </div>
                    <div className=" text-black text-[22.40px] font-bold font-['Product Sans'] tracking-tight">
                      $108,560.93
                    </div>
                    <div className="w-full h-[13px]  flex">
                      <div className="text-primary text-[10.38px] font-normal font-['Product Sans'] tracking-tight">
                        <FontAwesomeIcon icon={faArrowTrendUp} /> 13.02%
                      </div>
                      <div className="text-zinc-600 text-[10.38px] font-normal font-['Product Sans'] tracking-tight">
                        From May
                      </div>
                      <div className="w-[11.12px] h-[6.89px] left-0 top-[2.97px] "></div>
                    </div>
                  </div>
                  <div className="w-[48%] h-[150px] relative border rounded-xl flex flex-col pl-4 pt-2 gap-y-2">
                    <div className="text-primary border rounded-2xl w-[50px] flex justify-center h-[50px] items-center       bg-slate-200">
                      <FontAwesomeIcon icon={faSackDollar} size="xl" />
                    </div>
                    <div className="  text-zinc-600 text-xs font-normal font-['Product Sans'] tracking-tight">
                      Tổng doanh thu
                    </div>
                    <div className=" text-black text-[22.40px] font-bold font-['Product Sans'] tracking-tight">
                      $108,560.93
                    </div>
                    <div className="w-full h-[13px]  flex">
                      <div className="text-primary text-[10.38px] font-normal font-['Product Sans'] tracking-tight">
                        <FontAwesomeIcon icon={faArrowTrendUp} /> 13.02%
                      </div>
                      <div className="text-zinc-600 text-[10.38px] font-normal font-['Product Sans'] tracking-tight">
                        From May
                      </div>
                      <div className="w-[11.12px] h-[6.89px] left-0 top-[2.97px] "></div>
                    </div>
                  </div>
                  <div className="w-[48%] h-[150px] relative border rounded-xl flex flex-col pl-4 pt-2 gap-y-2">
                    <div className="text-primary border rounded-2xl w-[50px] flex justify-center h-[50px] items-center       bg-slate-200">
                      <FontAwesomeIcon icon={faSackDollar} size="xl" />
                    </div>
                    <div className="  text-zinc-600 text-xs font-normal font-['Product Sans'] tracking-tight">
                      Tổng doanh thu
                    </div>
                    <div className=" text-black text-[22.40px] font-bold font-['Product Sans'] tracking-tight">
                      $108,560.93
                    </div>
                    <div className="w-full h-[13px]  flex">
                      <div className="text-primary text-[10.38px] font-normal font-['Product Sans'] tracking-tight">
                        <FontAwesomeIcon icon={faArrowTrendUp} /> 13.02%
                      </div>
                      <div className="text-zinc-600 text-[10.38px] font-normal font-['Product Sans'] tracking-tight">
                        From May
                      </div>
                      <div className="w-[11.12px] h-[6.89px] left-0 top-[2.97px] "></div>
                    </div>
                  </div>
                  <div className="w-[48%] h-[150px] relative border rounded-xl flex flex-col pl-4 pt-2 gap-y-2">
                    <div className="text-primary border rounded-2xl w-[50px] flex justify-center h-[50px] items-center       bg-slate-200">
                      <FontAwesomeIcon icon={faSackDollar} size="xl" />
                    </div>
                    <div className="  text-zinc-600 text-xs font-normal font-['Product Sans'] tracking-tight">
                      Tổng doanh thu
                    </div>
                    <div className=" text-black text-[22.40px] font-bold font-['Product Sans'] tracking-tight">
                      $108,560.93
                    </div>
                    <div className="w-full h-[13px]  flex">
                      <div className="text-primary text-[10.38px] font-normal font-['Product Sans'] tracking-tight">
                        <FontAwesomeIcon icon={faArrowTrendUp} /> 13.02%
                      </div>
                      <div className="text-zinc-600 text-[10.38px] font-normal font-['Product Sans'] tracking-tight">
                        From May
                      </div>
                      <div className="w-[11.12px] h-[6.89px] left-0 top-[2.97px] "></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" relative  flex gap-x-2 mb-2">
                <div className="w-4/5 border-2 rounded-lg">
                  <table className="text-left border-collapse border-border-color pb-4 text-indent-0 w-full">
                    <colgroup>
                      <col className="max-w-[55%] min-w-[55%] w-[55%]" />
                      <col className="max-w-[15%] min-w-[15%] w-[15%]" />
                      <col className="max-w-[15%] min-w-[15%] w-[15%]" />
                      <col className="max-w-[15%] min-w-[15%] w-[15%]" />
                    </colgroup>
                    <thead className="lg:h-[60px]">
                      <tr>
                        <th className="pl-4 text-sm">Sản phẩm đang bán </th>
                      </tr>
                      <tr>
                        <th className="font-semibold pl-4 pr-3 text-xs text-gray-500">
                          Tên sản phẩm
                        </th>
                        <th className="font-semibold pl-4 pr-3 text-xs text-gray-500">
                          Giá
                        </th>
                        <th className="font-semibold pl-4 pr-3 text-xs text-gray-500">
                          Đã bán
                        </th>
                        <th className="font-semibold pl-4 pr-3 text-xs text-gray-500">
                          Trạng thái
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="lg:h-[40px]">
                        <th className="font-semibold pl-4 flex gap-x-2 items-center pr-3 text-xs ">
                          <AiFillTwitterCircle className="text-[33px] text-primary" /> 5000 tài khoản Twitter
                        </th>
                        <th className="font-semibold pl-4 pr-3 text-xs ">
                          500.000vnđ
                        </th>
                        <th className="font-semibold pl-4 pr-3 text-xs ">
                          15
                        </th>
                        <th className="font-semibold pl-4 pr-3 text-xs flex gap-x-2 items-center ">
                          <div className="flex gap-x-2 items-center">
                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full" /> Còn hàng
                          </div>
                        </th>
                      </tr>
                      <tr className="lg:h-[40px]">
                        <th className="font-semibold pl-4 flex gap-x-2 items-center pr-3 text-xs ">
                          <AiFillTwitterCircle className="text-[33px] text-primary" /> 100 tài khoản Twitter
                        </th>
                        <th className="font-semibold pl-4 pr-3 text-xs ">
                          500.000vnđ
                        </th>
                        <th className="font-semibold pl-4 pr-3 text-xs ">
                          100
                        </th>
                        <th className="font-semibold pl-4 pr-3 w-full h-full text-xs  ">
                          <div className="flex gap-x-2 items-center">
                            <div className="w-2.5 h-2.5 bg-red-500 rounded-full" /> Hết hàng
                          </div>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="w-1/5 border-2 rounded-lg pl-4 pt-4 pb-4">
                  <div className="text-sm font-semibold pb-4">Loại sản phẩm bán chạy</div>
                  <div className="flex flex-col gap-y-2">
                    <div className="text-sm font-normal flex items-center gap-x-4">
                      <span className="font-semibold">
                        1
                      </span>
                      <span className=" flex gap-x-2 items-center">
                        <MdEmail className="text-red-500 text-[25px]" /> Email
                      </span>
                    </div>
                    <div className="text-sm font-normal flex items-center gap-x-4">
                      <span className="font-semibold">
                        2
                      </span>
                      <span className=" flex gap-x-2 items-center">
                        <BsFacebook className="text-primary text-[25px]" /> FaceBook
                      </span>
                    </div>
                    <div className="text-sm font-normal flex items-center gap-x-4">
                      <span className="font-semibold">
                        3
                      </span>
                      <span className=" flex gap-x-2 items-center">
                        <AiFillTwitterCircle className="text-primary text-[28px]" /> Twitter
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
