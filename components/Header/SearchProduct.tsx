import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { PopupDetailProduct } from "@/redux/productSlice";
import { toggleModal } from "@/redux/modalSlice";
import { memo, useEffect } from "react";
import { fetchProducts, hideModalSearch } from "@/redux/searchSlice";

const SearchProduct = () => {
    const { searchResult } = useAppSelector((state) => state.search)
    const dispatch = useAppDispatch()
    const hanldeClickProduct = (slug: string) => {
        dispatch(PopupDetailProduct(slug))
        dispatch(toggleModal('product'))
    }
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <>
            <div>
                <div className="absolute hidden lg:flex top-[4rem] right-0 left-0 z-[100]  w-full " >
                    <ul className="p-2 bg-white border max-h-[50vh] overflow-y-auto w-full rounded-md">
                        {searchResult.length > 0 ? (
                            <>
                                {searchResult.map((item, index) => (
                                    <li key={index} onClick={() => hanldeClickProduct(item.slug)}>
                                        <div className="p-1 hover:bg-gray-50 rounded-lg">
                                            <div className="flex items-center">
                                                <Image className="rounded-lg mx-3 my-2" src={item.creator.avatar} width={32} height={32} alt="" />
                                                <div className="flex justify-between items-center w-full">
                                                    <div className="flex">
                                                        <div>
                                                            <span className="font-bold text-sm">{item.name}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </li>
                                ))}</>
                        ) : (
                            <div className="flex items-center justify-center py-10">
                                <p className="text-sm">Không tìm thấy sản phẩm</p>

                            </div>
                        )}
                    </ul>
                </div>
                <div className="w-full h-full fixed  top-0 z-50 bottom-0 right-0 left-0" onClick={() => dispatch(hideModalSearch())}>
                </div>
            </div>
        </>
    )
}
export default memo(SearchProduct)