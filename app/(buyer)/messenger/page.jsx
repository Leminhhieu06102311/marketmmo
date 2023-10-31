"use client";
import {
  faImage,
  faPaperPlane,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

export default function messenger() {
  const scrollMessage = useRef();
  useEffect(() => {
    scrollMessage.current.scrollIntoView();
  }, []);
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-white z-50">
      <div className="flex w-full h-full">
        <div className="h-full border border-r-gray-300 border-l-0 border-b-0 border-t-0 w-full md:w-fit lg:w-[30%] ">
          <div className="flex my-3 px-5 py-3 ">
            <h2 className="font-bold text-xl text-slate-900">Tin Nhắn</h2>
          </div>
          <div className="px-5 md:hidden lg:block">
            <div className=" bg-slate-100 rounded-3xl px-3 my-2">
              <FontAwesomeIcon icon={faSearch} />
              <input
                type="text"
                placeholder="Tìm kiếm tin nhắn"
                className="bg-transparent p-2 outline-none text-slate-900"
              />
            </div>
          </div>
          <div className="py-3 overflow-y-scroll max-h-screen pl-5">
            <div className="flex-shrink-0 group block p-2 hover:bg-slate-100 rounded-lg cursor-pointer mr-2">
              <div className="flex items-center md:justify-center">
                <img
                  className="inline-block flex-shrink-0 w-14 h-14 rounded-full"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Image Description"
                />
                <div className="ml-3 py-2 md:hidden lg:block">
                  <h3 className="font-semibold text-gray-800 dark:text-white ">
                    Le Minh Hieu
                  </h3>
                  <p
                    className="text-sm font-medium text-gray-400 overflow-hidden text-ellipsis line-clamp-2"
                    style={{ WebkitBoxOrient: "vertical" }}
                  >
                    Cho mình hỏi acc này có 2fa để đăng nhập không ạ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-full w-full relative hidden md:flex-1 lg:block">
          <div className="absolute top-0 left-0 right-0 py-1 px-3 border border-b-gray-200 border-t-0 border-l-0 border-r-0 z-50 bg-white">
            <div className="flex-shrink-0 group block p-2 hover:bg-slate-100 rounded-lg cursor-pointer mr-2">
              <div className="flex items-center">
                <img
                  className="inline-block flex-shrink-0 w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Image Description"
                />
                <div className="ml-3 py-2">
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Le Minh Hieu
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[93%]  overflow-y-scroll mb-5">
            <div className="flex-shrink-0 group  p-2  rounded-lg cursor-pointer mr-2 my-24 flex justify-center items-center flex-col">
              <div className="flex items-center">
                <img
                  className="inline-block flex-shrink-0 w-14 h-14 rounded-full"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Image Description"
                />
              </div>
              <div className="ml-3 py-2">
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Le Minh Hieu
                </h3>
              </div>
              <p className="text-slate-600 text-sm">
                Hãy bắt đầu cuộc trò chuyện bằng một lời chào 😍
              </p>
            </div>
            <div className=" flex items-end">
              <div className="flex flex-col w-full">
                <div className="px-3">
                  <div className="flex gap-2 items-end">
                    <div className="flex items-center ">
                      <img
                        className="inline-block flex-shrink-0 w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        alt="Image Description"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="w-fit">
                        <p className="py-2 px-3 bg-gray-200 rounded-2xl ">
                          Chào bạn
                        </p>
                      </div>
                      <div className="w-fit">
                        <p className="py-2 px-3 bg-gray-200 rounded-2xl max-w-lg">
                          Bạn ơi cho mình hỏi là acc tiktok này bật live có vi
                          phạm gì không ạ{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 my-2">
                  <div className="flex gap-2 justify-end ">
                    <div className="flex flex-col gap-1 items-end">
                      <div className="w-fit">
                        <p className="py-2 px-3 bg-primary text-white rounded-2xl ">
                          Chào bạn
                        </p>
                      </div>
                      <div className="w-fit">
                        <p className="py-2 px-3 bg-primary text-white rounded-2xl max-w-lg">
                          Bạn ơi cho mình hỏi là acc tiktok này bật live có vi
                          phạm gì không ạ{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <div className="flex gap-2 items-end">
                    <div className="flex items-center ">
                      <img
                        className="inline-block flex-shrink-0 w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        alt="Image Description"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="w-fit">
                        <p className="py-2 px-3 bg-gray-200 rounded-2xl ">
                          Chào bạn
                        </p>
                      </div>
                      <div className="w-fit">
                        <p className="py-2 px-3 bg-gray-200 rounded-2xl max-w-lg">
                          Bạn ơi cho mình hỏi là acc tiktok này bật live có vi
                          phạm gì không ạ{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 my-2">
                  <div className="flex gap-2 justify-end ">
                    <div className="flex flex-col gap-1 items-end">
                      <div className="w-fit">
                        <p className="py-2 px-3 bg-primary text-white rounded-2xl ">
                          Chào bạn
                        </p>
                      </div>
                      <div className="w-fit">
                        <p className="py-2 px-3 bg-primary text-white rounded-2xl max-w-lg">
                          Bạn ơi cho mình hỏi là acc tiktok này bật live có vi
                          phạm gì không ạ{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <div className="flex gap-2 items-end">
                    <div className="flex items-center ">
                      <img
                        className="inline-block flex-shrink-0 w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        alt="Image Description"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="w-fit">
                        <p className="py-2 px-3 bg-gray-200 rounded-2xl ">
                          Chào bạn
                        </p>
                      </div>
                      <div className="w-fit">
                        <p className="py-2 px-3 bg-gray-200 rounded-2xl max-w-lg">
                          Bạn ơi cho mình hỏi là acc tiktok này bật live có vi
                          phạm gì không ạ{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 my-2">
                  <div className="flex gap-2 justify-end ">
                    <div className="flex flex-col gap-1 items-end">
                      <div className="w-fit">
                        <p className="py-2 px-3 bg-primary text-white rounded-2xl ">
                          Chào bạn
                        </p>
                      </div>
                      <div className="w-fit">
                        <p className="py-2 px-3 bg-primary text-white rounded-2xl max-w-lg">
                          Bạn ơi cho mình hỏi là acc tiktok này bật live có vi
                          phạm gì không ạ{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref={scrollMessage} />
          </div>
          <div className="absolute bottom-0 right-0 left-0 z-50">
            <div className="flex gap-2 items-center bg-white px-3">
              <div className="flex items-center h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer justify-center">
                <FontAwesomeIcon icon={faImage} />
              </div>
              <div className=" w-full">
                <div className=" bg-slate-100 rounded-3xl px-3 my-2">
                  <input
                    type="text"
                    placeholder="Aa"
                    className="bg-transparent p-2 outline-none text-slate-900 w-full"
                  />
                </div>
              </div>
              <div className="flex items-center h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer justify-center">
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
