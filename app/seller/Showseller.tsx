import { useState,useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { DataSeller } from "@/components/api/interface";
const ShowSellerChild = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const [sortDropDown, setSortDropDown] = useState(false);
  const [genreDropDown, setGenreDropDown] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleLoadMore = () => {
    setShowMore(true);
  };
  const handleHideItems = () => {
    setShowMore(false);
  };
  const handleSort = () => {
    setSortDropDown(!sortDropDown);
    setGenreDropDown(false)
  };
  const handleGenre = () => {
    setGenreDropDown(!genreDropDown);
    setSortDropDown(false)
  };
  const handleLoadMore1 = () => {
    setShowMore1(true);
  };
  const handleHide1 = () => {
    setShowMore1(false);
  };

  const [data, setData] = useState<DataSeller[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/users");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {" "}
      <div className={`${isDropdownOpen ? "blur-sm	" : ""} md:blur-0 lg:blur-0`}>
        <div className="max-w-xxs px-5 mx-auto md:max-w-3xl md:px-0 lg:max-w-7xl pt-12 lg:px-0">
          {data.map((item) => (
            <div className="mb-8 md:mb-0 lg:mb-0">
              <div className="lg:flex">
                <div className="lg:items-center my-3 lg:w-full ">
                  <div className="w-auto md:block md:w-auto my-3 mx-0 mb-8 lg:flex">
                    {" "}
                    <div className="flex justify-center md:flex lg:block">
                      <img
                        src={
                          item.avatar ||
                          "https://i.pinimg.com/736x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg"
                        }
                        alt={item.avatar ? "Avatar" : "ERR"}
                        className="items-center mb-5 w-[80px] h-[80px] md:w-[80px] md:h-[80px] lg:w-[80px] lg:h-[80px] lg:mr-5 rounded-[50%] border-[5px] border-white shadow-md"
                      />
                    </div>
                    <div className="items-start">
                      <div className="">
                        <h1 className="text-2xl text-center text-gray-800 font-semibold md:text-2xl md:text-center lg:text-[26px] lg:text-left  ">
                          {item.name}
                        </h1>
                        <div className="flex items-center justify-center md:justify-center lg:justify-start gap-2">
                          <div className="w-[12px] h-[12px] bg-green-500 rounded-[50%]"></div>
                          <p className="text-[15px] text-[#58667E]">
                            Hoạt động {item.activeTime} giờ trước
                          </p>
                        </div>
                      </div>
                      <div className="leading-10">
                        {" "}
                        <div className="flex justify-center leading-16 gap-x-4 font-inter text-[15px] md:justify-center lg:justify-start">
                          <p>
                            <span className="font-semibold">1.020</span>{" "}
                            Following
                          </p>
                          <p>
                            <span className="font-semibold">546</span> Followers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:gap-x-16 md:justify-center md:flex items-baseline my-3 mx-0 mb-8 lg:flex box-border m-0 lg:gap-0 ">
                  <div className="w-auto mb-5 md:w-auto lg:w-[425px]">
                    <p className="leading-9 lg:m-0 text-[#58667E] text-sm font-semibold">
                      Số lượng sản phẩm
                    </p>
                    <span className="leading-10 text-[26px] lg:m-0 text-gray-800 text-3xl font-semibold">
                      1,254 Sản phẩm
                    </span>
                  </div>
                  <div className="w-auto md:mb-0 lg:mb-0 lg:w-[425px]">
                    <p className="leading-9 lg:m-0 text-[#58667E] text-sm font-semibold ">
                      Đánh giá tổng
                    </p>
                    <span className="flex items-center gap-x-2 leading-10 text-[26px] lg:m-0 text-gray-800 text-3xl font-semibold">
                      5.0{" "}
                      <div className="flex gap-x-1">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                            fill="#ECAA00"
                          />
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                            fill="#ECAA00"
                          />
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                            fill="#ECAA00"
                          />
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                            fill="#ECAA00"
                          />
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                            fill="#ECAA00"
                          />
                        </svg>
                      </div>
                    </span>
                    <div className="flex gap-x-1">
                      <p className="leading-5 lg:m-0 text-gray-500 text-sm">
                        Đã bán{" "}
                        <span className="font-semibold text-black">3.827</span>{" "}
                        sản phẩm
                      </p>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.1877 3.74805L5.62524 11.248L2.81274 8.43555"
                          stroke="#3861FB"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="block md:w-auto md:gap-x-5 md:mb-[30px] md:flex lg:flex">
                  <div className="mb-8 w-auto md:mb-8 lg:flex-none lg:w-[427px]">
                    <ul className="lg:flex flex-col flex-0.33 order-3 mb-7">
                      <li className="md:my-[4px] lg:my-1 flex items-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2"
                        >
                          <path
                            d="M6.5 12.1624L5.1725 13.4524C4.8244 13.8005 4.35228 13.9961 3.86 13.9961C3.36772 13.9961 2.8956 13.8005 2.5475 13.4524C2.1994 13.1044 2.00384 12.6322 2.00384 12.1399C2.00384 11.6477 2.1994 11.1755 2.5475 10.8274L5.9525 7.41495C6.28671 7.07965 6.73702 6.88566 7.21026 6.87309C7.68351 6.86053 8.14347 7.03036 8.495 7.34745L8.585 7.42245C8.72722 7.56169 8.91893 7.63873 9.11796 7.63662C9.31698 7.63451 9.50701 7.55342 9.64625 7.4112C9.78549 7.26898 9.86253 7.07727 9.86042 6.87824C9.85831 6.67922 9.77722 6.48919 9.635 6.34995C9.59267 6.29522 9.54761 6.24265 9.5 6.19245C8.85977 5.63543 8.03175 5.34258 7.18368 5.37322C6.3356 5.40386 5.53087 5.75569 4.9325 6.35745L1.4825 9.76995C0.896267 10.408 0.579215 11.2479 0.597555 12.1143C0.615896 12.9806 0.968211 13.8063 1.58092 14.419C2.19364 15.0317 3.01937 15.3841 3.88569 15.4024C4.752 15.4207 5.5919 15.1037 6.23 14.5174L7.5275 13.2499C7.65561 13.1102 7.72604 12.9271 7.72461 12.7375C7.72318 12.5479 7.64999 12.3659 7.51978 12.2281C7.38957 12.0903 7.212 12.0069 7.0228 11.9947C6.8336 11.9825 6.6468 12.0425 6.5 12.1624V12.1624ZM14.5175 1.48245C13.8866 0.855454 13.0332 0.50354 12.1438 0.50354C11.2543 0.50354 10.4009 0.855454 9.77 1.48245L8.4725 2.74995C8.34439 2.88971 8.27396 3.07281 8.27539 3.2624C8.27683 3.45199 8.35001 3.634 8.48022 3.77181C8.61043 3.90963 8.788 3.99301 8.9772 4.00519C9.1664 4.01736 9.3532 3.95743 9.5 3.83745L10.7975 2.54745C11.1456 2.19935 11.6177 2.00379 12.11 2.00379C12.6023 2.00379 13.0744 2.19935 13.4225 2.54745C13.7706 2.89555 13.9662 3.36767 13.9662 3.85995C13.9662 4.35223 13.7706 4.82435 13.4225 5.17245L10.0175 8.58495C9.68329 8.92024 9.23298 9.11424 8.75974 9.1268C8.2865 9.13937 7.82653 8.96954 7.475 8.65245L7.385 8.57745C7.24278 8.43821 7.05107 8.36117 6.85205 8.36328C6.65302 8.36539 6.46299 8.44648 6.32375 8.5887C6.18451 8.73092 6.10747 8.92263 6.10958 9.12165C6.11169 9.32068 6.19278 9.51071 6.335 9.64995C6.38948 9.70567 6.44707 9.75825 6.5075 9.80745C7.14851 10.3628 7.97617 10.6545 8.82373 10.6239C9.67128 10.5933 10.4757 10.2426 11.075 9.64245L14.4875 6.22995C15.1185 5.60301 15.4758 4.75187 15.4814 3.86239C15.4871 2.9729 15.1405 2.11732 14.5175 1.48245V1.48245Z"
                            fill="#999999"
                          />
                        </svg>

                        <path d="M8.36434 16.5441C8.18462 16.5441 8.00895 16.4907 7.85954 16.3909C7.71012 16.291 7.59367 16.1491 7.5249 15.983C7.45613 15.817 7.43814 15.6343 7.47319 15.458C7.50824 15.2817 7.59476 15.1198 7.72182 14.9927L14.9922 7.72213C15.1636 7.55658 15.3932 7.46498 15.6315 7.46705C15.8697 7.46912 16.0977 7.5647 16.2662 7.7332C16.4347 7.9017 16.5302 8.12965 16.5323 8.36794C16.5344 8.60623 16.4428 8.8358 16.2772 9.00721L9.00686 16.2778C8.83646 16.4483 8.60535 16.544 8.36434 16.5441Z"></path>
                        <Link
                          className="text-[#3861FB] py-1 line-clamp-1 w-[80%] cursor-pointer"
                          href="https://www.binance.com/"
                          target="_blank"
                        >
                          https://www.marketmmo.com/
                        </Link>
                      </li>
                      <li className="md:my-[4px] lg:my-1 flex items-center">
                        {" "}
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2"
                        >
                          <path
                            d="M6.42721 2.82336C6.69409 2.82336 6.93999 2.96811 7.06955 3.20146L7.96823 4.82029C8.08589 5.03225 8.09144 5.28862 7.983 5.50546L7.11723 7.23703C7.11723 7.23703 7.36813 8.52693 8.41816 9.57695C9.46822 10.627 10.7538 10.8735 10.7538 10.8735L12.4851 10.0079C12.702 9.89941 12.9586 9.90503 13.1706 10.0229L14.7941 10.9255C15.0272 11.0551 15.1718 11.3009 15.1718 11.5676V13.4313C15.1718 14.3805 14.2902 15.066 13.3909 14.7625C11.5439 14.1393 8.67684 12.9527 6.85965 11.1355C5.04246 9.31827 3.85583 6.45123 3.23261 4.60425C2.92917 3.70495 3.61468 2.82336 4.56377 2.82336H6.42721Z"
                            stroke="#999999"
                            stroke-width="1.5"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <Link
                          className="text-[#3861FB] py-1 line-clamp-1 w-[70%] cursor-pointer"
                          href="https://www.binance.com/en/fee/schedule"
                          target="_blank"
                        >
                          {item.phone}
                        </Link>
                      </li>
                      <li className="md:my-[4px] lg:my-1 flex items-center">
                        {" "}
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2"
                        >
                          <path
                            d="M17.4365 3.84717C16.8035 4.12222 16.1338 4.30343 15.4484 4.38506C16.1687 3.96332 16.7103 3.29331 16.9718 2.50069C16.2908 2.89887 15.5471 3.17825 14.7724 3.32686C14.4462 2.98498 14.0538 2.713 13.6192 2.52746C13.1846 2.34192 12.7168 2.24669 12.2443 2.24756C10.3311 2.24756 8.78281 3.77335 8.78281 5.6542C8.78145 5.91583 8.81143 6.17667 8.87211 6.43116C7.5002 6.36684 6.15682 6.01687 4.92792 5.40363C3.69902 4.79039 2.61165 3.92739 1.73539 2.86983C1.42798 3.38808 1.2654 3.97938 1.26465 4.58194C1.26465 5.76319 1.88094 6.80733 2.81152 7.41905C2.26018 7.40596 1.72013 7.26004 1.23723 6.99366V7.03585C1.23723 8.68819 2.43254 10.0628 4.01457 10.3757C3.71707 10.455 3.4105 10.4952 3.10262 10.4952C2.88415 10.4956 2.66618 10.4744 2.45187 10.4319C2.89168 11.7855 4.17172 12.7698 5.68801 12.798C4.45591 13.7475 2.94322 14.2607 1.3877 14.2569C1.11158 14.2565 0.83573 14.2401 0.561523 14.2077C2.14397 15.2182 3.98344 15.7527 5.86098 15.7476C12.2369 15.7476 15.7202 10.555 15.7202 6.05147C15.7202 5.90381 15.7163 5.75616 15.7093 5.61202C16.3854 5.1311 16.9703 4.53346 17.4365 3.84717V3.84717Z"
                            fill="#999999"
                          />
                        </svg>
                        <Link
                          className="text-[#3861FB] py-1 md:text-[#3861FB] lg:text-[#3861FB] line-clamp-1 w-[70%] cursor-pointer"
                          href="https://twitter.com/binance"
                          target="_blank"
                        >
                          @chauhoangluan
                        </Link>
                      </li>
                    </ul>
                    <div className="w-[100%]">
                      <p className="lg:leading-1.5 text-light-neutral-6 mb-1 text-[14px]">
                        Bạn cần tìm sản phẩm?
                      </p>
                      <button className="w-[350px] delay-150 md:w-auto items-center lg:items-center justify-center bg-[#3861FB] border-0 rounded-lg inline-flex text-white cursor-pointer font-semibold  h-[40px] text-base px-4 leading-6 hover:bg-[#3862fbdf]">
                        <Link
                          className="flex md:flex lg:flex items-center text-inherit leading-inherit "
                          href="https://support.Market MMO.com/hc/en-us/requests/new?ticket_form_id=360000553552"
                          target="_blank"
                        >
                          Nhắn tin ngay
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="text-justify md:mb-[12px] lg:flex-grow flex-shrink">
                    <div>
                      <h2 className="text-[#58667E] text-[18px] lg:text-[24px] leading-34 my-0 font-bold">
                        Giới thiệu về Market MMO
                      </h2>
                      <div>
                        <div>
                          <h2
                            className="lg:text-base text-[#58667E] font-bold mt-3 mb-3"
                            id="what-is-binance"
                          >
                            Market MMO là gì?
                          </h2>
                          <p className="font-semibold text-sm text-[#58667E] leading-[1.8] break-words mb-1">
                            BinMarket MMOance là sàn giao dịch tiền điện tử lớn
                            nhất thế giới tính theo khối lượng giao dịch, với
                            khối lượng giao dịch hàng ngày là 76 tỷ USD trên Sàn
                            giao dịch Market MMO tính đến tháng 8 năm 2022 và 90
                            triệu khách hàng trên toàn thế giới. Nền tảng đã tự
                            thành lập với tư cách là thành viên đáng tin cậy của
                            không gian tiền điện tử, nơi người dùng có thể mua,
                            bán và lưu trữ tài sản kỹ thuật số của họ, cũng như
                            truy cập hơn 350 loại tiền điện tử được liệt kê và
                            hàng ngàn các cặp giao dịch. Hệ sinh thái Market MMO
                            hiện bao gồm Sàn giao dịch Market MMO, Labs,
                            Launchpad, Thông tin, Học viện, Nghiên cứu, Ví
                            Trust, Từ thiện, NFT và hơn thế nữa.
                          </p>
                          <h2
                            className="lg:text-base text-[#58667E] font-bold mt-3 mb-3"
                            id="who-are-the-binance-founders"
                          >
                            Ai là người sáng lập Market MMO?
                          </h2>{" "}
                          {showMore && (
                            <>
                              {" "}
                              <p className="font-semibold text-[#58667E] text-sm leading-[1.8] break-words mb-1">
                                Công ty toàn cầu được đồng sáng lập tại Trung
                                Quốc bởi Changpeng Zhao và Yi He. Một nhà phát
                                triển người Canada gốc Hoa và giám đốc kinh
                                doanh, Changpeng Zhao, người hay gọi là CZ, là
                                Giám đốc điều hành của công ty. Ông học tại Đại
                                học McGill Montreal và đã có thành tích thành
                                công với tư cách là một doanh nhân. Kinh nghiệm
                                trước đây của ông bao gồm Trưởng phòng Nhóm
                                nghiên cứu và phát triển hợp đồng tương lai của
                                Bloomberg Tradebook, người sáng lập Fusion
                                Systems và Giám đốc Công nghệ tại
                                Blockchain.com.
                              </p>
                              <p className="font-semibold text-[#58667E] text-sm leading-[1.8] break-words mb-1">
                                Yi He là CMO tại Market MMO và đứng đầu tại
                                Market MMO Labs, nhánh đầu tư mạo hiểm của công
                                ty. Yi trước đây là Phó Chủ tịch của công ty
                                công nghệ video di động hàng đầu, Yixia
                                Technology và đồng sáng lập sàn giao dịch tài
                                sản kỹ thuật số OKCoin.
                              </p>
                              <h2
                                className="lg:text-base text-[#58667E] font-bold mt-3 mb-3"
                                id="when-did-binance-launch"
                              >
                                Market MMO ra mắt khi nào?
                              </h2>
                              <p className="font-semibold text-[#58667E] text-sm leading-[1.8] break-words mb-1">
                                Market MMO được ra mắt vào tháng 6 năm 2017 và
                                trong vòng 180 ngày đã phát triển thành sàn giao
                                dịch tiền điện tử lớn nhất trong thế giới.
                              </p>
                              <h2
                                className="text-base text-[#58667E] font-bold mt-3 mb-3"
                                id="binance-restricted-countries"
                              >
                                Các quốc gia bị hạn chế của Market MMO
                              </h2>
                              <p className="font-semibold text-[#58667E] text-sm leading-[1.8] break-words mb-1">
                                Theo Điều khoản sử dụng của Market MMO, các địa
                                điểm bị hạn chế bao gồm Hoa Kỳ, Singapore và
                                Ontario (Canada). Tuy nhiên, một số quốc gia đã
                                hạn chế sử dụng hoặc các tính năng có thể bị hạn
                                chế vì lý do quy định, bao gồm nhưng không giới
                                hạn ở Trung Quốc, Malaysia, Nhật Bản, Vương quốc
                                Anh và Thái Lan. Các sản phẩm tương lai và phái
                                sinh cũng không có sẵn ở Đức, Ý và Hà Lan. TRONG
                                Tháng 9 năm 2019, một nền tảng dành riêng cho
                                Hoa Kỳ khách hàng, Market MMO.US, đã được ra
                                mắt.
                              </p>
                              <h2
                                className="lg:text-base text-[#58667E] font-bold mt-3 mb-3"
                                id="how-much-are-binance-fees"
                              >
                                Phí Market MMO là bao nhiêu?{" "}
                              </h2>
                              <p className="font-semibold text-[#58667E] text-sm leading-[1.8] break-words mb-1">
                                Nền tảng này thân thiện với người dùng và là một
                                trong những nền tảng rẻ nhất với nhiều lựa chọn
                                về loại giao dịch và bộ công cụ giao dịch tiên
                                tiến dành cho các nhà đầu tư có kinh nghiệm. Nó
                                tính phí dựa trên hệ thống theo cấp độ, từ người
                                dùng thông thường đến VIP 9. Đối với người dùng
                                thông thường, phí cho người thực hiện 0,10% là
                                tính phí cho giao dịch giao ngay. Vào tháng 7
                                năm 2022, Market MMO đã công bố giao dịch không
                                tính phí cho các cặp giao dịch giao ngay BTC, và
                                vào tháng 8 đối với cặp ETH/BUSD.
                              </p>
                              <h2
                                className="lg:text-base text-[#58667E] font-bold mt-3 mb-3"
                                id="is-it-possible-to-use-leverage-or-margin-trading-on-binance"
                              >
                                Có thể sử dụng đòn bẩy hoặc giao dịch ký quỹ
                                trên Market MMO
                              </h2>
                              <p className="font-semibold text-[#58667E] text-sm leading-[1.8] break-words mb-1">
                                Nhà giao dịch có thể vay vốn và tham gia ký quỹ
                                giao dịch trên Market MMO Margin, cho phép giao
                                dịch tiền điện tử với đòn bẩy lên tới 10 lần.
                                Người dùng cũng có thể sử dụng các sản phẩm phái
                                sinh như Market MMO Futures, thanh toán bằng
                                USDT, BUSD hoặc các loại tiền điện tử khác và
                                Market MMO Options để tận dụng các giao dịch của
                                họ.
                              </p>{" "}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    {!showMore && (
                      <button
                        id="myBtn"
                        className="bg-[#EFF2F5] delay-150 text-primary-black font-semibold leading-6 flex items-center justify-center outline-none cursor-pointer w-full h-12 rounded-lg border-transparent my-5 hover:bg-[#eff0f1]"
                        onClick={handleLoadMore}
                      >
                        Xem thêm
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="lg:ml-1 font-bold"
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                    )}
                    {showMore && (
                      <button
                        id="myBtn"
                        className="bg-[#EFF2F5] delay-150 text-primary-black font-semibold leading-6 flex items-center justify-center outline-none cursor-pointer w-full h-12 rounded-lg border-transparent my-5 hover:bg-[#eff0f1]"
                        onClick={handleHideItems}
                      >
                        Ẩn
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="lg:ml-1 font-bold"
                        >
                          <path
                            d="M6 15L12 9L18 15"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div>
            <div className="">
              <Link
                className="lg: text-2xl font-bold text-var(--text-color)"
                href="#reserve"
              >
                Sản phẩm đang bán
              </Link>
              <div className="mt-[30px]">
                <div className="block md:flex lg:flex items-center gap-x-4">
                  <p className="mb-4 justify-center text-[#58667E] font-bold text-[14px] leading-20 md:m-0 lg:m-0">
                    9,655 sản phẩm
                  </p>
                  <div className="flex transition ease-in-out  mb-4 rounded-[9px] border border-[#ececec] px-3 py-1 md:w-[38%] md:m-0 lg:m-0  lg:w-[59%] hover:border-[#c8c8c8bb]">
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
                  <div className="flex gap-4">
                    <div className="relative">
                      <button
                        onClick={handleSort}
                        className="flex px-5 py-2.5 items-center rounded-[9px] border border-[#ececec] gap-2 font-semibold hover:border-[#c8c8c8bb]"
                      >
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
                      {sortDropDown && (
                        <div className="absolute hidden mt-2 bg-white p-2 z-20 w-full rounded-[7px] shadow-md md:block lg:block">
                          <div className="py-2 px-1 hover:bg-slate-50">
                            <button className="font-medium">Mới nhất</button>
                          </div>
                          <div className="py-2 px-1 hover:bg-slate-100">
                            <button className="font-medium">Từ thấp tới cao</button>
                          </div>
                          <div className="py-2 px-1 hover:bg-slate-100">
                            <button className="font-medium">Từ cao tới thấp</button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <button
                        onClick={handleGenre}
                        className="flex px-5 py-2.5 items-center rounded-[9px] border border-[#ececec] gap-2 font-semibold hover:border-[#c8c8c8bb]"
                      >
                        Tất cả
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
                      {genreDropDown && (
                        <div className="hidden absolute mt-2 bg-white p-2 z-20 w-full rounded-[7px] shadow-md md:block lg:block">
                          <div className="p-2 hover:bg-slate-50">
                            <button className="font-medium">FaceBook</button>
                          </div>
                          <div className="p-2 hover:bg-slate-100">
                            <button className="font-medium">Gmail</button>
                          </div>
                          <div className="p-2 hover:bg-slate-100">
                            <button className="font-medium">Twitter</button>
                          </div>
                          <div className="p-2 hover:bg-slate-100">
                            <button className="font-medium">Telegram</button>
                          </div>
                        </div>
                      )}
                    </div>
                    <button className="h-[40px] delay-150 px-5 items-center rounded-[9px] bg-[#3861FB] text-white hover:bg-[#3862fbdf]">
                      Lọc
                    </button>
                  </div>
                </div>
                <div>
                  <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <Link href="">
                      <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-200 ">
                        <img
                          src="https://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png"
                          alt=""
                          width={0}
                          height={0}
                          className="w-full rounded-t-2xl"
                          sizes="100vh"
                        />
                        <div className="p-3">
                          <div className=" w-full line-clamp-1 overflow-hidden">
                            <p className="w-full font-bold">
                              Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                            </p>
                          </div>
                          <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            <span className="mr-1 text-gray-900">
                              <FontAwesomeIcon
                                icon={faFontAwesome}
                                width={12}
                                height={12}
                              />
                            </span>
                            <span>Gmail</span>
                          </div>
                          <div className="block justify-between md:flex lg:flex ">
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500">
                                Đánh giá
                              </h4>
                              <span className="flex gap-x-1 my-1 text-base font-bold">
                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500 text-left md:text-right lg:text-right">
                                Giá
                              </h4>
                              <span className="my-2 text-base font-bold">
                                300.000 VND
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="">
                      <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-200 ">
                        <img
                          src="https://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png"
                          alt=""
                          width={0}
                          height={0}
                          className="w-full rounded-t-2xl"
                          sizes="100vh"
                        />
                        <div className="p-3">
                          <div className=" w-full line-clamp-1 overflow-hidden">
                            <p className="w-full font-bold">
                              Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                            </p>
                          </div>
                          <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            <span className="mr-1 text-gray-900">
                              <FontAwesomeIcon
                                icon={faFontAwesome}
                                width={12}
                                height={12}
                              />
                            </span>
                            <span>Gmail</span>
                          </div>
                          <div className="block justify-between md:flex lg:flex ">
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500">
                                Đánh giá
                              </h4>
                              <span className="flex gap-x-1 my-1 text-base font-bold">
                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500 text-left md:text-right lg:text-right">
                                Giá
                              </h4>
                              <span className="my-2 text-base font-bold">
                                300.000 VND
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>{" "}
                    <Link href="">
                      <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-200 ">
                        <img
                          src="https://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png"
                          alt=""
                          width={0}
                          height={0}
                          className="w-full rounded-t-2xl"
                          sizes="100vh"
                        />
                        <div className="p-3">
                          <div className=" w-full line-clamp-1 overflow-hidden">
                            <p className="w-full font-bold">
                              Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                            </p>
                          </div>
                          <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            <span className="mr-1 text-gray-900">
                              <FontAwesomeIcon
                                icon={faFontAwesome}
                                width={12}
                                height={12}
                              />
                            </span>
                            <span>Gmail</span>
                          </div>
                          <div className="block justify-between md:flex lg:flex ">
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500">
                                Đánh giá
                              </h4>
                              <span className="flex gap-x-1 my-1 text-base font-bold">
                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500 text-left md:text-right lg:text-right">
                                Giá
                              </h4>
                              <span className="my-2 text-base font-bold">
                                300.000 VND
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>{" "}
                    <Link href="">
                      <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-200 ">
                        <img
                          src="https://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png"
                          alt=""
                          width={0}
                          height={0}
                          className="w-full rounded-t-2xl"
                          sizes="100vh"
                        />
                        <div className="p-3">
                          <div className=" w-full line-clamp-1 overflow-hidden">
                            <p className="w-full font-bold">
                              Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                            </p>
                          </div>
                          <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            <span className="mr-1 text-gray-900">
                              <FontAwesomeIcon
                                icon={faFontAwesome}
                                width={12}
                                height={12}
                              />
                            </span>
                            <span>Gmail</span>
                          </div>
                          <div className="block justify-between md:flex lg:flex ">
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500">
                                Đánh giá
                              </h4>
                              <span className="flex gap-x-1 my-1 text-base font-bold">
                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500 text-left md:text-right lg:text-right">
                                Giá
                              </h4>
                              <span className="my-2 text-base font-bold">
                                300.000 VND
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>{" "}
                    <Link href="">
                      <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-200 ">
                        <img
                          src="https://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png"
                          alt=""
                          width={0}
                          height={0}
                          className="w-full rounded-t-2xl"
                          sizes="100vh"
                        />
                        <div className="p-3">
                          <div className=" w-full line-clamp-1 overflow-hidden">
                            <p className="w-full font-bold">
                              Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                            </p>
                          </div>
                          <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            <span className="mr-1 text-gray-900">
                              <FontAwesomeIcon
                                icon={faFontAwesome}
                                width={12}
                                height={12}
                              />
                            </span>
                            <span>Gmail</span>
                          </div>
                          <div className="block justify-between md:flex lg:flex ">
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500">
                                Đánh giá
                              </h4>
                              <span className="flex gap-x-1 my-1 text-base font-bold">
                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500 text-left md:text-right lg:text-right">
                                Giá
                              </h4>
                              <span className="my-2 text-base font-bold">
                                300.000 VND
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>{" "}
                    <Link href="">
                      <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-200 ">
                        <img
                          src="https://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png"
                          alt=""
                          width={0}
                          height={0}
                          className="w-full rounded-t-2xl"
                          sizes="100vh"
                        />
                        <div className="p-3">
                          <div className=" w-full line-clamp-1 overflow-hidden">
                            <p className="w-full font-bold">
                              Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                            </p>
                          </div>
                          <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            <span className="mr-1 text-gray-900">
                              <FontAwesomeIcon
                                icon={faFontAwesome}
                                width={12}
                                height={12}
                              />
                            </span>
                            <span>Gmail</span>
                          </div>
                          <div className="block justify-between md:flex lg:flex ">
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500">
                                Đánh giá
                              </h4>
                              <span className="flex gap-x-1 my-1 text-base font-bold">
                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500 text-left md:text-right lg:text-right">
                                Giá
                              </h4>
                              <span className="my-2 text-base font-bold">
                                300.000 VND
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>{" "}
                    <Link href="">
                      <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-200 ">
                        <img
                          src="https://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png"
                          alt=""
                          width={0}
                          height={0}
                          className="w-full rounded-t-2xl"
                          sizes="100vh"
                        />
                        <div className="p-3">
                          <div className=" w-full line-clamp-1 overflow-hidden">
                            <p className="w-full font-bold">
                              Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                            </p>
                          </div>
                          <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            <span className="mr-1 text-gray-900">
                              <FontAwesomeIcon
                                icon={faFontAwesome}
                                width={12}
                                height={12}
                              />
                            </span>
                            <span>Gmail</span>
                          </div>
                          <div className="block justify-between md:flex lg:flex ">
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500">
                                Đánh giá
                              </h4>
                              <span className="flex gap-x-1 my-1 text-base font-bold">
                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500 text-left md:text-right lg:text-right">
                                Giá
                              </h4>
                              <span className="my-2 text-base font-bold">
                                300.000 VND
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>{" "}
                    <Link href="">
                      <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-200 ">
                        <img
                          src="https://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png"
                          alt=""
                          width={0}
                          height={0}
                          className="w-full rounded-t-2xl"
                          sizes="100vh"
                        />
                        <div className="p-3">
                          <div className=" w-full line-clamp-1 overflow-hidden">
                            <p className="w-full font-bold">
                              Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                            </p>
                          </div>
                          <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            <span className="mr-1 text-gray-900">
                              <FontAwesomeIcon
                                icon={faFontAwesome}
                                width={12}
                                height={12}
                              />
                            </span>
                            <span>Gmail</span>
                          </div>
                          <div className="block justify-between md:flex lg:flex ">
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500">
                                Đánh giá
                              </h4>
                              <span className="flex gap-x-1 my-1 text-base font-bold">
                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500 text-left md:text-right lg:text-right">
                                Giá
                              </h4>
                              <span className="my-2 text-base font-bold">
                                300.000 VND
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>{" "}
                    <Link href="">
                      <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-200 ">
                        <img
                          src="https://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png"
                          alt=""
                          width={0}
                          height={0}
                          className="w-full rounded-t-2xl"
                          sizes="100vh"
                        />
                        <div className="p-3">
                          <div className=" w-full line-clamp-1 overflow-hidden">
                            <p className="w-full font-bold">
                              Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                            </p>
                          </div>
                          <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            <span className="mr-1 text-gray-900">
                              <FontAwesomeIcon
                                icon={faFontAwesome}
                                width={12}
                                height={12}
                              />
                            </span>
                            <span>Gmail</span>
                          </div>
                          <div className="block justify-between md:flex lg:flex ">
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500">
                                Đánh giá
                              </h4>
                              <span className="flex gap-x-1 my-1 text-base font-bold">
                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500 text-left md:text-right lg:text-right">
                                Giá
                              </h4>
                              <span className="my-2 text-base font-bold">
                                300.000 VND
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="">
                      <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-200 ">
                        <img
                          src="https://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png"
                          alt=""
                          width={0}
                          height={0}
                          className="w-full rounded-t-2xl"
                          sizes="100vh"
                        />
                        <div className="p-3">
                          <div className=" w-full line-clamp-1 overflow-hidden">
                            <p className="w-full font-bold">
                              Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                            </p>
                          </div>
                          <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            <span className="mr-1 text-gray-900">
                              <FontAwesomeIcon
                                icon={faFontAwesome}
                                width={12}
                                height={12}
                              />
                            </span>
                            <span>Gmail</span>
                          </div>
                          <div className="block justify-between md:flex lg:flex ">
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500">
                                Đánh giá
                              </h4>
                              <span className="flex gap-x-1 my-1 text-base font-bold">
                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>

                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                    fill="#ECAA00"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="my-1">
                              <h4 className="text-xs font-bold text-gray-500 text-left md:text-right lg:text-right">
                                Giá
                              </h4>
                              <span className="my-2 text-base font-bold">
                                300.000 VND
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    {showMore1 && (
                      <>
                        {" "}
                        <Link href="">
                          <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-200 ">
                            <img
                              src="https://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png"
                              alt=""
                              width={0}
                              height={0}
                              className="w-full rounded-t-2xl"
                              sizes="100vh"
                            />
                            <div className="p-3">
                              <div className=" w-full line-clamp-1 overflow-hidden">
                                <p className="w-full font-bold">
                                  Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                                </p>
                              </div>
                              <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                <span className="mr-1 text-gray-900">
                                  <FontAwesomeIcon
                                    icon={faFontAwesome}
                                    width={12}
                                    height={12}
                                  />
                                </span>
                                <span>Gmail</span>
                              </div>
                              <div className="block justify-between md:flex lg:flex ">
                                <div className="my-1">
                                  <h4 className="text-xs font-bold text-gray-500">
                                    Đánh giá
                                  </h4>
                                  <span className="flex gap-x-1 my-1 text-base font-bold">
                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <div className="my-1">
                                  <h4 className="text-xs font-bold text-gray-500 text-left md:text-right lg:text-right">
                                    Giá
                                  </h4>
                                  <span className="my-2 text-base font-bold">
                                    300.000 VND
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>{" "}
                        <Link href="">
                          <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-200 ">
                            <img
                              src="https://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png"
                              alt=""
                              width={0}
                              height={0}
                              className="w-full rounded-t-2xl"
                              sizes="100vh"
                            />
                            <div className="p-3">
                              <div className=" w-full line-clamp-1 overflow-hidden">
                                <p className="w-full font-bold">
                                  Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                                </p>
                              </div>
                              <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                <span className="mr-1 text-gray-900">
                                  <FontAwesomeIcon
                                    icon={faFontAwesome}
                                    width={12}
                                    height={12}
                                  />
                                </span>
                                <span>Gmail</span>
                              </div>
                              <div className="block justify-between md:flex lg:flex ">
                                <div className="my-1">
                                  <h4 className="text-xs font-bold text-gray-500">
                                    Đánh giá
                                  </h4>
                                  <span className="flex gap-x-1 my-1 text-base font-bold">
                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <div className="my-1">
                                  <h4 className="text-xs font-bold text-gray-500 text-left md:text-right lg:text-right">
                                    Giá
                                  </h4>
                                  <span className="my-2 text-base font-bold">
                                    300.000 VND
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>{" "}
                        <Link href="">
                          <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-200 ">
                            <img
                              src="https://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png"
                              alt=""
                              width={0}
                              height={0}
                              className="w-full rounded-t-2xl"
                              sizes="100vh"
                            />
                            <div className="p-3">
                              <div className=" w-full line-clamp-1 overflow-hidden">
                                <p className="w-full font-bold">
                                  Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                                </p>
                              </div>
                              <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                <span className="mr-1 text-gray-900">
                                  <FontAwesomeIcon
                                    icon={faFontAwesome}
                                    width={12}
                                    height={12}
                                  />
                                </span>
                                <span>Gmail</span>
                              </div>
                              <div className="block justify-between md:flex lg:flex ">
                                <div className="my-1">
                                  <h4 className="text-xs font-bold text-gray-500">
                                    Đánh giá
                                  </h4>
                                  <span className="flex gap-x-1 my-1 text-base font-bold">
                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <div className="my-1">
                                  <h4 className="text-xs font-bold text-gray-500 text-left md:text-right lg:text-right">
                                    Giá
                                  </h4>
                                  <span className="my-2 text-base font-bold">
                                    300.000 VND
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>{" "}
                        <Link href="">
                          <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-200 ">
                            <img
                              src="https://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png"
                              alt=""
                              width={0}
                              height={0}
                              className="w-full rounded-t-2xl"
                              sizes="100vh"
                            />
                            <div className="p-3">
                              <div className=" w-full line-clamp-1 overflow-hidden">
                                <p className="w-full font-bold">
                                  Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                                </p>
                              </div>
                              <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                <span className="mr-1 text-gray-900">
                                  <FontAwesomeIcon
                                    icon={faFontAwesome}
                                    width={12}
                                    height={12}
                                  />
                                </span>
                                <span>Gmail</span>
                              </div>
                              <div className="block justify-between md:flex lg:flex ">
                                <div className="my-1">
                                  <h4 className="text-xs font-bold text-gray-500">
                                    Đánh giá
                                  </h4>
                                  <span className="flex gap-x-1 my-1 text-base font-bold">
                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <div className="my-1">
                                  <h4 className="text-xs font-bold text-gray-500 text-left md:text-right lg:text-right">
                                    Giá
                                  </h4>
                                  <span className="my-2 text-base font-bold">
                                    300.000 VND
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>{" "}
                        <Link href="">
                          <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-200 ">
                            <img
                              src="https://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png"
                              alt=""
                              width={0}
                              height={0}
                              className="w-full rounded-t-2xl"
                              sizes="100vh"
                            />
                            <div className="p-3">
                              <div className=" w-full line-clamp-1 overflow-hidden">
                                <p className="w-full font-bold">
                                  Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                                </p>
                              </div>
                              <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                <span className="mr-1 text-gray-900">
                                  <FontAwesomeIcon
                                    icon={faFontAwesome}
                                    width={12}
                                    height={12}
                                  />
                                </span>
                                <span>Gmail</span>
                              </div>
                              <div className="block justify-between md:flex lg:flex ">
                                <div className="my-1">
                                  <h4 className="text-xs font-bold text-gray-500">
                                    Đánh giá
                                  </h4>
                                  <span className="flex gap-x-1 my-1 text-base font-bold">
                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <div className="my-1">
                                  <h4 className="text-xs font-bold text-gray-500 text-left md:text-right lg:text-right">
                                    Giá
                                  </h4>
                                  <span className="my-2 text-base font-bold">
                                    300.000 VND
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>{" "}
                        <Link href="">
                          <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-200 ">
                            <img
                              src="https://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png"
                              alt=""
                              width={0}
                              height={0}
                              className="w-full rounded-t-2xl"
                              sizes="100vh"
                            />
                            <div className="p-3">
                              <div className=" w-full line-clamp-1 overflow-hidden">
                                <p className="w-full font-bold">
                                  Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                                </p>
                              </div>
                              <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                <span className="mr-1 text-gray-900">
                                  <FontAwesomeIcon
                                    icon={faFontAwesome}
                                    width={12}
                                    height={12}
                                  />
                                </span>
                                <span>Gmail</span>
                              </div>
                              <div className="block justify-between md:flex lg:flex ">
                                <div className="my-1">
                                  <h4 className="text-xs font-bold text-gray-500">
                                    Đánh giá
                                  </h4>
                                  <span className="flex gap-x-1 my-1 text-base font-bold">
                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <div className="my-1">
                                  <h4 className="text-xs font-bold text-gray-500 text-left md:text-right lg:text-right">
                                    Giá
                                  </h4>
                                  <span className="my-2 text-base font-bold">
                                    300.000 VND
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>{" "}
                        <Link href="">
                          <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-200 ">
                            <img
                              src="https://2.bp.blogspot.com/-tvmgENfHanM/U-kriCleTNI/AAAAAAAABvs/Yb5VeHaIgPU/s1600/facebook+logo+vector.png"
                              alt=""
                              width={0}
                              height={0}
                              className="w-full rounded-t-2xl"
                              sizes="100vh"
                            />
                            <div className="p-3">
                              <div className=" w-full line-clamp-1 overflow-hidden">
                                <p className="w-full font-bold">
                                  Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
                                </p>
                              </div>
                              <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                <span className="mr-1 text-gray-900">
                                  <FontAwesomeIcon
                                    icon={faFontAwesome}
                                    width={12}
                                    height={12}
                                  />
                                </span>
                                <span>Gmail</span>
                              </div>
                              <div className="block justify-between md:flex lg:flex ">
                                <div className="my-1">
                                  <h4 className="text-xs font-bold text-gray-500">
                                    Đánh giá
                                  </h4>
                                  <span className="flex gap-x-1 my-1 text-base font-bold">
                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>

                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.1744 17.4982C14.0481 17.4987 13.9249 17.4588 13.8223 17.3844L8.99906 13.8467L4.17585 17.3844C4.0728 17.46 3.94866 17.5005 3.82136 17.5C3.69407 17.4995 3.57022 17.4581 3.46772 17.3817C3.36522 17.3054 3.28938 17.198 3.25117 17.0752C3.21296 16.9523 3.21436 16.8204 3.25515 16.6984L5.13629 11.0615L0.260942 7.67903C0.155339 7.60584 0.0756353 7.50041 0.0334775 7.37814C-0.00868039 7.25586 -0.0110835 7.12315 0.0266195 6.9994C0.0643224 6.87564 0.140155 6.76733 0.243038 6.69028C0.345922 6.61323 0.470463 6.57149 0.598466 6.57115H6.61314L8.42827 0.919828C8.46737 0.797818 8.54367 0.691473 8.64622 0.616049C8.74876 0.540626 8.87228 0.5 8.99906 0.5C9.12584 0.5 9.24937 0.540626 9.35191 0.616049C9.45446 0.691473 9.53075 0.797818 9.56985 0.919828L11.385 6.57305H17.3997C17.5278 6.57298 17.6526 6.61444 17.7558 6.69134C17.859 6.76824 17.9352 6.87654 17.9731 7.00039C18.011 7.12424 18.0088 7.25713 17.9667 7.37959C17.9246 7.50205 17.8448 7.60765 17.7391 7.68092L12.8618 11.0615L14.7418 16.6969C14.7723 16.7881 14.7809 16.8854 14.7668 16.9806C14.7528 17.0759 14.7166 17.1664 14.6611 17.2446C14.6057 17.3229 14.5327 17.3868 14.448 17.4308C14.3634 17.4749 14.2696 17.498 14.1744 17.4982Z"
                                        fill="#ECAA00"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <div className="my-1">
                                  <h4 className="text-xs font-bold text-gray-500 text-left md:text-right lg:text-right">
                                    Giá
                                  </h4>
                                  <span className="my-2 text-base font-bold">
                                    300.000 VND
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </>
                    )}
                  </div>
                  <div className="px-5 lg:flex justify-center mx-auto mt-[24px] mb-[16px] gap-56">
                    {!showMore1 && (
                      <button
                        className="w-full delay-150 md:w-[100%] lg:w-[260px] h-auto leading-none whitespace-nowrap p-0  bg-slate-100 rounded-md py-[16px] hover:bg-[#eff0f1]"
                        data-sensors-click="true"
                        onClick={handleLoadMore1}
                      >
                        <span className="lg: font-semibold text-var(--text-color)">
                          Xem thêm
                        </span>
                      </button>
                    )}
                    {showMore1 && (
                      <button
                      className="w-full delay-150 md:w-[100%] lg:w-[260px] h-auto leading-none whitespace-nowrap p-0  bg-slate-100 rounded-md py-[16px] hover:bg-[#eff0f1]"
                      data-sensors-click="true"
                        onClick={handleHide1}
                      >
                        <span className="lg: font-semibold text-var(--text-color)">
                          Ẩn bớt
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {sortDropDown && (
        <div className="block md:hidden lg:hidden">
          <div className="w-[100%] bg-zinc-50 fixed bottom-0 left-0">
            <div className="bg-zinc-50 rounded-lg shadow-xl z-20">
              <div className="grid grid-cols-1 pt-5">
                <button className="py-4 px-5 text-sm font-bold hover:bg-slate-100 rounded-lg">
                  Mới nhất
                </button>
                <button className="py-4 px-5 text-sm font-bold hover:bg-slate-100 rounded-lg">
                  Từ thấp tới cao
                </button>
                <button className="py-4 px-5 text-sm font-bold hover:bg-slate-100 rounded-lg">
                  Từ cao tới thấp
                </button>
              </div>
              <div className="p-3">
                <button
                  onClick={handleSort}
                  className="py-4 px-5 text-sm font-bold w-full bg-[#EFF2F5] rounded-md"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {genreDropDown && (
        <div className="block md:hidden lg:hidden">
          <div className="w-[100%] bg-zinc-50 fixed bottom-0 left-0">
            <div className="bg-zinc-50 rounded-lg shadow-xl z-20">
              <div className="grid grid-cols-1 pt-5">
                <button className="py-4 px-5 text-sm font-bold hover:bg-slate-100 rounded-lg">
                  FaceBook
                </button>
                <button className="py-4 px-5 text-sm font-bold hover:bg-slate-100 rounded-lg">
                  Gmail{" "}
                </button>
                <button className="py-4 px-5 text-sm font-bold hover:bg-slate-100 rounded-lg">
                  Twitter{" "}
                </button>
                <button className="py-4 px-5 text-sm font-bold hover:bg-slate-100 rounded-lg">
                  Telegram{" "}
                </button>
              </div>
              <div className="p-3">
                <button
                  onClick={handleGenre}
                  className="py-4 px-5 text-sm font-bold w-full bg-[#EFF2F5] rounded-md"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ShowSellerChild;
