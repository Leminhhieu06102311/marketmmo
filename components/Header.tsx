import {
  faArrowRight,
  faCaretDown,
  faMagnifyingGlass,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="lg:flex lg:py-2 lg:px-5 lg:justify-between ">
        <div className="flex items-center gap-2">
          <div>
            <div className="inline-block flex-none p-1.5 px-4 rounded-full bg-red-400 text-white items-center justify-center font-medium text-sm">
              Mới nhất
            </div>
          </div>
          <p className=" text-sm">
            Dịch vụ giao dịch trung gian mới nhất giúp mọi giao dich của bạn
            được hoàn thành một cách suôn sẻ nhất
          </p>
          <Link
            href="/intermediary"
            className="ml-2 font-semibold underline duration-150 hover:text-indigo-100 inline-flex items-center gap-x-1 text-primary text-sm"
          >
            <span>Bắt đầu ngay</span>
            <FontAwesomeIcon icon={faArrowRight} width={12} height={15} />
          </Link>
        </div>
        <div className="flex">
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 items-center">
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
              <p className="base-text">10.000.000 VND</p>
            </div>
            <div className="flex gap-1">
              <p className="base-text">Tiếng Việt</p>
              <FontAwesomeIcon icon={faCaretDown} width={12} height={15} />
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
      </div>
      <div className="lg:w-full lg:h-[1px] lg:bg-[#eff2f5]"></div>
      <div className="lg:py-2 lg:px-5 flex justify-between">
        <div className="flex gap-x-10 items-center">
          <div>
            <h2 className="font-bold text-xl">Market MMO</h2>
          </div>
          <div className="flex items-center">
            <ul className="flex gap-x-7">
              <li className="font-semibold text-sm relative">
                Sản phẩm
                <div className="absolute w-64 rounded-xl mt-5 bg-white dropdown-boxshadown before:content-[''] before:w-0 before:h-0 before:border-solid before:border-[10px] before:border-white before:top-[-20px] before:border-l-transparent before:border-r-transparent before:border-t-transparent before:absolute before:left-[16px]">
                  <div className="p-3 flex items-center gap-3 hidden ">
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
                </div>
              </li>
              <li className="font-semibold text-sm">Dịch vụ</li>
              <li className="font-semibold text-sm">Cộng đồng</li>
              <li className="font-semibold text-sm">Học hỏi</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex items-center bg-[#eff2f5] rounded-xl px-3 ">
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
        </div>
      </div>
    </>
  );
}
