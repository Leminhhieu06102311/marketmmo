"use client";
import { useState, useEffect } from "react";
import { getAll } from "@/services/transactionHistory";
import "swiper/css";
import "swiper/css/pagination";
import { Histories } from "@/interfaces/Histories";
export default function productRatingId({
  params,
}: {
  params: { ratingId: string };
}) {
  console.log(params.ratingId);
  const idRating = params.ratingId;
  const [ratingId, setratingId] = useState<Histories[]>([]);
  const [filteredratingId, setFilteredratingId] = useState<Histories[]>([]);

  useEffect(() => {
    const fetchHistories = async () => {
      try {
        const transHis = await getAll();
        setratingId(transHis);
        console.log(transHis);
      } catch (error) {
        console.error("Error fetching histories", error);
      }
    };
    fetchHistories();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      const filtered = ratingId.filter((product) => product._id === idRating);
      setFilteredratingId(filtered);
    };

    filterProducts();
  }, [ratingId, idRating]);

  return (
    <>
      {filteredratingId.map((product: Histories) => (
        <>
          <div className="pt-[50px]">
            <div className="text-center">
              <b className="text-[25px]">Đánh giá sản phẩm</b>
            </div>
            <div className="w-[30%] mx-auto flex justify-center items-center">
              <div className="lg:w-[40px] lg:h-[40px] rounded-[50%] bg-primary text-center leading-10">
                <span className="text-[18px] text-white font-medium">1</span>
              </div>
              <div className="bg-primary h-2 w-[30%]"></div>
              <div className="lg:w-[15px] lg:h-[15px] rounded-[50%] bg-blue-800 text-center leading-10"></div>
              <div className="bg-gray-300 h-2 w-[30%]"></div>
              <div className="lg:w-[40px] lg:h-[40px] rounded-[50%] bg-primary text-center leading-10">
                <span className="text-[18px] text-white font-medium">2</span>
              </div>
            </div>
          </div>
          <div className="pb-[50px]">
            <div className="">
              <div className="w-[40%] my-10 pb-10 shadow-xl rounded-2xl box-shadow-product mx-auto">
                <div className="flex justify-end">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    className="mx-3 my-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32 17C32 19.8125 31.2126 22.475 29.8251 24.725C27.2376 29.075 22.475 32 17 32C11.525 32 6.76245 29.075 4.17495 24.725C2.78745 22.475 2 19.8125 2 17C2 8.7125 8.7125 2 17 2C25.2875 2 32 8.7125 32 17Z"
                      stroke="#11D200"
                      stroke-width="4"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.1553 16.9982L14.8677 20.7106L22.8553 13.3232"
                      stroke="#11D200"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div className="">
                  <img
                    src={
                      `${product.product.pictures}`
                    }
                    alt=""
                    className="items-center mx-auto mb-5 w-[80px] h-[80px] md:w-[80px] md:h-[80px] lg:w-[80px] lg:h-[80px] rounded-[50%] border-[5px] border-white shadow-md"
                  />
                </div>
                <div>
                  <div className="text-center">
                    <b className="text-[20px] text-primary uppercase">
                      {product.product.name}
                    </b>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-x-2">
                  <div className="w-[25px] h-auto">
                    <img
                      src={
                        `${product.user.avatar}`
                      }
                      alt="Err"
                      className="w-full rounded-[50%]"
                    />
                  </div>
                  <p className="font-inter text-[14px] leading-normal">
                  {product.user.name}
                  </p>
                </div>
                <div className="w-[80%] mx-auto text-center my-5">
                  <div>
                    <div className="">
                      <p className="font-semibold text-[16px] text-[#58667E] leading-[1.8] break-words mb-2">
                        <span>
                          Cảm ơn rất nhiều vì sự tin tưởng và sự ủng hộ của
                          bạn! Sự hài lòng của bạn là động lực lớn để chúng tôi
                          tiếp tục cung cấp dịch vụ và sản phẩm tốt nhất. Nếu
                          bạn có bất kỳ câu hỏi hoặc yêu cầu nào khác, hãy liên
                          hệ với chúng tôi.
                        </span>
                      </p>{" "}
                    </div>
                    <div className="">
                      <p className="font-semibold text-[16px] text-primary leading-[1.8] break-words uppercase mb-2">
                        <span>Thanks you!</span>
                      </p>{" "}
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-3 my-5 justify-center">
                  {" "}
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                      fill="#FFC000"
                    />
                  </svg>{" "}
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                      fill="#FFC000"
                    />
                  </svg>{" "}
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                      fill="#FFC000"
                    />
                  </svg>{" "}
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                      fill="#FFC000"
                    />
                  </svg>{" "}
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3243 21.4977C17.1699 21.4984 17.0193 21.4492 16.8939 21.3571L10.9989 16.9871L5.10381 21.3571C4.97787 21.4505 4.82614 21.5006 4.67055 21.5C4.51497 21.4994 4.3636 21.4483 4.23832 21.3539C4.11305 21.2596 4.02036 21.127 3.97365 20.9752C3.92695 20.8235 3.92866 20.6605 3.97852 20.5098L6.27769 13.5465L0.318929 9.36821C0.189858 9.27781 0.0924432 9.14757 0.0409169 8.99652C-0.0106094 8.84548 -0.0135464 8.68154 0.0325349 8.52867C0.0786163 8.37579 0.171301 8.24199 0.297047 8.14682C0.422793 8.05164 0.57501 8.00007 0.731458 7.99965H8.08273L10.3012 1.01861C10.349 0.867893 10.4423 0.736525 10.5676 0.643355C10.6929 0.550185 10.8439 0.5 10.9989 0.5C11.1538 0.5 11.3048 0.550185 11.4301 0.643355C11.5554 0.736525 11.6487 0.867893 11.6965 1.01861L13.915 8.002H21.2663C21.4229 8.00192 21.5755 8.05313 21.7016 8.14812C21.8277 8.24311 21.9208 8.3769 21.9671 8.52989C22.0135 8.68289 22.0107 8.84704 21.9593 8.99831C21.9078 9.14959 21.8103 9.28004 21.6811 9.37055L15.72 13.5465L18.0178 20.5079C18.055 20.6206 18.0655 20.7407 18.0484 20.8584C18.0312 20.9761 17.9869 21.0879 17.9192 21.1846C17.8514 21.2813 17.7621 21.3601 17.6587 21.4146C17.5553 21.469 17.4406 21.4975 17.3243 21.4977Z"
                      fill="#FFC000"
                    />
                  </svg>
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-lg bg-blue-500 border border-transparent font-semibold text-white hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                  >
                    Gửi đánh giá
                  </button>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </>
      ))}
    </>
  );
}
