import { Card } from "./Card";
import { CardSlider } from "./CardSlider";

export interface Props {
  data: {
    id: number;
    thumbnail: string;
    tagline: string;
    title: string;
    desc: string;
    package: {
      id: number;
      category_id: number;
      title: string;
      benefit: [];
      price: number;
    }[];
  }[];
  type: string;
}

export function Service({ data, type }: Props) {
  return (
    <>
      <>
        <div
          className={
            type === `home`
              ? `flex max-lg:hidden gap-2.5`
              : `flex flex-col gap-3`
          }>
          {data.map((value) => (
            <Card
              key={value.id}
              iconBgStyle={type === `home` ? `` : `w-full max-w-[10rem]`}
              cardStyle={
                type === `home` ? `card_service` : `card_service_layanan`
              }
              iconUrl={value.thumbnail}
              iconStyle={
                type === "home" ? "w-full" : "w-full object-contain aspect-[1]"
              }
              contentWrap={
                type === "home"
                  ? `flex flex-col items-center justify-center`
                  : `flex`
              }
              headText={value.title}
              headStyle="head_card_service_text font-bold"
              descText={value.desc}
              descStyle="desc_card_service_text">
              <div></div>
            </Card>
          ))}
        </div>
        {type === "home" && (
          <div className="hidden max-lg:block">
            <CardSlider data={data} />
          </div>
        )}
      </>
    </>
  );
}
