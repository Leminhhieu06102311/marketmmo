'use client'
import Spinner from '@/components/Spinner';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/modalSlice';
import { setIsAddToCart } from '@/redux/userSlice';
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'
export default function Payment() {
    const access_token = Cookies.get('token')
    const router = useRouter()
    const dispatch = useAppDispatch()
    const hanldeRemoveCart = () => {
        localStorage.clear()
        dispatch(setIsAddToCart())
    }
    const searchParams = useSearchParams()
    const vnp_ResponseCode = searchParams.get('vnp_ResponseCode');
    const vnp_OrderInfo: string = searchParams.get('vnp_OrderInfo') as string
    const parts = vnp_OrderInfo.split(':');
    const value = parts[1].trim()
    if (vnp_ResponseCode === '00') {
        toast.success('Thanh toán thành công')
        hanldeRemoveCart()
        fetch(`https://ultimate-implicitly-hound.ngrok-free.app/order?orderID=${value}&status=Giao%20d%E1%BB%8Bch%20th%C3%A0nh%20c%C3%B4ng`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
        router.push("/transaction-history")
    } else {
        toast.error('Thanh toán thất bại')
        toast.error('Vui lòng thanh toán lại')
        router.push("/")
        setTimeout(() => {
            dispatch(toggleModal('cart'))
        }, 1000)
    }
    return (
        <div className='fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-full bg-white'><Spinner /></div>
    )
}