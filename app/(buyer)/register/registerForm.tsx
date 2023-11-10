import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronLeft,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SetStateAction, useEffect, useState } from "react";

interface ModalProps {
  onClose: () => void;
}

type Notification = {
  title: string;
  content: string;
};

function Modal({ onClose }: ModalProps) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [formatPassword, setFormatPassword] = useState(false);

  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const [error, setError] = useState(false);

  const handleCheckboxChange = (e: any) => {
    setAgreedToTerms(!agreedToTerms);
  };

  const handleEmailChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrorEmail(!emailRegex.test(value));
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

  const handleRegister = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorPassword(true);
      return;
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,60}$/;
    if (!passwordRegex.test(password)) {
      setFormatPassword(true);
      return;
    }
    if (!agreedToTerms) {
      return;
    }
    if (!email || !password || !confirmPassword || !agreedToTerms) {
      return;
    }
    try {
      const data = {
        name: name,
        email: email,
        password: password,
      };
      const response = await axios.post(
        "https://fancy-cemetery-production.up.railway.app/auth/register",
        data, // Gửi dữ liệu dưới dạng JSON
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 5000);
      router.push("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  useEffect(() => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,60}$/;

    const isPasswordValid = passwordRegex.test(password);
    const arePasswordsMatching = password === confirmPassword;

    setFormatPassword(!isPasswordValid);
    setErrorPassword(!arePasswordsMatching);
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
        <div className="">
          {showSuccessPopup && (
            <div className="fixed top-4 right-4 bg-blue-500 text-white p-4 rounded shadow-lg">
              <div className="font-bold text-lg mb-2 mr-2">
                Đăng ký thành công
              </div>
              <p className="text-sm">
                Vui lòng đăng nhập để tiếp tục truy cập trang web
              </p>
              <button
                className="close-button absolute top-2 right-2 text-lg cursor-pointer"
                onClick={() => setShowSuccessPopup(!showSuccessPopup)}
              >
                x
              </button>
            </div>
          )}
          {error && (
            <div className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded shadow-lg">
              <div className="font-bold text-lg mb-2 pr-8">
                Đăng ký Thất bại
              </div>
              <p className="text-sm ">Vui lòng Thử lại</p>
              <button
                className="close-button absolute top-2 right-3 text-lg cursor-pointer"
                onClick={() => setError(!error)}
              >
                x
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <form action="">
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-5 grid-cols-6 ">
            <div className="col-span-6">
              <label
                htmlFor="last-name"
                className="block md:text-base font-semibold leading-6 text-gray-900 text-sm"
              >
                Họ và tên
              </label>
              <div className="mt-2 pl-1 pr-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nguyễn Văn A"
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
                  required
                  autoComplete="email"
                  className={`block rounded-lg w-full h-14 focus:outline-none ${
                    errorEmail
                      ? "border border-red-500 focus:ring-red-100"
                      : "hover:bg-white border hover:border-blue-500 hover:ring hover:ring-blue-100 focus:ring focus:ring-blue-100 focus:border-blue-500"
                  } pl-4 focus:bg-white `}
                  onChange={handleEmailChange}
                  placeholder="nguyenvana@gmail.com"
                />
                {errorEmail && (
                  <p className="text-red-500 text-sm mt-1 ml-1">
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
                  required
                  type={showPassword ? "text" : "password"}
                  className={`block rounded-lg w-full h-14 focus:outline-none appearance-none
                      hover:bg-white border hover:border-blue-500 hover:ring hover:border hover:ring-blue-100 focus:ring focus:ring-blue-100 
                 pl-4 pr-10 focus:bg-white`}
                  onChange={handlePasswordChange}
                  value={password}
                  placeholder="***********"
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
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  className={`block rounded-lg w-full h-14 focus:outline-none appearance-none ${
                    errorPassword
                      ? "border border-red-500 focus:ring-red-100"
                      : "hover:bg-white border hover:border-blue-500 hover:ring hover:border hover:ring-blue-100 focus:ring focus:ring-blue-100 "
                  } pl-4 pr-10 focus:bg-white`}
                  onChange={handleConfirmPasswordChange}
                  value={confirmPassword}
                  placeholder="**********"
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
              </div>
            </div>
            <div className="col-span-6">
              {errorPassword && (
                <p className="text-red-500 text-sm mt-1 ml-1">
                  Mật khẩu không khớp
                </p>
              )}
              {formatPassword && (
                <p
                  className={`text-gray-400 text-sm whitespace-pre-line ml-1 ${
                    errorPassword ? "mt-5" : "mt-1"
                  } ${formatPassword ? "text-red-400" : "text-gray-400"} `}
                >
                  <FontAwesomeIcon
                    icon={faExclamation}
                    style={{ color: "#ffa200" }}
                    size="lg"
                    className="mr-2 "
                  />
                  Mật khẩu phải có tối thiểu 6 và tối đa 60 ký tự, ít nhất một
                  chữ hoa, một chữ thường, một số và một ký tự đặc biệt
                </p>
              )}
            </div>
            <div className="col-span-6 ">
              <div className="mt-2 flex pl-2 gap-x-4 w-full max-w-28 md:max-w-max ">
                <input
                  id="checkbox "
                  name="checkbox"
                  type="checkbox"
                  required
                  checked={agreedToTerms}
                  onChange={handleCheckboxChange}
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
              <button
                className="inline-flex items-center justify-center border rounded-full w-full p-2 h-16 md:text-base font-medium cursor-pointer bg-primary text-white text-sm hover:bg-blue-500"
                onClick={handleRegister}
              >
                Tạo tài khoản
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Modal;
