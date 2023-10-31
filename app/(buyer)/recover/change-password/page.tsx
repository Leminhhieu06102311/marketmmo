"use client";

import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

  const handlePasswordChange = (e: { target: { value: any } }) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: { target: { value: any } }) => {
    setConfirmPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    setErrorPassword(password !== confirmPassword);
  }, [password, confirmPassword]);
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-10 bg-white">
      <div className="flex flex-row max-w-xxs mx-auto items-center h-full lg:m-0 lg:items-stretch truncate lg:h-screen lg:max-w-7xl md:max-w-3xl md:m-auto">
        <section className="hidden lg:w-[450px] lg:grow-0 lg:block  ">
          <div className="lg:h-full lg:flex lg:flex-col lg:justify-between">
            <video
              playsInline
              className="lg:w-full lg:h-full lg:object-cover lg:overflow-clip"
              src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </section>
        <section className="flex flex-col flex-1 overflow-auto w-full  ">
          <div className=" flex justify-center items-center grow m-0 p-0   ">
            <div className=" ">
              <div className="max-w-[327px] max-h-[204.12px] top-0  ">
                <div className="">
                  <div className="  text-gray-700 text-xl font-bold leading-9 	">
                    Thay đổi mật khẩu mới
                  </div>
                  <div className="text-gray-400 text-base font-medium leading-[21px] ">
                    Nhập mật khẩu khác với mật khẩu trước đó
                  </div>
                </div>
                <div className="w-full h-full relative mx-auto">
                  <svg
                    width="306"
                    height="229"
                    viewBox="0 0 306 229"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M10.0888 105.148C10.0888 105.148 8.67981 28.6398 103.555 41.4451C183.89 52.2797 155.406 56.4468 205.495 53.5347C217.198 52.8581 262.962 36.9446 281.417 50.5638C304.607 67.6735 327.465 127.141 269.322 188.638C200.837 261.067 51.6261 189.295 51.6261 189.295C51.6261 189.295 7.76979 161.87 10.0888 105.148Z"
                      fill="#C0E5F0"
                    />
                    <path
                      d="M25.1655 111.27C24.2088 109.58 20.5074 109.741 15.9565 111.404C15.0713 111.726 14.0789 111.449 13.4799 110.715C10.44 106.933 7.35541 104.886 5.6656 105.834C3.97578 106.79 4.13674 110.492 5.79973 115.043C6.1216 115.928 5.84442 116.92 5.11127 117.519C1.33825 120.559 -0.718161 123.644 0.229565 125.334C1.18623 127.023 4.88772 126.863 9.4386 125.2C10.3237 124.878 11.3162 125.155 11.9152 125.888C14.9551 129.661 18.0397 131.717 19.7295 130.77C21.4193 129.813 21.2584 126.112 19.5954 121.561C19.2735 120.676 19.5507 119.683 20.2838 119.084C24.0658 116.044 26.1222 112.969 25.1655 111.27Z"
                      fill="#EDB82C"
                    />
                    <path
                      d="M275.616 36.4888C276.098 34.6113 273.318 32.1615 268.883 30.1945C268.016 29.81 267.497 28.9249 267.578 27.9861C268.007 23.1581 267.202 19.537 265.325 19.0542C263.447 18.5714 260.997 21.352 259.03 25.7867C258.646 26.6539 257.761 27.1725 256.822 27.092C251.994 26.6629 248.373 27.4675 247.89 29.3451C247.407 31.2227 250.188 33.6725 254.623 35.6395C255.49 36.0239 256.008 36.909 255.928 37.8478C255.499 42.6759 256.303 46.2969 258.181 46.7797C260.059 47.2625 262.508 44.4819 264.475 40.0473C264.86 39.18 265.745 38.6614 266.684 38.7419C271.512 39.1711 275.133 38.3664 275.616 36.4888Z"
                      fill="#E06738"
                    />
                    <path
                      d="M267.98 162.492C273.595 162.492 278.146 157.941 278.146 152.326C278.146 146.712 273.595 142.16 267.98 142.16C262.366 142.16 257.815 146.712 257.815 152.326C257.815 157.941 262.366 162.492 267.98 162.492Z"
                      fill="#32B768"
                    />
                    <rect
                      x="40"
                      width="224"
                      height="229"
                      fill="url(#pattern0)"
                    />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_376_567"
                          transform="matrix(0.00199672 0 0 0.00195312 -0.0111607 0)"
                        />
                      </pattern>
                    </defs>
                  </svg>

                  <img
                    className="max-w-[204px] max-h-44 top-1 left-[70px] absolute"
                    src="../images/recover/funny.png"
                  />
                </div>
              </div>
              <div className="lg:max-w-[440px] md:max-w-[440px] max-w-[360px] mt-20">
                <label
                  htmlFor="password"
                  className="block md:text-base font-semibold leading-6 text-gray-900 text-sm"
                >
                  Mật khẩu
                </label>
                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="appearance-none rounded-lg lg:w-[440px] md:w-[440px] w-[360px] h-14 hover:bg-white border hover:border-blue-500 focus:border-blue-500 hover:transition hover:duration-300 hover:ring hover:ring-blue-100 focus:ring focus:ring-blue-100 focus:outline-none pl-4 pr-10 focus:bg-white"
                    onChange={handlePasswordChange}
                    value={password}
                  />
                  {password && (
                    <div
                      className="absolute top-3 right-1 px-2 py-1 cursor-pointer"
                      onClick={toggleShowPassword}
                    >
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="lg:max-w-[440px] md:max-w-[440px] max-w-[360px] relative mt-4">
                <label
                  htmlFor="confirmPassword"
                  className="block md:text-base font-semibold leading-6 text-gray-900 text-sm"
                >
                  Nhập lại mật khẩu
                </label>
                <div className="mt-2 relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className={`block rounded-lg lg:w-[440px] md:w-[440px] w-[360px] h-14 focus:outline-none appearance-none ${
                      errorPassword
                        ? "border border-red-500 focus:ring-red-100"
                        : "hover:bg-white border hover:border-blue-500 hover:ring hover:border hover:ring-blue-100 focus:ring focus:ring-blue-100 "
                    } pl-4 pr-10 focus:bg-white`}
                    onChange={handleConfirmPasswordChange}
                    value={confirmPassword}
                  />
                  {confirmPassword && (
                    <div
                      className="absolute top-3 right-1 px-2 py-1 cursor-pointer"
                      onClick={toggleShowConfirmPassword}
                    >
                      <FontAwesomeIcon
                        icon={showConfirmPassword ? faEyeSlash : faEye}
                      />
                    </div>
                  )}
                  {errorPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      Mật khẩu không khớp
                    </p>
                  )}
                </div>
              </div>
              <div className="lg:max-w-[440px] md:max-w-[440px] max-w-[360px] mt-3">
                <div>
                  <button className="rounded-lg bg-primary text-white font-medium lg:w-[440px] md:w-[440px] w-[360px] md:text-base mt-5 text-sm h-14  hover:bg-blue-500">
                    Đặt lại mật khẩu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
