import Product from "@/interfaces/product";
import { useAppDispatch } from "@/redux/hooks";
import { toggleModal } from "@/redux/modalSlice";
import { PopupDetailProduct } from "@/redux/productSlice";
import Image from "next/image";

export default function ProductItem({ product }: { product: Product }) {
  const dispatch = useAppDispatch()
  const hanldeClickProduct = () => {
    dispatch(PopupDetailProduct(product.slug))
    dispatch(toggleModal('product'))
  }
  return (
    <button
      className="w-full"
      onClick={() => hanldeClickProduct()}
    >
      <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl box-shadow-product hover:-translate-y-3 hover:shadow-hover  duration-300 w-full">
      {product.pictures.map((picture) => (
          <Image
            key={picture}
            src={picture === 'banner.jpg' ? '/images' : picture }
            alt=""
            width={0}
            height={0}
            className="w-full h-[175px] object-cover rounded-t-2xl"
            sizes="100vh"
          />
        ))}
        <div className="p-3 w-full">
          <div className=" w-full line-clamp-1 overflow-hidden">
            <p className="w-full font-bold">
              {product.name}
            </p>
          </div>
          <div className="w-full flex">
            <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              <span className="mr-1 text-gray-900">
              </span>
              <span>{product.code}</span>
            </div>

          </div>
          <div className="flex justify-between">
            <div className="my-1">
              <h4 className="text-xs font-bold text-gray-500">Đánh giá</h4>
              <span className="my-2 text-base font-bold">{product.numberHasSeller}</span>
            </div>
            <div className="my-1">
              <h4 className=" text-xs font-bold text-gray-500">Giá</h4>
              <span className="my-2 text-base font-bold text-primary">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
