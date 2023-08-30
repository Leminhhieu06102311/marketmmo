"use client";
import {
  faBookmark,
  faCaretRight,
  faEnvelope,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="max-w-xxs mx-auto mt-3 ">
        <h1 className="font-bold text-base">
          Nền tảng dịch vụ, sản phẩm cho MMO
        </h1>
        <p>The global crypto market cap is</p>
      </section>
      <section className="max-w-xxs mx-auto mt-3">
        <Swiper
          className=""
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image
              src="/images/slide/0bc8399d16bc43e5a7f953530a7a0b89.jpeg"
              width={0}
              height={0}
              sizes="100vw"
              alt="slide"
              className="w-full rounded-lg h-44  object-cover"
            />
            <div className="pb-7"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/slide/6cd7d73f13094af0b3c7e37dc4ff1054.jpeg"
              width={0}
              height={0}
              sizes="100vw"
              alt="slide"
              className="w-full rounded-lg h-44  object-cover"
            />
            <div className="pb-7"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/slide/77e8f066839d496f83806409d3b6fe89.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="slide"
              className="w-full rounded-lg h-44  object-cover"
            />
            <div className="pb-7"></div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="max-w-xxs mx-auto  p-2 box-shadow bg-white rounded-md">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">🔥 Danh sách sản phẩm</h2>
          <p className="text-primary text-sm">
            <span>More</span> <FontAwesomeIcon icon={faCaretRight} />
          </p>
        </div>
        <ul className="ml-5">
        <li className="font-medium text-base justify-between py-2 flex items-center">
            <div className="gap-3 flex items-center">
            <span className="text-slate-500">1</span>
            <div>
              <Image  src="/images/slide/lt.png" width={25} height={25} alt="bnb" className="rounded-full"/>
            </div>
            <p className="text-sm font-bold">Tài khoản</p>
            </div>
            <button className="py-2 px-3 bg-[#eff2f5] rounded-md text-xs font-bold">Xem ngay</button>
          </li>
          <li className="font-medium text-base justify-between py-2 flex items-center">
            <div className="gap-3 flex items-center">
            <span className="text-slate-500">2</span>
            <div>
              <Image  src="/images/slide/btc.png" width={25} height={25} alt="bnb" className="rounded-full"/>
            </div>
            <p className="text-sm font-bold">Phần mềm</p>
            </div>
            <button className="py-2 px-3 bg-[#eff2f5] rounded-md text-xs font-bold">Xem ngay</button>
          </li>
          <li className="font-medium text-base justify-between py-2 flex items-center">
            <div className="gap-3 flex items-center">
            <span className="text-slate-500">3</span>
            <div>
              <Image  src="/images/slide/bnb.png" width={25} height={25} alt="bnb" className="rounded-full"/>
            </div>
            <p className="text-sm font-bold">Blockchain</p>
            </div>
            <button className="py-2 px-3 bg-[#eff2f5] rounded-md text-xs font-bold">Xem ngay</button>
          </li>
        </ul>
      </section>
    </>
  );
}
