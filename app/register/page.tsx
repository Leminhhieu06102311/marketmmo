"use client";

import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import Modal from "./registerForm";
import Link from "next/link";

export default function Register() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  useEffect(() => {
    if (show) {
      const content = document.getElementById("content");
      if (content) {
        // Kiểm tra xem phần tử có tồn tại không trước khi thực hiện thay đổi
        content.classList.add("hidden");
      }
    } else {
      const content = document.getElementById("content");
      if (content) {
        // Kiểm tra xem phần tử có tồn tại không trước khi thực hiện thay đổi
        content.classList.remove("hidden");
      }
    }
  }, [show]);

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-10 bg-white">
      <div className="flex flex-row items-stretch truncate h-screen	lg:max-w-7xl md:max-w-3xl md:m-auto max-w-xxs mx-auto lg:m-0">
        <section className="lg:w-[450px] lg:grow-0 hidden lg:block">
          <div className="lg:h-full lg:flex lg:flex-col lg:justify-between ">
            <video
              playsInline
              className="lg:w-full lg:h-full lg:object-cover lg:overflow-clip"
              src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </section>
        <section className="flex flex-col flex-1 overflow-auto w-full ">
          <div className=" flex justify-center items-center grow m-0 p-0 m-0 pt-8 lg:pl-10">
            <div className="lg:ml-28  w-full max-w-[440px] ">
              <h2 className="font-bold md:text-2xl mb-10 text-2xl lg:text-3xl">
                Đăng ký Market MMO
              </h2>
              <div id="content">
                <div className="flex m-0 w-full justify-center mt-8">
                  <button className="inline-flex items-center justify-center border rounded-full w-full  pl-2 pr-2 h-14 font-medium cursor-pointer bg-white text-black text-sm md:text-base ">
                    <FcGoogle className="text-[20px] mr-2" />
                    Đăng ký với Google
                  </button>
                </div>
                <div className="flex items-center font-light justify-between mt-6 mb-6 text-zinc-400 w-10/12 m-auto md:w-full">
                  <hr className="w-5/12 " />
                  hoặc
                  <hr className="w-5/12" />
                </div>
                <div className="flex m-0 w-full justify-center text-sm md:text-base">
                  <button
                    className="inline-flex items-center justify-center border bg-primary text-white rounded-full w-full  pl-2 pr-2 h-14 font-medium cursor-pointer  hover:bg-blue-500"
                    onClick={() => {
                      handleShow();
                    }}
                  >
                    Tiếp tục với Email
                  </button>
                </div>
              </div>
              {show && <Modal onClose={() => setShow(false)} />}

              <p className="font-normal text-center mt-5 text-sm md:text-base">
                Đã có tài khoản?{" "}
                <Link href="/login" className="underline">
                  Đăng nhập
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
