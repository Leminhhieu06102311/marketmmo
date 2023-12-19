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
import { IoCloseOutline } from "react-icons/io5";
export default function CartModal() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [cart, setCart] = useState<Cart>();
  const { isLoggedIn } = useAppSelector((state) => state.user)
  const { isAddToCart } = useAppSelector((state) => state.user)
  const { id } = useAppSelector((state) => state.user)
  const access_token = Cookies.get('token')

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
        toast.promise(hanldeOrder(productId, id, quantity, price, access_token), {
          pending: {
            render: () => {
              return "Đang xử lý giao dịch"
            }
          },
          success: {
            render: ({data}) => {
              const {_id, orderPrice} = data.data
              router.push(`https://ultimate-implicitly-hound.ngrok-free.app/payment/initiate-payment-order?orderID=${_id}&amount=${orderPrice}`)
              // hanldeRemoveCart()
              // dispatch(toggleModal('cart'))
              // router.replace('/transaction-history')
              return "Bắt đầu thanh toán"
            },
            icon: '🟢'
          }
        })
      }
    }


  }
  useEffect(() => {
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
        <div className="fixed top-5 bottom-5 right-5 overflow-y-scroll rounded-l-lg" >
          <div className="flex flex-col bg-white border shadow-sm rounded-l-lg dark:bg-gray-800 dark:border-gray-700">
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
                <IoCloseOutline className="text-[25px]" />
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
                    <div className="bg-primary text-white py-2 px-6 text-sm flex justify-center">Bạn chỉ có thể mua một mặt hàng</div>
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
                    {/* <div>
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
                    </div> */}
                  </div>
                  <button
                    onClick={() => submitOrder()}
                    type="button"
                    className="py-3 mt-4 px-6 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                  >
                     Bắt đầu thanh toán
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
