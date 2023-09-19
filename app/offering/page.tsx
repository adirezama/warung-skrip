import { Card } from "@components/Card";
import { steps } from "@constant";
import Image from "next/image";

export interface Props {}

export default function Offering({}: Props) {
  return (
    <>
      <section className="flex flex-col max-container">
        <div className="flex flex-col md:flex-row items-center justify-between padding-x py-5 md:py-10">
          <div className="md:text-start text-center flex flex-col w-full max-w-[400px]">
            <p className="desc_text text-blue-light">Warung Tugas & Skripsi</p>
            <h1 className="head_text">Layanan Kami</h1>
            <p className="head_subtext">
              Lihat berbagai layanan yang kami sediakan untuk masa depan kamu
            </p>
          </div>
          <Image
            src="/customer-offering.png"
            alt="hero-image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[250px]"
          />
        </div>
        <div className="flex flex-wrap gap-5 items-center justify-center padding-x pb-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex gap-4 border rounded-xl shadow-xl w-full max-w-md px-6 py-3">
              <p className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-white bg-blue-light">
                {step.id}
              </p>
              <div className="flex flex-col">
                <p className="font-bold">{step.title}</p>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
