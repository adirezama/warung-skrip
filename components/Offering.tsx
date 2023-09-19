import { Button } from "./Button";

export interface Props {}

export function Offering({}: Props) {
  return (
    <section className="flex flex-col items-center justify-center text-white bg-blue-dark max-container padding-x py-10">
      <h2 className="headLine_text uppercase text-center">
        Just rest we are handling for the best
      </h2>
      <p className="head_card_service_text">#LulusDenganTenang</p>
      <Button label="Lihat Paket" />
    </section>
  );
}
