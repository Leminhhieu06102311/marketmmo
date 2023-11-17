export default function TransactionLoader() {
  return (
    <>
      <div>
        <div className="mt-[30px]">
          <div className="block md:block lg:flex items-center gap-x-4">
            <div className="flex items-center justify-start py-2 md:py-2 gap-2 lg:p-0">
              <div className="w-[12px] h-[12px] bg-gray-200 rounded-[50%]"></div>
              <p className="text-[15px] bg-gray-200 rounded-2xl animate-pulse text-gray-200 font-semibold">
                Live
              </p>
            </div>
            <>
              <p className="mb-4 bg-gray-200 rounded-2xl animate-pulse text-gray-200 line-clamp-1 w-[118px] justify-center font-semibold text-[14px] leading-20 md:m-0 lg:m-0">
                1234 kết quả
              </p>
            </>
            <div className="flex relative mt-0 transition ease-in-out  mb-4 rounded-[9px] border border-[#ececec] px-3 py-1 md:mt-2 md:w-[100%] md:m-0 lg:mt-0 lg:m-0  lg:w-[69%] hover:border-[#c8c8c8bb]">
              <button className="items-center ">
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
                placeholder="Tìm kiếm lịch sử mua hàng"
              />
            </div>
            <div className="flex justify-start gap-4 mt-0 items-center md:mt-3 lg:mt-0 md:justify-end">
              <div className="relative">
                <button className="flex px-2 py-2.5 items-center rounded-[9px] border border-[#ececec] gap-2 font-semibold hover:border-[#c8c8c8bb] lg:px-5">
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
              <button className="h-[40px] delay-150 px-5 items-center rounded-[9px] bg-[#3861FB] text-white hover:bg-[#3862fbdf]">
                Lọc
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-5 grid grid-cols-1">
            <a>
              <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-md hover:bg-gray-50 duration-100 ">
                <div className="p-3">
                  <div className="flex justify-between border-b border-solid border-[#EFF2F5] py-2">
                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center gap-x-2">
                        <div className="w-[31px] h-auto ">
                          <div className="w-full rounded-[50%] bg-gray-200 h-[31px] animate-pulse text-gray-200"></div>
                        </div>
                        <p className="font-inter bg-gray-200 rounded-2xl animate-pulse text-gray-200 leading-normal">
                          Chau Hoang Luan
                        </p>
                      </div>
                      <div></div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center gap-x-2">
                        <span className="bg-gray-200 rounded-2xl animate-pulse text-gray-200 font-medium leading-normal">
                          Xem chi tiết
                        </span>{" "}
                        <svg
                          width="8"
                          height="11"
                          viewBox="0 0 8 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.00596 5.75625L2.75596 10.0063C2.46221 10.3 1.98721 10.3 1.69658 10.0063L0.990332 9.3C0.696582 9.00625 0.696582 8.53125 0.990332 8.24063L4.00283 5.22813L0.990332 2.21563C0.696582 1.92188 0.696582 1.44687 0.990332 1.15625L1.69658 0.450001C1.99033 0.156251 2.46533 0.156251 2.75596 0.450001L7.00596 4.7C7.29971 4.9875 7.29971 5.4625 7.00596 5.75625Z"
                            fill=""
                            className="bg-gray-200 animate-pulse text-gray-200"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="justify-between p-4 items-center md:flex lg:flex">
                    <div className="flex gap-x-4 item-center">
                      <div className="w-[81px] md:h-[71px] lg:h-[71px]">
                        {" "}
                        <div className="w-full bg-gray-200  animate-pulse text-gray-200 h-full rounded-[10px]"></div>
                      </div>
                      <div className="gap-y-1">
                        <p className="w-50px bg-gray-200 rounded-2xl animate-pulse text-gray-200 font-bold text-[15px] leading-[142%] line-clamp-1 lg:w-[420px]">
                          ádsadsadsadsadsdsadasdsadsads
                        </p>
                        {/* <p className="hidden rounded-[10px] my-1 border-[1px] border-[rgba(0, 0, 0, 0.20)] text-[#3D3D4E] text-center text-[13px] py-1 w-[350px] line-clamp-1 lg:block">
                          Gmail random IP 7 ngày++ email|pass|recovery|geo
                        </p> */}
                        <p className="bg-gray-200 rounded-2xl mt-1 w-[100px] animate-pulse text-gray-200 font-normal  leading-normal">
                          số lượng: 1
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4">
                      <p className="bg-gray-200 rounded-2xl animate-pulse text-gray-200 text-[12px] font-bold text-right">
                        1231231231231231231231
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="bg-gray-200 rounded-2xl animate-pulse text-gray-200 font-normal text-[13px]">
                          Thể loại:{" "}
                        </p>
                        <div className="flex w-auto items-center px-3 py-1 gap-x-2 rounded-[30px] animate-pulse bg-gray-200 text-gray-200 text-[13px] font-normal">
                          <p>Tiktok</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] bg-gray-200 rounded-2xl animate-pulse text-gray-200 text-right">
                          Tổng số tiền:{" "}
                          <span className="font-bold text-[19px] bg-gray-200 rounded-2xl animate-pulse text-gray-200">
                            12344$
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="mt-5 grid grid-cols-1">
            <a>
              <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-md hover:bg-gray-50 duration-100 ">
                <div className="p-3">
                  <div className="flex justify-between border-b border-solid border-[#EFF2F5] py-2">
                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center gap-x-2">
                        <div className="w-[31px] h-auto ">
                          <div className="w-full rounded-[50%] bg-gray-200 h-[31px] animate-pulse text-gray-200"></div>
                        </div>
                        <p className="font-inter bg-gray-200 rounded-2xl animate-pulse text-gray-200 leading-normal">
                          Chau Hoang Luan
                        </p>
                      </div>
                      <div></div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center gap-x-2">
                        <span className="bg-gray-200 rounded-2xl animate-pulse text-gray-200 font-medium leading-normal">
                          Xem chi tiết
                        </span>{" "}
                        <svg
                          width="8"
                          height="11"
                          viewBox="0 0 8 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.00596 5.75625L2.75596 10.0063C2.46221 10.3 1.98721 10.3 1.69658 10.0063L0.990332 9.3C0.696582 9.00625 0.696582 8.53125 0.990332 8.24063L4.00283 5.22813L0.990332 2.21563C0.696582 1.92188 0.696582 1.44687 0.990332 1.15625L1.69658 0.450001C1.99033 0.156251 2.46533 0.156251 2.75596 0.450001L7.00596 4.7C7.29971 4.9875 7.29971 5.4625 7.00596 5.75625Z"
                            fill=""
                            className="bg-gray-200 animate-pulse text-gray-200"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="justify-between p-4 items-center md:flex lg:flex">
                    <div className="flex gap-x-4 item-center">
                      <div className="w-[81px] md:h-[71px] lg:h-[71px]">
                        {" "}
                        <div className="w-full bg-gray-200  animate-pulse text-gray-200 h-full rounded-[10px]"></div>
                      </div>
                      <div className="gap-y-1">
                        <p className="w-50px bg-gray-200 rounded-2xl animate-pulse text-gray-200 font-bold text-[15px] leading-[142%] line-clamp-1 lg:w-[420px]">
                          ádsadsadsadsadsdsadasdsadsads
                        </p>
                        {/* <p className="hidden rounded-[10px] my-1 border-[1px] border-[rgba(0, 0, 0, 0.20)] text-[#3D3D4E] text-center text-[13px] py-1 w-[350px] line-clamp-1 lg:block">
                          Gmail random IP 7 ngày++ email|pass|recovery|geo
                        </p> */}
                        <p className="bg-gray-200 rounded-2xl mt-1 w-[100px] animate-pulse text-gray-200 font-normal  leading-normal">
                          số lượng: 1
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4">
                      <p className="bg-gray-200 rounded-2xl animate-pulse text-gray-200 text-[12px] font-bold text-right">
                        1231231231231231231231
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="bg-gray-200 rounded-2xl animate-pulse text-gray-200 font-normal text-[13px]">
                          Thể loại:{" "}
                        </p>
                        <div className="flex w-auto items-center px-3 py-1 gap-x-2 rounded-[30px] animate-pulse bg-gray-200 text-gray-200 text-[13px] font-normal">
                          <p>Tiktok</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] bg-gray-200 rounded-2xl animate-pulse text-gray-200 text-right">
                          Tổng số tiền:{" "}
                          <span className="font-bold text-[19px] bg-gray-200 rounded-2xl animate-pulse text-gray-200">
                            12344$
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="mt-5 grid grid-cols-1">
            <a>
              <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-md hover:bg-gray-50 duration-100 ">
                <div className="p-3">
                  <div className="flex justify-between border-b border-solid border-[#EFF2F5] py-2">
                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center gap-x-2">
                        <div className="w-[31px] h-auto ">
                          <div className="w-full rounded-[50%] bg-gray-200 h-[31px] animate-pulse text-gray-200"></div>
                        </div>
                        <p className="font-inter bg-gray-200 rounded-2xl animate-pulse text-gray-200 leading-normal">
                          Chau Hoang Luan
                        </p>
                      </div>
                      <div></div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center gap-x-2">
                        <span className="bg-gray-200 rounded-2xl animate-pulse text-gray-200 font-medium leading-normal">
                          Xem chi tiết
                        </span>{" "}
                        <svg
                          width="8"
                          height="11"
                          viewBox="0 0 8 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.00596 5.75625L2.75596 10.0063C2.46221 10.3 1.98721 10.3 1.69658 10.0063L0.990332 9.3C0.696582 9.00625 0.696582 8.53125 0.990332 8.24063L4.00283 5.22813L0.990332 2.21563C0.696582 1.92188 0.696582 1.44687 0.990332 1.15625L1.69658 0.450001C1.99033 0.156251 2.46533 0.156251 2.75596 0.450001L7.00596 4.7C7.29971 4.9875 7.29971 5.4625 7.00596 5.75625Z"
                            fill=""
                            className="bg-gray-200 animate-pulse text-gray-200"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="justify-between p-4 items-center md:flex lg:flex">
                    <div className="flex gap-x-4 item-center">
                      <div className="w-[81px] md:h-[71px] lg:h-[71px]">
                        {" "}
                        <div className="w-full bg-gray-200  animate-pulse text-gray-200 h-full rounded-[10px]"></div>
                      </div>
                      <div className="gap-y-1">
                        <p className="w-50px bg-gray-200 rounded-2xl animate-pulse text-gray-200 font-bold text-[15px] leading-[142%] line-clamp-1 lg:w-[420px]">
                          ádsadsadsadsadsdsadasdsadsads
                        </p>
                        {/* <p className="hidden rounded-[10px] my-1 border-[1px] border-[rgba(0, 0, 0, 0.20)] text-[#3D3D4E] text-center text-[13px] py-1 w-[350px] line-clamp-1 lg:block">
                          Gmail random IP 7 ngày++ email|pass|recovery|geo
                        </p> */}
                        <p className="bg-gray-200 rounded-2xl mt-1 w-[100px] animate-pulse text-gray-200 font-normal  leading-normal">
                          số lượng: 1
                        </p>
                      </div>
                    </div>
                    <div className="gap-x-4">
                      <p className="bg-gray-200 rounded-2xl animate-pulse text-gray-200 text-[12px] font-bold text-right">
                        1231231231231231231231
                      </p>
                      <div className="flex gap-x-1 items-center justify-end my-1">
                        <p className="bg-gray-200 rounded-2xl animate-pulse text-gray-200 font-normal text-[13px]">
                          Thể loại:{" "}
                        </p>
                        <div className="flex w-auto items-center px-3 py-1 gap-x-2 rounded-[30px] animate-pulse bg-gray-200 text-gray-200 text-[13px] font-normal">
                          <p>Tiktok</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-weight-500 text-[16px] bg-gray-200 rounded-2xl animate-pulse text-gray-200 text-right">
                          Tổng số tiền:{" "}
                          <span className="font-bold text-[19px] bg-gray-200 rounded-2xl animate-pulse text-gray-200">
                            12344$
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
