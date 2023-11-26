'use client'
import { Suspense } from "react";
import ProductLoader from "@/components/Skeleton/ProductLoader";
import WrapResponsive from "@/components/WrapResponsive";
import AccountTrending from "@/components/Home/AccountTrending";
import 'swiper/css';
import SellingProduct from "@/components/Home/SellingProduct";
import HomeSlide from "@/components/Home/Slide";
export default async function Home() {

  return (
      <>
        <HomeSlide />
        <WrapResponsive>
          <Suspense fallback={<ProductLoader quantityProduct={6} />}>
            <SellingProduct />
          </Suspense>
        </WrapResponsive>
        <WrapResponsive>
          <Suspense fallback={<ProductLoader quantityProduct={6} />}>
            <AccountTrending />
          </Suspense>
        </WrapResponsive>
        
      </>
  )
}

