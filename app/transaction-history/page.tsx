
import WrapResponsive from "@/components/WrapResponsive";
import PurchaseHistory from "./TabBuyer/PurchaseHistory";

export default async function TransactionHistory() {
  return (
    <>
      <WrapResponsive>
        <div className="pt-10">
          <div className="">
            <div className="flex gap-x-6 justify-between md:justify-around lg:justify-start">
              {" "}
              <div
                className="text-center"
              >
                <button
                  className={`text-black bg-[#1212120a] leading-16 font-semibold  px-4 py-3 rounded-[10px]`}
                >
                  <span className="">
                    Lịch sử mua hàng
                  </span>

                </button>
              </div>
            </div>
          </div>
        </div>
      </WrapResponsive>
      <PurchaseHistory />
    </>
  );
};

