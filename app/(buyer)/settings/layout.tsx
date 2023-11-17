import WrapResponsive from "@/components/WrapResponsive";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { GrShieldSecurity } from "react-icons/gr";

export default function LayoutSetting({children}: {children : React.ReactNode}) {
    return (
        <WrapResponsive>

            <div className='w-full m-auto  lg:max-w-8xl flex'>
                <div className='w-64 hidden md:block lg:block'>
                    <ul className='w-52 sticky top-5 mt-7 mb-7'>
                        <li className='mb-1'><Link href='/settings' className='flex justify-left gap-2 items-center p-4 text-sm font-semibold rounded-lg bg-[#EFF2F5] hover:bg-[#EFF2F5]'><FaRegUser className="w-5 h-5" /> Hồ sơ</Link></li>
                        <li className='mb-1'><Link href='/settings/account-security' className='flex justify-left items-center p-4 text-sm rounded-lg gap-2 hover:bg-[#EFF2F5] '> <GrShieldSecurity className="w-5 h-5" />Bảo mật tài khoản</Link></li>
                    </ul>
                </div>
                {children}
            </div>
            </WrapResponsive>
    )
}