"use client"
import Cart from "@/interfaces/cart";
import Image from "next/image";
import { useEffect, useState } from "react";
import ContentModal from "../Modal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleModal } from "@/redux/modalSlice";
import { fetchUser, setIsAddToCart } from "@/redux/userSlice";
import { hanldeOrder } from "@/services/user";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'
export default function CartModal() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [cart, setCart] = useState<Cart>();
  const { isLoggedIn } = useAppSelector((state) => state.user)
  const { isAddToCart } = useAppSelector((state) => state.user)
  const { id } = useAppSelector((state) => state.user)
  const access_token = Cookies.get('access_token')
  const hanldeRemoveCart = () => {
    localStorage.clear()
    dispatch(setIsAddToCart())
  }
  const submitOrder = async () => {
    if (!isLoggedIn) {
      router.push('/login')
      dispatch(toggleModal('cart'))
    } else {
      const data = localStorage?.getItem("product")
      if (data) {
        const { product, type, quantity } = JSON.parse(data)
        const productId = product._id
        const price = product.price
        toast.promise(hanldeOrder(productId, id, quantity, price,access_token), {
          pending: {
            render: () => {
              return "Đang xử lý giao dịch"
            }
          },
          success: {
            render: () => {
              hanldeRemoveCart()
              dispatch(toggleModal('cart'))
              router.replace('/transaction-history')
              return "Giao dịch thành công"
            },
            icon: '🟢'
          }
        })
      }
    }


  }
  useEffect(() => {
    dispatch(fetchUser(Cookies.get('access_token')))
    const getCart = () => {
      const data = localStorage?.getItem("product");
      if (data) {
        setCart(JSON.parse(data));
      } else {
        setCart(undefined)
      }
    };
    getCart();
  }, [isAddToCart]);
  return (
    <>
      <ContentModal nameModal="cart">
        <div className="fixed top-5 bottom-5 right-5 " >
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 className="font-bold text-xl text-gray-800 dark:text-gray-200">
                Giỏ hàng
              </h3>
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                onClick={() => dispatch(toggleModal('cart'))}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3.5 h-3.5"
                  width={8}
                  height={8}
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto min-h-[800px] flex flex-col items-center">
              {!cart ? (
                <>
                  <p className="text-gray-600 text-center mb-4 mt-10">
                    Thêm sản phẩm để bắt đầu mua hàng
                  </p>
                  <button
                    disabled
                    type="button"
                    className="py-4 px-6 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all cursor-not-allowed text-sm"
                  >
                    Hoàn tất mua hàng
                  </button>
                </>
              ) : (
                <>
                  <div>
                  <div className="bg-primary text-white py-2 px-6 text-sm flex justify-center">Bạn chỉ có thể mua một mặt hàng cùng một lúc</div>
                    <div className="flex justify-between my-4 items-center">
                      <p className="font-semibold">1 mặt hàng</p>
                      <div className="px-3 py-1 cursor-pointer bg-gray-100 rounded-lg" onClick={() => hanldeRemoveCart()}>
                        <p className="font-semibold">Xóa tất cả</p>

                      </div>
                    </div>

                    <div className="flex gap-4 border border-gray-200 rounded-md p-2 mb-10 ">
                      <div>
                        <Image
                          src={cart.product.pictures[0]}
                          width={50}
                          height={50}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <p className="font-semibold text-sm">
                          {cart.product.name}
                        </p>
                        <p className="text-sm text-gray-900">
                          {" "}
                          Giá : {cart.product.price} | Số lượng :{" "}
                          {cart.quantity}
                        </p>
                        <p className="text-sm text-gray-900">
                          {" "}
                          {/* Loại : {cart.product.type[cart.type].name} */}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between font-semibold text-base">
                      <p>Tổng tiền</p>
                      <p>{((cart.product.price) * (cart.quantity)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                    </div>
                    <div>
                      <p className="mt-5 mb-3 font-semibold text-base">Phương thức thanh toán</p>
                      <div className="flex gap-4">
                        <div className="border border-gray-200 rounded-md py-2 px-3 flex items-center">
                          <Image className="object-cover" src="https://firebasestorage.googleapis.com/v0/b/marketmmo.appspot.com/o/payment%2FLogo-VietinBank-CTG-Te.webp?alt=media&token=a0188d91-9a31-4b6b-b48e-9f7d4056e3a9&_gl=1*1hicunj*_ga*NTAzMzEwNjUwLjE2OTg5MTI2OTU.*_ga_CW55HF8NVT*MTY5ODkyMjU3NS4yLjEuMTY5ODkyNDQ3OS4zMi4wLjA." width={50} height={20} alt="vietinbank" />
                        </div>
                        <div className="border border-gray-200 rounded-md py-2 px-3 flex items-center">
                          <Image className="object-cover" src="https://firebasestorage.googleapis.com/v0/b/marketmmo.appspot.com/o/payment%2FLogo-ZaloPay-Square.webp?alt=media&token=ad8086d3-eb66-4200-a667-86b830767c02&_gl=1*1pjnkld*_ga*NTAzMzEwNjUwLjE2OTg5MTI2OTU.*_ga_CW55HF8NVT*MTY5ODkyMjU3NS4yLjEuMTY5ODkyNDc4My42MC4wLjA." width={50} height={20} alt="zalopay" />
                        </div>
                        <div className="border border-gray-200 rounded-md py-2 px-3 flex items-center ">
                          <Image className="" src="https://firebasestorage.googleapis.com/v0/b/marketmmo.appspot.com/o/payment%2Fmini-app_design-guideline_branding-guide-2-2.webp?alt=media&token=2ae2e642-33fd-4706-a2ee-e80175c2ee22&_gl=1*b5pmp9*_ga*NTAzMzEwNjUwLjE2OTg5MTI2OTU.*_ga_CW55HF8NVT*MTY5ODkyMjU3NS4yLjEuMTY5ODkyNDc5OS40NC4wLjA." width={50} height={20} alt="momo" />
                        </div>
                        <div className="border border-gray-200 rounded-md py-2 px-3 flex items-center ">
                          <Image className="" src="https://firebasestorage.googleapis.com/v0/b/marketmmo.appspot.com/o/payment%2FLogo_MB_new.png?alt=media&token=8548478c-f185-41d5-82c5-e0f6cce51eea&_gl=1*yjp8do*_ga*NTAzMzEwNjUwLjE2OTg5MTI2OTU.*_ga_CW55HF8NVT*MTY5ODk5NjYyNS4zLjEuMTY5ODk5Njc2My4xNi4wLjA." width={50} height={20} alt="momo" />
                        </div>
                        <div className="border border-gray-200 rounded-md py-2 px-3 flex items-center ">
                          <Image className="" src="https://firebasestorage.googleapis.com/v0/b/marketmmo.appspot.com/o/payment%2Fvietcombank-vector-logo.png?alt=media&token=04a9131b-4287-44c2-8418-8f821eff6fa1&_gl=1*1xjh6ou*_ga*NTAzMzEwNjUwLjE2OTg5MTI2OTU.*_ga_CW55HF8NVT*MTY5ODk5NjYyNS4zLjEuMTY5ODk5NjkyMC40OC4wLjA." width={50} height={20} alt="momo" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-center my-4">
                          <Image className="" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" width={200} height={200} alt="momo" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => submitOrder()}
                    type="button"
                    className="py-4 px-6 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                  >
                    Hoàn tất mua hàng
                  </button>
                </>
              )}
            </div>
          </div>

        </div>
      </ContentModal>
    </>
  );
}
