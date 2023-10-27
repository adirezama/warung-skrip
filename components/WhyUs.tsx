import { Card } from "@components/Card";
import { whyUs } from "@constant";
export interface Props {}

export function WhyUs({}: Props) {
  return (
    <section className="">
      <div className="blob gap-5 flex flex-col items-center relative max-container py-20 padding-x">
        <h2 className="headLine_text">Kenapa Harus kita ?</h2>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {whyUs.map((value) => (
            <Card
              key={value.url}
              cardStyle="card_guarante"
              contentWrap="flex items-center md:text-center md:flex-col bg-white gap-5 w-full md:max-w-xs"
              iconBgStyle="icon_bg_rounded"
              iconUrl={value.url}
              iconStyle="icon_guarante"
              headText={value.heading}
              headStyle="head_card_guarante_text"
              descText={value.desc}
              descStyle="desc_card_guarante_text"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
