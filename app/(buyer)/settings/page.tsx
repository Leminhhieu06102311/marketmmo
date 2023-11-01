"use client"
import { faTimes, faUpload, faUser, faUserAlt, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons/faShieldAlt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function Profile() {
    const [modals, setModals] = useState<string[]>([]);
    const [currentStep, setCurrentStep] = useState(1);
    // 
    const openModal = (modalId: string) => {
        setModals([...modals, modalId]);
    };

    const closeModal = (modalId: string) => {
        setModals(modals.filter((id) => id !== modalId));
        setCurrentStep(1);
    };

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const handleFileSelect = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            // Xử lý tệp đã chọn ở đây
        }
    };

    return (
        <>
            <div className='w-full m-auto  lg:max-w-8xl flex'>
                <div className='w-64 hidden md:block lg:block'>
                    <ul className='w-52 sticky top-5 mt-7 mb-7'>
                        <li className='mb-1'><Link href='' className='flex justify-left items-center p-4 text-sm font-semibold rounded-lg bg-[#EFF2F5]'><FontAwesomeIcon className="mr-3" icon={faUser} width={20} height={20} /> Hồ sơ</Link></li>
                        <li className='mb-1'><Link href='' className='flex justify-left items-center p-4 text-sm rounded-lg '><FontAwesomeIcon className="mr-3" icon={faShieldAlt} width={20} height={20} />Bảo mật tài khoản</Link></li>
                    </ul>
                </div>
                <div className='w-full mb:w-full lg:w-10/12'>
                    <h1 className='mx-8 py-4 border-b border-gray-200 text-2xl font-semibold'>Hồ sơ</h1>
                    <div className='px-8 py-6'>
                        <div className='max-w-2xl' >
                            <div>
                                <h1 className='text-xl font-semibold mb-6'>Thông tin cá nhân</h1>
                                <div className='mb-4'>
                                    <div className='text-base font-bold leading-6 mb-1'>Ảnh đại diện</div>
                                    <div className='flex items-center justify-between'>
                                        <div className='w-20 h-20 bg-[#EFF2F5] rounded-full'><img className='w-full h-full object-cover rounded-full' src="/images/detail-category/1.png" alt="" /></div>
                                        <button onClick={() => openModal('modal1')} className='w-28 h-10 text-white text-xs font-bold bg-primary rounded-lg'>Chỉnh sửa</button>
                                        {modals.includes('modal1') && (
                                            <div className="modal">
                                                <div className="modal-content">
                                                    <div className="fixed inset-0 flex items-center justify-center z-50">
                                                        <div className="fixed inset-0 bg-black opacity-50" onClick={() => closeModal('modal1')}></div>
                                                        <div className="bg-white p-4 z-50 w-full h-full md:h-auto  md:w-3/6 md:rounded-xl  lg:h-auto lg:rounded-xl lg:w-528" >
                                                            <div className="flex justify-between mb-5">
                                                                <h2 className='font-bold text-2xl'>Ảnh đại diện của bạn</h2>
                                                                <button className='text-2xl pr-1 text-gray-400' onClick={() => closeModal('modal1')}>  <FontAwesomeIcon icon={faTimes} /></button>
                                                            </div>
                                                            <div className="">
                                                                <h3 className='font-semibold text-base mb-3'>Tuỳ chỉnh</h3>
                                                                <div className=''>
                                                                    <div className="flex justify-between items-center mb-5">
                                                                        <Image alt={''} src='/images/security/noavatar.png' width={80} height={80} ></Image>
                                                                        <div className='flex items-center'>
                                                                            <input
                                                                                type="file"
                                                                                ref={fileInputRef}
                                                                                style={{ display: 'none' }}
                                                                                onChange={handleFileChange}
                                                                            />
                                                                            <button onClick={handleFileSelect} className='bg-primary text-white px-4 py-3 rounded-lg text-sm font-semibold'><span className='mr-2'><FontAwesomeIcon icon={faUpload} /></span> Upload</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className='mb-5'>
                                                                        <ul>
                                                                            <li className='text-sm font-normal text-gray-400'>
                                                                                Chỉ được sử dụng định dạng JPEG hoặc PNG
                                                                            </li>
                                                                            <li className='text-sm font-normal text-gray-400'>
                                                                                Dung lượng hình ảnh tối đa là 5 MB
                                                                            </li>
                                                                            <li className='text-sm font-normal text-gray-400'>
                                                                                Kích thước của hình ảnh được tải lên phải tối thiểu 100 * 100 pixel
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <button className='bg-primary w-full rounded-lg text-white font-semibold  py-2'>Lưu</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <div className='text-base text-black font-bold leading-7 mb-1' >Tên hiển thị</div>
                                <div className='relative'>
                                    <input className='w-full bg-[#EFF2F5] border border-[#CFD6E4] p-4 rounded-lg text-sm focus:outline-gray-400 focus:bg-slate-50' type="text" placeholder='Họ và tên' />
                                    <span className='absolute top-4 right-2 font-normal text-gray-400'>12/20</span>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <div>
                                    <div className='text-base text-black font-bold leading-7 mb-1'>Tên người dùng</div>
                                    <div className='relative'>
                                        <input className='w-full bg-[#EFF2F5] border border-[#CFD6E4] p-4 rounded-lg text-sm focus:outline-gray-400 focus:bg-slate-50' type="text" placeholder='' />
                                        <span className='absolute top-4 right-2 font-normal text-gray-400'>12/20</span>
                                    </div>
                                </div>
                                <span className='text-xs text-gray-500 font-normal '>*Tên người dùng chỉ có thể thay đổi 7 ngày 1 lần</span>
                            </div>
                            <div className='mb-4'>
                                <div className='text-base text-black font-bold leading-7 mb1' >Mô tả</div>
                                <div className='relative'>
                                    <textarea className="w-full h-32 resize-none bg-white border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none text-sm" placeholder="test..."></textarea>
                                    <span className='absolute top-24 right-2 font-normal text-gray-400'>12/200</span>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <div className='text-base text-black font-bold leading-7 mb-1' >Website</div>
                                <input className='w-full bg-[#EFF2F5] border border-[#CFD6E4] p-4 rounded-lg text-sm focus:outline-gray-400 focus:bg-slate-50' type="text" placeholder='Thêm website của bạn' />
                            </div>
                            <button className='bg-primary py-3 px-10 text-white text-sm font-semibold rounded-lg'>Lưu</button>
                        </div>
                        <div className='max-w-2xl border-t border-gray-400 pt-5 mt-5'>
                            <h1 className='text-xl font-bold mb-6'>Cộng đồng </h1>
                            <div className='flex flex-col justify-between md:flex-row lg:flex-row'>
                                <div className='flex flex-wrap w-full'>
                                    <span className='text-base font-semibold mb-1'>Tài khoản bị chặn</span>
                                    <span className='text-sm font-normal text-slate-400 w-full'>Những người bạn chặn sẽ không thể nhắn tin cho bạn và bạn sẽ không thấy bài viết từ họ</span>
                                </div>
                                <div className='flex items-center'><button className='w-full mt-3 border border-gray-300 py-2 px-6 font-semibold rounded-lg md:w-32 lg:w-32' >Quản lý</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
