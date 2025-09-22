import React from "react";
import ShinyText from "./ShinyText";
import Image from "next/image";
import { poderSectionContent } from "@/types/types";

const PoderSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-15 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1D5A86]/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <main className="flex flex-col gap-6 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start w-full mb-8 gap-4 text-center md:text-left">
          <h2 className="linearGradientText text-3xl md:text-4xl w-full md:max-w-[40%] leading-snug tracking-[-0.02em]">
            {poderSectionContent.title}
          </h2>

          <ShinyText
            text={poderSectionContent.subtitle}
            disabled={false}
            speed={3}
            className="text-sm sm:text-base w-full max-w-[80%] md:max-w-[45%] mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-4 md:p-0">
          {poderSectionContent.cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-2 px-4 py-6 bg-gradient-to-b from-black/0 to-[#1D5A86]/10 rounded-xl border border-indigo-400/20"
            >
              <Image
                src={card.src}
                alt={card.title}
                width={25}
                height={25}
                className="object-contain"
              />
              <h4 className="text-white text-lg">{card.title}</h4>
              <p className="text-neutral-400 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default PoderSection;
