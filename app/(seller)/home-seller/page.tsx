"use client";

import { useEffect, useRef, useState } from "react";
import { AiOutlineRise } from 'react-icons/ai';

import ApexChart from '../components/ApexChartComponent';
import BarChart from '../components/BarChart';

export default function homeSeller() {


    return (
        <div>
            <div className="lg:w-full lg:min-w-[1037px] flex  items-center flex-col h-full relative z-0 border-solid antialiased  text-base overflow-overlay">
                <main className="flex flex-1 relative lg:w-[100%] w-full mt-5 ">
                    <div className="w-full">
                        <h2 className="text-xl font-medium">Trang chủ</h2>
                        <div className="mt-4">
                            <div className="flex gap-x-7">
                                <div className="rounded-2xl w-[22%] h-[120px] bg-sky-100 flex flex-col items-center justify-center ">
                                    <div className="flex flex-col gap-y-4 ">
                                        <div className="font-semibold text-base">
                                            <p>Doanh Thu</p>
                                        </div>
                                        <div className="flex gap-x-7">
                                            <div className="text-2xl font-semibold">
                                                <p className="">110.112k</p>
                                            </div>
                                            <div className="text-green-500 text-sm flex items-end ">
                                                <p className="flex items-center ">+10.01% <AiOutlineRise className="text-[18px]" /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-2xl w-[22%] h-[120px] bg-slate-200 flex flex-col items-center justify-center ">
                                    <div className="flex flex-col gap-y-4 ">
                                        <div className="font-semibold text-base">
                                            <p>Lợi Nhuận</p>
                                        </div>
                                        <div className="flex gap-x-7">
                                            <div className="text-2xl font-semibold">
                                                <p className="">12.098k</p>
                                            </div>
                                            <div className="text-green-500 text-sm flex items-end ">
                                                <p className="flex items-center ">+10.01% <AiOutlineRise className="text-[18px]" /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-2xl w-[22%] h-[120px] bg-sky-100 flex flex-col items-center justify-center ">
                                    <div className="flex flex-col gap-y-4 ">
                                        <div className="font-semibold text-base">
                                            <p>Tổng số lượng đơn hàng</p>
                                        </div>
                                        <div className="flex gap-x-7">
                                            <div className="text-2xl font-semibold">
                                                <p className="">50000</p>
                                            </div>
                                            <div className="text-green-500 text-sm flex items-end ">
                                                <p className="flex items-center ">+10.01% <AiOutlineRise className="text-[18px]" /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ApexChart />
                    </div>
                </main>
            </div>
        </div>
    )
}