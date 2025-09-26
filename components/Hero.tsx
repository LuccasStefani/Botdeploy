"use client";
import React, { useState } from "react";
import Image from "next/image";
import ShinyText from "./ShinyText";
import Bot from "./Bot";
import { heroContent } from "@/types/types";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x188698f21f468b5922008edC17A7976994d1Cce3";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // volta ao normal depois de 2s
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col" id="hero">
      <div className="relative z-10 container mx-auto px-3 flex flex-col items-center justify-start text-center flex-grow pt-40">
        <div className="flex items-center gap-2 mb-6 rounded-full bg-zinc-800/40 border border-neutral-500/30 px-5 py-2">
          <ShinyText
            text={heroContent.preText}
            disabled={false}
            speed={3}
            className="text-sm sm:text-sl"
          />
        </div>

        {/* Título principal */}
        <h1 className="linearGradientText w-full md:max-w-4xl text-4xl md:text-6xl leading-[130%] md:leading-[98%] tracking-[-0.03em] pb-3">
          <span className="hidden md:block">
            {heroContent.titleDesktop}
            <img
              src="/textimg.png"
              alt="Bot Milion"
              width={40}
              height={40}
              className="inline-block ml-5 align-middle"
            />
          </span>

          <span className="block md:hidden">
            {heroContent.titleMobile}
            <Image
              src="/textimg.png"
              alt="Bot Milion"
              width={30}
              height={30}
              className="inline-block ml-2 align-middle"
            />
          </span>
        </h1>

        {/* Subtexto */}
        <p className="md:text-xl sm:text-lg text-neutral-400 pb-3 w-full md:max-w-2xl max-w-[97%] mx-auto break-words whitespace-normal text-center">
          {heroContent.subtitle}
        </p>

        {/* Linha social */}
        <div className="flex items-center mb-6">
          <div className="flex -space-x-2">
            {heroContent.socialImages.map((src, i) => (
              <div
                key={i}
                className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#000319] overflow-hidden"
              >
                <Image
                  src={src.startsWith("/") ? src : "/" + src}
                  alt={`Membro ${i + 1}`}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-neutral-300 text-sm sm:text-base font-medium ml-3">
            {heroContent.socialProof}
          </span>
        </div>

        {/* Botões */}
        <div className="flex flex-row flex-wrap justify-center gap-2 w-full sm:w-auto mb-6 z-98">
          {heroContent.buttons.map((btn, i) => (
            <a
              key={i}
              href={btn.href}
              className={`px-4 md:px-6 sm:px-2 h-11 sm:h-12 flex items-center justify-center rounded-xl text-sm sm:text-base transition ${
                btn.primary
                  ? "bg-white text-black font-medium hover:bg-gray-100"
                  : "bg-transparent border border-zinc-600 shadow-[inset_0px_0px_8px_4px_rgba(255,255,255,0.08)] backdrop-blur-[0.5px] text-white font-normal gap-2"
              }`}
            >
              {btn.label}
              {!btn.primary && (
                <Image src="/arrow.svg" height={14} width={15} alt="arrow" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-between px-5 bg-zinc-800/40 border border-neutral-500/30 rounded-2xl py-3 mb-10 z-99">
          <span className="text-sm sm:text-base text-neutral-400 font-medium mr-3">
            Contrato:
          </span>


          <div className="flex items-center gap-3">
            <span className="text-sm sm:text-base text-neutral-300 break-all">
              {contractAddress}
            </span>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-md bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
            >
              {copied ? "Copiado!" : "Copiar"}
            </button>
          </div>
        </div>

        {/* Bot abaixo */}
        <div className="flex items-center justify-center w-full md:-mt-20 ">
          <div className="w-full sm:max-w-md md:max-w-xl ">
            <Bot />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
