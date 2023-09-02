interface ModalProps {
  onClose: () => void; // This indicates that onClose is a function that takes no arguments and returns void.
}

function Modal({ onClose }: ModalProps) {
  return (
    <section className="flex flex-col flex-1 overflow-auto w-full truncate ">
      <div className="">
        <button
          className="flex items-center justify-evenly border rounded-full md:text-base w-1/12 h-8 font-semibold text-xs "
          onClick={() => onClose()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
          </svg>
        </button>
      </div>
      <div className="">
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-5 grid-cols-6 ">
          <div className="col-span-6">
            <label
              htmlFor="last-name"
              className="block md:text-base font-semibold leading-6 text-gray-900 text-sm"
            >
              Tên tài khoản
            </label>
            <div className="mt-2 pl-0.5 pr-0.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block rounded-lg w-full h-14 hover:bg-white border border-2 hover:transition hover:duration-300 hover:ring hover:ring-pink-100 focus:ring focus:ring-pink-100 focus:outline-none pl-4 focus:bg-white "
              />
            </div>
          </div>

          <div className="col-span-6">
            <label
              htmlFor="email"
              className="block md:text-base font-semibold leading-6 text-gray-90 :text-sm"
            >
              Email
            </label>
            <div className="mt-2 pl-0.5 pr-0.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block rounded-lg w-full h-14 hover:bg-white border border-2 hover:transition hover:duration-300 hover:ring hover:ring-pink-100 focus:ring focus:ring-pink-100 focus:outline-none pl-4 focus:bg-white "
              />
            </div>
          </div>
          <div className="col-span-3">
            <label
              htmlFor="password"
              className="block md:text-base font-semibold leading-6 text-gray-900 text-sm"
            >
              Mật khẩu
            </label>
            <div className="mt-2 pl-0.5 pr-0.5">
              <input
                id="password"
                name="password"
                type="password"
                className="block rounded-lg w-full h-14 hover:bg-white border border-2 hover:transition hover:duration-300 hover:ring hover:ring-pink-100 focus:ring focus:ring-pink-100 focus:outline-none pl-4 focus:bg-white "
              />
            </div>
          </div>
          <div className="col-span-3">
            <label
              htmlFor="password"
              className="block md:text-base font-semibold leading-6 text-gray-900 text-sm"
            >
              Nhập lại mật khẩu
            </label>
            <div className="mt-2 pl-0.5 pr-0.5">
              <input
                id="password"
                name="password"
                type="password"
                className="block rounded-lg w-full h-14 hover:bg-white border border-2 hover:transition hover:duration-300 hover:ring hover:ring-pink-100 focus:ring focus:ring-pink-100 focus:outline-none pl-4 focus:bg-white "
              />
            </div>
          </div>
          <div className="col-span-6 ">
            <div className="mt-2 flex gap-x-6 w-full max-w-28 md:max-w-max ">
              <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                className=" h-6 w-6 focus:ring-indigo-600 mt-1.5"
              />{" "}
              <p className="p-0 m-0 whitespace-pre-line w-10/12  text-sm md:text-base">
                Tôi đồng ý với{" "}
                <a href="#" className="underline">
                  Điều khoản dịch vụ
                </a>{" "}
                và{" "}
                <a href="#" className="underline">
                  Chính sách bảo mật
                </a>
                .
              </p>
            </div>
          </div>
          <div className="col-span-6">
            <button className="inline-flex items-center justify-center border rounded-full w-full p-2 h-16 md:text-base font-medium cursor-pointer bg-primary text-white text-sm hover:bg-blue-500">
              Tạo tài khoản
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal;
