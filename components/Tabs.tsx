import { ServiceData } from "@common.types";
import Image from "next/image";
import { useState } from "react";
import { PriceSlider } from "./PriceSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export function Tabs({ data }: ServiceData) {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <div className="hidden max-md:flex flex-col items-center max-w-md mt-4 p-4">
      <div className="flex border-b mb-4">
        {data.map((value, index) => (
          <button
            key={index}
            className={`p-2 text-[11.5px] ${
              activeTab === value.id
                ? "border-b-2 border-blue-500 font-bold"
                : ""
            }`}
            onClick={() => handleTabClick(value.id)}>
            {value.title.substring(6)}
          </button>
        ))}
      </div>

      {data.map((val) => (
        <div
          key={val.id}
          className={activeTab === val.id ? "flex flex-col " : "hidden"}>
          {activeTab === val.id && (
            <>
              <div className="flex p-2">
                <Image
                  src={val.thumbnail}
                  alt="icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[150px] h-[150px] object-contain aspect-[3/2]"
                />
                <div className="flex flex-col text-[0.75rem]">
                  <p className="text-blue-light">{val.tagline}</p>
                  <h2 className="font-bold">{val.title}</h2>
                  <p>{val.desc}</p>
                </div>
              </div>
              <Swiper
                spaceBetween={40}
                slidesPerView={1}
                loop={false}
                pagination={{ clickable: true }}
                modules={[Pagination]}>
                {val.package.map((v: any) => (
                  <SwiperSlide key={v.id}>
                    {activeTab === v.category_id && (
                      <div className="flex flex-col border-2 border-blue-light rounded-lg shadow-lg gap-4 p-5 mb-8 cursor-pointer">
                        <h2 className="text-[0.875rem] text-center font-bold text-blue-light">
                          {v.title}
                        </h2>
                        <div className="flex flex-col items-center justify-between gap-2 text-center p-5 font-bold text-white bg-blue-light rounded-2xl">
                          <p className="text-[0.875rem]">One time payment</p>
                          <h2 className="text-[1.375rem]">Rp. {v.price}</h2>
                          <p className="bg-white text-center text-blue-light py-1.5 px-4 w-fit rounded-full">
                            Hubungi Kami
                          </p>
                        </div>
                        {/* Benefit container */}
                        <div className="flex flex-col gap-4">
                          {JSON.parse(v.benefit).map((benefit: any) => (
                            <div key={benefit} className="flex flex-col gap-20">
                              <div className="flex gap-3 p-2 border-2 border-blue-light">
                                <Image
                                  src="/icon/priority.svg"
                                  alt="icon"
                                  width={25}
                                  height={25}
                                />
                                <p className="text-[12px]">{benefit}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
