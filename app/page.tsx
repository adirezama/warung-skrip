import { Hero } from "@components/Hero";
import { Offering } from "@components/Offering";
import { Services } from "@components/Services";
import { WhyUs } from "@components/WhyUs";
import { getServices } from "@utils/helper";

export interface Props {}

export default async function page({}: Props) {
  const { data } = await getServices();

  return (
    <>
      <Hero
        type="home"
        headText="Jasa Pembuatan & Bimbingan Skripsi"
        descText="Tempatnya penyelesaian masalah skripsi kamu"
        imgUrl="/customer-landing.png"
      />
      <WhyUs />
      <Offering />
      <Services type="home" data={data} />
    </>
  );
}
