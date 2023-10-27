import { Button } from "./Button";

export interface Props {}

export function Offering({}: Props) {
  return (
    <section className="bg-blue-dark padding-x py-10">
      <div className="flex flex-col items-center justify-center text-white  max-container ">
        <h2 className="headLine_text uppercase text-center">
          Just rest we are handling for the best
        </h2>
        <p className="head_card_service_text">#LulusDenganTenang</p>
        <Button label="Lihat Paket" />
      </div>
    </section>
  );
}
