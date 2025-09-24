import React from "react";
import MagicBento from "./ui/MagicBento";
import ShinyText from "./ShinyText";
import { bentoContent } from "@/types/types";

const Bento = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-15 relative">
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1D5A86]/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <main className="flex flex-col gap-2 relative z-10">
        {/* Título animado */}
        <ShinyText
          text={bentoContent.preText}
          disabled={false}
          speed={3}
          className="text-sm uppercase mx-auto"
        />

        {/* Headline */}
        <h2 className="linearGradientText w-full mx-auto text-3xl md:text-4xl text-center leading-snug tracking-[-0.02em] pb-6">
          {/* Desktop */}
          <span
            className="hidden md:block"
            dangerouslySetInnerHTML={{ __html: bentoContent.title.desktop }}
          />

          {/* Mobile */}
          <span
            className="block md:hidden"
            dangerouslySetInnerHTML={{ __html: bentoContent.title.mobile }}
          />
        </h2>

        {/* Bento interativo */}
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </main>
    </section>
  );
};

export default Bento;
