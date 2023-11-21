"use client";

import { sendToEmail } from "@/services/user";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { toast } from "react-toastify";

export default function forgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [messageErrorLogin, setMessageErrorLogin] = useState('');
  const [notification, setNotification] = useState(false);

  const router = useRouter()

  const handleEmailChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError(!emailRegex.test(value));
  };

  const handleSenCode = () => {
    toast.promise(sendToEmail(email), {
      pending: {
        render() {
          return "Đang gửi mã tới email vui lòng đợi!"
        },
      },
      success: {
        render() {
          router.push("/recover/recover-success");
          return "Gửi mã thành công"
        },
        // other options
        icon: "🟢",
      },
      error: {
        render: ({ data }) => {
          const error: any = data
          if (error.response && error.response.status === 401) {
            setMessageErrorLogin(error.response.data.message)
            setNotification(true);
            console.log(error);
          } else {
            setMessageErrorLogin(error.response.data.message)
            setNotification(true);
            console.error("Lỗi ", error);
          }
          return <div>{error.response.data.message}</div>
        }
      }
    })
  }

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-10 bg-white">
      <div className="flex flex-row max-w-xxs mx-auto h-full lg:m-0 lg:items-stretch truncate lg:h-screen lg:max-w-7xl md:max-w-3xl md:m-auto lg:items-center md:items-center">
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
          <div className=" flex justify-center lg:items-center md:items-center lg:mt-0 mt-20 grow m-0 p-0  pt-5  ">
            <div className="lg:max-w-[440px] md:max-w-[440px] max-w-[360px] lg:max-h-[422px]  ">
              <div className="max-w-[327px] max-h-[204.12px] top-0 mx-auto">
                <div className="w-full h-full relative ">
                  <svg
                    width="327"
                    height="191"
                    viewBox="0 0 327 191"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M51.1579 175.824C51.1579 175.824 4.73661 156.247 0.257735 104.233C-4.22114 52.218 51.1579 49.4213 51.1579 49.4213C51.1579 49.4213 91.4678 48.9742 126.667 42.1529C161.866 35.3317 201.573 9.71474 201.573 9.71474C201.573 9.71474 267.613 -22.3827 299.498 35.3317C331.382 93.046 297.993 157.695 261.757 169.982C231.91 180.104 155.734 206.31 51.1579 175.824Z"
                      fill="#C0E5F0"
                    />
                    <path
                      d="M217.309 150.362C223.154 150.362 227.892 147.734 227.892 144.492C227.892 141.25 223.154 138.622 217.309 138.622C211.464 138.622 206.726 141.25 206.726 144.492C206.726 147.734 211.464 150.362 217.309 150.362Z"
                      fill="#0E7F3D"
                    />
                    <path
                      d="M297.61 52.0199L303.153 81.3136C303.437 82.8113 305.389 83.2088 306.241 81.9453L313.417 71.284L325.768 67.7208C327.23 67.2949 327.45 65.3146 326.108 64.5835L299.924 50.3376C298.752 49.6988 297.361 50.7138 297.61 52.0199Z"
                      fill="#EDB82C"
                    />
                    <path
                      d="M227.509 37.5968C232.147 37.5968 235.906 33.8373 235.906 29.1998C235.906 24.5622 232.147 20.8027 227.509 20.8027C222.872 20.8027 219.112 24.5622 219.112 29.1998C219.112 33.8373 222.872 37.5968 227.509 37.5968Z"
                      fill="#32B768"
                    />
                    <path
                      d="M14.1411 152.754C21.0484 152.754 26.6478 147.155 26.6478 140.247C26.6478 133.34 21.0484 127.741 14.1411 127.741C7.23376 127.741 1.63428 133.34 1.63428 140.247C1.63428 147.155 7.23376 152.754 14.1411 152.754Z"
                      fill="#0E7F3D"
                    />
                    <path
                      d="M84.3486 20.7446C84.0433 19.5379 81.7365 19.0127 78.6417 19.2682C78.0384 19.3179 77.4705 18.9772 77.2292 18.4235C75.987 15.5772 74.4326 13.7885 73.233 14.0937C72.0263 14.3989 71.5011 16.7058 71.7566 19.8005C71.8063 20.4039 71.4656 20.9717 70.9119 21.2131C68.0656 22.4552 66.2769 24.0097 66.5821 25.2093C66.8873 26.4159 69.1942 26.9412 72.289 26.6857C72.8923 26.636 73.4601 26.9767 73.7015 27.5303C74.9436 30.3766 76.4981 32.1654 77.6977 31.8601C78.8972 31.5549 79.4296 29.2481 79.1741 26.1533C79.1244 25.55 79.4651 24.9821 80.0187 24.7408C82.8651 23.5057 84.6538 21.9513 84.3486 20.7446Z"
                      fill="#EDB82C"
                    />
                  </svg>
                  <img
                    className="max-w-[204px] max-h-44 top-[-15px] left-12 absolute"
                    src="./images/recover/sad1.png"
                  />
                </div>
              </div>
              <div className="mt-4 max-w-[360px] md:max-w-[440px] lg:max-w-[440px]">
                <div className="  text-gray-700 text-xl font-bold leading-9">
                  Quên mật khẩu
                </div>
                <div className="text-gray-400 text-base font-medium leading-[21px] whitespace-pre-line">
                  Vui lòng nhập email đã đăng ký của bạn bên dưới
                </div>
              </div>
              {notification && (
                <div className="pb-2">
                  <p className="text-sm text-red-500">
                    {messageErrorLogin}
                  </p>
                </div>
              )}
              <div className="lg:max-w-[440px] md:max-w-[440px] max-w-[360px] w-full mt-3">
                <label
                  htmlFor="email"
                  className="block font-semibold leading-6 text-[#374151] text-sm "
                >
                  Địa chỉ email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={`block rounded-lg  h-14 focus:outline-none lg:w-[440px] md:w-[440px] w-[360px]  ${error
                      ? "border border-red-500 focus:ring-red-100"
                      : "hover:bg-white border hover:border-blue-500 hover:ring hover:ring-blue-100 focus:ring focus:ring-blue-100 focus:border-blue-500"
                      } pl-4 focus:bg-white `}
                    onChange={handleEmailChange}
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-1">
                      Vui lòng nhập đúng định dạng email
                    </p>
                  )}
                </div>
                <div className="mt-2">
                  <span className="text-gray-400 text-sm">Nhớ mật khẩu?</span>{" "}
                  <Link href="/login" className="text-blue-600 text-sm ">
                    Đăng nhập
                  </Link>
                </div>
                <div>
                  <button className="rounded-lg bg-primary text-white font-medium  md:text-base mt-5 text-sm h-14  hover:bg-blue-500 lg:w-[440px] md:w-[440px] w-[360px]" onClick={handleSenCode}>
                    Xác nhận
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
