import { faArrowLeft, faShieldAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { height } from "@fortawesome/free-solid-svg-icons/faShieldAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function accountActivity() {

    return (
        <>
            <div className='w-full m-auto  flex md:max-w-3xl lg:max-w-8xl'>
                <div className='w-64 hidden md:block lg:block'>
                    <ul className='w-52 sticky top-5 mt-7 mb-7'>
                        <li className='mb-1'><Link href='' className='flex justify-left items-center p-4 text-sm rounded-lg '><FontAwesomeIcon className="mr-3" icon={faUser} width={20} height={20} /> Hồ sơ</Link></li>
                        <li className='mb-1'><Link href='' className='flex justify-left items-center p-4 text-sm rounded-lg font-semibold  bg-[#EFF2F5]'><FontAwesomeIcon className="mr-3" icon={faShieldAlt} width={20} height={20} />Bảo mật tài khoản</Link></li>
                    </ul>
                </div>
                <div className='w-full mb:w-full p-6 lg:w-10/12'>
                    <div className="flex items-center border-b border-gray-200 w-full mb-10">
                        <span className="text-2xl"><FontAwesomeIcon icon={faArrowLeft} width={25} height={25} /></span>
                        <h1 className='mx-8 py-4  text-2xl font-semibold'>Quản lý thiết bị</h1>
                    </div>
                    <div className="w-full">
                        <table className="w-full">
                            <thead>
                                <tr className="border-t border-b border-gray-200 ">
                                    <th className="p-2 text-center "><span className="text-xs">#</span></th>
                                    <th className="p-2 text-left "><span className="text-xs" >Họ và tên</span></th>
                                    <th className="p-2 text-left "><span className="text-xs" >Thời gian đăng nhập</span></th>
                                    <th className="p-2 text-left "><span className="text-xs" >Vị trí</span></th>
                                    <th className="p-2 text-left "><span className="text-xs" >Địa chỉ IP</span></th>
                                    <th className="p-2 text-left "><span className="text-xs" >Hành động</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={6}>
                                        <div className="relative">
                                            <div className="h-20 py-7 border-b border-gray-200 animate-pulse flex justify-between ">
                                                <span className="block h-7 rounded-lg w-7 bg-gray-200"></span>
                                                <span className="block h-7 rounded-lg w-1/5 bg-gray-200"></span>
                                                <span className="block h-7 rounded-lg w-7 bg-gray-200"></span>
                                                <span className="block h-7 rounded-lg w-1/5 bg-gray-200"></span>
                                                <span className="block h-7 rounded-lg w-7 bg-gray-200"></span>
                                                <span className="block h-7 rounded-lg w-1/5 bg-gray-200"></span>
                                            </div>
                                            <div className="h-20 py-7 border-b border-gray-200 animate-pulse flex justify-between ">
                                                <span className="block h-7 rounded-lg w-7 bg-gray-200"></span>
                                                <span className="block h-7 rounded-lg w-1/5 bg-gray-200"></span>
                                                <span className="block h-7 rounded-lg w-7 bg-gray-200"></span>
                                                <span className="block h-7 rounded-lg w-1/5 bg-gray-200"></span>
                                                <span className="block h-7 rounded-lg w-7 bg-gray-200"></span>
                                                <span className="block h-7 rounded-lg w-1/5 bg-gray-200"></span>
                                            </div>
                                            <div className="h-20 py-7 border-b border-gray-200 animate-pulse flex justify-between ">
                                                <span className="block h-7 rounded-lg w-7 bg-gray-200"></span>
                                                <span className="block h-7 rounded-lg w-1/5 bg-gray-200"></span>
                                                <span className="block h-7 rounded-lg w-7 bg-gray-200"></span>
                                                <span className="block h-7 rounded-lg w-1/5 bg-gray-200"></span>
                                                <span className="block h-7 rounded-lg w-7 bg-gray-200"></span>
                                                <span className="block h-7 rounded-lg w-1/5 bg-gray-200"></span>
                                            </div>
                                            <div className="absolute w-full left-0 top-1/3">
                                                <h2 className="w-full text-center text-2xl font-bold">Hiện tại không có dữ liệu</h2>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                {/* <tr>
                                    <td className="p-2 text-center"><span className="text-xs font-semibold">1</span></td>
                                    <td className="p-2"><span className="text-xs font-semibold" >Phạm Gia Kiện</span></td>
                                    <td className="p-2"><span className="text-xs font-semibold" >11/12/2023</span></td>
                                    <td className="p-2"><span className="text-xs font-semibold" >Hồ Chí Minh</span></td>
                                    <td className="p-2"><span className="text-xs font-semibold" >152.262.12</span></td>
                                    <td className="p-2"><span className="text-xs font-semibold" >Thay đổi mật khẩu</span></td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </>
    )
}
