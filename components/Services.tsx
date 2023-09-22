import { Service } from "./Service";

export function Services({ data, type }: any) {
  return (
    <section className="flex flex-col items-center justify-center max-container padding-x py-10">
      <h2 className="headLine_text text-center uppercase ">
        Kami Menyediakan Berbagai Layanan
      </h2>
      <p className="head_card_service_text font-normal">
        Lihat berbagai layanan yang kami berikan
      </p>

      <Service type={type} data={data} />
    </section>
  );
}
