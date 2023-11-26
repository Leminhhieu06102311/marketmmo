"use client"

import WrapResponsive from '@/components/WrapResponsive'
import { FaRegUser } from 'react-icons/fa'
import { GrShieldSecurity } from "react-icons/gr";
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Cookies from 'js-cookie';
import { getUser } from "@/services/user";
import api from '@/services/api';

import { storage } from "../../firebase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { IoCloseOutline } from 'react-icons/io5';


export default function UserProfile() {
    const [modals, setModals] = useState<string[]>([]);
    const [currentStep, setCurrentStep] = useState(1);

    //
    const [access_token, setAccessToken] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [website, setWebsite] = useState(null)
    const [birthDay, setBirthDay] = useState("")
    const [avatar, setAvatar] = useState('');
    const [fileName, setFileName] = useState('');

    const [imageUrl, setImageUrl] = useState('')
    const defaultAvatar = '/images/security/noavatar.png';


    // Modal
    const openModal = (modalId: string) => {
        setModals([...modals, modalId]);
    };

    const closeModal = (modalId: string) => {
        setModals(modals.filter((id) => id !== modalId));
        setCurrentStep(1);
    };

    //File Upload
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleFileSelect = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target?.files?.[0];

        if (file) {
            setSelectedImage(file);
            setFileName(file.name);
        }
    };


    const handleDisplayNameChange = (event: { target: { value: any } }) => {
        const value = event.target.value;
        setDisplayName(value);
    };

    const handleUsernameChange = (event: { target: { value: any } }) => {
        const value = event.target.value;
        setUsername(value);
    };

    const handleDescriptionChange = (event: { target: { value: any } }) => {
        const value = event.target.value;
        setDescription(value);
    };
    const handleWebsiteChange = (event: { target: { value: any } }) => {
        const newValue = event.target.value.trim().slice(0, 100);
        setWebsite(newValue || null);
    };

    const handleBirthDayChange = (event: { target: { value: any } }) => {
        const value = event.target.value;
        setBirthDay(value);
    };

    //random characters
    const generateRandomString = (length: number) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charactersLength);
            result += characters.charAt(randomIndex);
        }

        return result;
    };
    const getCurrentTimestamp = () => {
        return new Date().getTime().toString();
    };

    //delete avatar old
    const deleteImage = async (avatar: any) => {
        try {
            const imageRef = ref(storage, avatar);
            await deleteObject(imageRef);

        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };


    //close modal
    const upLoadImageAvatar = async () => {
        closeModal('modal1')
        if (selectedImage !== null) {
            try {
                // Upload image to Firebase Storage
                const randomString = generateRandomString(8);
                const timestamp = getCurrentTimestamp();
                const imageRef = ref(storage, `users/${randomString}_${timestamp}_${fileName}`);
                await uploadBytes(imageRef, selectedImage);

                // Get the download URL of the uploaded image
                const Url = await getDownloadURL(imageRef);

                setImageUrl(Url)

                // Delete the old avatar
                await deleteImage(avatar);
                const response = await api.put(
                    'settings/profile',
                    {
                        avatar: Url,
                        name: displayName,
                        username: username,
                        bio: description || "",
                        birthday: birthDay,
                        website: website || "",
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${access_token}`,
                        },
                    }
                );
                toast.success('Cập nhật Ảnh đại diện thành công');

            } catch (error: any) {
                console.error('Error during update:', error);
                // Hiển thị thông báo lỗi
                toast.error('Có lỗi xảy ra khi cập nhật thông tin');
                if (error.response) {
                    console.error('Response data:', error.response.data);
                }
            }
        } else {
            return
        }
    };


    const handleInformation = async () => {
        if (selectedImage !== null) {
            try {
                // Format birthday
                let isoDateString;
                if (birthDay && /^\d{4}-\d{2}-\d{2}$/.test(birthDay)) {
                    const dateObject = new Date(birthDay);
                    isoDateString = dateObject.toISOString();
                } else {
                    console.log('Invalid birthDay:', birthDay);
                }

                // Update user information using Axios
                const response = await api.put(
                    'settings/profile',
                    {
                        avatar: imageUrl,
                        name: displayName,
                        username: username,
                        bio: description || "",
                        birthday: isoDateString,
                        website: website || "",
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${access_token}`,
                        },
                    }
                );
                toast.success('Cập nhật thông tin thành công');
            } catch (error: any) {
                console.error('Error during update:', error);
                // Hiển thị thông báo lỗi
                toast.error('Có lỗi xảy ra khi cập nhật thông tin');
                if (error.response) {
                    console.error('Response data:', error.response.data);
                }
            }
        } else {
            try {
                // Format birthday
                let isoDateString;
                if (birthDay && /^\d{4}-\d{2}-\d{2}$/.test(birthDay)) {
                    const dateObject = new Date(birthDay);
                    isoDateString = dateObject.toISOString();
                } else {
                    console.log('Invalid birthDay:', birthDay);
                }

                // Update user information using Axios
                const response = await api.put(
                    'settings/profile',
                    {
                        avatar: avatar,
                        name: displayName,
                        username: username,
                        bio: description || "",
                        birthday: isoDateString,
                        website: website || "",
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${access_token}`,
                        },
                    }
                );
                toast.success('Cập nhật thông tin thành công');
            } catch (error: any) {
                console.error('Error during update:', error);
                // Hiển thị thông báo lỗi
                toast.error('Có lỗi xảy ra khi cập nhật thông tin');
                if (error.response) {
                    console.error('Response data:', error.response.data);
                }
            }
        }

    }



    useEffect(() => {
        const token = Cookies.get('access_token');

        if (token) {
            setAccessToken(token)
        } else {
            console.log('Access Token not found in cookie');
        }
        const fetchDataUser = async () => {
            try {
                let dataUser = await getUser(token);
                console.log(dataUser);
                setDisplayName(dataUser.name)
                setUsername(dataUser.username)
                setDescription(dataUser.bio)
                setBirthDay(new Date(dataUser.birthday).toISOString().split('T')[0])
                setWebsite(dataUser.website)
                setAvatar(dataUser.avatar);

            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchDataUser();
    }, [access_token]);

    return (
        <>


            <div className='w-full mb:w-full lg:w-10/12'>
                <h1 className='mx-8 py-4 border-b border-gray-200 text-2xl font-semibold '>Hồ sơ</h1>
                <div className='px-8 py-6'>
                    <div className='max-w-2xl' >
                        <div>
                            <h1 className='text-xl font-semibold mb-6'>Thông tin cá nhân</h1>
                            <div className='mb-4'>
                                <div className='text-base font-bold leading-6 mb-1'>Ảnh đại diện</div>
                                <div className='flex items-center justify-between'>
                                    <div className='w-20 h-20 bg-[#EFF2F5] rounded-full'>
                                        {selectedImage ? (
                                            <Image alt={''} src={URL.createObjectURL(selectedImage)} width={80} height={80} className='object-cover rounded-full w-[80px] h-[80px]' ></Image>
                                        ) : (
                                            <Image alt={''} src={avatar || defaultAvatar} width={80} height={80} className='object-cover rounded-full w-[80px] h-[80px]'></Image>
                                        )}</div>
                                    <button onClick={() => openModal('modal1')} className='w-28 h-10 text-white text-xs font-bold bg-primary rounded-lg hover:bg-[#3459e7]'>Chỉnh sửa</button>
                                    {modals.includes('modal1') && (
                                        <div className="modal">
                                            <div className="modal-content">
                                                <div className="fixed inset-0 flex items-center justify-center z-50">
                                                    <div className="fixed inset-0 bg-[#0a1e4266] opacity-50" onClick={() => closeModal('modal1')}></div>
                                                    <div className="bg-white p-4 z-50 w-full h-full md:h-auto  md:w-3/6 md:rounded-xl  lg:h-auto lg:rounded-xl lg:w-528" >
                                                        <div className="flex justify-between mb-5">
                                                            <h2 className='font-bold text-2xl'>Ảnh đại diện của bạn</h2>
                                                            <button className='text-2xl pr-1 text-gray-400' onClick={() => closeModal('modal1')}>
                                                                <IoCloseOutline />
                                                            </button>
                                                        </div>
                                                        <div className="">
                                                            <h3 className='font-semibold text-base mb-3'>Tuỳ chỉnh</h3>
                                                            <div className=''>
                                                                <div className="flex justify-between items-center mb-5">
                                                                    {selectedImage ? (<Image alt={''} src={URL.createObjectURL(selectedImage)} width={80} height={80} className='object-cover rounded-full w-[80px] h-[80px]' ></Image>) :
                                                                        (<Image alt={''} src={avatar || defaultAvatar} width={80} height={80} className='object-cover rounded-full w-[80px] h-[80px]'></Image>)}
                                                                    <div className='flex items-center'>
                                                                        <input
                                                                            type="file"
                                                                            ref={fileInputRef}
                                                                            style={{ display: 'none' }}
                                                                            onChange={handleFileChange}
                                                                        />
                                                                        <button onClick={handleFileSelect} className='bg-primary text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-[#3459e7]'><span className='mr-2'>
                                                                            {/* <FontAwesomeIcon icon={faUpload} /> */}
                                                                        </span> Tải lên</button>
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
                                                                <button className='bg-primary w-full rounded-lg text-white font-semibold  py-2 hover:bg-[#3459e7]' onClick={upLoadImageAvatar}>Lưu</button>
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
                        {/* <div className='mb-4'>
                                <div className='text-base text-black font-bold leading-7 mb-1' >Tên hiển thị</div>
                                <div className='relative'>
                                    <input className='w-full bg-[#EFF2F5] border border-[#CFD6E4] p-4 rounded-lg text-sm focus:outline-gray-400 focus:bg-slate-50 hover:border-[#A6B0C3]' type="text" placeholder='Họ và tên' />
                                    <span className='absolute top-4 right-2 font-normal text-gray-400'>12/20</span>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <div>
                                    <div className='text-base text-black font-bold leading-7 mb-1'>Tên người dùng</div>
                                    <div className='relative'>
                                        <input className='w-full bg-[#EFF2F5] border border-[#CFD6E4] p-4 rounded-lg text-sm focus:outline-gray-400 focus:bg-slate-50 hover:border-[#A6B0C3]' type="text" placeholder='' />
                                        <span className='absolute top-4 right-2 font-normal text-gray-400'>12/20</span>
                                    </div>
                                </div>
                                <span className='text-xs text-gray-500 font-normal '>*Tên người dùng chỉ có thể thay đổi 7 ngày 1 lần</span>
                            </div>
                            <div className='mb-4'>
                                <div className='text-base text-black font-bold leading-7 mb1' >Mô tả</div>
                                <div className='relative'>
                                    <textarea maxLength={500} className="w-full h-32 resize-none bg-white border rounded-md py-2 pl-3 pr-[4.5rem] text-gray-700 leading-tight focus:outline-none text-sm " placeholder="test..."></textarea>
                                    <span className='absolute top-24 right-2 font-normal text-gray-400'>200/500</span>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <div className='text-base text-black font-bold leading-7 mb-1' >Website</div>
                                <input className='w-full bg-[#EFF2F5] border border-[#CFD6E4] p-4 rounded-lg text-sm focus:outline-gray-400 focus:bg-slate-50 hover:border-[#A6B0C3]' type="text" placeholder='Thêm website của bạn' />
                            </div> */}
                        <div>
                            <div className='mb-4'>
                                <div className='text-base text-black font-bold leading-7 mb-1'>Tên hiển thị</div>
                                <div className='relative'>
                                    <input
                                        className='w-full bg-[#EFF2F5] border border-[#CFD6E4] p-4 rounded-lg text-sm focus:outline-gray-400 focus:bg-slate-50 hover:border-[#A6B0C3]'
                                        type="text"
                                        placeholder='Họ và tên'
                                        maxLength={20}
                                        value={displayName}
                                        onChange={handleDisplayNameChange}
                                    />
                                    <span className='absolute top-4 right-2 font-normal text-gray-400'>
                                        {displayName.length}/20
                                    </span>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <div>
                                    <div className='text-base text-black font-bold leading-7 mb-1'>Tên người dùng</div>
                                    <div className='relative'>
                                        <input
                                            className='w-full bg-[#EFF2F5] border border-[#CFD6E4] p-4 rounded-lg text-sm focus:outline-gray-400 focus:bg-slate-50 hover:border-[#A6B0C3]'
                                            type="text"
                                            placeholder='Tên người dùng'
                                            value={username}
                                            maxLength={20}
                                            onChange={handleUsernameChange}
                                        />
                                        <span className='absolute top-4 right-2 font-normal text-gray-400'>
                                            {username.length}/20
                                        </span>
                                    </div>
                                </div>
                                <span className='text-xs text-gray-500 font-normal'>
                                    *Tên người dùng chỉ có thể thay đổi 7 ngày 1 lần
                                </span>
                            </div>
                            <div className='mb-4'>
                                <div className='text-base text-black font-bold leading-7 mb-1'>Ngày sinh</div>
                                <div className='relative'>
                                    <input
                                        className='w-full bg-[#EFF2F5] border border-[#CFD6E4] p-4 rounded-lg text-sm focus:outline-gray-400 focus:bg-slate-50 hover:border-[#A6B0C3]'
                                        type="date"
                                        value={birthDay}
                                        onChange={handleBirthDayChange}
                                    />

                                </div>
                            </div>
                            <div className='mb-4'>
                                <div className='text-base text-black font-bold leading-7 mb1'>Mô tả</div>
                                <div className='relative'>
                                    <textarea
                                        maxLength={500}
                                        className="w-full h-32 resize-none bg-white border rounded-md py-2 pl-3 pr-[4.5rem] text-gray-700 leading-tight focus:outline-none text-sm"
                                        placeholder="Mô tả của bạn"
                                        value={description}
                                        onChange={handleDescriptionChange}
                                    ></textarea>
                                    <span className='absolute top-24 right-2 font-normal text-gray-400'>
                                        {description ? `${description.length}/500` : '0/500'}
                                    </span>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <div className='text-base text-black font-bold leading-7 mb-1'>Website</div>
                                <input
                                    className='w-full bg-[#EFF2F5] border border-[#CFD6E4] p-4 rounded-lg text-sm focus:outline-gray-400 focus:bg-slate-50 hover:border-[#A6B0C3]'
                                    type="text"
                                    value={website ?? ''}
                                    onChange={handleWebsiteChange}
                                    placeholder='Thêm website của bạn'
                                />
                            </div>
                        </div>
                        <button className='bg-primary py-3 px-10 text-white text-sm font-semibold rounded-lg hover:bg-[#3459e7]' onClick={handleInformation}>Lưu</button>
                    </div>
                    <div className='max-w-2xl border-t border-gray-400 pt-5 mt-5'>
                        <h1 className='text-xl font-bold mb-6'>Cộng đồng </h1>
                        <div className='flex flex-col justify-between md:flex-row lg:flex-row'>
                            <div className='flex flex-wrap w-full'>
                                <span className='text-base font-semibold mb-1'>Tài khoản bị chặn</span>
                                <span className='text-sm font-normal text-slate-400 w-full'>Những người bạn chặn sẽ không thể nhắn tin cho bạn và bạn sẽ không thấy bài viết từ họ</span>
                            </div>
                            <div className='flex items-center'><button className='w-full mt-3 border border-gray-300 py-2 px-6 font-semibold rounded-lg md:w-32 lg:w-32 hover:bg-[#f8fafd]' >Quản lý</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
