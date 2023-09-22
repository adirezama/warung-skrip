import Image from "next/image";
import { ReactElement } from "react";

export interface Props {
  cardStyle: string;
  contentWrap?: string;
  iconUrl: string;
  iconBgStyle?: string;
  iconStyle: string;
  hashTag?: string;
  headText: string;
  descText: string;
  headStyle: string;
  descStyle: string;
  children?: ReactElement<any, any>;
  handleOpen?: any;
}

export function Card({
  cardStyle,
  contentWrap,
  iconUrl,
  iconBgStyle,
  iconStyle,
  hashTag,
  headText,
  descText,
  headStyle,
  descStyle,
  children,
  handleOpen,
}: Props) {
  return (
    // Card properties
    <>
      <div onClick={handleOpen} className={cardStyle}>
        <div className={contentWrap}>
          <div className={iconBgStyle}>
            <Image
              src={iconUrl}
              alt="icon"
              width={0}
              height={0}
              sizes="100vw"
              className={iconStyle}
            />
          </div>

          {/* Text component */}
          <div className="flex flex-col">
            {hashTag && (
              <p className="desc_card_guarante_text text-blue-light">
                {hashTag}
              </p>
            )}
            <h1 className={headStyle}>{headText}</h1>
            <p className={descStyle}>{descText}</p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
