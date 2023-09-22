import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ServiceData } from "@common.types";
import Image from "next/image";

export function PriceSlider({ data }: ServiceData) {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      modules={[Pagination]}>
      {data.map((value) => (
        <SwiperSlide key={value.id}>
          {value.package.map((pack: any) => (
            <div key={pack.id} className="flex flex-col gap-4 py-5">
              <h2 className="text-[0.875rem] text-center font-bold text-blue-light">
                {pack.title}
              </h2>
              <div className="flex flex-col items-center justify-between gap-2 text-center p-5 font-bold text-white bg-blue-light rounded-2xl">
                <p className="text-[0.875rem]">One time payment</p>
                <h2 className="text-[1.375rem]">Rp. {pack.price}</h2>
                <p className="bg-white text-center text-blue-light py-1.5 px-4 w-fit rounded-full">
                  Hubungi Kami
                </p>
              </div>
              {/* Benefit container */}
              <div className="flex flex-col gap-4">
                {JSON.parse(pack.benefit).map((benefit: any) => (
                  <div key={benefit} className="flex flex-col gap-20">
                    <div className="flex gap-5 p-4 border-2 border-blue-light">
                      <Image
                        src="/icon/priority.svg"
                        alt="icon"
                        width={25}
                        height={25}
                      />
                      <p>{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
