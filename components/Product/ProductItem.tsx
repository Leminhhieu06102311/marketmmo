import { Context } from "@/app/layout";
import Product from "@/interfaces/product";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useContext } from "react";

export default function ProductItem({productId,product} : {productId : string, product: Product}) {
  const { handleClickProduct } = useContext(Context);
  return (
    <button
      data-hs-overlay="#modal-detail-product"
      className="w-full"
      onClick={() => handleClickProduct(productId)}
    >
      <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl box-shadow-product hover:-translate-y-3 hover:shadow-hover  duration-300 w-full">
        <Image
          src={product.pictures[0]}
          alt=""
          width={0}
          height={0}
          className="w-full h-[175px] object-cover rounded-t-2xl"
          sizes="100vh"
        ></Image>
        <div className="p-3 w-full">
          <div className=" w-full line-clamp-1 overflow-hidden">
            <p className="w-full font-bold">
             {product.name}
            </p>
          </div>
          <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            <span className="mr-1 text-gray-900">
              <FontAwesomeIcon icon={faFontAwesome} width={12} height={12} />
            </span>
            <span>{product.code}</span>
          </div>
          <div className="flex justify-between">
            <div className="my-1">
              <h4 className="text-xs font-bold text-gray-500">Lượt mua</h4>
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
