import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function ProductItem({handleClickProduct}: {handleClickProduct : Function}) {
  return (
    <button
      data-hs-overlay="#modal-detail-product"
      onClick={() => handleClickProduct(2)}
    >
      <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl box-shadow-product hover:-translate-y-3 hover:shadow-hover  duration-300 ">
        <Image
          src="/images/product/1.webp"
          alt=""
          width={0}
          height={0}
          className="w-full h-[175px] object-cover rounded-t-2xl"
          sizes="100vh"
        ></Image>
        <div className="p-3">
          <div className=" w-full line-clamp-1 overflow-hidden">
            <p className="w-full font-bold">
              ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Hic, atque.
            </p>
          </div>
          <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            <span className="mr-1 text-gray-900">
              <FontAwesomeIcon icon={faFontAwesome} width={12} height={12} />
            </span>
            <span>Etherium</span>
          </div>
          <div className="flex justify-between">
            <div className="my-1">
              <h4 className="text-xs font-bold text-gray-500">Starts</h4>
              <span className="my-2 text-base font-bold">Aug 22</span>
            </div>
            <div className="my-1">
              <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
              <span className="my-2 text-base font-bold">0.01 ETH</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
