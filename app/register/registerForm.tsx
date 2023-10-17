import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SetStateAction, useEffect, useState } from "react";

interface ModalProps {
  onClose: () => void; // This indicates that onClose is a function that takes no arguments and returns void.
}

function Modal({ onClose }: ModalProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

  const handleEmailChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError(!emailRegex.test(value));
  };

  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
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
    <section className="flex flex-col flex-1 overflow-auto w-full truncate ">
      <div className="">
        <button
          className="flex items-center justify-evenly  rounded-full md:text-base w-1/12 h-8 font-normal text-xs pl-5 gap-x-2 underline"
          onClick={() => onClose()}
        >
          <FontAwesomeIcon icon={faChevronLeft} /> Back
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
            <div className="mt-2 pl-1 pr-1">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block rounded-lg w-full h-14 hover:bg-white border  hover:transition hover:duration-300 hover:ring hover:ring-blue-100 hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-100 focus:outline-none pl-4 focus:bg-white "
              />
            </div>
          </div>

          <div className="col-span-6">
            <label
              htmlFor="email"
              className="block md:text-base font-semibold leading-6 text-gray-90 text-sm"
            >
              Email
            </label>
            <div className="mt-2 pl-1 pr-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={`block rounded-lg w-full h-14 focus:outline-none ${
                  error
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
          </div>
          <div className="col-span-3">
            <label
              htmlFor="password"
              className="block md:text-base font-semibold leading-6 text-gray-900 text-sm"
            >
              Mật khẩu
            </label>
            <div className="mt-2 pl-1 pr-1 relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="appearance-none rounded-lg w-full h-14 hover:bg-white border hover:border-blue-500 focus:border-blue-500 hover:transition hover:duration-300 hover:ring hover:ring-blue-100 focus:ring focus:ring-blue-100 focus:outline-none pl-4 pr-10 focus:bg-white"
                onChange={handlePasswordChange}
                value={password}
              />
              {password && (
                <div
                  className="absolute top-3 right-1 px-2 py-1 cursor-pointer"
                  onClick={toggleShowPassword}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </div>
              )}
            </div>
          </div>
          <div className="col-span-3 relative">
            <label
              htmlFor="confirmPassword"
              className="block md:text-base font-semibold leading-6 text-gray-900 text-sm"
            >
              Nhập lại mật khẩu
            </label>
            <div className="mt-2 pl-1 pr-1 relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className={`block rounded-lg w-full h-14 focus:outline-none appearance-none ${
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
                <p className="text-red-500 text-sm mt-1">Mật khẩu không khớp</p>
              )}
            </div>
          </div>
          <div className="col-span-6 ">
            <div className="mt-2 flex pl-2 gap-x-6 w-full max-w-28 md:max-w-max ">
              <input
                id="checkbox "
                name="checkbox"
                type="checkbox"
                className=" h-6 w-6 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
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
