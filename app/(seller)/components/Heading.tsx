import {CiSquareChevLeft} from "react-icons/ci";
export default function Heading({
  heading,
  isSupport,
  isBreakcrumb,
}: {
  heading: string;
  isSupport: boolean;
  isBreakcrumb: boolean;
}) {
  return (
    <>
      {isBreakcrumb ? (
        <div className="block">
          <ol
            className="flex items-center whitespace-nowrap min-w-0"
            aria-label="Breadcrumb"
          >
            <li
              className="text-sm font-semibold text-gray-800 truncate dark:text-gray-200 flex items-center gap-2 hover:bg-white cursor-pointer px-3 rounded-md py-2"
              aria-current="page"
            >
                <CiSquareChevLeft className="w-7 h-7" />
                Chiết khấu sản phẩm
            </li>
          </ol>
        </div>
      ) : (
        <></>
      )}
      <div className="py-3 flex gap-2 items-center">
        <h1 className="font-semibold text-2xl">{heading}</h1>
        {isSupport ? (
          <p className="text-sm text-primary">Hướng dẫn & trợ giúp</p>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
