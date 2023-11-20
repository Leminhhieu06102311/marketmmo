"use client";

import {
  faChevronDown,
  faChevronRight,
  faEllipsis,
  faHashtag,
  faRss,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Feed() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isContentOpen, setIscontentOpen] = useState(true);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // setIscontentOpen(!isContentOpen);
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
  };
  return (
    <div className=" mx-auto max-w-xxs  md:max-w-3xl lg:max-w-8xl flex relative min-h-[calc-108px] m-auto pointer-events-auto">
      <div className="grow-[3] shrink basis-0 relative ">
        <div className="pt-4 pb-4 text-xs font-medium lg:p-4">
          <a href="#" className="text-[#a6b0c3]">
            Home
          </a>
          <FontAwesomeIcon
            icon={faChevronRight}
            size="xs"
            className="text-current inline-block ml-2 mr-2"
          />
          <span>Community</span>
        </div>
        <div className="flex flex-row justify-between">
          <div className="grow-[2] shrink basis-0 max-w-5xl">
            <div className="mb-4">
              <h2
                className="text-2xl font-bold flex items-center m-0 pl-4 pr-4 pt-2 cursor-pointer justify-between lg:hidden"
                onClick={toggleMenu}
              >
                Danh sách đề xuất
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-[#a6b0c3]"
                />
              </h2>
              <div className="m-0">
                <div className=" pt-[15px] pl-4 pr-4 pb-5 grid  grid-cols-3 gap-4 border-b-[1px] min-h-[80px]">
                  <div className="col-span-2  flex items-center gap-x-3 ">
                    <a href="#" className=" ">
                      <img
                        src="https://s2.coinmarketcap.com/static/cloud/img/avatars/default.png"
                        alt=""
                        className="w-8 h-8 object-cover "
                      />
                    </a>
                    <div className=" font-semibold text-base">
                      <span>Khách</span>
                    </div>
                  </div>
                  <div className="col-span-3  min-h-[100px]  mb-4">
                    <textarea
                      name=""
                      id=""
                      placeholder="Bạn cảm thấy thị trường ngày hôm nay như thế nào? Hãy chia sẻ những ý tưởng của bạn ở đây..."
                      className="block rounded-lg w-full h-full pt-2 md:pt-4 hover:border hover:border-blue-200 focus:outline-none focus:border-2 focus:border-blue-200 pl-4 bg-[#eff2f5]"
                      rows={4}
                    />
                  </div>
                  <div className="col-span-2 "></div>
                  <div className="col-span-1 flex justify-end">
                    <button className="bg-primary text-white font-medium rounded-lg h-8 w-20">
                      Đăng
                    </button>
                  </div>
                </div>
              </div>
              <div className="sticky top-0 box-border z-1 m-0 pt-8 pb-8 pl-4 pr-4">
                <div className="relative">
                  <input
                    type="text"
                    className="relative border rounded-lg bg-[#eff2f5] max-w-full outline-none pl-4 pr-4 w-full h-12 line-height-[21px]"
                    name=""
                    placeholder="Search posts or users"
                    id=""
                  />
                </div>
              </div>
              <div className="w-full relative">
                <div className="transform translate-y-0 absolute top-0 left-0 w-full">
                  <div className="px-4 box-border m-0 cursor-pointer overflow-hidden">
                    <div className="mt-2 mb-4 relative grid transition-all duration-600 ease-linear border-b border-solid border-[#eff2f5]">
                      <div className="flex flex-col gap-y-4">
                        <a href="#" className=" flex items-center gap-x-3 ">
                          <img
                            src="https://s2.coinmarketcap.com/static/cloud/img/avatars/default.png"
                            alt=""
                            className="w-8 h-8 object-cover "
                          />
                          <p className="font-semibold">AnhTuCrypto</p>
                        </a>
                        <div className="userText">
                          <p className="your-text-element">
                            {formatText(
                              "#abc On-Balance Volume (OBV) coordinates with $BTC parallel channel breakout and $BTC bottoming. #BTC #Crypto Hey friends, Video version 🙌🏼 Come to support my @YouTube channel, like and subscribe me 🤝 Much Appreciated ❤️"
                            )}
                          </p>
                          <div className="max-w-[560px] mt-2.5 mb-2.5 rounded-lg overflow-hidden">
                            <div>
                              <img
                                src="https://pbs.twimg.com/media/F50ONSfbgAA8wzG.jpg"
                                alt=""
                                className=""
                              />
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="flex gap-x-2">
                              <div>
                                <button className="border rounded-full flex gap-x-2 p-2 text-[#616e85]">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    className="bi bi-hand-thumbs-up"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                  </svg>
                                  63
                                </button>
                              </div>
                              <div>
                                <button className="border rounded-full flex gap-x-2 p-2 text-[#616e85]">
                                  <FontAwesomeIcon icon={faHeart} size="xl" />
                                  63
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 relative grid transition-all duration-600 ease-linear border-b border-solid border-[#eff2f5]">
                      <div className="flex flex-col gap-y-4">
                        <a href="#" className=" flex items-center gap-x-3 ">
                          <img
                            src="https://s2.coinmarketcap.com/static/cloud/img/avatars/default.png"
                            alt=""
                            className="w-8 h-8 object-cover "
                          />
                          <p className="font-semibold">AnhTuCrypto</p>
                        </a>
                        <div className="userText">
                          <p className="your-text-element">
                            {formatText(
                              "#abc On-Balance Volume (OBV) coordinates with $BTC parallel channel breakout and $BTC bottoming. #BTC #Crypto Hey friends, Video version 🙌🏼 Come to support my @YouTube channel, like and subscribe me 🤝 Much Appreciated ❤️"
                            )}
                          </p>
                          <div className="max-w-[560px] mt-2.5 mb-2.5 rounded-lg ">
                            <div className="w-full h-full cursor-pointer">
                              <img
                                src="https://pbs.twimg.com/media/F50ONSfbgAA8wzG.jpg"
                                alt=""
                                className="object-cover w-full"
                              />
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="flex gap-x-2">
                              <div>
                                <button className="border rounded-full flex gap-x-2 p-2 text-[#616e85]">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    className="bi bi-hand-thumbs-up"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                  </svg>
                                  63
                                </button>
                              </div>
                              <div>
                                <button className="border rounded-full flex gap-x-2 p-2 text-[#616e85]">
                                  <FontAwesomeIcon icon={faHeart} size="xl" />
                                  63
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="fixed inset-0 bg-[rgba(10,30,66,0.4)] flex justify-center items-center transition-all duration-300 ease-in-out top-0 left-0 transform-none shadow-lg ">
          <div className="h-screen w-screen max-h-screen max-h-[100vh] flex flex-col transition-height duration-300 ease-in-out max-w-screen bg-white rounded-lg overflow-hidden">
            <div className="p-4 text-center text-base leading-6 font-semibold relative flex-shrink-0 z-1010 shadow-sm">
              Cộng đồng
              <FontAwesomeIcon
                icon={faXmark}
                size="xl"
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-[#a6b0c3] text-xs cursor-pointer z-10 w-6 h-6"
              />
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
                <FontAwesomeIcon
                  icon={faRss}
                  size="xl"
                  className="text-black "
                />
                Bảng tin
              </a>
              <a
                href="#"
                className="text-black  text-base font-medium flex items-center gap-x-4"
              >
                <FontAwesomeIcon
                  icon={faHashtag}
                  // style={{ color: "#ffffff" }}
                  size="xl"
                  className="font-extralight text-[#a6b0c3]"
                />
                Chủ đề
              </a>
              <a
                href="#"
                className="text-black  text-base font-medium flex items-center gap-x-4"
              >
                <svg
                  fill="#a6b0c3"
                  className="font-extralight "
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 384 512"
                >
                  <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                </svg>
                Bài viết
              </a>
              <a
                href="#"
                className="text-black  text-base font-medium flex items-center gap-x-4"
              >
                <svg
                  fill="#a6b0c3"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                </svg>
                Thông báo
              </a>
              <a
                href="#"
                className="text-black  text-base font-medium flex items-center gap-x-4"
              >
                <svg
                  fill="#a6b0c3"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 448 512"
                >
                  <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                </svg>
                Trang của tôi
              </a>
              <a
                href="#"
                className="text-black  text-base font-medium flex items-center gap-x-4"
              >
                <FontAwesomeIcon
                  icon={faEllipsis}
                  size="xl"
                  className="font-extralight text-[#a6b0c3]"
                />
                Xem thêm
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 bg-[rgba(10,30,66,0.4)] flex justify-center items-center transition-all duration-300 ease-in-out top-0 left-0 translate-x-[-100%] shadow-lg">
          <div className="h-screen w-screen max-h-screen max-h-[100vh] flex flex-col transition-height duration-300 ease-in-out max-w-screen bg-white rounded-lg overflow-hidden">
            <div className="p-4 text-center text-base leading-6 font-semibold relative flex-shrink-0 z-1010 shadow-sm">
              Community
              <FontAwesomeIcon
                icon={faXmark}
                size="xl"
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-[#a6b0c3] text-xs cursor-pointer z-10 w-6 h-6"
              />
            </div>
            <div className="flex justify-between items-center ">
              <div className="text-black text-xl font-semibold">Community</div>
            </div>
            <div className="flex flex-col items-start gap-y-11 bg-white absolute left-0 md:left-20 top-20 h-full w-64 transform transition-transform duration-300 ease-in-out translate-x-0">
              <a
                href="#"
                className="text-black  font-semibold text-base text-primary flex items-center gap-x-4"
              >
                <FontAwesomeIcon
                  icon={faRss}
                  size="xl"
                  className="text-black "
                />
                Feed
              </a>
              <a
                href="#"
                className="text-black  text-base font-medium flex items-center gap-x-4"
              >
                <FontAwesomeIcon
                  icon={faHashtag}
                  // style={{ color: "#ffffff" }}
                  size="xl"
                  className="font-extralight text-[#a6b0c3]"
                />
                Topics
              </a>
              <a
                href="#"
                className="text-black  text-base font-medium flex items-center gap-x-4"
              >
                <svg
                  fill="#a6b0c3"
                  className="font-extralight "
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 384 512"
                >
                  <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                </svg>
                Article
              </a>
              <a
                href="#"
                className="text-black  text-base font-medium flex items-center gap-x-4"
              >
                <svg
                  fill="#a6b0c3"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                </svg>
                Notifications
              </a>
              <a
                href="#"
                className="text-black  text-base font-medium flex items-center gap-x-4"
              >
                <svg
                  fill="#a6b0c3"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 448 512"
                >
                  <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                </svg>
                My Page
              </a>
              <a
                href="#"
                className="text-black  text-base font-medium flex items-center gap-x-4"
              >
                <FontAwesomeIcon
                  icon={faEllipsis}
                  size="xl"
                  className="font-extralight text-[#a6b0c3]"
                />
                More
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
