interface ModalProps {
  onClose: () => void; // This indicates that onClose is a function that takes no arguments and returns void.
}

function Modal({ onClose }: ModalProps) {
  return (
    <section className="flex flex-col flex-1 overflow-auto w-full truncate ">
      <div className="">
        <button
          className="flex items-center justify-evenly border rounded-lg text-base w-1/6 h-10 font-bold max-sm:text-sm max-sm:w-1/5"
          onClick={() => onClose()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
          </svg>
          Back
        </button>
      </div>
      <div className="">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 sm:">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-lg font-bold leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-lg h-10 bg-gray-100 hover:bg-white hover:border hover:transition hover:duration-30 hover:shadow-xl hover:shadow-slate-100 focus:shadow-xl focus:shadow-slate-100 focus:outline-none pl-4 focus:bg-white focus:border "
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-lg font-bold leading-6 text-gray-900"
            >
              User name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-lg h-10 bg-gray-100 hover:bg-white hover:border hover:transition hover:duration-30 hover:shadow-xl hover:shadow-slate-100 focus:shadow-xl focus:shadow-slate-100 focus:outline-none pl-4 focus:bg-white focus:border "
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-lg font-bold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-lg h-10 bg-gray-100 hover:bg-white hover:border hover:transition hover:duration-30 hover:shadow-xl hover:shadow-slate-100 focus:shadow-xl focus:shadow-slate-100 focus:outline-none pl-4 focus:bg-white focus:border "
              />
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="password"
              className="block text-lg font-bold leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                className="block w-full rounded-lg h-10 bg-gray-100 hover:bg-white hover:border hover:transition hover:duration-30 hover:shadow-xl hover:shadow-slate-100 focus:shadow-xl focus:shadow-slate-100 focus:outline-none pl-4 focus:bg-white focus:border "
              />
            </div>
          </div>
          <div className="sm:col-span-6 max-sm:hidden">
            <div className="mt-2 flex items-stretch justify-around w-full">
              <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                className=" h-6 w-6 focus:ring-indigo-600 mt-1.5"
              />{" "}
              <p className="p-0 m-0 ">
                I agree with{" "}
                <a href="#" className="underline">
                  Terms of Service
                </a>
                ,{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                , and <br />
                default{" "}
                <a href="#" className="underline">
                  Notification Settings
                </a>
                .
              </p>
            </div>
          </div>
          <div className="sm:col-span-6">
            <button className="inline-flex items-center justify-center border rounded-lg w-full p-2 h-16 text-base font-normal cursor-pointer bg-black text-white">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal;
