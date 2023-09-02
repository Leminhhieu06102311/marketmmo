export default function login() {
  return (
    <div className="flex flex-row lg:m-0 lg:items-stretch truncate lg:h-screen lg:max-w-7xl md:max-w-3xl md:m-auto max-w-xxs mx-auto">
      <section className="hidden lg:w-450px lg:grow-0 lg:block  ">
        <div className="lg:h-full lg:flex lg:flex-col lg:justify-between ">
          <video
            playsInline
            className="lg:w-full lg:h-full lg:object-cover lg:overflow-clip "
            src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </section>
      <section className="flex flex-col flex-1 overflow-auto w-full  ">
        <div className=" flex justify-center items-center grow m-0 p-0 m-0 pt-8  ">
          <div className="lg:ml-28  w-full max-w-440 ">
            <h2 className="font-bold md:text-2xl mb-10 text-base">
              Đăng nhập Market MMO
            </h2>
            <div className="flex m-0 w-full ">
              <button className="inline-flex items-center justify-center border rounded-full w-full pt-2 pb-2  md:text-base font-medium cursor-pointer text-sm h-14 ">
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
                Đăng nhập với Google
              </button>
            </div>
            <div className="flex items-center font-light justify-between mt-6 mb-6 text-zinc-400 text-sm md:text-base">
              <hr className="w-1/5 " />
              hoặc đăng nhập với Email
              <hr className="w-1/5" />
            </div>
            <div>
              <div>
                <fieldset className="flex flex-col mb-4">
                  <label
                    htmlFor=""
                    className="mt-3.5 mb-1 font-semibold md:text-base text-sm"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="rounded-lg h-14  hover:bg-white border border-2 hover:transition hover:duration-30 hover:ring hover:ring-pink-100 focus:ring focus:ring-pink-100 focus:outline-none pl-4     "
                    name=""
                    id=""
                  />
                </fieldset>
                <fieldset className="flex flex-col mb-4">
                  <label
                    htmlFor=""
                    className=" flex justify-between mt-3.5 mb-1 md:text-base text-sm font-semibold"
                  >
                    Mật khẩu
                    <a href="#" className="font-normal underline text-sm">
                      Quên mật khẩu?
                    </a>
                  </label>
                  <input
                    type="text"
                    className="rounded-lg h-14  hover:bg-white border border-2 hover:transition hover:duration-30 hover:ring hover:ring-pink-100 focus:ring focus:ring-pink-100 focus:outline-none pl-4     "
                    name=""
                    id=""
                  />
                </fieldset>
              </div>
              <input
                type="submit"
                className="rounded-full bg-primary text-white font-medium w-full md:text-base mt-5 text-sm h-14  hover:bg-blue-500"
                value={"Đăng nhập"}
                name=""
                id=""
              />
              <p className="font-normal text-center mt-5 text-sm">
                Chưa có tài khoản?{" "}
                <a href="#" className="underline ">
                  Đăng ký ngay
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
