"use client";
import { BiSearch } from "react-icons/bi";
import {
  AiOutlineLogin,
} from "react-icons/ai";
import { PiMessengerLogo } from "react-icons/pi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoPaperPlaneOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut, IoMdClose } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import SideBarMenuMobile from "./SideBarMenuMobile";
import Links from "@/interfaces/links";
import Cookies from 'js-cookie'
import { toggleModal } from "@/redux/modalSlice";
import { setLoggedIn } from "@/redux/userSlice";
import { LuBell } from "react-icons/lu";
import { toast } from 'react-toastify'
import Image from "next/image";
import { FaAngleLeft, FaCircleCheck, FaRegClock } from 'react-icons/fa6'
import SearchProduct from "./SearchProduct";
import { filterProducts, showModalSearch } from "@/redux/searchSlice";
import DetailProduct from "../DetailProduct";
const links: Links[] = [
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
 
];
export default function Header() {
  const { isLoggedIn } = useAppSelector((state) => state.user)
  const { productId } = useAppSelector((state) => state.product)
  const { isModalSearch } = useAppSelector((state) => state.search)
  const [searchTerm, setSearchTerm] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [isNotificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleNotificationDropdown = () => {
    setNotificationDropdownOpen(!isNotificationDropdownOpen);
  };

  const closeNotificationDropdown = () => {
    setNotificationDropdownOpen(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: { target: any; }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeNotificationDropdown();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dropdownRef]);

  const dispatch = useAppDispatch();
  const hanldeLogout = () => {
    Cookies.remove('token')
    dispatch(setLoggedIn(false))
    toast.success('Đăng suất thành công', { icon: '🟢' })
  };
  const hanldeSearchProduct = (e: any) => {
    setSearchTerm(e)
    dispatch(filterProducts(searchTerm))
  }

  return (
    <header>
      <div className="flex justify-between mx-auto items-center max-w-xxs py-3 md:max-w-3xl  md:py-4 lg:max-w-full lg:py-4 lg:px-10">
        <div className="flex md:gap-x-2 lg:gap-x-5">
          <Link href="/">
            <h2 className="font-bold text-xl ">Market MMO</h2>
          </Link>
          <div className="hidden md:flex items-center">
            <p className="h-8 w-[1px] bg-[#eff2f5] mx-2"></p>
          </div>
          <div className="hidden md:flex lg:flex items-center ">
            <ul className="flex md:gap-x-4 gap-x-7">
              <li className="font-semibold text-base relative group">
                Sản phẩm
                <ul className="absolute w-60 p-2  bg-white  z-[1010] top-10 rounded-lg shadow-modal after:content-[''] after:w-full after:absolute after:h-[50px] after:bg-transparent after:top-[-30px] hidden group-hover:block ">
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
            </ul>
          </div>
        </div>
        <div onFocus={() => dispatch(showModalSearch())} className="relative md:hidden lg:flex xl:flex items-center bg-[#1212120a] rounded-xl px-3 hidden hover:bg-[#12121214] transition-all" >
          <BiSearch className="text-[#121212] w-5 h-5" />
          <input
            type="text"
            placeholder="Tìm kiếm"
            value={searchTerm}
            autoComplete="off"
            onChange={(e) => hanldeSearchProduct(e.target.value)}
            className="pl-2 bg-transparent text-base py-3 outline-none md:w-36 lg:w-52 xl:w-96  "

          />
          <div className="px-2 py-1 bg-[#12121214] rounded-md text-xs">/</div>
          {searchTerm && isModalSearch && <SearchProduct />}
        </div>
        <div className=" flex lg:flex gap-5">
          <div className=" lg:flex ">
            <div ref={dropdownRef} className="flex gap-2 md:gap-2 items-center">
              {!isLoggedIn ? (
                <div>
                  <Link href="/login"
                    className="bg-[#1212120a] hidden  rounded-xl px-4 hover:bg-[#12121214] transition-all py-2 md:py-3 text-[#121212] md:flex items-center gap-2"
                  >
                    <AiOutlineLogin className="w-5 h-5" /> <span className="font-semibold">Đăng nhập</span>
                  </Link>
                </div>
              ) : (
                <>
                <Link href={'/messenger'}
                  className="bg-[#1212120a] cursor-pointer hidden md:block relative rounded-xl px-4 hover:bg-[#12121214] transition-all py-3 text-[#121212]"
                >
                  <span className="absolute top-0 right-0 bg-red-500 flex items-center justify-center rounded-full h-5 w-5 text-white font-semibold text-xs">3</span>
                  <PiMessengerLogo className="w-5 h-5 text-black" />
                </Link>
              <div className=" cursor-pointer group hidden md:block bg-[#1212120a] rounded-xl px-4 hover:bg-[#12121214] transition-all py-3 text-[#121212] relative">
                <HiOutlineUserCircle className="w-5 h-5" />
                <ul className="group-hover:block absolute w-60 p-2 hidden bg-white right-0 z-[99] top-14 rounded-lg shadow-modal before:absolute before:w-full before:h-6 before:bg-transparent before:right-0 before:-top-3  ">
                  <li className="">
                    <Link
                      className="flex gap-4 px-4 py-3 items-center  hover:bg-[#1212120a] rounded-md transition-all cursor-pointer"
                      href="/profile"
                    >
                      <HiOutlineUserCircle className="w-5 h-5" />
                      <span className="font-medium block">Trang cá nhân</span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="flex gap-4 px-4 py-3 items-center  hover:bg-[#1212120a] rounded-md transition-all cursor-pointer"
                      href="/transaction-history"
                    >
                      <IoPaperPlaneOutline className="w-5 h-5" />
                      <span className="font-medium block">Đơn hàng đã mua</span>
                    </Link>
                  </li>
                  <span className="block w-full h-[2px] my-2 bg-gray-100"></span>
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
                    <span className="font-medium block">Đăng xuất</span>
                  </li>
                </ul>
              </div>
                </>
              )}
              {/* start responsive mobile */}
              <div>
                <div onClick={openModal} className="bg-[#1212120a]  rounded-xl px-4 hover:bg-[#12121214] transition-all py-2 md:py-3 text-[#121212] md:flex items-center gap-2 flex lg:hidden">
                  <BiSearch className="w-5 h-5" />
                </div>
                {showModal && (
                  <div className="fixed inset-0 flex justify-center z-50">
                    <div onClick={closeModal} className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-white w-full h-[72px] shadow-lg relative top-0">
                      <div className="flex items-center h-full">
                        <div onClick={closeModal} className="cursor-pointer w-[62px] flex justify-center"><FaAngleLeft className="text-base w-5 h-5" /></div>
                        <input type="text" placeholder="Tìm kiếm" className="w-full focus:outline-none p-1 text-base" />
                      </div>
                    </div>
                    <div className="absolute top-[4.5rem] left-0 z-50  w-full">
                      <ul className="p-2 bg-white border max-h-[90vh] overflow-y-auto">
                        {/* classify */}
                        <li className="w-full mb-2 mt-1 ">
                          <div className="text-xs text-[#545454] font-semibold">LAUNCHES</div>
                        </li>
                        <li>
                          <div className="p-1 hover:bg-gray-50 rounded-lg">
                            <Link href="" className="flex items-center">
                              <Image className="rounded-lg mx-3 my-2" src="/images/product/1.webp" width={32} height={32} alt="" />
                              <div className="flex justify-between items-center w-full">
                                <div>
                                  <div>
                                    <span className="font-bold text-sm">Arc8 GameFest Pass | November '23</span>
                                    <span className="text-primary"> <FaCircleCheck /></span>
                                  </div>
                                  <div>
                                    <span className="font-bold text-sm">2,991 </span>
                                    <span className="font-bold text-sm">items</span>
                                  </div>
                                </div>
                                {/* <div>
                      </div> */}
                              </div>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="p-1 hover:bg-gray-100 rounded-lg">
                            <Link href="" className="flex items-center">
                              <Image className="rounded-lg mx-3 my-2" src="/images/product/1.webp" width={32} height={32} alt="" />
                              <div className="flex justify-between items-center w-full">
                                <div>
                                  <div>
                                    <span className="font-bold text-sm">Arc8 GameFest Pass | November '23</span>
                                    <span className="text-primary">  <FaCircleCheck /></span>
                                  </div>
                                  <div>
                                    <span className="font-bold text-sm">2,991 </span>
                                    <span className="font-bold text-sm">items</span>
                                  </div>
                                </div>
                                {/* <div>
                      </div> */}
                              </div>
                            </Link>
                          </div>
                        </li>
                        {/* classify */}
                        <li className="w-full mb-2 mt-1 ">
                          <div className="text-xs text-[#545454] font-semibold">LAUNCHES</div>
                        </li>
                        <li>
                          <div className="p-1 hover:bg-gray-50 rounded-lg">
                            <Link href="" className="flex items-center">
                              <Image className="rounded-lg mx-3 my-2" src="/images/product/1.webp" width={32} height={32} alt="" />
                              <div className="flex justify-between items-center w-full">
                                <div>
                                  <div>
                                    <span className="font-bold text-sm">Arcadeland</span>
                                    <span className="text-primary">  <FaCircleCheck /></span>
                                  </div>
                                  <div>
                                    <span className="font-bold text-sm">2,991 </span>
                                    <span className="font-bold text-sm">items</span>
                                  </div>
                                </div>
                                <div className="font-bold text-xs">
                                  <span>2.000 VNĐ</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="p-1 hover:bg-gray-50 rounded-lg">
                            <Link href="" className="flex items-center">
                              <Image className="rounded-lg mx-3 my-2" src="/images/product/1.webp" width={32} height={32} alt="" />
                              <div className="flex justify-between items-center w-full">
                                <div>
                                  <div>
                                    <span className="font-bold text-sm">Arc8 GameFest Pass | November '23</span>
                                    <span className="text-primary">  <FaCircleCheck /></span>
                                  </div>
                                  <div>
                                    <span className="font-bold text-sm">2,991 </span>
                                    <span className="font-bold text-sm">items</span>
                                  </div>
                                </div>
                                <div className="font-bold text-xs">
                                  <span>2.000 VNĐ</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </li>
                        {/* classify */}
                        <li className="w-full mb-2 mt-1 ">
                          <div className="text-xs text-[#545454] font-semibold">LAUNCHES</div>
                        </li>
                        <li>
                          <div className="p-1 hover:bg-gray-50 rounded-lg">
                            <Link href="" className="flex items-center">
                              <Image className="rounded-lg mx-3 my-2" src="/images/product/1.webp" width={32} height={32} alt="" />
                              <div className="flex justify-between items-center w-full">
                                <div>
                                  <div>
                                    <span className="font-bold text-sm">Arcadeland</span>
                                    <span className="text-primary">  <FaCircleCheck /></span>
                                  </div>
                                  <div>
                                    <span className="font-bold text-sm">2,991 </span>
                                    <span className="font-bold text-sm">items</span>
                                  </div>
                                </div>
                                <div className="font-bold text-xs">
                                  <span>2.000 VNĐ</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="p-1 hover:bg-gray-50 rounded-lg">
                            <Link href="" className="flex items-center">
                              <Image className="rounded-lg mx-3 my-2" src="/images/product/1.webp" width={32} height={32} alt="" />
                              <div className="flex justify-between items-center w-full">
                                <div>
                                  <div>
                                    <span className="font-bold text-sm">Arc8 GameFest Pass | November '23</span>
                                    <span className="text-primary">  <FaCircleCheck /></span>
                                  </div>
                                  <div>
                                    <span className="font-bold text-sm">2,991 </span>
                                    <span className="font-bold text-sm">items</span>
                                  </div>
                                </div>
                                <div className="font-bold text-xs">
                                  <span>2.0000 VNĐ</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </li>
                        {/* classify */}
                        <li className="w-full mb-2 mt-1 ">
                          <div className="text-xs text-[#545454] font-semibold">LAUNCHES</div>
                        </li>
                        <li>
                          <div className="p-1 hover:bg-gray-50 rounded-lg">
                            <Link href="" className="flex items-center">
                              <Image className="rounded-lg mx-3 my-2" src="/images/product/1.webp" width={32} height={32} alt="" />
                              <div className="flex justify-between items-center w-full">
                                <div>
                                  <div>
                                    <span className="font-bold text-sm">Arcadeland</span>
                                    <span className="text-primary">  <FaCircleCheck /></span>
                                  </div>
                                  <div>
                                    <span className="font-bold text-sm">2,991 </span>
                                    <span className="font-bold text-sm">items</span>
                                  </div>
                                </div>
                                <div className="font-bold text-xs">
                                  <span>2.000 VNĐ</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="p-1 hover:bg-gray-50 rounded-lg">
                            <Link href="" className="flex items-center">
                              <Image className="rounded-lg mx-3 my-2" src="/images/product/1.webp" width={32} height={32} alt="" />
                              <div className="flex justify-between items-center w-full">
                                <div>
                                  <div>
                                    <span className="font-bold text-sm">Arc8 GameFest Pass | November '23</span>
                                    <span className="text-primary">  <FaCircleCheck /></span>
                                  </div>
                                  <div>
                                    <span className="font-bold text-sm">2,991 </span>
                                    <span className="font-bold text-sm">items</span>
                                  </div>
                                </div>
                                <div className="font-bold text-xs">
                                  <span>2.000 VNĐ</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="bg-[#1212120a]  rounded-xl px-4 hover:bg-[#12121214] transition-all py-2 md:py-3 text-[#121212] md:hidden items-center gap-2 flex"
                data-hs-overlay="#sidebar-menu-mobile"
              >
                <HiBars3 className="h-5 w-5" />
              </div>
              {/* end  responsive mobile */}
              <div
                className="bg-[#1212120a] cursor-pointer hidden md:block rounded-xl px-4 hover:bg-[#12121214] transition-all py-3 text-[#121212]"
                onClick={() => dispatch(toggleModal('cart'))}
              >
                <BsCart3 className="w-5 h-5 text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#eff2f5]"></div>
      {/* Modal mobile */}
      <SideBarMenuMobile links={links} />
      {productId && <DetailProduct productId={productId} />}
    </header>

  );
}
