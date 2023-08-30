"use client";
import {
  faBars,
  faCaretDown,
  faMagnifyingGlass,
  faEnvelope,
  faFileInvoice,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="lg:flex lg:py-2 lg:px-5 lg:justify-center bg-primary mx-auto md:py-3">
        <div className="flex items-center justify-center md:max-w-3xl mx-auto lg:max-w-7xl">
          <p className=" text-xs text-center text-white font-medium py-2">
            Dịch vụ giao dịch trung gian mới nhất{" "}
            <span className="hidden md:inline lg:inline">
              giúp mọi giao dich của bạn được hoàn thành một cách suôn sẻ nhất
            </span>{" "}
            🎉
          </p>
          <Link
            href="/intermediary"
            className="ml-2 font-semibold underline duration-150 hover:text-indigo-100 inline-flex items-center gap-x-1 text-primary text-sm"
          >
            <span className="font-bold text-white underline text-xs">
              Bắt đầu ngay
            </span>
          </Link>
        </div>
      </div>
      <div className="flex justify-between mx-auto items-center max-w-xxs py-3 md:max-w-3xl  md:py-4 lg:max-w-full lg:py-4 lg:px-5 ">
        <div className="flex gap-x-10">
          <div>
            <h2 className="font-bold text-lg">Market MMO</h2>
          </div>
          <div className="lg:flex items-center hidden">
            <ul className="flex gap-x-7">
              <li className="font-semibold text-sm relative group">
                Sản phẩm
                <div className="absolute pt-2 pb-2 ease-in w-64 rounded-xl mt-5 bg-white dropdown-boxshadown before:content-[''] before:w-0 before:h-0 before:border-solid before:border-[10px] before:border-white before:top-[-20px] before:border-l-transparent before:border-r-transparent before:border-t-transparent before:absolute before:left-[16px] after:content-[''] after:w-full after:absolute after:h-[50px] after:bg-transparent after:top-[-30px] invisible group-hover:visible  ">
                  <div className="px-3 pt-3 pb-2 flex items-center gap-3 ">
                    <div className="bg-primary rounded-full p-2 inline-block">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ color: "#ffffff" }}
                        width={20}
                        height={20}
                      />
                    </div>
                    <Link href="/email">Email</Link>
                  </div>
                  <div className="px-3 pt-3 pb-2 flex items-center gap-3 ">
                    <div className="bg-[#16c784] rounded-full p-2 inline-block">
                      <FontAwesomeIcon
                        icon={faFileInvoice}
                        style={{ color: "#ffffff" }}
                        width={20}
                        height={20}
                      />
                    </div>
                    <Link href="/email">Tài khoản</Link>
                  </div>
                  <div className="px-3 pt-3 pb-2 flex items-center gap-3 ">
                    <div className="bg-[#ff775f] rounded-full p-2 inline-block">
                      <FontAwesomeIcon
                        icon={faBookmark}
                        style={{ color: "#ffffff" }}
                        width={20}
                        height={20}
                      />
                    </div>
                    <Link href="/email">Phần mềm</Link>
                  </div>
                </div>
              </li>
              <li className="font-semibold text-sm">Dịch vụ</li>
              <li className="font-semibold text-sm">Cộng đồng</li>
              <li className="font-semibold text-sm">Học hỏi</li>
            </ul>
          </div>
        </div>
        <div className=" flex lg:flex gap-5">
          <div className="md:flex items-center bg-[#eff2f5] rounded-xl px-3 hidden">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              width={15}
              height={15}
              className="text-[#a6b0c3]"
            />
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="pl-2 bg-transparent text-sm py-2 outline-none"
            />
          </div>
          <div className="hidden md:hidden lg:flex ">
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center hover:bg-[#f8fafd] p-2 rounded-md">
                <div className="w-5 h-5">
                  <Image
                    src="/images/top-bar/VND.svg"
                    width={0}
                    height={0}
                    alt=""
                    sizes="100vw"
                    className="w-full h-full"
                  />
                </div>
                <p className="base-text ">100,000 VND</p>
              </div>
              <div className="flex gap-1 cursor-pointer hover:bg-[#f8fafd] p-2 rounded-md relative group">
                <p className="base-text">Tiếng Việt</p>
                <FontAwesomeIcon icon={faCaretDown} width={12} height={15} />
                <div
                  className={`absolute py-3 ease-in w-44 right-0 rounded-xl  bg-white dropdown-boxshadown mt-7 px-3 group-hover:visible invisible after:content-[''] after:w-full after:absolute after:h-[50px] after:bg-transparent after:top-[-30px]`}
                >
                  <div className="flex items-center bg-[#eff2f5] rounded-md px-3 border border-white focus-within:border-slate-400">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      width={15}
                      height={15}
                      className="text-[#a6b0c3]"
                    />
                    <input
                      type="text"
                      placeholder="Tìm kiếm"
                      className="pl-2 bg-transparent text-sm py-2 focus:outline-none w-full "
                    />
                  </div>
                  <div className="py-2 text-sm ">
                    <p className="w-full text-gray-400 font-medium p-2">
                      Ngôn ngữ phổ biến
                    </p>
                    <ul>
                      <li className="p-2 font-bold hover:bg-[#f8fafd] rounded-md">
                        English <span className="font-extralight ml-1">EN</span>
                      </li>
                      <li className="p-2 font-bold hover:bg-[#f8fafd] rounded-md">
                        Tiếng Việt{" "}
                        <span className="font-extralight ml-1">VI</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="h-5 w-[1px] bg-[#eff2f5] mx-2"></span>
            </div>
            <div className="flex gap-2 items-center">
              <button className="px-4 h-[32px] font-bold text-primary border border-solid border-primary rounded-lg text-xs hover:bg-[#f8fafd]">
                Đăng nhập
              </button>
              <button className="px-4 h-[32px] font-bold text-white bg-primary border border-solid border-primary rounded-lg text-xs">
                Đăng kí
              </button>
            </div>
          </div>
        <div className="flex gap-4">
          <FontAwesomeIcon className="py-2 text-xl text-slate-500 md:hidden" icon={faMagnifyingGlass} />
          <FontAwesomeIcon className="py-2 text-xl font-thin text-slate-500" icon={faBars} />
        </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#eff2f5]"></div>
    </>
  );
}
