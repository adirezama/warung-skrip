"use client";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { CardSlider } from "./CardSlider";
import { Service } from "./Service";

export interface Props {
  data: {
    id: number;
    thumbnail: string;
    tagline: string;
    title: string;
    desc: string;
    package: {
      id: number;
      category_id: number;
      title: string;
      benefit: [];
      price: number;
    }[];
  }[];
  type: string;
}

export function Services({ data, type }: Props) {
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
