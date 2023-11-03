import Heading from "../../components/Heading";
import { CardPromotion } from "./CardPromotion";

export default function marketingTools() {
  return (
    <>
      <Heading heading="Khuyến mãi bán hàng" isSupport isBreakcrumb={false} />
      <div className="bg-white min-h-screen w-full rounded-lg px-6">
        <div className="py-3 flex gap-2 items-center">
          <h1 className="font-medium text-2xl">Công cụ quảng cáo</h1>
        </div>
        <div className="flex gap-5">
          <CardPromotion heading="Chiết khấu sản phẩm" des="Thiết lập giảm giá hàng ngày để tạo sức hút hơn với giá gốc" benefit={['Tăng doanh thu']} isNew={false}/>
          <CardPromotion heading="Mua sỉ giá hời" des="Tạo khuyến mãi đa tầng cho nhóm sản phẩm để tăng thêm giá trị đơn hàng" benefit={['Tăng doanh thu','Tăng thêm giá trị đơn hàng']} isNew={true}/>
          <CardPromotion heading="Mua sỉ giá hời" des="Tạo khuyến mãi đa tầng cho nhóm sản phẩm để tăng thêm giá trị đơn hàng" benefit={['Tăng doanh thu','Tăng thêm giá trị đơn hàng']} isNew={true}/>
        </div>
      </div>
    </>
  );
}
