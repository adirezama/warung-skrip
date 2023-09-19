import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Card } from "./Card";

export interface Props {
  data: {
    id: number;
    thumbnail: string;
    tagline: string;
    title: string;
    desc: string;
    package: {}[];
  }[];
}
export function CardSlider({ data }: Props) {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      modules={[Pagination]}>
      {data.map((value) => (
        <SwiperSlide key={value.id}>
          <Card
            iconBgStyle="min-w-[7rem]"
            cardStyle="card_service_slider"
            iconUrl={value.thumbnail}
            iconStyle="w-full h-[250px] object-contain aspect-square"
            headText={value.title}
            headStyle="head_card_service_text font-bold"
            descText={value.desc}
            descStyle="desc_card_service_text"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
