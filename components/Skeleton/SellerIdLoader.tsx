import ProductLoader from "./ProductLoader";

export default function SellerIdLoader() {
  return (
    <>
      <div className="">
        <div className="max-w-xxs mx-auto md:max-w-3xl md:px-0 lg:max-w-full pt-12 lg:px-10">
          <div className="mb-8 md:mb-0 lg:mb-0">
            <div className="lg:flex lg:gap-x-5 ">
              <div className="lg:items-center my-3 lg:w-[427px]">
                <div className="w-auto md:block md:w-auto my-3 mx-0 mb-8 lg:flex">
                  {" "}
                  <div className="flex justify-center md:flex lg:block">
                    {" "}
                    <div
                      className="items-center bg-gray-200 animate-pulse mb-5 w-[80px] h-[80px] md:w-[80px] md:h-[80px] lg:w-[80px] lg:h-[80px] lg:mr-5 rounded-[50%] shadow-md"
                    />
                  </div>
                  <div className="items-start">
                    <div className="">
                      <h1 className="text-2xl text-center bg-gray-200 animate-pulse rounded-2xl text-gray-200 font-semibold md:text-2xl md:text-center lg:text-[26px] lg:text-left  ">
                        <div>
                          <h1>chauhaongluan</h1>
                        </div>
                      </h1>
                      <div className="flex items-center justify-center md:justify-center lg:justify-start gap-2 bg-gray-200 animate-pulse rounded-2xl text-gray-200 mt-1">
                        <p className="text-[15px] font-medium">
                          <div>Đang hoạt động</div>
                        </p>
                      </div>
                    </div>
                    <div className="leading-10">
                      {" "}
                      <div className="flex h-5 mt-1 bg-gray-200 animate-pulse rounded-2xl text-gray-200 justify-center leading-16 gap-x-4 font-inter text-[15px] md:justify-center lg:justify-start">
                        <p className="font-medium">
                          <span className="font-semibold"></span> 
                        </p>
                        <p className="font-medium">
                          <span className="font-semibold"></span> 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:gap-x-16 md:justify-center md:flex items-baseline my-3 mx-0 mb-8 lg:flex box-border m-0 lg:gap-0 ">
                <div className="w-auto mb-5 md:w-auto lg:w-[225px] mr-[200px]">
                  <p className="w-auto bg-gray-200 rounded-2xl animate-pulse text-gray-200 m-0 text-md font-semibold items-center">
                    Số lượng sản phẩm
                  </p>
                  <span className="leading-10 bg-gray-200 rounded-2xl animate-pulse text-gray-200 text-[26px] text-3xl font-semibold">
                    123 Sản phẩm
                  </span>
                </div>
                <div className="w-auto md:mb-0 lg:mb-0 lg:w-[225px] mr-[200px]">
                  <p className="bg-gray-200 rounded-2xl animate-pulse text-gray-200 m-0 font-semibold ">Đánh giá tổng</p>
                  <span className="flex lg:w-[175px] h-8 lg:mt-1 bg-gray-200 rounded-2xl animate-pulse text-gray-200 items-center gap-x-2 leading-10 text-[26px] text-3xl font-semibold">
                      
                  </span>
                  <div className="flex gap-x-1">
                    <p className="leading-5 bg-gray-200 rounded-2xl animate-pulse text-gray-200 font-medium lg:mt-1 text-sm">
                      Đã bán{" "}
                      <span className="font-semibold">1234</span> sản
                      phẩm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="block md:w-auto md:gap-x-5 md:mb-[30px] md:flex lg:flex">
                <div className="mb-8 w-auto md:mb-8 lg:flex-none lg:w-[327px] lg:mr-[100px]">
                  <ul className="lg:flex flex-col flex-0.33 order-3 mb-7">
                    <li className="md:my-[4px] lg:my-1 flex items-center bg-gray-200 animate-pulse rounded-2xl text-gray-200">
                      <svg
                        className="mr-2"
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.0274661 3.7206C3.28078e-10 4.35838 0 5.10902 0 6C0 8.82843 0 10.2426 0.87868 11.1213C1.75736 12 3.17157 12 6 12H10C12.8284 12 14.2426 12 15.1213 11.1213C16 10.2426 16 8.82843 16 6C16 5.10902 16 4.35838 15.9725 3.7206L8.94444 7.48565C8.35448 7.8017 7.64552 7.8017 7.05556 7.48565L0.0274661 3.7206ZM0.373971 1.6439C0.407155 1.65732 0.43995 1.67266 0.472221 1.68995L8 5.72269L15.5278 1.68995C15.56 1.67266 15.5928 1.65732 15.626 1.6439C15.5028 1.34703 15.3391 1.09641 15.1213 0.87868C14.2426 0 12.8284 0 10 0H6C3.17157 0 1.75736 0 0.87868 0.87868C0.660947 1.09641 0.497167 1.34703 0.373971 1.6439Z"
                          fill="currentColor"
                        />
                      </svg>

                      <path d="M8.36434 16.5441C8.18462 16.5441 8.00895 16.4907 7.85954 16.3909C7.71012 16.291 7.59367 16.1491 7.5249 15.983C7.45613 15.817 7.43814 15.6343 7.47319 15.458C7.50824 15.2817 7.59476 15.1198 7.72182 14.9927L14.9922 7.72213C15.1636 7.55658 15.3932 7.46498 15.6315 7.46705C15.8697 7.46912 16.0977 7.5647 16.2662 7.7332C16.4347 7.9017 16.5302 8.12965 16.5323 8.36794C16.5344 8.60623 16.4428 8.8358 16.2772 9.00721L9.00686 16.2778C8.83646 16.4483 8.60535 16.544 8.36434 16.5441Z"></path>
                      <p className="py-1 font-medium line-clamp-1 w-[80%]">
                        chauhoangluan123@gmail.com
                      </p>
                    </li>
                    <li className="md:my-[4px] lg:my-1 text-[15px] flex items-center bg-gray-200 animate-pulse rounded-2xl text-gray-200">
                      {" "}
                      <svg
                        className="mr-2"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.3387 9.12816L14.3213 11.1108C14.6961 11.4856 14.6961 12.0933 14.3213 12.4682C12.2948 14.4947 9.08645 14.7227 6.79367 13.0031L6.66001 12.9029C4.93054 11.6058 3.3942 10.0695 2.09709 8.33999L1.99685 8.20633C0.277271 5.91355 0.505277 2.70525 2.53182 0.678704C2.90666 0.303866 3.51439 0.303866 3.88923 0.678704L5.87184 2.66131C6.26236 3.05184 6.26236 3.685 5.87184 4.07553L4.47409 5.47328C4.2224 5.72497 4.16 6.10948 4.31919 6.42784C5.2394 8.26828 6.73172 9.7606 8.57216 10.6808C8.89052 10.84 9.27503 10.7776 9.52672 10.5259L10.9245 9.12816C11.315 8.73764 11.9482 8.73763 12.3387 9.12816Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="py-1 font-medium text-[15px] line-clamp-1 w-[70%]">
                        1234567898
                      </p>
                    </li>
                    <li className="md:my-[4px] lg:my-1 flex items-center bg-gray-200 animate-pulse rounded-2xl text-gray-200">
                      {" "}
                      <svg animate-pulse rounded-2xl text-gray-200
                        className="mr-2"
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.39804 15.804C8.88097 15.0348 14 12.0163 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 12.0163 5.11903 15.0348 6.60196 15.804C6.85483 15.9351 7.14517 15.9351 7.39804 15.804ZM7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="py-1 font-medium text-[15px] line-clamp-1 w-[70%]">
                        ádadasdasd
                      </p>
                    </li>
                  </ul>
                  <div className="w-[100%]">
                    <p className="lg:leading-1.5 font-medium text-light-neutral-6 mb-1 text-[14px] bg-gray-200 animate-pulse rounded-2xl text-gray-200 w-[200px]">
                      Bạn cần tìm sản phẩm?
                    </p>
                    <button className="w-[350px] delay-150 md:w-auto items-center lg:items-center justify-center bg-[#3861FB] animate-pulse border-0 rounded-lg inline-flex text-[#3861FB] cursor-pointer font-semibold  h-[40px] text-base px-4 leading-6 hover:bg-[#3862fbdf]">
                      <a
                        className="flex md:flex lg:flex items-center text-inherit leading-inherit "
                        href="/messenger"
                        target="_blank"
                      >
                        Nhắn tin ngay
                      </a>
                    </button>
                  </div>
                </div>
                <div className="text-justify md:mb-[12px] lg:flex-grow flex-shrink">
                  <div>
                    <h2 className="w-[350px] text-[18px] lg:text-[24px] leading-34 my-0 font-bold bg-gray-200 animate-pulse rounded-2xl text-gray-200">
                      Giới thiệu về Market MMO
                    </h2>
                    <div>
                      <div>
                        <h2
                          className="lg:text-base w-[150px] font-bold mt-3 mb-3 bg-gray-200 animate-pulse rounded-2xl text-gray-200"
                          id="what-is-binance"
                        >
                          Market MMO là gì?
                        </h2>
                        <p className="font-semibold text-sm bg-gray-200 animate-pulse rounded-2xl text-gray-200 leading-[1.8] break-words mb-2">
                          Market MMO là một trang web mua bán tài khoản cộng
                          đồng và giao dịch trung gian uy tín. Với quy mô lớn và
                          uy tín trong lĩnh vực tiền điện tử, Market MMO là sàn
                          giao dịch tiền điện tử hàng đầu trên thế giới.
                        </p>{" "}
                        <p className="font-semibold text-sm bg-gray-200 animate-pulse rounded-2xl text-gray-200 leading-[1.8] break-words mb-2">
                          Với hàng ngày có khối lượng giao dịch lên đến 76 tỷ
                          USD và hơn 90 triệu khách hàng trên toàn thế giới,
                          Market MMO đã tự xây dựng độ tin cậy trong không gian
                          tiền điện tử. Trang web cung cấp một nền tảng an toàn
                          và đáng tin cậy cho người dùng mua, bán và lưu trữ tài
                          sản kỹ thuật số của mình.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    id="myBtn"
                    className="bg-[#EFF2F5] delay-150 animate-pulse text-primary-black font-semibold leading-6 flex items-center justify-center outline-none cursor-pointer w-full h-12 rounded-lg border-transparent my-5 hover:bg-[#eff0f1]"
                  >
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <div className="lg: text-2xl font-bold text-var(--text-color) ">
                Sản phẩm đang bán
              </div>
              <div className="mt-[30px]">
                <div className="block md:block lg:flex items-center gap-x-4">
                  <p className="mb-4 justify-center font-semibold text-[14px] leading-20 md:m-0 lg:m-0 bg-gray-200 animate-pulse rounded-2xl text-gray-200">
                    123 sản phẩm
                  </p>

                  <div className="flex relative mt-0 transition ease-in-out  mb-4 rounded-[9px] border border-[#ececec] px-3 py-1 md:mt-2 md:w-[100%] md:m-0 lg:mt-0 lg:m-0  lg:w-[65%] hover:border-[#c8c8c8bb]">
                    <button className="items-center">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.4088 11.6684L10.4685 8.72812C11.1764 7.78573 11.5585 6.63865 11.5572 5.46C11.5572 2.44938 9.10783 0 6.09721 0C3.08658 0 0.637207 2.44938 0.637207 5.46C0.637207 8.47062 3.08658 10.92 6.09721 10.92C7.27586 10.9213 8.42294 10.5391 9.36533 9.83125L12.3056 12.7716C12.4545 12.9046 12.6486 12.9756 12.8482 12.97C13.0477 12.9645 13.2376 12.8827 13.3787 12.7415C13.5199 12.6004 13.6017 12.4105 13.6073 12.211C13.6128 12.0114 13.5418 11.8173 13.4088 11.6684ZM2.19721 5.46C2.19721 4.68865 2.42594 3.93463 2.85448 3.29328C3.28301 2.65192 3.89211 2.15205 4.60474 1.85687C5.31737 1.56169 6.10153 1.48446 6.85806 1.63494C7.61459 1.78542 8.3095 2.15686 8.85492 2.70228C9.40035 3.24771 9.77179 3.94262 9.92227 4.69915C10.0728 5.45567 9.99552 6.23983 9.70034 6.95247C9.40516 7.6651 8.90528 8.27419 8.26393 8.70273C7.62258 9.13127 6.86855 9.36 6.09721 9.36C5.06324 9.35876 4.07198 8.94747 3.34086 8.21635C2.60974 7.48522 2.19845 6.49396 2.19721 5.46Z"
                          fill="#807B7B"
                        />
                      </svg>
                    </button>
                    <input
                      className="w-full delay-150 h-[36px] outline-none text-[#58667E] font-medium leading-20 px-3"
                      type="text"
                      placeholder="Tìm kiếm sản phẩm"
                    />
                  </div>

                  <div className="flex justify-start gap-4 mt-0 items-center md:mt-3 lg:mt-0 md:justify-end">
                    <div className="relative">
                      <button className="flex px-2.5 py-2.5 items-center rounded-[9px] border border-[#ececec] gap-2 font-semibold hover:border-[#c8c8c8bb] lg:px-3">
                        Sắp xếp theo
                        <svg
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.32673 6.23594L0.804725 1.98594C0.492175 1.69219 0.492175 1.21719 0.804725 0.926562L1.55618 0.220313C1.86873 -0.0734375 2.37413 -0.0734375 2.68335 0.220313L5.88865 3.23281L9.09395 0.220313C9.4065 -0.0734375 9.9119 -0.0734375 10.2211 0.220313L10.9726 0.926562C11.2851 1.22031 11.2851 1.69531 10.9726 1.98594L6.45058 6.23594C6.14468 6.52969 5.63928 6.52969 5.32673 6.23594Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="">
                      <button className="flex px-2.5 py-2.5 items-center rounded-[9px] border border-[#ececec] gap-2 font-semibold hover:border-[#c8c8c8bb]">
                        Khác
                        <svg
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.32673 6.23594L0.804725 1.98594C0.492175 1.69219 0.492175 1.21719 0.804725 0.926562L1.55618 0.220313C1.86873 -0.0734375 2.37413 -0.0734375 2.68335 0.220313L5.88865 3.23281L9.09395 0.220313C9.4065 -0.0734375 9.9119 -0.0734375 10.2211 0.220313L10.9726 0.926562C11.2851 1.22031 11.2851 1.69531 10.9726 1.98594L6.45058 6.23594C6.14468 6.52969 5.63928 6.52969 5.32673 6.23594Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                    </div>
                    <button className="h-[40px] delay-150 px-5 items-center rounded-[9px] bg-[#3861FB] text-white hover:bg-[#3862fbdf]">
                      Xem tất cả
                    </button>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-x-5 gap-y-2 mt-3">
                      <ProductLoader quantityProduct={5} />
                    </div>
                    <div className="flex w-full justify-center my-4"></div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
