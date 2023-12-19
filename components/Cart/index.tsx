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
