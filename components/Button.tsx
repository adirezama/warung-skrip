import Image from "next/image";
import { FC } from "react";

interface Props {
  label: string;
  iconUrl?: string;
}

export function Button({ label, iconUrl }: Props) {
  return (
    <div className="max-md:hidden flex py-1.5 px-3 gap-2.5 bg-blue-light rounded-full hover:scale-95 transition-all ease-lineart duration-300 cursor-pointer">
      <p className="button_text">{label}</p>
      {iconUrl && (
        <Image
          src={iconUrl}
          alt="icon"
          width={0}
          height={0}
          sizes="100vw"
          className="w-2.5 h-2.5 md:w-5 md:h-5 m-auto :"
        />
      )}
    </div>
  );
}
