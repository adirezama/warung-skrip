import { Hero } from "@components/Hero";
import { Services } from "@components/Services";
import { getServices } from "@utils/helper";

export interface Props {}

export default async function ServicePage({}: Props) {
  const { data } = await getServices();
  return (
    <>
      <Hero
        type="service"
        headText="Layanan Kami"
        descText="Lihat berbagai layanan yang kami sediakan untuk masa depan kamu"
        imgUrl="/customer.png"
      />
      <Services type="service" data={data} />
    </>
  );
}
