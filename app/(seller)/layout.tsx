"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaBell, FaUser } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import 'animate.css';
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    import("preline");
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchModallOpen, setSearchModalOpen] = useState(false);
  const openSearch = () => {
    setSearchModalOpen(true);
  };

  const closeSearch = () => {
    setSearchModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (

    <div className="bg-[#f9fafb] ">
      {searchModallOpen ? null : (
        <header className=" flex flex-col box-border fixed top-0 left-auto right-0 text-[rgb(255, 255, 255)] shadow-none h-[80px] z-50 backdrop-blur-[50px] bg-[rgba(249, 250, 251, 0.8)] transition w-full md:w-full lg:w-[calc(100%-281px)] ">
          <div className="md:px-6 lg:px-[40px] ">
            <div className="flex items-center justify-between h-[80px]">
              <div className="flex items-center">
                <button onClick={openModal} className="inline-flex items-center relative justify-center p-2 text-[1.5rem] cursor-pointer w-10 h-10 hover:bg-[#63738114] rounded-full  md:block lg:hidden"><FiMenu className="w-5 h-5" /></button>
                <button onClick={openSearch} className="inline-flex items-center relative justify-center p-2 text-[1.5rem] cursor-pointer w-10 h-10 hover:bg-[#63738114] rounded-full"><IoIosSearch className="w-5 h-5" /></button>
              </div>
              <div className="flex items-center justify-between">
                <div className="">
                  <button className="inline-flex items-center justify-center p-2 text-[1.5rem] w-10 h-10 hover:bg-[#63738114] rounded-full">
                    <FaBell className="w-5 h-5" />
                  </button>
                  <button className="inline-flex items-center justify-center p-2 ml-2 w-10 h-10  rounded-full hover:bg-[#63738114] ">
                    <div className="w-full h-full rounded-full overflow-hidden border-[2px solid rgb(249, 250, 251)]">
                      <img className="w-full h-full text-center object-cover " src="/images/product/1.webp" alt="" /></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
      <div className="flex relative ">
        {/* NAV */}
        <div className=" flex-shrink-0 w-[280px] h-screen p-0 overflow-scroll scroll-auto border-r hidden  lg:block">
          <div className="">
            <div className="text-xl font-bold w-full text-center p-7">Market MMO</div>
            <div className="my-6 mx-5 py-4 px-5 rounded-xl bg-[#919eab1f] flex ">
              <div className="w-10 h-10 overflow-hidden rounded-full">
                <img src="/images/product/1.webp" alt="" />
              </div>
              <div className="flex items-center ml-4">
                <h6 className="font-semibold text-[0.875rem">Jaydon Frankie</h6>
              </div>
            </div>
            <nav className="px-4 ">
              <Link href="" className="mb-1 text-sm rounded-md capitalize text-primary font-semibold py-2 px-4 min-h-[44px] flex items-center cursor-pointer bg-[#1877f214]"><AiFillDashboard className="w-6 h-6 mr-4" /><span>Dashboard</span></Link>
              <Link href="" className="mb-1 text-sm rounded-md capitalize text-[#637381] font-semibold py-2 px-4 min-h-[44px] flex items-center cursor-pointer hover:bg-[#919eab14] transition-all"><FaUser className="w-6 h-6 mr-4" /><span>User</span></Link>
              <Link href="" className="mb-1 text-sm rounded-md capitalize text-[#637381] font-semibold py-2 px-4 min-h-[44px] flex items-center cursor-pointer hover:bg-[#919eab14] transition-all"><FaCartShopping className="w-6 h-6 mr-4" /><span>Product</span></Link>
            </nav>
          </div>
        </div>
        {/* NavModal */}
        {isModalOpen && (
          <div className="fixed inset-0 overflow-y-auto z-50 transition">
            <div className="flex items-start justify-start min-h-screen pt-4 px-4 pb-20 text-left sm:block sm:p-0">
              <div className="fixed inset-0 ">
                <div
                  className="absolute inset-0 bg-gray-500 opacity-75"
                  onClick={closeModal}
                ></div>
              </div>

              <div className="fixed left-0 top-0 h-full bg-white overflow-y-auto w-[280px] transition-all animate__animated animate__fadeInLeft animate__faster">
                <div className="">
                  <div className="text-xl font-bold w-full text-center p-7">Market MMO</div>
                  <div className="my-6 mx-5 py-4 px-5 rounded-xl bg-[#919eab1f] flex ">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img src="/images/product/1.webp" alt="" />
                    </div>
                    <div className="flex items-center ml-4">
                      <h6 className="font-semibold text-[0.875rem">Jaydon Frankie</h6>
                    </div>
                  </div>
                  <nav className="px-4 ">
                    <Link href="" className="mb-1 text-sm rounded-md capitalize text-primary font-semibold py-2 px-4 min-h-[44px] flex items-center cursor-pointer bg-[#1877f214]"><AiFillDashboard className="w-6 h-6 mr-4" /><span>Dashboard</span></Link>
                    <Link href="" className="mb-1 text-sm rounded-md capitalize text-[#637381] font-semibold py-2 px-4 min-h-[44px] flex items-center cursor-pointer hover:bg-[#919eab14] transition-all"><FaUser className="w-6 h-6 mr-4" /><span>User</span></Link>
                    <Link href="" className="mb-1 text-sm rounded-md capitalize text-[#637381] font-semibold py-2 px-4 min-h-[44px] flex items-center cursor-pointer hover:bg-[#919eab14] transition-all"><FaCartShopping className="w-6 h-6 mr-4" /><span>Product</span></Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="w-full md:w-full lg:w-[100% calc(100%-280px)]">
          {searchModallOpen && (
            <div className="relative inset-0  items-center justify-center z-50 ">
              <div className="fixed inset-0 bg-transparent" onClick={closeSearch}></div>
              <div className="absolute shadow-lg right-0 bg-[#f9fafbcc] bg-blur-[6px] w-full h-[80px]  animate__animated animate__slideInDown animate__faster flex items-center lg:px-10 ">
                <button className="inline-flex items-center relative justify-center p-2 text-[1.5rem] cursor-pointer w-10 h-10 hover:bg-[#63738114] rounded-full"><IoIosSearch className="w-5 h-5" /></button>
                <input type="text" className="w-full focus:outline-none bg-transparent" placeholder="Search..." />
                <button className="px-4 py-[6px] bg-primary text-white font-semibold rounded-xl">Search</button>
              </div>
            </div>
          )}
          <div className="pt-[88px] px-4 w-full">

            {children}
          </div>
        </div>
      </div>
    </div >
  );
}
