import Link from "next/link";

export const CardPromotion = ({
  heading,
  des,
  benefit,
  isNew
}: {
  heading: string;
  des: string;
  benefit: Array<string>;
  isNew: boolean
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-5">
      <div className="flex gap-4 ">
        <div className="w-10 h-10 bg-pink-400 rounded-lg"></div>
        <div>
          <div className="flex gap-2 items-center">
            <h2 className="text-black text-xl font-semibold">{heading}</h2>
            {isNew ? (
              <div>
              <p className="font-semibold text-sm bg-red-600 rounded-full text-white inline px-2">
                Mới
              </p>
            </div>
            ) : (
              <></>
            )}
          </div>
          <p className="text-gray-700 text-sm">{des}</p>
        </div>
      </div>
      <div className="flex gap-3 my-10 justify-end">
        <button className="text-black bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold">
          Khuyến mãi của tôi
        </button>
        <Link href="marketing-tools/discount/create">
        <button className="text-white bg-primary px-3 py-2 rounded-md text-sm font-semibold">
          Tạo
        </button></Link>
      </div>
      <div className="flex gap-3 border border-gray-200 p-2 rounded-md">
        {benefit.map((item) => (
          <p className="bg-gray-200 px-2 rounded-md text-gray-700 text-sm">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
