"use client";

import { BsFileEarmarkRichtext, BsPerson, BsHash } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineChatBubbleLeftEllipsis, HiOutlineXMark } from "react-icons/hi2";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { FaChevronDown, FaEllipsis } from "react-icons/fa6";
import { CiFaceSmile } from "react-icons/ci";
import { GoRss } from "react-icons/go";

import { FcFlashOn } from "react-icons/fc";
// import Picker from "@emoji-mart/react";
import React, { useState } from "react";
import Link from "next/link";

export default function feed() {
  const [showPicker, setShowPicker] = useState(false);
  const [showButtonSearch, setShowButtonSearch] = useState(false);
  const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);
  const [textareaValue, setTextareaValue] = useState('');
  const [activeTab, setActiveTab] = useState("for_you");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isContentOpen, setIscontentOpen] = useState(true);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // setIscontentOpen(!isContentOpen);
  };

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const handleEmojiSelect = (emoji: any) => {
    const newEmojis = [...selectedEmojis, emoji];
    setSelectedEmojis(newEmojis);

    const newTextareaValue = newEmojis.join(' ');
    setTextareaValue(newTextareaValue);
  };

  const handleInputFocus = () => {
    setShowButtonSearch(true);
  };
  const formatText = (text: string) => {
    return text.split(/(#[^\s$]+|\$[^\s]+|\@[^\s]+)/).map((word, index) => {
      if (
        word.startsWith("#") ||
        word.startsWith("$") ||
        word.startsWith("@")
      ) {
        return (
          <React.Fragment key={index}>
            <span className="text-primary">
              <a href="#" className="hover:underline">
                {word}
              </a>
            </span>{" "}
          </React.Fragment>
        );
      }
      return word + " ";
    });
  }
  const handleInputBlur = () => {
    setShowButtonSearch(false);
  };
  return (
    <div className=" mx-auto max-w-xxs  md:max-w-3xl lg:max-w-7xl flex relative min-h-[calc-108px] m-auto pointer-events-auto">
      <div className="flex relative max-w-[1280px] min-h-[calc(100vh-108px)] m-auto">
        <div className=" mt-6 z-10 pl-4 flex-grow-0 flex-shrink-0 basis-[260px] hidden lg:flex">
          <aside className="sticky top-5 self-start">
            <ul className="w-52 mt-7 mb-7">
              <li className="mb-1">
                <Link
                  href=""
                  className="flex justify-left items-center p-4 font-medium  text-sm rounded-lg gap-x-3 bg-gray-100 "
                >
                  <GoRss className="text-[25px]" />
                  Bảng tin
                </Link >
              </li >

              <li className="mb-1">
                <Link
                  href=""
                  className="flex justify-left items-center text-gray-500 p-4 text-sm rounded-lg font-normal hover:bg-gray-100 gap-x-3"
                >
                  <BsHash className="text-[25px]" />
                  Chủ đề
                </Link >
              </li >
              <li className="mb-1">
                <Link
                  href=""
                  className="flex justify-left items-center text-gray-500 p-4 text-sm rounded-lg font-normal hover:bg-gray-100 gap-x-3"
                >
                  <BsFileEarmarkRichtext className="text-[25px] text-gray-500" />
                  Bài viết
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href=""
                  className="flex justify-left items-center p-4 text-gray-500 text-sm rounded-lg font-normal hover:bg-gray-100 gap-x-3"
                >
                  <IoMdNotificationsOutline className="text-[25px] text-gray-500" />
                  Thông báo
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href=""
                  className="flex justify-left items-center p-4 text-gray-500 text-sm rounded-lg font-normal hover:bg-gray-100 gap-x-3"
                >
                  <BsPerson className="text-[25px] text-gray-500" />
                  Trang cá nhân
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href=""
                  className="flex justify-left items-center text-gray-500 p-4 text-sm rounded-lg font-normal hover:bg-gray-100 gap-x-3"
                >
                  <FiMoreHorizontal className="text-[25px] text-gray-500" />
                  Xem thêm
                </Link>
              </li>

            </ul >
          </aside >
        </div >


        <main className="bg-white grow-[3] shrink basis relative z-10">
          <div className="flex flex-row justify-between">
            <div className=" flex-1 grow-[2] md:min-w-[750px] max-w-[1000px] ">
              <h2
                className="text-2xl font-bold flex items-center m-0 pl-4 pr-4 pt-2 cursor-pointer justify-between lg:hidden"
                onClick={toggleMenu}
              >
                Danh sách đề xuất

                <FaChevronDown className="text-[#a6b0c3]" />
              </h2>
              {isMenuOpen ? (
                <div className="fixed inset-0 bg-[rgba(10,30,66,0.4)] flex justify-center items-center transition-all duration-300 ease-in-out top-0 left-0 transform-none shadow-lg z-50">
                  <div className="h-screen w-screen max-h-screen max-h-[100vh] flex flex-col transition-height duration-300 ease-in-out max-w-screen bg-white rounded-lg overflow-hidden">
                    <div className="p-4 text-center text-base leading-6 font-semibold relative flex-shrink-0 shadow-sm">
                      Cộng đồng

                      <HiOutlineXMark className="absolute top-4 right-4 text-[#a6b0c3] text-xs cursor-pointer z-10 w-6 h-6" onClick={toggleMenu} />
                    </div>
                    <div className="flex flex-col items-start ml-8  md:items-start gap-y-11 bg-white absolute left-0 md:left-20 top-20 h-full w-64 transform transition-transform duration-300 ease-in-out translate-x-0">
                      <div className="flex justify-between items-center ">
                        <div className="text-black text-xl font-semibold">
                          Cộng đồng
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-black  font-semibold text-base text-primary flex items-center gap-x-4"
                      >
                        < GoRss className="text-black " />
                        Bảng tin
                      </a>
                      <a
                        href="#"
                        className="text-black  text-base font-medium flex items-center gap-x-4"
                      >
                        <BsHash className="font-extralight text-[#a6b0c3]" />
                        Chủ đề
                      </a>
                      <a
                        href="#"
                        className="text-black  text-base font-medium flex items-center gap-x-4"
                      >

                        <BsFileEarmarkRichtext className="text-[25px] text-gray-500" />
                        Bài viết
                      </a >

                      <a
                        href="#"
                        className="text-black  text-base font-medium flex items-center gap-x-4"
                      >
                        <IoMdNotificationsOutline className="text-[25px] text-gray-500" />
                        Thông báo
                      </a>
                      <a
                        href="#"
                        className="text-black  text-base font-medium flex items-center gap-x-4"
                      >
                        <BsPerson className="text-[25px] text-gray-500" />
                        Trang của tôi
                      </a>
                      <a
                        href="#"
                        className="text-black  text-base font-medium flex items-center gap-x-4"
                      >


                        <FaEllipsis size="xl"
                          className="font-extralight text-[#a6b0c3]" />
                        Xem thêm
                      </a>

                    </div >
                  </div >
                </div >
              ) : (
                <div className="fixed inset-0 bg-[rgba(10,30,66,0.4)] flex justify-center items-center transition-all duration-300 ease-in-out top-0 left-0 translate-x-[-100%] shadow-lg z-1010">
                  <div className="h-screen w-screen max-h-screen max-h-[100vh] flex flex-col transition-height duration-300 ease-in-out max-w-screen bg-white rounded-lg overflow-hidden">
                    <div className="p-4 text-center text-base leading-6 font-semibold relative flex-shrink-0 z-1010 shadow-sm">
                      Community


                      <HiOutlineXMark onClick={toggleMenu}
                        className="absolute top-4 right-4 text-[#a6b0c3] text-xs cursor-pointer z-10 w-6 h-6" />
                    </div>
                    <div className="flex justify-between items-center ">
                      <div className="text-black text-xl font-semibold">Community</div>
                    </div>
                    <div className="flex flex-col items-start gap-y-11 bg-white absolute left-0 md:left-20 top-20 h-full w-64 transform transition-transform duration-300 ease-in-out translate-x-0">
                      <a
                        href="#"
                        className="text-black  font-semibold text-base text-primary flex items-center gap-x-4"
                      >

                        <GoRss className="text-black " />
                        Bảng tin
                      </a>
                      <a
                        href="#"
                        className="text-black  text-base font-medium flex items-center gap-x-4"
                      >

                        < BsHash className="font-extralight text-[#a6b0c3]" />
                        Topics
                      </a>
                      <a
                        href="#"
                        className="text-black  text-base font-medium flex items-center gap-x-4"
                      >
                        <BsFileEarmarkRichtext className="text-[25px] text-gray-500" />
                        Bài viết
                      </a >
                      <a
                        href="#"
                        className="text-black  text-base font-medium flex items-center gap-x-4"
                      >
                        <IoMdNotificationsOutline className="text-[25px] text-gray-500" />
                        Thông báo
                      </a >
                      <a
                        href="#"
                        className="text-black  text-base font-medium flex items-center gap-x-4"
                      >
                        <BsPerson className="text-[25px] text-gray-500" />
                        Trang cá nhân
                      </a >
                      <a
                        href="#"
                        className="text-black  text-base font-medium flex items-center gap-x-4"
                      >
                        <FaEllipsis size="xl" className="font-extralight text-[#a6b0c3]" />
                        Xem thêm
                      </a>
                    </div >
                  </div >
                </div >
              )
              }
              <div className="border-box ">
                <div className="mx-2 md:mx-8">
                  <div className="mt-6  grid grid-rows-[auto,auto,1fr,auto] grid-cols-[72px,1fr,max-content,106px] gap-x-4 gap-y-4">
                    <div className="md:col-span-1 md:row-span-4 row-span-1">
                      <a href="" className="w-14 h-14 underline shrink-0 ">
                        <div className="w-full h-full rounded-full transition duration-200 ease-out flex justify-center overflow-hidden">
                          <img src="../images/community/user.png" className="w-14 h-14 object-cover " alt="" />
                        </div>
                      </a>
                    </div>
                    <div className="col-span-3 row-span-1">
                      <div className="flex border-box m-0 items-center">
                        <div className="box-border m-0 inline-grid leading-5 grid grid-rows-auto grid-cols-auto items-center gap-x-1">
                          <div className="grid grid-flow-col justify-start mt-4 gap-1 items-center">
                            <a href=" "><span className="font-semibold">ddq7mexeifil</span></a>
                            <a href="" className="text-gray-500"> <span>@ddq7mexeifil</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-3 col-span-4 row-span-1">
                      <div className="flex-grow-1 overflow-hidden rounded-[8px] p-1 ">
                        <textarea name="" id="" cols={30} rows={10}
                          placeholder="Bạn có muốn đăng gì đó không?"
                          value={textareaValue}
                          onChange={(e) => setTextareaValue(e.target.value)}
                          className="resize-none text-sm border border-gray-100 hover:border hover:border-gray-300 p-3.5 px-5 bg-gray-100 rounded-[8px] h-[100px] w-full relative outline-none whitespace-pre-wrap overflow-wrap-break-word min-h-[21px] focus:ring focus:ring-blue-100 focus:border-blue-500 focus:outline-none"></textarea>

                      </div>
                    </div>
                    <div className="col-span-1 row-span-1">
                      <div>
                        <CiFaceSmile className="text-gray-400 text-[25px]" />

                        {/* {showPicker && (
                          <Picker onEmojiClick={handleEmojiSelect} set="google" />
                        )} */}
                      </div>
                    </div>
                    <div className="md:col-span-1 row-span-1 col-span-2"></div>
                    <div className="col-span-1 row-span-1 md:ml-0 ml-2">
                      <div className="w-[98px] justify-end">
                        <button className="rounded-[8px] bg-blue-600 hover:bg-blue-500 text-white cursor-pointer font-semibold text-sm py-0 px-[24px] line-[24px] h-[40px] whitespace-nowrap overflow-hidden overflow-ellipsis w-full">Đăng</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative ">
                  <div className="box-border m-0 pb-[8px] pt-[16px] px-8 bg-white sticky top-0 z-20">
                    <div className="box-border m-0 flex items-center">
                      <div className="w-full focus:w-[calc(100%-117)] transition-all duration-150 ease">
                        <div className="">
                          <div className="relative">
                            <input type="text" name="" id="" placeholder="Tìm kiếm bài đăng ... "
                              className="bg-gray-100 text-[16px] pr-4 pl-4 text-[#0d1421] relative hover:bg-white border rounded box-border max-w-full outline-0 p-4 w-full text-base h-12 leading-5 focus:outline-none focus:bg-white"
                              onFocus={handleInputFocus}
                              onBlur={handleInputBlur} />
                          </div>
                        </div>
                      </div>
                      {showButtonSearch && (
                        <button className=" w-[110px] flex items-center transition-all duration-150 ease bg-blue-500 hover:bg-blue-400 rounded border-none cursor-pointer justify-center outline-none font-semibold h-12 text-white text-base p-2 px-2 ml-3">Tìm kiếm</button>
                      )}
                    </div>
                  </div>
                  <div className="sticky z-10 top-[71px] px-6 py-0.5 bg-white">
                    <div className="mt-3 border-box flex items-center w-full pb-4 max-sm:justify-center" >
                      <div className={`basis-auto mx-2  flex items-center justify-center relative leading-10 hover:text-black ${activeTab === "for_you" ? "font-bold after:w-[40px]  after:h-[4px] after:rounded-full after:absolute after:top-[35px] after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2 after:bg-blue-500 " : "font-medium text-gray-400"}`}
                        onClick={() => handleTabClick("for_you")}
                        data-target="for_you"
                      >
                        <span className=" line-height-12 text-base cursor-pointer select-none">Dành cho bạn</span>
                      </div>
                      <div className={`basis-auto mx-2  flex items-center justify-center relative leading-10 hover:text-black ${activeTab === "follow" ? "font-bold after:w-[40px]  after:h-[4px] after:rounded-full after:absolute after:top-[35px] after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2 after:bg-blue-500 " : "font-medium text-gray-400"}`}
                        onClick={() => handleTabClick("follow")}
                        data-target="follow">
                        <span className="line-height-12 text-base cursor-pointer select-none ">Đang theo dõi</span>
                      </div>
                    </div>
                    <div className="">
                      <div className="h-full w-full relative">
                        <div className={`${activeTab === "for_you" ? "" : "hidden"
                          }`}
                          id="for_you">
                          <div className="md:px-8 px-2 border-box m-0 cursor-pointer overflow-hidden">
                            <div className="md:mt-[20px] mt-[30px] grid md:grid-cols-[72px,1fr] grid-cols-[40px,1fr] grid-rows-[auto,auto,1fr,auto] relative transition-all duration-600 ease-in-out border-b border-gray-200">
                              <div className="absolute top-0 right-0">
                                <button className="h-8 p-0 w-[84px] text-[12px] items-center bg-blue-600 hover:bg-blue-400 rounded-lg inline-flex text-white cursor-pointer justify-center font-semibold ">+ Theo dõi</button>
                              </div>
                              <div className="col-span-1 md:row-span-4 row-span-1 cursor-pointer">
                                <a href="" className="md:w-14 md:h-14 w-8 h-8 shrink-0 mr-10">
                                  <div className="md:w-14 md:h-14 w-8 h-8 rounded-full bg-gray-100 border boder-gray-100 transition flex items-center justify-center overflow-hidden">
                                    <img src="../images/community/user.png" className="w-full h-full object-cover" alt="" />
                                  </div>
                                </a>
                              </div>
                              <div className="col-span-1 row-span-1 flex w-[calc(100%-90px)] relative justify-start min-h-[30px]">
                                <div>
                                  <div className="box-border m-0 inline-grid leading-5 grid  md:gap-4 gap-x-2 items-center grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-3">
                                    <a href="" className="grid grid-cols-1 auto-cols-auto gap-3 items-center justify-star">
                                      <span className="font-medium whitespace-nowrap overflow-hidden overflow-ellipsis text-[14px] leading-6">
                                        ddq7mexeifil
                                      </span>
                                    </a>
                                    <a href="" className="grid grid-cols-1 max-sm:grid-rows-1 max-sm:row-start-2">
                                      <span className="font-normal text-gray-400 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm leading-6">
                                        @ddq7mexeifil
                                      </span>
                                    </a>
                                    <span className=" text-gray-400 whitespace-nowrap text-[14px] leading-6 grid grid-cols-1 ">
                                      Th11 7
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="md:col-span-1 col-span-2 row-span-1 max-w-[560px]">
                                <div className="w-full">
                                  <div className="max-h-[168px] max-w-[560px] relative overflow-hidden text-[14px]">
                                    <div className="m-0  break-words text-base leading-6">
                                      <p className="mx-auto text-base leading-6">
                                        {formatText(
                                          ` $BTC The flight time is very close🚀
                                      It's not the time to sell; it's the time to hold and even add to your limited supply assets, like XRP $XRP Ethereum $ETH MANA $MANA SAND $SAND and PEPE $PEPE`)}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="">
                                  <div className="max-w-[560px] mt-[10px] rounded-[8px] overflow-hidden">
                                    <div className="relative cursor-pointer w-full pt-[56%]">
                                      <img src="https://pbs.twimg.com/media/F50ONSfbgAA8wzG.jpg" alt="" className="w-full h-full absolute top-0 left-0 object-cover" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="md:col-span-1 col-span-2 row-span-1 flex justify-between items-center p-3 max-w-[560px]">
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <HiOutlineChatBubbleLeftEllipsis className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <AiOutlineRetweet className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <AiOutlineHeart className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <FiMoreHorizontal className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                              </div>
                            </div>
                            <div className="md:mt-[20px] mt-[30px] grid md:grid-cols-[72px,1fr] grid-cols-[40px,1fr] grid-rows-[auto,auto,1fr,auto] relative transition-all duration-600 ease-in-out border-b border-gray-200">
                              <div className="absolute top-0 right-0">
                                <button className="h-8 p-0 w-[84px] text-[12px] items-center bg-blue-600 hover:bg-blue-400 rounded-lg inline-flex text-white cursor-pointer justify-center font-semibold ">+ Theo dõi</button>
                              </div>
                              <div className="col-span-1 md:row-span-4 row-span-1 cursor-pointer">
                                <a href="" className="md:w-14 md:h-14 w-8 h-8 shrink-0 mr-10">
                                  <div className="md:w-14 md:h-14 w-8 h-8 rounded-full bg-gray-100 border boder-gray-100 transition flex items-center justify-center overflow-hidden">
                                    <img src="../images/community/user.png" className="w-full h-full object-cover" alt="" />
                                  </div>
                                </a>
                              </div>
                              <div className="col-span-1 row-span-1 flex w-[calc(100%-90px)] relative justify-start min-h-[30px]">
                                <div>
                                  <div className="box-border m-0 inline-grid leading-5 grid  md:gap-4 gap-x-2 items-center grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-3">
                                    <a href="" className="grid grid-cols-1 auto-cols-auto gap-3 items-center justify-star">
                                      <span className="font-medium whitespace-nowrap overflow-hidden overflow-ellipsis text-[14px] leading-6">
                                        ddq7mexeifil
                                      </span>
                                    </a>
                                    <a href="" className="grid grid-cols-1 max-sm:grid-rows-1 max-sm:row-start-2">
                                      <span className="font-normal text-gray-400 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm leading-6">
                                        @ddq7mexeifil
                                      </span>
                                    </a>
                                    <span className=" text-gray-400 whitespace-nowrap text-[14px] leading-6 grid grid-cols-1 ">
                                      Th11 7
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="md:col-span-1 col-span-2 row-span-1 max-w-[560px]">
                                <div className="w-full">
                                  <div className="max-h-[168px] max-w-[560px] relative overflow-hidden text-[14px]">
                                    <div className="m-0  break-words text-base leading-6">
                                      <p className="mx-auto text-base leading-6">
                                        {formatText(
                                          ` $BTC The flight time is very close🚀
                                      It's not the time to sell; it's the time to hold and even add to your limited supply assets, like XRP $XRP Ethereum $ETH MANA $MANA SAND $SAND and PEPE $PEPE`)}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="">
                                  <div className="max-w-[560px] mt-[10px] rounded-[8px] overflow-hidden">
                                    <div className="relative cursor-pointer w-full pt-[56%]">
                                      <img src="https://pbs.twimg.com/media/F50ONSfbgAA8wzG.jpg" alt="" className="w-full h-full absolute top-0 left-0 object-cover" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="md:col-span-1 col-span-2 row-span-1 flex justify-between items-center p-3 max-w-[560px]">
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <HiOutlineChatBubbleLeftEllipsis className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <AiOutlineRetweet className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <AiOutlineHeart className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <FiMoreHorizontal className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                              </div>
                            </div>
                            <div className="md:mt-[20px] mt-[30px] grid md:grid-cols-[72px,1fr] grid-cols-[40px,1fr] grid-rows-[auto,auto,1fr,auto] relative transition-all duration-600 ease-in-out border-b border-gray-200">
                              <div className="absolute top-0 right-0">
                                <button className="h-8 p-0 w-[84px] text-[12px] items-center bg-blue-600 hover:bg-blue-400 rounded-lg inline-flex text-white cursor-pointer justify-center font-semibold ">+ Theo dõi</button>
                              </div>
                              <div className="col-span-1 md:row-span-4 row-span-1 cursor-pointer">
                                <a href="" className="md:w-14 md:h-14 w-8 h-8 shrink-0 mr-10">
                                  <div className="md:w-14 md:h-14 w-8 h-8 rounded-full bg-gray-100 border boder-gray-100 transition flex items-center justify-center overflow-hidden">
                                    <img src="../images/community/user.png" className="w-full h-full object-cover" alt="" />
                                  </div>
                                </a>
                              </div>
                              <div className="col-span-1 row-span-1 flex w-[calc(100%-90px)] relative justify-start min-h-[30px]">

                                <div>
                                  <div className="box-border m-0 inline-grid leading-5 grid  md:gap-4 gap-x-2 items-center grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-3">
                                    <a href="" className="grid grid-cols-1 auto-cols-auto gap-3 items-center justify-star">
                                      <span className="font-medium whitespace-nowrap overflow-hidden overflow-ellipsis text-[14px] leading-6">
                                        ddq7mexeifil
                                      </span>
                                    </a>
                                    <a href="" className="grid grid-cols-1 max-sm:grid-rows-1 max-sm:row-start-2">
                                      <span className="font-normal text-gray-400 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm leading-6">
                                        @ddq7mexeifil
                                      </span>
                                    </a>
                                    <span className=" text-gray-400 whitespace-nowrap text-[14px] leading-6 grid grid-cols-1 ">
                                      Th11 7
                                    </span>
                                  </div>
                                </div >
                              </div >
                              <div className="md:col-span-1 col-span-2 row-span-1 max-w-[560px]">
                                <div className="w-full">
                                  <div className="max-h-[168px] max-w-[560px] relative overflow-hidden text-[14px]">
                                    <div className="m-0  break-words text-base leading-6">
                                      <p className="mx-auto text-base leading-6 mt-2">
                                        {formatText(
                                          ` $BTC The flight time is very close🚀
                                      It's not the time to sell; it's the time to hold and even add to your limited supply assets, like XRP $XRP Ethereum $ETH MANA $MANA SAND $SAND and PEPE $PEPE`)}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="">
                                  <div className="max-w-[560px] mt-[10px] rounded-[8px] overflow-hidden">
                                    <div className="relative cursor-pointer w-full pt-[56%]">
                                      <img src="https://pbs.twimg.com/media/F50ONSfbgAA8wzG.jpg" alt="" className="w-full h-full absolute top-0 left-0 object-cover" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="md:col-span-1 col-span-2 row-span-1 flex justify-between items-center p-3 max-w-[560px]">
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <HiOutlineChatBubbleLeftEllipsis className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <AiOutlineRetweet className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <AiOutlineHeart className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <FiMoreHorizontal className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                              </div>
                            </div >
                          </div >
                        </div >
                        <div className={`${activeTab === "follow" ? "" : "hidden"
                          }`}
                          id="for_you">
                          <div className="md:px-8 px-2 border-box m-0 cursor-pointer overflow-hidden">
                            <div className="md:mt-[20px] mt-[30px] grid md:grid-cols-[72px,1fr] grid-cols-[40px,1fr] grid-rows-[auto,auto,1fr,auto] relative transition-all duration-600 ease-in-out border-b border-gray-200">
                              <div className="absolute top-0 right-0">
                                <button className="h-8 p-0 w-[84px] text-[12px] items-center bg-blue-600 hover:bg-blue-400 rounded-lg inline-flex text-white cursor-pointer justify-center font-semibold ">+ Theo dõi</button>
                              </div>
                              <div className="col-span-1 md:row-span-4 row-span-1 cursor-pointer">
                                <a href="" className="md:w-14 md:h-14 w-8 h-8 shrink-0 mr-10">
                                  <div className="md:w-14 md:h-14 w-8 h-8 rounded-full bg-gray-100 border boder-gray-100 transition flex items-center justify-center overflow-hidden">
                                    <img src="../images/community/user.png" className="w-full h-full object-cover" alt="" />
                                  </div>
                                </a>
                              </div>
                              <div className="col-span-1 row-span-1 flex w-[calc(100%-90px)] relative justify-start min-h-[30px]">
                                <div>
                                  <div className="box-border m-0 inline-grid leading-5 grid  md:gap-4 gap-x-2 items-center grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-3">
                                    <a href="" className="grid grid-cols-1 auto-cols-auto gap-3 items-center justify-star">
                                      <span className="font-medium whitespace-nowrap overflow-hidden overflow-ellipsis text-[14px] leading-6">
                                        ddq7mexeifil
                                      </span>
                                    </a>
                                    <a href="" className="grid grid-cols-1 max-sm:grid-rows-1 max-sm:row-start-2">
                                      <span className="font-normal text-gray-400 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm leading-6">
                                        @ddq7mexeifil
                                      </span>
                                    </a>
                                    <span className=" text-gray-400 whitespace-nowrap text-[14px] leading-6 grid grid-cols-1 ">
                                      Th11 7
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="md:col-span-1 col-span-2 row-span-1 max-w-[560px]">
                                <div className="w-full">
                                  <div className="max-h-[168px] max-w-[560px] relative overflow-hidden text-[14px]">
                                    <div className="m-0  break-words text-base leading-6">
                                      <p className="mx-auto text-base leading-6">
                                        {formatText(
                                          ` $BTC The flight time is very close🚀
                                      It's not the time to sell; it's the time to hold and even add to your limited supply assets, like XRP $XRP Ethereum $ETH MANA $MANA SAND $SAND and PEPE $PEPE`)}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="">
                                  <div className="max-w-[560px] mt-[10px] rounded-[8px] overflow-hidden">
                                    <div className="relative cursor-pointer w-full pt-[56%]">
                                      <img src="https://pbs.twimg.com/media/F50ONSfbgAA8wzG.jpg" alt="" className="w-full h-full absolute top-0 left-0 object-cover" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="md:col-span-1 col-span-2 row-span-1 flex justify-between items-center p-3 max-w-[560px]">
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <HiOutlineChatBubbleLeftEllipsis className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <AiOutlineRetweet className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <AiOutlineHeart className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <FiMoreHorizontal className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                              </div>
                            </div>
                            <div className="md:mt-[20px] mt-[30px] grid md:grid-cols-[72px,1fr] grid-cols-[40px,1fr] grid-rows-[auto,auto,1fr,auto] relative transition-all duration-600 ease-in-out border-b border-gray-200">
                              <div className="absolute top-0 right-0">
                                <button className="h-8 p-0 w-[84px] text-[12px] items-center bg-blue-600 hover:bg-blue-400 rounded-lg inline-flex text-white cursor-pointer justify-center font-semibold ">+ Theo dõi</button>
                              </div>
                              <div className="col-span-1 md:row-span-4 row-span-1 cursor-pointer">
                                <a href="" className="md:w-14 md:h-14 w-8 h-8 shrink-0 mr-10">
                                  <div className="md:w-14 md:h-14 w-8 h-8 rounded-full bg-gray-100 border boder-gray-100 transition flex items-center justify-center overflow-hidden">
                                    <img src="../images/community/user.png" className="w-full h-full object-cover" alt="" />
                                  </div>
                                </a>
                              </div>
                              <div className="col-span-1 row-span-1 flex w-[calc(100%-90px)] relative justify-start min-h-[30px]">
                                <div>
                                  <div className="box-border m-0 inline-grid leading-5 grid  md:gap-4 gap-x-2 items-center grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-3">
                                    <a href="" className="grid grid-cols-1 auto-cols-auto gap-3 items-center justify-star">
                                      <span className="font-medium whitespace-nowrap overflow-hidden overflow-ellipsis text-[14px] leading-6">
                                        ddq7mexeifil
                                      </span>
                                    </a>
                                    <a href="" className="grid grid-cols-1 max-sm:grid-rows-1 max-sm:row-start-2">
                                      <span className="font-normal text-gray-400 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm leading-6">
                                        @ddq7mexeifil
                                      </span>
                                    </a>
                                    <span className=" text-gray-400 whitespace-nowrap text-[14px] leading-6 grid grid-cols-1 ">
                                      Th11 7
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="md:col-span-1 col-span-2 row-span-1 max-w-[560px]">
                                <div className="w-full">
                                  <div className="max-h-[168px] max-w-[560px] relative overflow-hidden text-[14px]">
                                    <div className="m-0  break-words text-base leading-6">
                                      <p className="mx-auto text-base leading-6">
                                        {formatText(
                                          ` $BTC The flight time is very close🚀
                                      It's not the time to sell; it's the time to hold and even add to your limited supply assets, like XRP $XRP Ethereum $ETH MANA $MANA SAND $SAND and PEPE $PEPE`)}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="">
                                  <div className="max-w-[560px] mt-[10px] rounded-[8px] overflow-hidden">
                                    <div className="relative cursor-pointer w-full pt-[56%]">
                                      <img src="https://pbs.twimg.com/media/F50ONSfbgAA8wzG.jpg" alt="" className="w-full h-full absolute top-0 left-0 object-cover" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="md:col-span-1 col-span-2 row-span-1 flex justify-between items-center p-3 max-w-[560px]">
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <HiOutlineChatBubbleLeftEllipsis className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <AiOutlineRetweet className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <AiOutlineHeart className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <FiMoreHorizontal className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                              </div>
                            </div>
                            <div className="md:mt-[20px] mt-[30px] grid md:grid-cols-[72px,1fr] grid-cols-[40px,1fr] grid-rows-[auto,auto,1fr,auto] relative transition-all duration-600 ease-in-out border-b border-gray-200">
                              <div className="absolute top-0 right-0">
                                <button className="h-8 p-0 w-[84px] text-[12px] items-center bg-blue-600 hover:bg-blue-400 rounded-lg inline-flex text-white cursor-pointer justify-center font-semibold ">+ Theo dõi</button>
                              </div>
                              <div className="col-span-1 md:row-span-4 row-span-1 cursor-pointer">
                                <a href="" className="md:w-14 md:h-14 w-8 h-8 shrink-0 mr-10">
                                  <div className="md:w-14 md:h-14 w-8 h-8 rounded-full bg-gray-100 border boder-gray-100 transition flex items-center justify-center overflow-hidden">
                                    <img src="../images/community/user.png" className="w-full h-full object-cover" alt="" />
                                  </div>
                                </a>
                              </div>
                              <div className="col-span-1 row-span-1 flex w-[calc(100%-90px)] relative justify-start min-h-[30px]">
                                <div>
                                  <div className="box-border m-0 inline-grid leading-5 grid  md:gap-4 gap-x-2 items-center grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-3">
                                    <a href="" className="grid grid-cols-1 auto-cols-auto gap-3 items-center justify-star">
                                      <span className="font-medium whitespace-nowrap overflow-hidden overflow-ellipsis text-[14px] leading-6">
                                        ddq7mexeifil
                                      </span>
                                    </a>
                                    <a href="" className="grid grid-cols-1 max-sm:grid-rows-1 max-sm:row-start-2">
                                      <span className="font-normal text-gray-400 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm leading-6">
                                        @ddq7mexeifil
                                      </span>
                                    </a>
                                    <span className=" text-gray-400 whitespace-nowrap text-[14px] leading-6 grid grid-cols-1 ">
                                      Th11 7
                                    </span>
                                  </div>
                                </div >
                              </div >
                              <div className="md:col-span-1 col-span-2 row-span-1 max-w-[560px]">
                                <div className="w-full">
                                  <div className="max-h-[168px] max-w-[560px] relative overflow-hidden text-[14px]">
                                    <div className="m-0  break-words text-base leading-6">
                                      <p className="mx-auto text-base leading-6 mt-2">
                                        {formatText(
                                          ` $BTC The flight time is very close🚀
                                      It's not the time to sell; it's the time to hold and even add to your limited supply assets, like XRP $XRP Ethereum $ETH MANA $MANA SAND $SAND and PEPE $PEPE`)}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="">
                                  <div className="max-w-[560px] mt-[10px] rounded-[8px] overflow-hidden">
                                    <div className="relative cursor-pointer w-full pt-[56%]">
                                      <img src="https://pbs.twimg.com/media/F50ONSfbgAA8wzG.jpg" alt="" className="w-full h-full absolute top-0 left-0 object-cover" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="md:col-span-1 col-span-2 row-span-1 flex justify-between items-center p-3 max-w-[560px]">
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <HiOutlineChatBubbleLeftEllipsis className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <AiOutlineRetweet className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <AiOutlineHeart className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                                <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                  <FiMoreHorizontal className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                </div>
                              </div>
                            </div >
                          </div >
                        </div >
                      </div >
                    </div >
                  </div >
                </div >
              </div >
              <div className="max-w-[350px] min-w-[280px] grow basis-0 shrink-0 m-0 hidden lg:block">
                <div className="sticky top-0 z-10 self-start">
                  <div className="border-box m-0 h-5"></div>
                  <div className="mb-4 shadow-md self-start bg-white p-2 pt-2.5 pb-2.5 rounded-[8px] box-border">
                    <div className="font-bold text-[16px] h-[28px] mb-2.5 flex items-center pt-2.5 pb-0">
                      <FcFlashOn className="text-[35px]" />&nbsp;
                      <span>
                        Các chủ đề thịnh hành
                      </span>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer h-8 px-2.5 rounded-full text-sm">
                      <small>1</small>
                      <div className="flex-1 pl-[15px] mr-1 overflow-hidden flex items-center">
                        <div className="truncate font-semibold">
                          #Facebook
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer h-8 px-2.5 rounded-full text-sm">
                      <small>2</small>
                      <div className="flex-1 pl-[15px] mr-1 overflow-hidden flex items-center">
                        <div className="truncate font-semibold">
                          #SEO
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer h-8 px-2.5 rounded-full text-sm">
                      <small>3</small>
                      <div className="flex-1 pl-[15px] mr-1 overflow-hidden flex items-center">
                        <div className="truncate font-semibold">
                          #Twitter
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer h-8 px-2.5 rounded-full text-sm">
                      <small>4</small>
                      <div className="flex-1 pl-[15px] mr-1 overflow-hidden flex items-center">
                        <div className="truncate font-semibold">
                          #Email
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer h-8 px-2.5 rounded-full text-sm">
                      <small>5</small>
                      <div className="flex-1 pl-[15px] mr-1 overflow-hidden flex items-center">
                        <div className="truncate font-semibold">
                          #Tool
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-box m-0 h-5"></div>
                </div >
              </div >

            </div >
          </div>
        </main >
      </div >
    </div >
  );
}