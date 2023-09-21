"use client";
import Image from "next/image";
import { Card } from "./Card";
import { CardSlider } from "./CardSlider";
import { ServiceData } from "@common.types";
import { useState } from "react";
import { Tabs } from "./Tabs";

export function Service({ data, type }: ServiceData) {
  const [isOpen, setIsOpen] = useState(-1);
  const handleOpen = (index: number) => {
    setIsOpen((current) => {
      if (current === index) {
        return -1;
      } else {
        return index;
      }
    });
  };
  return (
    <>
      <div
        className={
          type === `home`
            ? `flex max-lg:hidden gap-2.5`
            : `flex flex-col gap-3 cursor-pointer max-md:hidden`
        }>
        {data.map((value) => (
          <Card
            handleOpen={() => handleOpen(value.id)}
            key={value.id}
            iconBgStyle={type === `home` ? `` : `w-full max-w-[10rem]`}
            cardStyle={
              type === `home` ? `card_service` : `card_service_layanan border`
            }
            iconUrl={value.thumbnail}
            iconStyle={
              type === "home"
                ? "w-full"
                : "w-full object-contain aspect-[1] p-2"
            }
            contentWrap={
              type === "home"
                ? `flex flex-col items-center justify-center`
                : `flex`
            }
            headText={value.title}
            headStyle="head_card_service_text font-bold"
            descText={value.desc}
            descStyle="desc_card_service_text">
            <>
              {isOpen === value.id && (
                <div>
                  {type === "service" && (
                    <>
                      {value.package.map((pack: any) => (
                        // Container
                        <div key={pack.id}>
                          <div className="flex justify-between py-5 gap-2">
                            {/* Benefit container */}
                            <div className="flex flex-col gap-4">
                              <h2 className="lg:text-[2.125rem] text-[1.45rem] text-blue-light">
                                {pack.title}
                              </h2>
                              {JSON.parse(pack.benefit).map((benefit: any) => (
                                <div
                                  key={benefit}
                                  className="flex flex-col gap-20">
                                  <div className="flex gap-5 p-4 border-2 border-blue-light">
                                    <Image
                                      src="/icon/priority.svg"
                                      alt="icon"
                                      width={25}
                                      height={25}
                                    />
                                    <p>{benefit}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            {/* Price container */}
                            <div className="flex flex-col justify-between w-full max-w-sm p-10 font-bold text-white bg-blue-light rounded-lg">
                              <p>One time payment</p>
                              <h2 className="text-4xl">Rp. {pack.price}</h2>
                              <p className="bg-white text-center text-blue-light py-6 px-10 rounded-lg">
                                Hubungi Kami
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              )}
            </>
          </Card>
        ))}
      </div>
      {type === "home" && (
        <div className="hidden max-lg:block">
          <CardSlider data={data} />
        </div>
      )}
      <Tabs />
    </>
  );
}
