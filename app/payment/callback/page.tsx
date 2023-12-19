'use client'
import Spinner from '@/components/Spinner';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/modalSlice';
import { setIsAddToCart } from '@/redux/userSlice';
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
export default function Payment({ params }: { params: { slug: string } }) {
    
    const router = useRouter()
    const dispatch = useAppDispatch()
    const hanldeRemoveCart = () => {
        localStorage.clear()
        dispatch(setIsAddToCart())
      }
    const searchParams = useSearchParams()
    const vnp_ResponseCode = searchParams.get('vnp_ResponseCode');
    if (vnp_ResponseCode === '00') {
        toast.success('Thanh toán thành công')
        hanldeRemoveCart()
        router.push("/transaction-history")
    } else {
        toast.error('Thanh toán thất bại')
        toast.error('Vui lòng thanh toán lại')
        router.push("/")  
        setTimeout(() => {
            dispatch(toggleModal('cart'))
        },1000)
    }
    return (
        <div className='fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-full bg-white'><Spinner/></div>
    )
}