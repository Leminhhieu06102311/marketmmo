"use client";
import { BiSearch } from "react-icons/bi";
import {
  AiOutlineHistory,
  AiOutlineLogin,
} from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoPaperPlaneOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { TbArrowsExchange } from "react-icons/tb";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { useEffect } from "react";
import CartModal from "../Cart/CartModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Notification from "../Notification";
import { status } from "../Notification/Notification";
import SideBarMenuMobile from "./SideBarMenuMobile";
import Links from "@/interfaces/links";
const links : Links[] = [
  {
    name: "Sản phẩm",
    sub_category: [
      {
        name: "Tài khoản",
      },
      {
        name: "Phần mềm",
      },
      {
        name: "Blockchain",
      },
    ],
  },
  {
    name: "Dịch vụ",
    sub_category: [
      {
        name: "Hỗ trợ bật kiếm tiền X (Twitter)",
      },
      {
        name: "Tăng tương tác mạng xã hội",
      },
    ],
  },
  {
    name: "Cộng đồng",
  },
];
export default function Header() {
  const {isNoti} = useAppSelector((state) => state.noti)
  const dispatch = useAppDispatch();
  const {access_token} = useAppSelector((state) => state.cookie)
  console.log(access_token)
  const hanldeLogout = () => {
    
  };

  useEffect(() => {
    import("preline");
  }, []);
  return (
    <>
      
      <div className="flex justify-between mx-auto items-center max-w-xxs py-3 md:max-w-3xl  md:py-4 lg:max-w-full lg:py-4 lg:px-10">
        <div className="flex md:gap-x-2 lg:gap-x-5">
          <Link href="/">
            <h2 className="font-bold text-xl">Market MMO</h2>
          </Link>
          <div className="hidden md:flex items-center">
            <span className="h-8 w-[1px] bg-[#eff2f5] mx-2"></span>
          </div>
          <div className="hidden md:flex lg:flex items-center ">
            <ul className="flex md:gap-x-4 gap-x-7">
              <li className="font-semibold text-base relative group">
                Sản phẩm
                <ul className="absolute w-60 p-2  bg-white  z-10 top-10 rounded-lg shadow-modal after:content-[''] after:w-full after:absolute after:h-[50px] after:bg-transparent after:top-[-30px] hidden group-hover:block ">
                  <li className="flex gap-4 px-4 py-3 items-center  hover:bg-[#1212120a] rounded-md transition-all cursor-pointer">
                    <span className="font-medium block">Tài khoản</span>
                  </li>
                  <li className="flex gap-4 px-4 py-3 items-center  hover:bg-[#1212120a] rounded-md transition-all cursor-pointer">
                    <span className="font-medium block">Phầm mềm</span>
                  </li>
                  <li className="flex gap-4 px-4 py-3 items-center  hover:bg-[#1212120a] rounded-md transition-all cursor-pointer">
                    <span className="font-medium block">Blockchain</span>
                  </li>
                </ul>
              </li>
              <li className="font-semibold text-base">Dịch vụ</li>
              <li className="font-semibold text-base">Cộng đồng</li>
            </ul>
          </div>
        </div>
        <div className="md:hidden lg:flex xl:flex items-center bg-[#1212120a] rounded-xl px-3 hidden hover:bg-[#12121214] transition-all">
          <BiSearch className="text-[#121212] w-5 h-5" />
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="pl-2 bg-transparent text-base py-3 outline-none md:w-36 lg:w-52 xl:w-96 "
          />
          <div className="px-2 py-1 bg-[#12121214] rounded-md text-xs">/</div>
        </div>
        <div className=" flex lg:flex gap-5">
          <div className=" lg:flex ">
            <div className="flex gap-2 md:gap-2 items-center">
              {!access_token && (
                <Link
                  href="/login"
                  className="bg-[#1212120a] hidden  rounded-xl px-4 hover:bg-[#12121214] transition-all py-2 md:py-3 text-[#121212] md:flex items-center gap-2"
                >
                  <AiOutlineLogin className="w-5 h-5" /> <span className="font-semibold">Đăng nhập</span>
                </Link>
              )}
              <button className=" group hidden md:block bg-[#1212120a] rounded-xl px-4 hover:bg-[#12121214] transition-all py-3 text-[#121212] relative">
                <HiOutlineUserCircle className="w-5 h-5" />
                <ul className="group-hover:block absolute w-60 p-2 hidden bg-white right-0 z-10 top-14 rounded-lg shadow-modal before:absolute before:w-full before:h-6 before:bg-transparent before:right-0 before:-top-3  ">
                  <li className="flex gap-4 px-4 py-3 items-center  hover:bg-[#1212120a] rounded-md transition-all cursor-pointer">
                    <HiOutlineUserCircle className="w-5 h-5" />
                    <span className="font-medium block">Trang cá nhân</span>
                  </li>
                  <li className="flex gap-4 px-4 py-3 items-center  hover:bg-[#1212120a] rounded-md transition-all cursor-pointer">
                    <IoPaperPlaneOutline className="w-5 h-5" />
                    <span className="font-medium block">Đơn hàng đã mua</span>
                  </li>
                  <span className="block w-full h-[2px] my-2 bg-gray-100"></span>
                  <li className="flex gap-4 px-4 py-3 items-center  hover:bg-[#1212120a] rounded-md transition-all cursor-pointer">
                    <AiOutlineHistory className="w-5 h-5" />
                    <span className="font-medium block">Lịch sử giao dịch</span>
                  </li>
                  <li>
                    <Link
                      className="flex gap-4 px-4 py-3 items-center  hover:bg-[#1212120a] rounded-md transition-all cursor-pointer"
                      href="/recover/change-password"
                    >
                      <TbArrowsExchange className="w-5 h-5" />
                      <span className="font-medium block">Đổi mật khẩu</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex gap-4 px-4 py-3 items-center  hover:bg-[#1212120a] rounded-md transition-all cursor-pointer"
                      href="/settings"
                    >
                      <IoSettingsOutline className="w-5 h-5" />
                      <span className="font-medium block">Cài đặt</span>
                    </Link>
                  </li>
                  <li
                    className="flex gap-4 px-4 py-3 items-center  hover:bg-[#1212120a] rounded-md transition-all cursor-pointer"
                    onClick={() => hanldeLogout()}
                  >
                    <IoIosLogOut className="w-5 h-5" />
                    <span className="font-medium block">Đăng suất</span>
                    {isNoti ?? (
                      <Notification
                        message="Đăng suất thành công"
                        status={status.success}
                      />
                    )}
                  </li>
                </ul>
              </button>
              {/* start responsive mobile */}
              <button className="bg-[#1212120a]  rounded-xl px-4 hover:bg-[#12121214] transition-all py-2 md:py-3 text-[#121212] md:flex items-center gap-2 flex lg:hidden">
                <BiSearch className="w-5 h-5" />
              </button>
              <button
                className="bg-[#1212120a]  rounded-xl px-4 hover:bg-[#12121214] transition-all py-2 md:py-3 text-[#121212] md:hidden items-center gap-2 flex"
                data-hs-overlay="#sidebar-menu-mobile"
              >
                <HiBars3 className="h-5 w-5" />
              </button>
              {/* end  responsive mobile */}
              <button
                className="bg-[#1212120a] hidden md:block rounded-xl px-4 hover:bg-[#12121214] transition-all py-3 text-[#121212]"
                data-hs-overlay="#cart-modal"
              >
                <BsCart3 className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#eff2f5]"></div>
      <CartModal />
      {/* Modal mobile */}
      <SideBarMenuMobile links={links} />
    </>
  );
}
