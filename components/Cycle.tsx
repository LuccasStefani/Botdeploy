"use client";
import React from "react";
import Image from "next/image";
import ShinyText from "./ShinyText";

const Cycle = () => {
  return (
    <section className="relative bg-[#000319] text-white overflow-hidden w-full mx-auto py-10">
      {/* Pattern no bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0">
        <Image
          src="/partten.png"
          alt="pattern"
          width={600}
          height={600}
          className="opacity-70"
        />
      </div>

      {/* Spotlight no topo */}
      <Image
        src="/spotlightCiclo.png"
        width={900}
        height={900}
        alt="SpotlightTop"
        className="absolute top-0 left-1/2 -translate-x-1/2 opacity-90 z-99"
      />

      {/* Gradient radial cobrindo toda a section */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_38.66%_38.66%_at_50.00%_61.34%,_rgba(0,_3,_25,_0.85)_0%,_rgba(0,_3,_25,_0.94)_100%)] z-10 pointer-events-none" />

      {/* Conteúdo */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-20 text-center">
        <ShinyText
          text="Entenda o Ciclo"
          disabled={false}
          speed={3}
          className="text-sm mb-2 mx-auto uppercase"
        />

        {/* Headline */}
        <h2 className="linearGradientText w-full md:max-w-[60%] mx-auto text-3xl md:text-4xl text-center leading-snug tracking-[-0.02em]">
          Como Funciona o Token
        </h2>

        <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
          Nosso token é seu crédito para usar o robô: você compra, utiliza e
          parte é queimada. Cada etapa do ciclo aumenta seu valor e mantém a
          utilidade do token sempre em ação.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
  {
    img: "ciclo1.png",
    alt: "Comprar Tokens",
    title: "Comprar Tokens",
    desc:
      "O usuário adquire tokens para ter acesso ao robô. Estes tokens funcionam como créditos obrigatórios para utilizar os serviços.",
  },
  {
    img: "ciclo2.png",
    alt: "Valorização do Token",
    title: "Valorização do Token",
    desc:
      "Com mais usuários e demanda, o token se valoriza, aumentando recompensas de quem participa do ciclo.",
  },
  {
    img: "ciclo3.png",
    alt: "Queima de Tokens",
    title: "Queima de Tokens",
    desc:
      "Parte dos tokens usados no robô é queimada, reduzindo a oferta e reforçando o valor do token.",
  },
  {
    img: "ciclo4.png",
    alt: "Trading Bot Milion",
    title: "Trading Bot Milion",
    desc:
      "O robô executa operações usando os tokens depositados, reiniciando o ciclo e garantindo atratividade contínua.",
  },
].map((card, i) => (
  <div
    key={i}
    className="py-10 px-4 relative bg-gradient-to-br from-slate-950/50 to-slate-950/50 rounded-lg outline outline-[0.15px] outline-offset-[-0.15px] outline-neutral-900 text-left flex flex-col items-start"
  >
    {/* Imagem centralizada */}
    <div className="w-full flex justify-center mb-4">
      <div className="w-[120px] h-[120px] relative">
        <Image
          src={`/${card.img}`}
          alt={card.alt}
          fill
          style={{
            objectFit: "contain",
            transform:
              card.img === "ciclo1.png" || card.img === "ciclo2.png"
                ? "scale(1.2)"
                : "scale(1)",
          }}
        />
      </div>
    </div>

    <h3 className="text-xl font-medium text-white mb-2 text-left">
      {card.title}
    </h3>
    <p className="text-base text-gray-400">{card.desc}</p>

    {/* Quadradinho numerado */}
    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-6 h-6 bg-white/10 rounded-[10px] flex items-center justify-center">
      <div className="text-white text-base font-normal font-['Inter'] capitalize leading-[10px]">
        {i + 1}
      </div>
    </div>
  </div>
))}
        </div>
        
      </div>
    </section>
  );
};

export default Cycle;
