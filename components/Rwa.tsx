"use client";

import React from "react";
import Image from "next/image";
import ShinyText from "./ShinyText";
import { rwaContent } from "@/types/rwaData";

const Rwa = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16" id="rwa">
      <main className="flex flex-col gap-6">
        <ShinyText
          text={rwaContent.shinyText}
          disabled={false}
          speed={3}
          className="text-sm uppercase mx-auto"
        />

        {/* Headline */}
        <h2 className="linearGradientText w-full md:max-w-[60%] mx-auto text-3xl md:text-4xl text-center leading-snug tracking-[-0.02em] pb-6">
          {rwaContent.headline.text}{" "}
          <Image
            src={rwaContent.headline.image.src}
            alt={rwaContent.headline.image.alt}
            width={rwaContent.headline.image.width}
            height={rwaContent.headline.image.height}
            className={rwaContent.headline.image.className}
          />
        </h2>

        {/* Texto de introdução */}
        <p className="text-neutral-300 text-lg leading-relaxed text-justify">
          {rwaContent.introText}
        </p>

        {/* Lista de etapas */}
        <ul className="flex flex-col gap-4 mt-2">
          {rwaContent.steps.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              {step.icon && (
                <Image
                  src={step.icon.src}
                  alt={step.icon.alt}
                  width={step.icon.width}
                  height={step.icon.height}
                  className={step.icon.className}
                />
              )}
              <p className="text-neutral-300 text-lg leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ul>

        {/* Texto complementar */}
        <div className="flex flex-col gap-4 mt-4">
          {rwaContent.complementText.map((text, index) => (
            <p key={index} className="text-neutral-300 text-lg leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Rwa;
