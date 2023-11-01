"use client"
import { faAppleAlt, faAppleWhole, faCopy, faLock, faTimes, faUser, faUserAlt, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons/faShieldAlt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'
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
    // 
    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };
    const handlePrevious = () => {
        setCurrentStep(currentStep - 1);
    };
    const renderContent = () => {
        switch (currentStep) {
            case 1:
                return <Step1 />;
            case 2:
                return <Step2 />;
            case 3:
                return <Step3 />;
            case 4:
                return <Step4 />;
            case 5:
                return <Step5 />;
            default:
                return null;
        }
    };

    const Step1 = () => {
        return (
            <div>
                <div className='flex items-center justify-between'>
                    <div className='relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-primary">
                            <span className='relative content-none after:absolute after:w-36 after:bg-primary after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5   '>1</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-slate-200">
                            <span className='relative content-none after:absolute after:w-36 after:bg-slate-200 after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5 '>2</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-slate-200">
                            <span className='relative content-none after:absolute after:w-36 after:bg-slate-200 after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5 '>3</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-slate-200">
                            <span className='relative content-none after:absolute after:w-36 after:bg-slate-200 after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5 '>4</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-slate-200">
                            <span className='relative'>5</span>
                        </div>
                    </div>
                </div>
                <h2 className='text-center mt-5 mb-2 font-bold text-lg'>Tải ứng dụng Google Authenticator</h2>
                <div className=''>
                    <div className='flex justify-center'>
                        <Image
                            src="/images/security/ga-qrcode.png"
                            width={165}
                            height={165}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='flex flex-col w-full text-center mb-3'>
                        <span>Quét mã QR này bằng camera điện thoại của bạn</span>
                        <span className='font-bold'>hoặc tải xuống và cài đặt:</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <button className='w-3/6 mr-1 bg-[#EFF2F5] text-center py-2 rounded-lg px-3 md:px-8 lg:px-8'>
                            <div className='w-full flex justify-center items-center text-sm font-semibold'>
                                <svg className='mr-2 text-xl -translate-y-0.5' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<style dangerouslySetInnerHTML={{ __html: "svg{fill:#a2a4a6}" }} /><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                                <span className=''>App Store</span>
                            </div>
                        </button>
                        <button className='w-3/6 ml-1 bg-[#EFF2F5] text-center py-2 rounded-lg px-3 md:px-8 lg:px-8'>
                            <div className='w-full flex justify-center items-center text-sm font-semibold'>
                                <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<style dangerouslySetInnerHTML={{ __html: "svg{fill:#a2a4a6}" }} /><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                                <span className=''>Google Play</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div>
                    <button className='w-full bg-primary py-2 rounded-lg mt-4 text-white font-semibold' onClick={handleNext}>Tiếp tục</button>
                </div>
            </div>
        );
    };

    const Step2 = () => {
        return (
            <div>
                <div className='flex items-center justify-between'>
                    <div className='relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-primary">
                            <span className='relative content-none after:absolute after:w-36 after:bg-primary after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5   '>1</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-primary">
                            <span className='relative content-none after:absolute after:w-36 after:bg-primary after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5 '>2</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-slate-200">
                            <span className='relative content-none after:absolute after:w-36 after:bg-slate-200 after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5 '>3</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-slate-200">
                            <span className='relative content-none after:absolute after:w-36 after:bg-slate-200 after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5 '>4</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-slate-200">
                            <span className='relative'>5</span>
                        </div>
                    </div>
                </div>
                <h2 className='text-center mt-5 mb-2 font-bold text-lg'>Thiết lập tài khoản Google Authenticator của bạn</h2>
                <div>
                    <div className='flex justify-center items-center mb-3'>
                        <div className='rounded-xl p-4 bg-[#EFF2F5] border border-gray-200'>
                            <Image
                                src="/images/security/ga-qrcode.png"
                                width={135}
                                height={135}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                    <div className='w-full text-center mb-3'>
                        <span className='text-sm font-semibold'>
                            KHTI54LZ27TAGPZSD5PEC6TNWELXDX6P
                        </span>
                        <FontAwesomeIcon icon={faCopy} className=' ml-3 text-xl' />
                    </div>
                    <div className='text-gray-500 text-center w-full text-sm'>Quét mã QR này bằng ứng dụng Google Authenticator hoặc nhập mã ở trên theo cách thủ công.</div>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <button className='w-full mr-2 py-2 text-black font-semibold rounded-lg bg-[#EFF2F5]' onClick={handlePrevious}>Trở về</button>
                    <button className='w-full ml-2 py-2 text-white font-semibold rounded-lg bg-primary' onClick={handleNext}>Tiếp tục</button>
                </div>
            </div>
        );
    };

    const Step3 = () => {
        return (
            <div>
                <div className='flex items-center justify-between'>
                    <div className='relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-primary">
                            <span className='relative content-none after:absolute after:w-36 after:bg-primary after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5   '>1</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-primary">
                            <span className='relative content-none after:absolute after:w-36 after:bg-primary after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5 '>2</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-primary">
                            <span className='relative content-none after:absolute after:w-36 after:bg-primary after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5 '>3</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-slate-200">
                            <span className='relative content-none after:absolute after:w-36 after:bg-slate-200 after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5 '>4</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-slate-200">
                            <span className='relative'>5</span>
                        </div>
                    </div>
                </div>
                <h2 className="text-center mt-5 mb-5 font-bold text-lg">Lưu Key dự phòng này ở một vị trí an toàn</h2>
                <div className='flex justify-center flex-col items-center'>
                    <div className='flex items-center text-center mb-5 w-14 h-14 rounded-full bg-[#EFF2F5]'>
                        <FontAwesomeIcon icon={faLock} className='w-full' color='#808a9d' />
                    </div>
                    <div className='w-full text-center mb-3'>
                        <span className='text-sm font-semibold'>
                            KHTI54LZ27TAGPZSD5PEC6TNWELXDX6P
                        </span>
                        <FontAwesomeIcon icon={faCopy} className=' ml-3 text-xl' />

                    </div>
                    <div className='w-full text-center text-gray-500'>
                        Khóa này sẽ cho phép bạn khôi phục Authenticator nếu bạn bị mất điện thoại. Nếu không, việc đặt lại Google Authenticator sẽ mất ít nhất 7 ngày.
                    </div>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <button className='w-full mr-2 py-2 text-black font-semibold rounded-lg bg-[#EFF2F5]' onClick={handlePrevious}>Trở về</button>
                    <button className='w-full ml-2 py-2 text-white font-semibold rounded-lg bg-primary' onClick={handleNext}>Tiếp tục</button>
                </div>
            </div>
        );
    };
    const Step4 = () => {
        return (
            <div>
                <div className='flex items-center justify-between'>
                    <div className='relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-primary">
                            <span className='relative content-none after:absolute after:w-36 after:bg-primary after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5   '>1</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-primary">
                            <span className='relative content-none after:absolute after:w-36 after:bg-primary after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5 '>2</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-primary">
                            <span className='relative content-none after:absolute after:w-36 after:bg-primary after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5 '>3</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-primary">
                            <span className='relative content-none after:absolute after:w-36 after:bg-primary after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5 '>4</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-slate-200">
                            <span className='relative'>5</span>
                        </div>
                    </div>
                </div>
                <h2 className='text-center mt-5 mb-5 font-bold text-lg'>Xác minh tài khoản Google Authenticator</h2>
                <div>
                    <div className='mb-10'>
                        <div className='w-full mb-5'>
                            <div className='text-sm font-semibold mb-2'>Nhập mã xác minh gửi về email</div>
                            <div className='w-full p-2 rounded-lg relative flex items-center border'>
                                <input className='w-full px-1 max-w-full focus:outline-none mr-1' type="text" maxLength={6} />
                                <span className='relative w-20 text-sm font-semibold cursor-pointer bg-[#EFF2F5] rounded-lg p-2 text-center'>Lấy mã</span>
                            </div>
                            <div className='text-gray-500 text-xs font-semibold mt-3'>Một mã gồm 6 chữ số đã được gửi tới yut...ust@gmail.com</div>
                        </div>
                        <div className='w-ful mb-5'>
                            <div className='text-sm font-semibold mb-2'>Nhập mã xác minh Authenticator</div>
                            <input className='rounded-lg w-full px-2 py-3 border focus:outline-none mr-1' type="text" maxLength={6} />
                            <div className='text-gray-500 text-xs font-semibold mt-3'>Mở Google Authenticator để lấy mã gồm 6 chữ số này.</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <button className='w-full mr-2 py-2 text-black font-semibold rounded-lg bg-[#EFF2F5]' onClick={handlePrevious}>Trở về</button>
                    <button className='w-full ml-2 py-2 text-white font-semibold rounded-lg bg-primary' onClick={handleNext}>Tiếp tục</button>
                </div>
            </div>
        );
    };
    const Step5 = () => {
        return (
            <div>
                <div className='flex items-center justify-between'>
                    <div className='relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-primary">
                            <span className='relative content-none after:absolute after:w-36 after:bg-primary after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5   '>1</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-primary">
                            <span className='relative content-none after:absolute after:w-36 after:bg-primary after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5 '>2</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-primary">
                            <span className='relative content-none after:absolute after:w-36 after:bg-primary after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5 '>3</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap flex-1 overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-primary">
                            <span className='relative content-none after:absolute after:w-36 after:bg-primary after:h-1 after:top-1.5 after:left-8 after:-translate-x-0.5 '>4</span>
                        </div>
                    </div>
                    <div className='ps-4 relative inline-block whitespace-nowrap overflow-hidden align-top'>
                        <div className="outline-none w-6 border inline-block border-transparent h-6 text-sm leading-6 font-semibold text-center rounded-3xl text-white bg-primary">
                            <span className='relative'>5</span>
                        </div>
                    </div>
                </div>
                <h2>Step 3</h2>
                <div>This is step 3 of the modal.</div>
                <div>
                    <button onClick={handlePrevious}>Previous</button>
                </div>
            </div>
        );
    };
    return (
        <>
            <div className='w-full m-auto  lg:max-w-8xl flex'>
                <div className='w-64 hidden md:block lg:block'>
                    <ul className='w-52 sticky top-5 mt-7 mb-7'>
                        <li className='mb-1'><Link href='' className='flex justify-left items-center p-4 text-sm rounded-lg '><FontAwesomeIcon className="mr-3" icon={faUser} width={20} height={20} /> Hồ sơ</Link></li>
                        <li className='mb-1'><Link href='' className='flex justify-left items-center p-4 text-sm rounded-lg font-semibold  bg-[#EFF2F5] '><FontAwesomeIcon className="mr-3" icon={faShieldAlt} width={20} height={20} />Bảo mật tài khoản</Link></li>
                    </ul>
                </div>
                <div className='w-full mb:w-full lg:w-10/12'>
                    <h1 className='mx-8 py-4 border-b border-gray-200 text-2xl font-semibold'>Bảo mật tài khoản</h1>
                    <div className='px-8 py-6'>
                        <div className='pb-6 border-b border-gray-200 mb-3' >
                            <h1 className='text-xl font-semibold mb-3'>Thông tin tài khoản</h1>
                            <div>
                                <h1 className='text-base font-semibold mb-2'>Địa chỉ Email</h1>
                                <div className='flex flex-col md:flex-row lg:flex-row lg:items-center'>
                                    <div className='text-gray-400 font-semibold text-sm mr-2 mb-2' >Nếu bạn cần thay đổi địa chỉ email của mình vui lòng liên hệ với <Link href='' className='text-primary'>bộ phận dịch vụ</Link> </div>
                                    <div className='flex justify-start'><div className='p-2 text-sm font-semibold rounded-lg bg-[#EFF2F5]'>pg*****15@gmail.com</div></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold mb-3'>Cài đặt hệ thống bảo vệ</h1>
                            <div className='pb-6 border-b border-gray-200 mb-3'>
                                <div className='mb-2'>
                                    <h1 className='text-base font-semibold mb-2'>Trình xác thực Google (2FA)</h1>
                                    <div className='flex flex-col justify-between md:flex-col lg:flex-row'>
                                        <span className='text-gray-400 font-semibold text-sm mr-2 mb-2'>Sử dụng Authenticator để nhận mã xác minh nhằm bảo mật tốt hơn.</span>
                                        <div className='flex justify-end'>
                                            <button onClick={() => openModal('modal1')} className='bg-primary px-4 rounded-lg text-white font-semibold text-sm py-2'>Cho phép</button>
                                            <div>
                                                {modals.includes('modal1') && (
                                                    <div className="modal">
                                                        <div className="modal-content">
                                                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                                                <div className="fixed inset-0 bg-black opacity-50" onClick={() => closeModal('modal1')}></div>
                                                                <div className="bg-white p-4 z-50 w-full h-full md:h-auto  md:w-3/6 md:rounded-xl  lg:h-auto lg:rounded-xl lg:w-528" >
                                                                    <div className="flex justify-end mb-1">
                                                                        <button className='text-2xl pr-1 text-gray-400' onClick={() => closeModal('modal1')}>  <FontAwesomeIcon icon={faTimes} /></button>
                                                                    </div>
                                                                    <div className="">
                                                                        <div>{renderContent()}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-2'>
                                    <h1 className='text-base font-semibold mb-2'>Xác minh địa chỉ email (2FA)+</h1>
                                    <div className='flex flex-col justify-between md:flex-col lg:flex-row'>
                                        <span className='text-gray-400 font-semibold text-sm mr-2 mb-2'>Sử dụng Authenticator để nhận mã xác minh nhằm bảo mật tốt hơn.</span>
                                        <div className='flex justify-end'><button className='bg-primary px-4 rounded-lg text-white font-semibold text-sm py-2'>Cho phép</button></div>
                                    </div>
                                </div>
                                <div className='mb-2'>
                                    <h1 className='text-base font-semibold mb-2'>Mật khẩu</h1>
                                    <div className='flex flex-col justify-between md:flex-row lg:flex-row'>
                                        <span className='text-gray-400 font-semibold text-sm mr-2 mb-2'>Đặt mật khẩu duy nhất để bảo vệ tốt hơn</span>
                                        <div className='flex justify-end'>
                                            <button onClick={() => openModal('modal2')} className='bg-white border border-gray-300 px-4 rounded-lg font-semibold text-sm py-2'>Đặt lại mật khẩu</button>
                                            <div>
                                                {modals.includes('modal2') && (
                                                    <div className="modal">
                                                        <div className="modal-content">
                                                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                                                <div className="fixed inset-0 bg-black opacity-50" onClick={() => closeModal('modal2')}></div>
                                                                <div className="bg-white p-4 z-50 w-full h-full md:w-400 md:h-auto md:rounded-xl lg:w-[400px] lg:h-auto lg:rounded-xl">
                                                                    <div className="flex justify-between items-center mb-3">
                                                                        <h1 className='font-semibold text-xl'>Đặt lại mật khẩu</h1>
                                                                        <button className='text-2xl pr-1 text-gray-400' onClick={() => closeModal('modal2')}>  <FontAwesomeIcon icon={faTimes} /></button>
                                                                    </div>
                                                                    <div className="mb-5">
                                                                        <div className='text-gray-500 font-semibold text-sm mb-3'>Bạn sẽ nhận được hướng dẫn qua e-mail về cách đặt lại mật khẩu của mình.</div>
                                                                        <input className='py-4 px-4 cursor-not-allowed focus:outline-none text-sm bg-slate-100 w-full border rounded-lg' type="text" placeholder='yu***st@gmail.com' disabled />
                                                                    </div>
                                                                    <button className='w-full rounded-lg p-3 text-white font-semibold  bg-primary'>Gửi hướng dẫn</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold mb-3'>Thiết bị và hoạt động</h1>
                            <div className='mb-2'>
                                <h1 className='text-base font-semibold mb-2'>Quản lý thiết bị</h1>
                                <div className='flex flex-col justify-between md: lg:flex-row'>
                                    <div className='flex flex-col mb-2 md:flex-row md:items-center lg:flex-row lg:items-center'>
                                        <div><span className='text-gray-400 font-semibold text-sm mr-2'>Cho phép các thiết bị có quyền truy cập vào tài khoản của bạn</span></div>
                                        <div className='hidden p-2 text-sm font-semibold rounded-lg bg-[#EFF2F5] lg:block'>Đang sử dụng: Chrome 17</div>
                                    </div>
                                    <div className='flex justify-between' >
                                        <div className='block p-2 text-sm font-semibold rounded-lg bg-[#EFF2F5] lg:hidden'>Đang sử dụng: Chrome 17</div>
                                        <button className='bg-white border border-gray-300 rounded-lg font-semibold text-sm px-6 py-2'>Quản lý</button></div>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-base font-semibold mb-2'>Hoạt động tài khoản</h1>
                                <div className='flex justify-between flex-col md:flex-row lg:flex-row'>
                                    <span className='text-gray-400 font-semibold text-sm mr-2 mb-2'>Kiểm tra hoạt động đăng nhập gần đây của tài khoản</span>
                                    <button className='bg-white border border-gray-300 px-4 rounded-lg font-semibold text-sm py-2'>Xem thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
