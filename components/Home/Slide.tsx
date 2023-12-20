"use client"
import WrapResponsive from "../WrapResponsive";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase";
import { useEffect, useState } from "react";
import Link from "next/link";

// todos : 
// + Cần có api get lấy cả image từ slide kèm với nội dung sau đó render ra
export default function HomeSlide() {
  const imageListRef = ref(storage, 'slides/')
  const [imageSlides, setImageSlides] = useState<any>([
    {
      name: 'Hỗ trợ bật kiếm tiền Twitter ( X )',
      transaction: 24213,
      image: 'https://firebasestorage.googleapis.com/v0/b/marketmmo.appspot.com/o/slides%2F0bc8399d16bc43e5a7f953530a7a0b89.jpeg?alt=media&token=7264f5cb-e6af-4f75-a136-04f41d634931',
      path: 'https://batkiemtienx.com/'
    },
    {
      name: 'Tăng tương tác mạng xã hội',
      transaction: 52432,
      image: 'https://firebasestorage.googleapis.com/v0/b/marketmmo.appspot.com/o/slides%2F6cd7d73f13094af0b3c7e37dc4ff1054.jpeg?alt=media&token=2137e968-37fb-47a6-9a50-518129c94b0b',
      path: 'https://dichvu.baostar.pro/dang-nhap'
    },
    {
      name: 'Giao dịch trung gian',
      transaction: 313423,
      image: 'https://firebasestorage.googleapis.com/v0/b/marketmmo.appspot.com/o/slides%2F77e8f066839d496f83806409d3b6fe89.png?alt=media&token=98e41092-3309-4e22-804c-863a880354d9',
      path: ''
    }
  ])
  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     response.items.map((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageSlides((pre: any) => [...pre, url])
  //       })
  //     })
  //   })
  // }, [])
  return (
    <>
      {imageSlides && (
        <div className="">
          <Swiper
            effect="Creative"
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation, EffectCreative]}
            spaceBetween={20}
            slidesPerView={"auto"}
           
          >
            {imageSlides.map((item: any, index: string) => (
              <SwiperSlide key={index} className="!w-full md:!w-full">
                <div className="w-full  relative">
                  <div className={`w-full h-full  bg-cover bg-center transition-all`} style={{ 'background': `url(${item.image})` }}>
                    <div className="w-full h-full pt-20 backdrop-blur-2xl"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(129,131,145,0.01) 0%, rgba(255,255,255,1) 100%)",
                      }}>
                      <WrapResponsive>
                        <div className="w-full relative group rounded-lg overflow-hidden">
                          <Image
                            src={item.image}
                            width={0}
                            height={0}
                            priority
                            sizes="100vw"
                            alt="slide"
                            className="w-full rounded-lg h-96 md:h-96 lg:h-96 object-cover group-hover:scale-110 transition-all"
                          />
                          <div className="absolute w-full bg-[rgba(0,0,0,0.1)] h-full top-0 flex items-end justify-between">
                            <div className="flex p-5 md:p-10 flex-col">
                              {/* <Image
                                src="/images/services/sosical.avif"
                                alt="bnb"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="rounded-md border border-white mb-5 w-14 h-14 md:w-16 md:h-16"
                              /> */}
                              <p className=" text-2xl md:text-4xl font-semibold text-white">
                                {item.name}
                              </p>
                              <p className="text-white font-bold">By MarketMMO</p>
                              <p className="text-white font-bold">
                                Số lượng giao dịch : {item.transaction} giao dịch
                              </p>
                            </div>
                            <div className="hidden md:flex p-10 flex-col">
                              <Link href={item.path} target="_blank" className="backdrop-blur-md rounded-xl px-5 bg-[rgba(255,255,255,0.4)] group-hover:bg-white  group-hover:text-[#121212] transition-all py-4 text-white flex items-center gap-2 font-bold">
                                Xem dịch vụ
                              </Link>
                            </div>
                          </div>
                        </div>
                      </WrapResponsive>
                    </div>

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  )
}