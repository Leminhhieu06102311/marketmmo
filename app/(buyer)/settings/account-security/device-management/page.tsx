
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";


export default function deviceManagement() {

    return (
        <>
          <div className='w-full mb:w-full p-6 lg:w-10/12'>
                        <Link href='/settings/account-security'>
                            <div className="flex items-center border-b border-gray-200 w-full mb-10">
                                <span className="text-2xl"></span>
                                <h1 className='mx-8 py-4  text-2xl font-semibold flex items-center gap-2'><IoIosArrowBack className="w-5 h-5" />Quản lý thiết bị</h1>
                            </div>
                        </Link>
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
                                </tbody>
                            </table>
                        </div>
                    </div>
        </>
    )
}
