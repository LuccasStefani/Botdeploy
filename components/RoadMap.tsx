"use client";

import React, { ReactNode } from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export interface RoadMapItem {
  title: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  text: ReactNode;
}

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
    text: (
      <ul className="list-disc list-inside text-left space-y-1">
        <li>Alcance de 1.000 holders</li>
        <li>Finalização da pré-venda</li>
        <li>Consolidação da base inicial</li>
      </ul>
    ),
  },
  {
    title: "Fase 2",
    image: {
      src: "/olhandoPrabaixo.png",
      alt: "BotOlhando",
      width: 120,
      height: 120,
      className: "absolute md:-top-20 md:left-4 -top-28",
    },
    text: (
      <ul className="list-disc list-inside text-left space-y-1">
        <li>Lançamento oficial do token em exchanges</li>
        <li>Integração RWA do robô BOTMILION</li>
        <li>Primeira utilidade real do token</li>
      </ul>
    ),
  },
  {
    title: "Fase 3",
    image: {
      src: "/comFoguete.png",
      alt: "BotComFoguete",
      width: 120,
      height: 120,
      className: "absolute md:-bottom-20 md:left-0 -bottom-28 -right-5",
    },
    text: (
      <ul className="list-disc list-inside text-left space-y-1">
        <li>Meta de 5.000 holders</li>
        <li>Queima estratégica de tokens</li>
        <li>Aumento da escassez e valorização</li>
        <li>
          Reforço da necessidade de possuir tokens para acesso ao robô
        </li>
      </ul>
    ),
  },
  {
    title: "Fase 4",
    image: {
      src: "/comOculos.png",
      alt: "Plataforma BOTMILION",
      width: 120,
      height: 120,
      className: "absolute -bottom-20 -right-4",
    },
    text: (
      <ul className="list-disc list-inside text-left space-y-1">
        <li>Lançamento da plataforma oficial de acesso ao robô</li>
        <li>Acesso exclusivo para quem tiver tokens BOTMILION</li>
        <li>Taxas diferenciadas para holders</li>
        <li>
          Consolidação do ecossistema com utilidade prática do token
        </li>
      </ul>
    ),
  },
  {
    title: "Fase 5",
    image: {
      src: "/Bot2.png",
      alt: "BOTMILION 2.0",
      width: 120,
      height: 120,
      className: "absolute -bottom-10 -right-5",
    },
    text: (
      <ul className="list-disc list-inside text-left space-y-1">
        <li>Lançamento do Robô BOTMILION 2.0</li>
        <li>Maior potencial de lucro com menor nível de risco</li>
        <li>Exclusividade para holders BOTMILION</li>
        <li>
          Fortalecimento da adoção global e do valor de mercado
        </li>
      </ul>
    ),
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
        <div className="min-h-40 md:min-h-60 lg:min-h-72 h-auto w-full flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-950 to-slate-950 border border-gray-800 text-white text-base sm:text-lg font-medium sm:font-semibold shadow-lg px-4 sm:px-6 py-4">
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
