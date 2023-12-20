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
      <div className="transition ease-in-out delay-150 rounded-2xl shadow-xl box-shadow-product hover:-translate-y-3 hover:shadow-hover  duration-300 w-full">
        {product.pictures.map((picture) => (
          <Image
            key={picture}
            src={picture === 'banner.jpg' ? '/images' : picture}
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
              <div className="flex items-center gap-1">
                <span className="my-2 text-base font-bold">{product.numberHasSeller}</span>
                <span>
                  <svg
                    viewBox="0 0 128 128"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--noto w-5 h-5"
                    preserveAspectRatio="xMidYMid meet"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                        fill="#fdd835"
                      />
                      <path
                        d="M67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                        fill="#ffff8d"
                      />
                      <path
                        d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                        fill="#f4b400"
                      />
                    </g>
                  </svg>
                </span>
              </div>
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
