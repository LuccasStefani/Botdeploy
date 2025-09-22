"use client";

import React from "react";
import { ctaContent } from "@/types/ctaData";
import { BsTelegram } from "react-icons/bs";

const Cta = () => {
  return (
    <section className="w-full max-w-4xl py-15 mx-auto px-4" id="prevenda">
      <div
        className="relative w-full p-8 flex flex-col gap-6 rounded-xl overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at top, #223A53 0%, #000319 70%),
            radial-gradient(circle at center, #0b0f1a 0%, #000319 100%),
            repeating-linear-gradient(0deg, #ffffff30 0, #ffffff30 2px, transparent 2px, transparent 40px),
            repeating-linear-gradient(90deg, #ffffff30 0, #ffffff30 2px, transparent 2px, transparent 40px)
          `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Topo */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4">
          <h2 className="linearGradientTextCta text-2xl sm:text-4xl sm:mt-5">
            {ctaContent.title.split("aberta").map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i === 0 && arr.length > 1 && (
                  <>
                    <span>aberta</span>
                    <br className="hidden sm:block" />
                  </>
                )}
              </React.Fragment>
            ))}
          </h2>

          <p className="text-gray-300 text-lg sm:text-2xl md:text-3xl sm:mt-0 md:mt-15">
            Fim pré-venda: {ctaContent.endDate}
          </p>
        </div>

        {/* Descrição */}
        <p className="text-neutral-400 w-full sm:text-2xl md:text-base">
          {ctaContent.description}
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full mt-0 z-98">
          {ctaContent.buttons.map((btn, i) => (
            <a
              key={i}
              href={btn.href || "https://t.me/botmilionoficial"}
              className={`w-full sm:w-auto px-6 py-3 rounded-2xl transition flex items-center justify-center gap-2 ${
                btn.primary
                  ? "bg-indigo-600/90 text-white"
                  : "bg-cyan-800 text-white hover:bg-cyan-800"
              }`}
            >
              {btn.label}
              {!btn.primary && (
                <BsTelegram className="w-6 h-6 text-white" /> 
              )}
            </a>
          ))}
        </div>

        {/* Border interno */}
        <div className="absolute inset-0 border border-neutral-700/60 rounded-xl" />
      </div>
    </section>
  );
};

export default Cta;
