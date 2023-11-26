export default function ProductLoader({
  quantityProduct,
}: {
  quantityProduct: number;
}) {
    const skeletonItems = [];
    for (let i = 0; i < quantityProduct; i++) {
        skeletonItems.push(
            <div className="transition ease-in-out delay-150 m-2 rounded-2xl shadow-xl box-shadow-product hover:-translate-y-3 hover:shadow-hover  duration-300 " key={i}>
            <div className="h-[175px] w-full bg-gray-200 animate-pulse rounded-2xl"></div>
            <div className="p-3">
              <div className=" w-full line-clamp-1 overflow-hidden">
                <p className="w-full font-bold h-5 bg-gray-200 animate-pulse rounded-2xl"></p>
              </div>
              <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-200 h-4 w-20 px-3 py-1 rounded-full"></div>
              <div className="flex justify-between">
                <div className="my-1">
                  <h4 className="text-xs font-bold text-gray-500 bg-gray-200 h-3 w-10 rounded-2xl"></h4>
                  <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-200 h-4 w-20 px-3 py-1 rounded-full"></div>
                </div>
                <div className="my-1">
                  <h4 className="text-xs font-bold text-gray-500 bg-gray-200 h-3 w-10 rounded-2xl"></h4>
                  <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-200 h-4 w-20 px-3 py-1 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        );
      }
  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-2 md:grid-cols-3">
      {skeletonItems}
    </div>
  )
}
