"use client";
import {
  faMagnifyingGlass,
  faEnvelope,
  faFileInvoice,
  faBookmark,
  faWallet,
  faUser,
  faCircleUser,
  faCartShopping,
  faPaperPlane,
  faGear,
  faClockRotateLeft,
  faArrowRightFromBracket,
  faArrowRightArrowLeft,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect } from "react";
import CartModal from "../Cart/CartModal";

export default function Header() {
  useEffect(() => {
    import('preline')
  }, [])
  return (
    <>
      <div className=" bg-primary hidden md:block mx-auto md:py-1 lg:flex lg:py-2 lg:px-5 lg:justify-center">
        <div className="flex items-center justify-center md:max-w-3xl mx-auto lg:max-w-7xl ">
          <p className=" text-base text-center text-white font-medium py-2">
            Dịch vụ giao dịch trung gian mới nhất{" "}
            {/* <span className="hidden md:inline lg:inline">
              giúp mọi giao dich của bạn được hoàn thành một cách suôn sẻ nhất
            </span>{" "} */}
            🎉
          </p>
          <Link
            href="/intermediary"
            className="ml-2 font-semibold underline duration-150 hover:text-indigo-100 inline-flex items-center gap-x-1 text-primary text-base"
          >
            <span className="font-bold text-white underline text-base">
              Bắt đầu ngay
            </span>
          </Link>
        </div>
      </div>
      <div className="flex justify-between mx-auto items-center max-w-xxs py-3 md:max-w-3xl  md:py-4 lg:max-w-full lg:py-4 lg:px-10 ">
        <div className="flex md:gap-x-2 lg:gap-x-5 ">
          <div>
            <h2 className="font-bold text-xl">Market MMO</h2>
          </div>
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
        <div className="md:hidden lg:flex items-center bg-[#1212120a] rounded-xl px-3 hidden hover:bg-[#12121214] transition-all">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              width={15}
              height={15}
              className="text-[#121212]"
            />
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="pl-2 bg-transparent text-base py-3 outline-none w-96"
            />
            <div className="px-2 py-1 bg-[#12121214] rounded-md text-xs">
              /
            </div>
        </div>
        <div className=" flex lg:flex gap-5">
          <div className=" lg:flex ">
            <div className="flex gap-2 items-center">
              <button className="bg-[#1212120a] hidden rounded-xl px-4 hover:bg-[#12121214] transition-all py-2 md:py-3 text-[#121212] md:flex items-center gap-2">
              <FontAwesomeIcon icon={faWallet} /> Đăng nhập
              </button>
              <button className=" group hidden md:block bg-[#1212120a] rounded-xl px-4 hover:bg-[#12121214] transition-all py-3 text-[#121212] relative">
                <FontAwesomeIcon icon={faCircleUser} />
                <ul className="group-hover:block absolute w-60 p-2 hidden bg-white right-0 z-10 top-14 rounded-lg shadow-modal before:absolute before:w-full before:h-4 before:bg-transparent before:right-0 before:-top-2  ">

                  <li className="flex gap-4 px-4 py-3 items-center  hover:bg-[#1212120a] rounded-md transition-all cursor-pointer">
                  <FontAwesomeIcon icon={faUser} />
                  <span className="font-medium block">Trang cá nhân</span>
                  </li>
                  <li className="flex gap-4 px-4 py-3 items-center  hover:bg-[#1212120a] rounded-md transition-all cursor-pointer">
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <span className="font-medium block">Đơn hàng đã mua</span>
                  </li>
                  <span className="block w-full h-[2px] my-2 bg-gray-100"></span>
                  <li className="flex gap-4 px-4 py-3 items-center  hover:bg-[#1212120a] rounded-md transition-all cursor-pointer">
                  <FontAwesomeIcon icon={faClockRotateLeft} />
                  <span className="font-medium block">Lịch sử giao dịch</span>
                  </li>
                  <li className="flex gap-4 px-4 py-3 items-center  hover:bg-[#1212120a] rounded-md transition-all cursor-pointer">
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                  <span className="font-medium block">Đổi mật khẩu</span>
                  </li>
                  <li className="flex gap-4 px-4 py-3 items-center  hover:bg-[#1212120a] rounded-md transition-all cursor-pointer">
                  <FontAwesomeIcon icon={faGear} />
                  <span className="font-medium block">Cài đặt</span>
                  </li>
                  <li className="flex gap-4 px-4 py-3 items-center  hover:bg-[#1212120a] rounded-md transition-all cursor-pointer">
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  <span className="font-medium block">Đăng suất</span>
                  </li>
                </ul>
              </button>
              {/* start responsive mobile */}
              <button className=" rounded-xl px-2 transition-all md:py-3 text-[#121212] flex items-center gap-2 md:hidden">
              <FontAwesomeIcon className="h-5 w-5" icon={faSearch} />
              </button>
              <button className=" rounded-xl px-2 transition-all md:py-3 text-[#121212] flex items-center gap-2 md:hidden">
              <FontAwesomeIcon  className="h-5 w-5" icon={faBars} />
              </button>
              {/* end  responsive mobile */}
              <button className="bg-[#1212120a] hidden md:block rounded-xl px-4 hover:bg-[#12121214] transition-all py-3 text-[#121212]" data-hs-overlay="#cart-modal">
              <FontAwesomeIcon icon={faCartShopping} />
              </button>
              
            </div>
          </div>
       
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#eff2f5]"></div>
      <CartModal />

    </>
  );
}
