"use client";

import { useState, useEffect } from "react";
import Modal from "./registerForm";

export default function register() {
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
    <div className="flex flex-row items-stretch truncate h-screen	 ">
      <section className="w-450px grow-0 max-lg:w-300px max-md:hidden max-sm:hidden">
        <div className="h-full flex flex-col justify-between ">
          <video
            playsInline
            className="w-full h-full object-cover overflow-clip"
            src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </section>
      <section className="flex flex-col flex-1 overflow-auto w-full ">
        <div className=" flex justify-start items-center grow m-0 p-0 m-0 pt-8 pr-16 pl-16 max-sm:pl-0 max-md:pl-0 max-lg:pl-10">
          <div className="ml-28  w-full max-w-440 max-sm:max-w-max ">
            <h2 className="font-bold text-2xl mb-10 max-sm:text-base">
              Sign up to Market MMO
            </h2>
            <div id="content">
              <div className="flex m-0 w-full">
                <button className="inline-flex items-center justify-center border rounded-lg w-full p-2 h-16 font-normal cursor-pointer bg-black text-white max-sm:text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    role="img"
                    className="icon mr-4"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.64 9.20419C17.64 8.56601 17.5827 7.95237 17.4764 7.36328H9V10.8446H13.8436C13.635 11.9696 13.0009 12.9228 12.0477 13.561V15.8192H14.9564C16.6582 14.2524 17.64 11.9451 17.64 9.20419Z"
                      fill="#4285F4"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z"
                      fill="#34A853"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40664 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z"
                      fill="#EA4335"
                    ></path>
                  </svg>
                  Sign up with Google
                </button>
              </div>
              <div className="flex items-center justify-between mt-6 mb-6 text-zinc-400">
                <hr className="w-5/12 " />
                or
                <hr className="w-5/12" />
              </div>
              <div className="flex m-0 w-full max-sm:text-sm">
                <button
                  className="inline-flex items-center justify-center border rounded-lg w-full p-2 h-16 font-normal cursor-pointer"
                  onClick={() => {
                    handleShow();
                  }}
                >
                  Continue with email
                </button>
              </div>
            </div>
            {show && <Modal onClose={() => setShow(false)} />}

            <p className="font-normal text-center mt-5 max-sm:text-sm">
              Already have an account?{" "}
              <a href="#" className="underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
