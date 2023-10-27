import Image from "next/image";

export interface Props {
  type: string;
  headText: string;
  descText: string;
  imgUrl: string;
}

export function Hero({ type, headText, descText, imgUrl }: Props) {
  return (
    <section className="">
      <div
        className={
          type === `home`
            ? `bg-blue-dark padding-x py-5 md:py-10`
            : `md:px-36 px-8 py-5 md:py-10`
        }>
        <div
          className={
            type === `home`
              ? ` flex justify-between flex-col md:flex-row text-center md:text-start max-container items-center`
              : `flex  justify-between flex-col md:flex-row text-center md:text-start max-container items-center`
          }>
          <div className=" flex flex-col max-w-lg">
            <p className="desc_text text-blue-light">Warung Tugas & Skripsi</p>
            <h1
              className={
                type === `home` ? `head_text text-white` : `head_text`
              }>
              {headText}
            </h1>
            <p
              className={
                type === `home` ? `hero_subtext text-white` : `head_subtext`
              }>
              {descText}
            </p>
          </div>
          <Image
            src={imgUrl}
            alt="hero-image"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
            className={type === `home` ? `w-[350px] md:w-[480px]` : `w-[250px]`}
          />
        </div>
      </div>
    </section>
  );
}
