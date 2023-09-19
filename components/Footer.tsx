import Link from "next/link";
import { Button } from "./Button";
import Image from "next/image";
export interface Props {}

export function Footer({}: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-blue-dark text-white py-10 max-container padding-x">
      <div className="flex flex-col items-center mb-10">
        <h2 className="uppercase mb-5 lg:text-3xl">
          Kesuksesan <span className="font-bold">Bukan Kebetulan</span>
        </h2>
        <Link href="/offer" className="mb-5">
          <Button label="Get Offer" />
        </Link>
        <div className="flex justify-center flex-col md:flex-row gap-4  ">
          <div className="flex flex-row justify-between gap-3 items-center px-4 py-2 bg-blue-gray rounded-xl">
            <div className="flex gap-2 items-center text-base">
              <Image
                src="/icon/whatsapp.svg"
                alt="whatsapp"
                width={20}
                height={20}
              />
              <p>Whatsapp</p>
            </div>
            <p className="text-base">+6281913663835</p>
          </div>
          <div className="flex flex-row justify-between gap-3 items-center px-4 py-2 bg-blue-gray rounded-xl">
            <div className="flex gap-2 items-center text-base">
              <Image
                src="/icon/instagram.svg"
                alt="instagram"
                width={20}
                height={20}
              />

              <p>Instagram</p>
            </div>
            <p className="text-base font-semibold">@warungsnt</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center max-container w-full">
        <p>
          @<span>{year}</span> Randoile | All Rights Reserved.
        </p>
        <div className="flex items-center gap-3">
          <Link href="#whatsapp">
            <Image
              src="/icon/whatsapp.svg"
              alt="whatsapp"
              width={20}
              height={20}
            />
          </Link>
          <Link href="#instagram">
            <Image
              src="/icon/instagram.svg"
              alt="instagram"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
