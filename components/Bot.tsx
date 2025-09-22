"use client";
import dynamic from "next/dynamic";
import CountUp from "@/components/ui/CountUp";
import { botContent } from "@/types/types";

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

export default function Bot() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Spline centralizado */}
      <div className="relative w-full max-w-6xl aspect-square mx-auto md:-mb-67 md:-ml-0 ">
        <Spline
          scene={botContent.splineScene}
          className="!w-full !h-full mx-auto flex items-center justify-center md:-mt-23"
        />
      </div>

      {/* Container dos cards */}
      <div
        className="
          flex flex-col md:flex-row 
          w-full md:w-[900px] 
          justify-center 
          gap-0 md:gap-0 -mt-23 md:-mt-0
        "
      >
        {botContent.stats.map((stat, i) => {
          // Quebrar valor em prefixo (+), número (40), sufixo (% ou k)
          const match = stat.value.match(/^([+]?)(\d+)(k|%|)?$/i);
          const prefix = match?.[1] || "";
          const number = match ? parseInt(match[2], 10) : 0;
          const suffix = match?.[3] || "";

          const gradientPosition =
            i === 0
              ? "at 125.6% 10%"
              : i === 1
              ? "at 55.5% 10.4%"
              : "at 0% 8.3%";

          const borderRadius =
            i === 0
              ? "rounded-t-[20px] md:rounded-l-[20px] md:rounded-tr-none"
              : i === 2
              ? "rounded-b-[20px] md:rounded-r-[20px] md:rounded-bl-none"
              : "";

          return (
            <div
              key={i}
              className={`relative w-full md:w-72 h-48 flex flex-col justify-center items-center overflow-hidden ${borderRadius}`}
              style={{
                background: `
                  radial-gradient(ellipse 108% 50% ${gradientPosition}, #223A53 0%, #000319 100%),
                  repeating-linear-gradient(0deg, #ffffff0a, #ffffff0a 1px, transparent 1px, transparent 20px),
                  repeating-linear-gradient(90deg, #ffffff0a, #ffffff0a 1px, transparent 1px, transparent 20px)
                `,
                backgroundBlendMode: "overlay",
              }}
            >
              {/* Gradiente extra por cima */}
              <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#000319] to-transparent" />

              {/* Conteúdo */}
              <div className="relative z-10 text-center px-4">
                <p className="text-sm mb-2">{stat.title}</p>
                <h3 className="text-5xl flex items-center justify-center">
                  {prefix && <span>{prefix}</span>}
                  <CountUp
                    from={0}
                    to={number}
                    duration={2}
                    className="inline-block linearGradientTextCta"
                  />
                  {suffix && <span>{suffix}</span>}
                </h3>
                {stat.subtitle && (
                  <p className="text-xs mt-1 text-gray-300">{stat.subtitle}</p>
                )}
              </div>

              {/* Border */}
              <div
                className={`absolute inset-0 border border-neutral-700/60 ${borderRadius}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
