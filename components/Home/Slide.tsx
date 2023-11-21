import WrapResponsive from "../WrapResponsive";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase";
import { useEffect, useState } from "react";

export default function HomeSlide() {
  const imageListRef = ref(storage, 'slides/')
  const [imageSlides, setImageSlides] = useState<any>([])
  const [countSlide, setCountSlide] = useState(0)
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.map((item) => {
        getDownloadURL(item).then((url) => {
          setImageSlides((pre: any) => [...pre, url])
        })
      })
    })
  }, [])
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
            onSlideChange={(swiper) => {
              let count = swiper.realIndex
              console.log(swiper)
              if (count) {
                setCountSlide(count)
              }
            }}
          >
            {imageSlides.map((item: any, index: string) => (
              <SwiperSlide key={index} className="!w-5/6 md:!w-full">
                <div className="w-full  relative">
                  <div className={`w-full h-full  bg-cover bg-center transition-all`} style={{ 'background': `url(${item})` }}>
                    <div className="w-full h-full pt-20 backdrop-blur-2xl"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(129,131,145,0.01) 0%, rgba(255,255,255,1) 100%)",
                      }}>
                      <WrapResponsive>
                        <div className="w-full relative group rounded-lg overflow-hidden">
                          <Image
                            src={item}
                            width={0}
                            height={0}
                            priority
                            sizes="100vw"
                            alt="slide"
                            className="w-full rounded-lg h-96 md:h-96 lg:h-96 object-cover group-hover:scale-110 transition-all"
                          />
                          <div className="absolute w-full bg-[rgba(0,0,0,0.1)] h-full top-0 flex items-end justify-between">
                            <div className="flex p-5 md:p-10 flex-col">
                              <Image
                                src="/images/services/sosical.avif"
                                alt="bnb"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="rounded-md border border-white mb-5 w-14 h-14 md:w-16 md:h-16"
                              />
                              <p className=" text-2xl md:text-4xl font-semibold text-white">
                                Giao dịch trung gian
                              </p>
                              <p className="text-white font-bold">By MarketMMO</p>
                              <p className="text-white font-bold">
                                Số lượng giao dịch : 14,035 giao dịch
                              </p>
                            </div>
                            <div className="hidden md:flex p-10 flex-col">
                              <button className="backdrop-blur-md rounded-xl px-5 bg-[rgba(255,255,255,0.4)] group-hover:bg-white  group-hover:text-[#121212] transition-all py-4 text-white flex items-center gap-2 font-bold">
                                Xem danh mục
                              </button>
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