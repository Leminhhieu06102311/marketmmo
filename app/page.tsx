import WrapResponsive from "@/components/WrapResponsive";
// import SellingProduct from "@/components/Home/SellingProduct";
import HomeSlide from "@/components/Home/Slide";
import ProductByCate from "@/components/Home/ProductByCate";
export default async function Home() {

  return (
    <>
      <HomeSlide />
      {/* <WrapResponsive>
          <SellingProduct />
      </WrapResponsive> */}
      <WrapResponsive>
          <ProductByCate />
      </WrapResponsive>

    </>
  )
}

