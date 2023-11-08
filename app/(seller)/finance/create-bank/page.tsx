"use client";

import { faChevronRight } from "@/node_modules/@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@/node_modules/@fortawesome/react-fontawesome/index";
import { useState } from "react";

export default function BankManager() {
  return (
    <>
      <div className="container m-auto w-11/12">
        <div className="flex justify-between items-center mt-4 mb-4">
          <div className="flex justify-center flex-col ">
            <span className="text-gray-500 text-xs  cursor-pointer inline-flex items-center">
              <svg
                className="theme-arco-icon theme-arco-icon-left fill-current"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5615 3.77937C10.6917 3.90954 10.6917 4.1206 10.5615 4.25077L6.81226 8.00003L10.5615 11.7493C10.6917 11.8795 10.6917 12.0905 10.5615 12.2207L10.0901 12.6921C9.95996 12.8223 9.7489 12.8223 9.61873 12.6921L5.39804 8.47144C5.13769 8.21109 5.13769 7.78898 5.39804 7.52863L9.61873 3.30797C9.7489 3.17779 9.95996 3.17779 10.0901 3.30797L10.5615 3.77937Z"
                  fill-opacity="1"
                ></path>
              </svg>
              <div className="text-sm">Số tiền rút</div>
            </span>
            <h2 className="font-medium text-2xl m-0"> Cài đặt rút tiền</h2>
          </div>
        </div>

        <div className="md:mr-0 w-full ">
          <div className="px-6 py-7 mb-6 w-full border-gray-7 border border-solid rounded-md  bg-white">
            <div className="">
              <h3 className="flex flex-1 text-xl font-medium">
                Thông tin tài khoản quyết toán
              </h3>

              <div className="flex flex-col justify-center items-center text-center">
                <img
                  className="w-[200px] h-[200px] mt-4"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xXzI5NTUpIj4KPHBhdGggZD0iTTE1OC44MzIgODUuODE1NkMxNTguODMyIDk5LjA3MDQgMTQ4LjA4NyAxMDkuODE2IDEzNC44MzIgMTA5LjgxNkMxMjEuNTc3IDEwOS44MTYgMTEwLjgzMiA5OS4wNzA0IDExMC44MzIgODUuODE1NkMxMTAuODMyIDcyLjU2MDggMTIxLjU3NyA2MS44MTU2IDEzNC44MzIgNjEuODE1NkMxNDguMDg3IDYxLjgxNTYgMTU4LjgzMiA3Mi41NjA4IDE1OC44MzIgODUuODE1NloiIGZpbGw9IiNEOUQ5RDkiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjxwYXRoIGQ9Ik0xMzguOTIgMTM5LjMwM0MxMzguOTIgMTQzLjc1OCAxNDIuNTMyIDE0Ny4zNjkgMTQ2Ljk4NyAxNDcuMzY5QzE1MS40NDIgMTQ3LjM2OSAxNTUuMDUzIDE0My43NTggMTU1LjA1MyAxMzkuMzAzQzE1NS4wNTMgMTM0Ljg0OCAxNTEuNDQyIDEzMS4yMzYgMTQ2Ljk4NyAxMzEuMjM2QzE0Mi41MzIgMTMxLjIzNiAxMzguOTIgMTM0Ljg0OCAxMzguOTIgMTM5LjMwM1oiIGZpbGw9IiMyNUY0RUUiLz4KPHBhdGggZD0iTTU1LjU4MjMgNDIuMjM2NUM1NS41ODIzIDQzLjk1OCA1Ni45NzggNDUuMzUzNiA1OC42OTk1IDQ1LjM1MzZDNjAuNDIxMSA0NS4zNTM2IDYxLjgxNjcgNDMuOTU4IDYxLjgxNjcgNDIuMjM2NUM2MS44MTY3IDQwLjUxNDkgNjAuNDIxMSAzOS4xMTkzIDU4LjY5OTUgMzkuMTE5M0M1Ni45NzggMzkuMTE5MyA1NS41ODIzIDQwLjUxNDkgNTUuNTgyMyA0Mi4yMzY1WiIgZmlsbD0iI0ZGNjY3MyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTgwLjA0MzkgNDcuNjUwM0M4MC4wNDM5IDQwLjI3NzYgODYuMDIwNyAzNC4xMTg1IDkzLjM5MzMgMzQuMTE4NUMxMDAuNzY2IDM0LjExODUgMTA2Ljc0MyA0MC4yNzc2IDEwNi43NDMgNDcuNjUwM0gxMjEuMTI3VjYxLjgxNTZINjUuNjQwOVY0Ny42NTAzSDgwLjA0MzlaTTkzLjQ3NDIgNDYuMTcxOEM5Ni4wODc0IDQ2LjE3MTggOTguMjA1OSA0NC4wNTMzIDk4LjIwNTkgNDEuNDQwMUM5OC4yMDU5IDM4LjgyNjggOTYuMDg3NCAzNi43MDg0IDkzLjQ3NDIgMzYuNzA4NEM5MC44NjA5IDM2LjcwODQgODguNzQyNSAzOC44MjY4IDg4Ljc0MjUgNDEuNDQwMUM4OC43NDI1IDQ0LjA1MzMgOTAuODYwOSA0Ni4xNzE4IDkzLjQ3NDIgNDYuMTcxOFoiIGZpbGw9IiNGRjk0OUIiLz4KPHBhdGggZD0iTTk5LjQ3MzkgOTYuNDk1NUM5OS40NzM5IDEwMS43MjIgOTUuMjM3IDEwNS45NTkgOTAuMDEwNSAxMDUuOTU5Qzg0Ljc4NDEgMTA1Ljk1OSA4MC41NDcyIDEwMS43MjIgODAuNTQ3MiA5Ni40OTU1QzgwLjU0NzIgOTEuMjY5IDg0Ljc4NDEgODcuMDMyMSA5MC4wMTA1IDg3LjAzMjFDOTUuMjM3IDg3LjAzMjEgOTkuNDczOSA5MS4yNjkgOTkuNDczOSA5Ni40OTU1WiIgZmlsbD0iI0ZGOTQ5QiIvPgo8cGF0aCBkPSJNMTMwLjU5MSA5Ni40OTU1QzEzMC41OTEgMTAxLjcyMiAxMjYuMzU0IDEwNS45NTkgMTIxLjEyOCAxMDUuOTU5QzExNS45MDEgMTA1Ljk1OSAxMTEuNjY0IDEwMS43MjIgMTExLjY2NCA5Ni40OTU1QzExMS42NjQgOTEuMjY5IDExNS45MDEgODcuMDMyMSAxMjEuMTI4IDg3LjAzMjFDMTI2LjM1NCA4Ny4wMzIxIDEzMC41OTEgOTEuMjY5IDEzMC41OTEgOTYuNDk1NVoiIGZpbGw9IiNGRjk0OUIiLz4KPHBhdGggZD0iTTE1OS45OTcgOTYuNDk1NUMxNTkuOTk3IDEwMS43MjIgMTU1Ljc2IDEwNS45NTkgMTUwLjUzNCAxMDUuOTU5QzE0NS4zMDggMTA1Ljk1OSAxNDEuMDcxIDEwMS43MjIgMTQxLjA3MSA5Ni40OTU1QzE0MS4wNzEgOTEuMjY5IDE0NS4zMDggODcuMDMyMSAxNTAuNTM0IDg3LjAzMjFDMTU1Ljc2IDg3LjAzMjEgMTU5Ljk5NyA5MS4yNjkgMTU5Ljk5NyA5Ni40OTU1WiIgZmlsbD0iI0ZGOTQ5QiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTU5Ljc0MDcgNjEuODgxNUw1NC4xMDgxIDE0Ny45MjVIMTIwLjI5MUwxMjUuOTIzIDYxLjg4MTVINTkuNzQwN1pNNTUuMzA4NyA0Ny42ODY0QzUwLjMyMjIgNDcuNjg2NCA0Ni4xOTEyIDUxLjU1NTggNDUuODY1NSA1Ni41MzE2TDM5LjYxMzQgMTUyLjAzOEMzOS4yNTYxIDE1Ny40OTYgNDMuNTg2OCAxNjIuMTIgNDkuMDU2NiAxNjIuMTJIMTI0LjcyM0MxMjkuNzA5IDE2Mi4xMiAxMzMuODQgMTU4LjI1IDEzNC4xNjYgMTUzLjI3NUwxNDAuNDE4IDU3Ljc2OEMxNDAuNzc1IDUyLjMwOTkgMTM2LjQ0NSA0Ny42ODY0IDEzMC45NzUgNDcuNjg2NEg1NS4zMDg3WiIgZmlsbD0iIzVDRDZEMiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExNC43NjUgMTE5LjU5TDY1LjIzNDggMTE5LjU5Mkw2NS4yMzQ2IDExNC44NjFMMTE0Ljc2NSAxMTQuODU5TDExNC43NjUgMTE5LjU5WiIgZmlsbD0iI0ZGRUZDNyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkzLjI1NTIgMTI5LjNMNjUuMjM0OCAxMjkuMzAxTDY1LjIzNDYgMTI0LjU3TDkzLjI1NSAxMjQuNTY5TDkzLjI1NTIgMTI5LjNaIiBmaWxsPSIjRkZFRkM3Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIzLjA1MSAxMDUuNzYyTDEyNC4yNDIgODcuNTU5NEMxMjcuOTM1IDg4Ljg0OTUgMTMwLjU4MyA5Mi4zNjMyIDEzMC41ODMgOTYuNDk1NUMxMzAuNTgzIDEwMS4wNiAxMjcuMzUxIDEwNC44NyAxMjMuMDUxIDEwNS43NjJaIiBmaWxsPSIjMjIzRTcwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTE0LjExNyA0Ny42ODY0QzExOC4wNjQgNDguNTgxOSAxMjEuMDEgNTIuMTExNCAxMjEuMDEgNTYuMzI5MVY2MS44MTQ0SDY1LjUyMzdWNTYuMzM5MUM2NS41MjM3IDUyLjExNjMgNjguNDczOSA0OC41ODI1IDcyLjQyNTUgNDcuNjg2NEgxMTQuMTE3WiIgZmlsbD0iIzIyM0U3MCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzFfMjk1NSI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
                  alt=""
                />
                <div className="text-sm font-regular text-gray-500">
                  Chưa có tài khoản
                </div>
                <button
                  className="bg-teal-600 mt-6 p-1.5 w-72 font-medium rounded"
                  type="button"
                >
                  <span className="text-white text-sm">
                    Liên kết tài khoản quyết toán của bạn
                  </span>
                </button>
              </div>
            </div>
            <div></div>
          </div>

          <div className="px-6 py-7 mb-6 w-full border-gray-7 border border-solid  rounded p-6 bg-white">
            <div className="flex">
              <div className="font-semibold text-gray-700 text-sm mr-4">
                Tự động rút tiền
              </div>
              <div>
                {" "}
                <button
                  id="toggle-button"
                  className="relative inline-flex items-center h-5 rounded-full w-10 bg-gray-300"
                >
                  <span
                    className="absolute left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ease-in-out duration-200"
                    id="toggle-indicator"
                  ></span>
                </button>
                <button></button>{" "}
              </div>
            </div>

            <div className="mt-4">
              <div className=" font-semibold text-gray-700 text-sm mb-1">
                Tài khoản ngân hàng chính để nhận thanh toán
              </div>
              <div className="flex items-center">
                <div className="text-sm font-light text-gray-400">
                  Không có tài khoản ngân hàng
                </div>
                <div className="ml-2 text-teal-600 text-sm font-semibold cursor-pointer">
                  Thêm tài khoản ngân hàng
                </div>
              </div>
            </div>

            <div className="flex align-center mt-6 bg-blue-100 rounded-md	p-4 ">
              <div className=" mr-4">
                <svg
                  className="theme-arco-icon theme-arco-icon-Info-blue "
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="7" fill="#3B87F6"></circle>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.99997 5.34039C8.52167 5.34039 8.94458 4.91747 8.94458 4.39578C8.94458 3.87409 8.52167 3.45117 7.99997 3.45117C7.47828 3.45117 7.05537 3.87409 7.05537 4.39578C7.05537 4.91747 7.47828 5.34039 7.99997 5.34039ZM8.5 6.24587V6.24213H6.83C6.64775 6.24213 6.5 6.38988 6.5 6.57213V7.24213C6.5 7.42439 6.64775 7.57213 6.83 7.57213H7.61792V11.2421H6.94792C6.76567 11.2421 6.61792 11.3899 6.61792 11.5721L6.61792 12.2421C6.61792 12.4244 6.76567 12.5721 6.94792 12.5721H9.28792C9.47017 12.5721 9.61792 12.4244 9.61792 12.2421V11.5721C9.61792 11.3899 9.47017 11.2421 9.28792 11.2421H8.94792V6.57587C8.94792 6.39362 8.80017 6.24587 8.61792 6.24587H8.5Z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>

              <div className="">
                <div className="text-sm">Thông báo:</div>
                <div className="">
                  <ul id="list" className="list-disc ml-5 text-sm ">
                    <li>
                      Khi bạn bật tự động rút tiền, toàn bộ số tiền có sẵn để
                      rút sẽ được thanh toán vào tài khoản ngân hàng chính của
                      bạn vào thứ Tư hàng tuần.{" "}
                    </li>
                    <li>
                      Việc tự động rút tiền sẽ không tiếp tục nếu có ít hơn
                      10,000₫ có sẵn để rút hoặc tài khoản ngân hàng chính không
                      hợp lệ.{" "}
                    </li>
                    <li>
                      Khi bạn tắt tự động rút tiền, việc tự động rút tiền sẽ
                      dừng lại từ thứ Tư tới. Bạn vẫn có thể rút tiền thủ công
                      bất cứ khi nào bạn muốn.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-7 w-full border-gray-7 border border-solid  rounded p-6 bg-white mb-10">
            <div className="font-semibold text-lg">Quản lý mật khẩu</div>
            <div className=" flex items-center mt-2">
              <div className="text-gray-500 text-sm font-medium">Chưa đặt</div>
              <div className="text-sm text-teal-600 ml-2 font-semibold cursor-pointer">
                Đặt mật khẩu
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
