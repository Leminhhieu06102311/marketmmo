import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineBlock, AiOutlineHistory } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { GoPackage } from "react-icons/go";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward, IoIosLogOut } from "react-icons/io";
import { IoPaperPlaneOutline, IoSettingsOutline } from "react-icons/io5";
import { TbArrowsExchange } from "react-icons/tb";
import Notification from "../Notification";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/userSlice";
import { hide, show } from "@/redux/notiSlice";
import { status } from "../Notification/Notification";
import Links from "@/interfaces/links";


export default function SideBarMenuMobile({links}: {links : Links[]}) {
  // const dispatch = useAppDispatch();
  const [subMenu, setSubMenu] = useState({
    status: false,
    name: "",
  });
  const { isNoti } = useAppSelector((state) => state.noti);
  // const hanldeLogout = () => {
  //   dispatch(logout());
  //   dispatch(show());
  //   setTimeout(() => {
  //     dispatch(hide());
  //   }, 3000);
  // };
  const Icons = [GoPackage, AiOutlineBlock, BiWorld];
  return (
    <div
      id="sidebar-menu-mobile"
      className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-s dark:bg-gray-800 dark:border-gray-700 "
      tabIndex={-1}
    >
      <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
        <h3 className="font-bold text-gray-800 dark:text-white">Danh mục</h3>
        <button
          type="button"
          className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          data-hs-overlay="#sidebar-menu-mobile"
        >
          <span className="sr-only">Close modal</span>
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      <div className="p-4 relative">
        <div className="block md:hidden ">
          <ul className="block gap-10 md:gap-x-4 gap-x-7">
            {links.map((link, index) => {
              const Icon = Icons[index];
              return (
                <li key={link.name}>
                  <div
                    className="font-semibold text-base  flex gap-3 justify-between items-center py-3"
                    onClick={() =>
                      setSubMenu({ status: true, name: link.name })
                    }
                  >
                    <div className="flex gap-2 items-center">
                      <Icon className="w-6 h-6" />
                      <span>{link.name}</span>
                    </div>
                    {link.sub_category && (
                      <IoIosArrowForward className="w-4 h-4" />
                    )}
                  </div>
                  {subMenu.status && subMenu.name === link.name ? (
                    <ul className="absolute top-0 right-0 bottom-0 left-0 bg-white ">
                      <div
                        className="flex gap-2 items-center p-2 py-4 border border-b-gray-200 border-t-0 border-r-0 border-l-0 cursor-pointer font-semibold"
                        onClick={() => setSubMenu({ status: false, name: "" })}
                      >
                        <IoIosArrowBack className="w-5 h-5" />
                        <span>{link.name}</span>
                      </div>
                      <ul className="px-4 ">
                        {link.sub_category?.map((item) => (
                          <li
                            key={item.name}
                            className="font-semibold text-base py-3 mt-3"
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </ul>
                  ) : (
                    <></>
                  )}
                </li>
              );
            })}
            <span className="block w-full h-[2px] my-2 bg-gray-100"></span>

            <li className="font-semibold text-base  flex gap-3  items-center py-3">
              <HiOutlineUserCircle className="w-6 h-6" />
              <span className="font-semibold block">Trang cá nhân</span>
            </li>
            <li className="font-semibold text-base  flex gap-3  items-center py-3">
              <IoPaperPlaneOutline className="w-6 h-6" />
              <span className="font-semibold block">Đơn hàng đã mua</span>
            </li>
            <li className="font-semibold text-base  flex gap-3  items-center py-3">
              <AiOutlineHistory className="w-6 h-6" />
              <span className="font-semibold block">Lịch sử giao dịch</span>
            </li>
            <li>
              <Link
                className="font-semibold text-base  flex gap-3  items-center py-3"
                href="/recover/change-password"
              >
                <TbArrowsExchange className="w-6 h-6" />
                <span className="font-semibold block">Đổi mật khẩu</span>
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-base  flex gap-3  items-center py-3"
                href="/settings"
              >
                <IoSettingsOutline className="w-6 h-6" />
                <span className="font-semibold block">Cài đặt</span>
              </Link>
            </li>
            <li
              className="font-semibold text-base  flex gap-3  items-center py-3"
              // onClick={() => hanldeLogout()}
            >
              <IoIosLogOut className="w-6 h-6" />
              <span className="font-semibold block">Đăng suất</span>
              {isNoti ?? (
                <Notification
                  message="Đăng suất thành công"
                  status={status.success}
                />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
