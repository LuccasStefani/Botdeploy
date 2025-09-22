"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { RoadMapItem } from "@/types/types";

const roadMapData: RoadMapItem[] = [
  {
    title: "Fase 1",
    image: {
      src: "/BotApoiado.png",
      alt: "BotApoiado",
      width: 120,
      height: 120,
      className: "absolute -top-20 right-4",
    },
    text: "FASE 1",
  },
  {
    title: "Fase 2",
    image: {
      src: "/olhandoPrabaixo.png",
      alt: "BotOlhando",
      width: 120,
      height: 120,
      className: "absolute -top-20 left-4",
    },
    text: "FASE 2",
  },
  {
    title: "Fase 3",
    image: {
      src: "/comFoguete.png",
      alt: "BotComFoguete",
      width: 120,
      height: 120,
      className: "absolute -bottom-20 left-0",
    },
    text: "FASE 3",
  },
];

export function RoadMap() {
  const data = roadMapData.map((item: RoadMapItem) => ({
    title: item.title,
    content: (
      <div className="flex justify-center relative" id="roadmap">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          width={item.image.width}
          height={item.image.height}
          className={item.image.className}
        />
        <div className="h-40 md:h-60 lg:h-72 w-full flex items-center justify-center rounded-xl bg-gradient-to-r from-neutral-800/90 to-black text-white text-lg font-semibold shadow-lg">
          {item.text}
        </div>
      </div>
    ),
  }));

  return (
    <div className="relative w-full overflow-hidden">
      <Timeline data={data} />
    </div>
  );
}
