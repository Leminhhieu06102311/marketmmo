
import Link from "next/link";
export default function TransactionIdLoader() {
  return (
    <>
      <div>
        <div className="w-full h-full  bg-white right-0 left-0 ">
          <div className=" w-full flex justify-end top-0 items-center  ">
            <Link href="/transaction-history">
              {/* <FontAwesomeIcon
                className="py-4 px-5 text-white text-lg cursor-pointer"
                icon={faXmark}
              /> */}
            </Link>
          </div>
          <div className="bg-white relative top-0 w-full bottom-0 left-0 right-0">
            <div className="w-full items-center pb-7 px-3 md:px-0 lg:px-0 pt-10 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl lg:flex justify-around">
              <div className="gap-y-3 lg:flex md:flex gap-3">
                <div className="w-[81px] md:h-[71px] lg:h-[71px] mb-2 md:mb-0 lg:mb-0">
                  {" "}
                  <div className="w-full h-full rounded-full max-w-[71px] max-h-[71px] bg-gray-200 animate-pulse text-gray-200"></div>
                </div>{" "}
                <div>
                  <p className="w-50px bg-gray-200 rounded-2xl animate-pulse text-gray-200 font-bold text-2xl leading-[142%] lg:line-clamp-1 md:line-clamp-1">
                    kahskdjasjdhjkasd
                  </p>

                  <div className="flex gap-3 items-center">
                    {" "}
                    <h2 className="text-xl mt-1 font-bold bg-gray-200 rounded-2xl animate-pulse text-gray-200">
                      Giá: 1.000VND
                    </h2>
                  </div>
                </div>
              </div>
              <div className="gap-y-3 mt-3 md:mt-0 lg:mt-0">
                <div className="flex mt-0 gap-3 items-center md:mt-4 lg:mt-0 mb-2 lg:justify-end">
                  <a className="w-[31px] h-auto">
                    <div className="w-full rounded-[50%] bg-gray-200 h-[31px] animate-pulse text-gray-200" ></div>
                  </a>
                  <a className="font-inter bg-gray-200 rounded-2xl animate-pulse text-gray-200 leading-normal">Chauhoangluan</a>
                </div>
                <div className="gap-x-3">
                  <button
                    type="button"
                    className="py-2 mr-2 px-4 inline-flex justify-center items-center gap-2 rounded-lg animate-pulse bg-white border border-blue-500 font-semibold text-white hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                  >
                    Xem sản phẩm{" "}
                  </button>
                  <a
                    type="button"
                    className="py-2 px-4 inline-flex animate-pulse cursor-pointer justify-center items-center gap-2 rounded-lg bg-primary border border-transparent font-semibold text-primary hover:text-primary hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                  >
                    Đánh giá
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[70%] bg-[#F9F3EF] rounded-3xl p-3 mb-5 mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl py-10 gap-5 flex">
              <div className="mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl w-full ">
                <div className="mx-auto h-auto rounded-3xl">
                  <div className="bg-white w-full px-5 pb-10 py-10 rounded-2xl">
                    <div className="flex gap-2">
                      <div className="">
                        <p className="bg-gray-200 rounded-2xl animate-pulse text-gray-200 font-bold">
                          <span className=" font-normal">
                            Mã đơn hàng:{" "}
                          </span>{" "}
                          líadijlaidjliajldias
                        </p>{" "}
                      </div>
                    </div>
                    <div className="flex mt-2 gap-2">
                      <div className="">
                        <p className="bg-gray-200 rounded-2xl animate-pulse text-gray-200 font-bold">
                          <span className="font-normal">
                            Thời gian:{" "}
                          </span>{" "}
                          ;áldjalksdjlkaskjldajsd
                        </p>{" "}
                      </div>
                    </div>
                    <div className="flex gap-x-3 items-center pt-2 mb-2">
                      <p className="bg-gray-200 rounded-2xl animate-pulse text-gray-200">Thể loại: </p>
                      <p className="bg-gray-200 rounded-2xl animate-pulse text-gray-200">Thể loại: </p>

                    </div>
                    <div className="pt-2 bg-gray-200 rounded-2xl animate-pulse text-gray-200 inline-flex flex-col">
                      <p>
                        Số lượng : <b>x1</b>
                      </p>
                    </div>
                    {/* <div className="gap-3 items-center my-4 md:flex lg:flex">
                      <p>Gói sản phẩm: </p>
                      <p className="bg-white py-2 rounded-lg text-black text-sm border border-gray-300 line-clamp-1">
                        Gmail random IP 7 ngày++ email|pass|recovery|geo
                      </p>
                    </div> */}
                    <div className="flex gap-3 lg:w-[300px] bg-gray-200 rounded-2xl animate-pulse text-gray-200 items-center my-2">
                      <p>Trạng thái: </p>
                      <p className="font-bold text-right uppercase">
                        GIAO DICH THANH CONG
                      </p>
                    </div>
                    <div className="flex gap-3 lg:w-[300px] bg-gray-200 rounded-2xl animate-pulse text-gray-200 items-center my-2">
                      <p>Trạng thái: </p>
                      <p className="font-bold text-right uppercase">
                        GIAO DICH THANH CONG
                      </p>
                    </div>
                    <div className="mt-10 ">
                      {" "}
                      <div className="flex gap-3 bg-gray-200 rounded-2xl animate-pulse text-gray-200 justify-end items-center mb-2">
                        {" "}
                        <h3
                          className="text-lg font-semibold "
                          style={{ textDecoration: "line-through" }}
                        >
                          20.000 VND
                        </h3>
                        <div className="text-sm inline px-3 text-gray-200 rounded-lg justify-end">
                          -50%
                        </div>
                      </div>
                      <div className="flex gap-3 bg-gray-200 rounded-2xl animate-pulse text-gray-200 justify-end items-center">
                        {" "}
                        <h3
                          className="text-lg font-semibold "
                          style={{ textDecoration: "line-through" }}
                        >
                          20.000 VND
                        </h3>
                        <div className="text-sm inline px-3 text-gray-200 rounded-lg justify-end">
                          -50%
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
    </>
  );
}
